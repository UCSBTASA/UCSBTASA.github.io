import os
import pandas as pd
from datetime import datetime
import math
import subprocess

from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from google.auth.transport.requests import AuthorizedSession


creds = None
scopes = [
    'https://www.googleapis.com/auth/photoslibrary.readonly',
    'https://www.googleapis.com/auth/photoslibrary.sharing'
]

if os.path.exists('_secrets_/token.json'):
    creds = Credentials.from_authorized_user_file('_secrets_/token.json', scopes)

if not creds or not creds.valid:
    if creds and creds.expired and creds.refresh_token:
        creds.refresh(Request())
    else:
        flow = InstalledAppFlow.from_client_secrets_file('_secrets_/client_secret.json', scopes)
        creds = flow.run_local_server()
    with open('_secrets_/token.json', 'w') as token:
        token.write(creds.to_json())

authed_session = AuthorizedSession(creds)
auth_headers = {'content-type': 'application/json'}
# Define function to fetch shared albums


def fetch_albums(page_token=None):
    url = 'https://photoslibrary.googleapis.com/v1/albums'
    params = {
        'pageSize': 50,  # Maximum number of albums to return
        'pageToken': page_token,  # Continuation token for pagination
    }

    # Make GET request to fetch shared albums
    response = authed_session.get(url, headers=auth_headers, params=params)

    # Check if request was successful
    if response.status_code == 200:
        data = response.json()
        return data.get('albums', []), data.get('nextPageToken')
    else:
        print(f'Error fetching shared albums: {response.status_code}')
        return [], None
def get_album(album_id):
    url = f'https://photoslibrary.googleapis.com/v1/albums/{album_id}'
    response = authed_session.get(url, headers=auth_headers)
    
    if response.status_code == 200:
        return response.json()
    else:
        print(f'Error fetching album details: {response.status_code}')
        return {}

albums = []
next_page_token = None

# Define function to extract metadata from media items
while True:
    albums_batch, next_page_token = fetch_albums(next_page_token)
    for album in albums_batch:
        album_id = album['id']
        album_details = get_album(album_id)
        print(album_details)
        # albums.append(album_details)
    if not next_page_token:
        break

pd_albums = pd.DataFrame(albums)
# print(pd_albums.columns)


def fetch_album_media(mediaItemIds, titles):
    url = f'https://photoslibrary.googleapis.com/v1/mediaItems:batchGet'
    params = {'mediaItemIds': mediaItemIds}
    # Make GET request to fetch media item
    response = authed_session.get(url, headers=auth_headers, params=params)

    creation_times = []
    # Check if request was successful
    if response.status_code == 200:
        media_item_data = response.json()
        mediaItemResults = media_item_data.get('mediaItemResults', {})
        i = 0
        for result in mediaItemResults:
            title = titles[i]
            mediaItem = result.get('mediaItem', {})
            mediaMetaData = mediaItem.get('mediaMetadata', {})
            creation_time = mediaMetaData.get('creationTime', {})
            creation_times.append(creation_time)
            # print(title, end = " ")
            i += 1
        # print(i)
    else:
        print(f'Error fetching media item: {response.status_code}')
    return creation_times

    # return creation_time
temp_creations = []
temp_titles = []


row_num = 0
num_albums = len(pd_albums)
total_creations = []
total_titles = []
while row_num < num_albums:
    # Iterate through at most 50 at a time
    if num_albums - row_num >= 49:
        batch_df = pd_albums.iloc[row_num:row_num + 49]
    else:
        batch_df = pd_albums.iloc[row_num:]

    batch_coverPhotoMediaItemId = list(batch_df['coverPhotoMediaItemId'])
    batch_titles = list(batch_df['title'])

    # Create a dictionary mapping coverPhotoMediaItemId to title
    id_to_title = {item_id: title for item_id, title in zip(
        batch_coverPhotoMediaItemId, batch_titles)}
    # Remove duplicates from the batch set and corresponding titles
    unique_ids = list(set(batch_coverPhotoMediaItemId))
    unique_titles = [id_to_title[item_id] for item_id in unique_ids]
    total_titles += unique_titles
    # Fetch creation times
    creation_times = fetch_album_media(unique_ids, unique_titles)
    total_creations += creation_times

    # Update row_num for next iteration
    row_num += len(batch_df)

pd_creations = pd.DataFrame(
    {"creation_time": total_creations, "title": total_titles})

# drop any missing values
pd_creations.dropna(subset=["title"], inplace=True)
pd_albums.dropna(subset=["title"], inplace=True)

# Print the modified pd_creations DataFrame
# Merge pd_shared and pd_creations on the 'title' column
merged_df = pd.merge(pd_albums, pd_creations, on='title', how='left')

# Sort the merged DataFrame by the 'creation_time' column
sorted_merged_df = merged_df.sort_values(by='creation_time')
# print(sorted_merged_df)
merged_df = sorted_merged_df

# making output script
# from datetime import datetime

# Define the start and end dates
# start_date = datetime(2023, 9, 24)
# end_date = datetime(2024, 6, 14)
def get_quarter(creation_time, start_date, end_date):
    """
    Returns the quarter of the academic year for a given date.

    Parameters:
    - creation_time: datetime object of the image creation date.
    - start_date: datetime object of the start date of the academic year.
    - end_date: datetime object of the end date of the academic year.

    Returns:
    - String indicating the quarter: "Fall", "Winter", "Spring", or "NA".
    """
    # Define the end of Fall and the beginning of Winter
    end_of_fall = datetime(start_date.year, 12, 31)
    start_of_winter = datetime(start_date.year + 1, 1, 1)
    end_of_winter = datetime(start_date.year + 1, 3, 14)  # Inclusive end of Winter
    start_of_spring = datetime(start_date.year + 1, 3, 15)

    # Determine the quarter based on the creation time
    if start_date <= creation_time <= end_of_fall:
        return "Fall"
    elif start_of_winter <= creation_time <= end_of_winter:
        return "Winter"
    elif start_of_spring <= creation_time <= end_date:
        return "Spring"
    
    return "NA"  # If it doesn't fit any known quarter

image_directories = ['/gallery_photos/2023-2024',
                     '/gallery_photos/2022-2023',
                     '/gallery_photos/2021-2022',
                     '/gallery_photos/2020-2021',
                     '/gallery_photos/2019-2020',
                     '/gallery_photos/2018-2019',
                     '/gallery_photos/2017-2018']

start_dates = [datetime(2023, 9, 1), datetime(2022, 9, 1), datetime(2021, 9, 1),
               datetime(2020, 9, 1), datetime(2019, 9, 1), datetime(2018, 9, 1), datetime(2017, 9, 1)]

end_dates = [datetime(2024, 6, 30), datetime(2023, 6, 30), datetime(2022, 6, 30),
             datetime(2021, 6, 30), datetime(2020, 6, 30), datetime(2019, 6, 30), datetime(2018, 6, 30)]


def parse_creation_time(creation_time):
    if isinstance(creation_time, float) or creation_time is None:
        return None  # Skip if it's not a valid time

    creation_time_str = str(creation_time)  # Ensure it is a string

    try:
        # Try parsing with milliseconds
        return datetime.strptime(creation_time_str, '%Y-%m-%dT%H:%M:%S.%fZ')
    except ValueError:
        # Fallback to parsing without milliseconds
        try:
            return datetime.strptime(creation_time_str, '%Y-%m-%dT%H:%M:%SZ')
        except ValueError:
            return None  # Return None if parsing fails


output_file_path = 'data/galleryImages.ts'

# Open the output file in write mode
output_file_path = 'data/galleryImages.ts'

# Open the output file in write mode
with open(output_file_path, 'w') as f:
    f.write('''export interface GalleryImage {
    id: number;
    title: string;
    imageUrl: string;
    quarter: string;
    link: string;
    }'''
    )
    # ADD QUARTER BACK IN WHEN FINISHED
        # quarter: string;

    # Iterate over the provided directories and date ranges
    for image_directory, start_date, end_date in zip(image_directories, start_dates, end_dates):
        # Adjust title for the directory (e.g., "2023-2024" becomes "galleryImages2023_2024")
        directory_name = image_directory.split('/')[-1]
        gallery_var_name = f"galleryImages{directory_name.replace('-', '_')}"

        f.write(f"export const {gallery_var_name}: GalleryImage[] = [\n")

        # Loop through the dataset and filter images based on the date range
        for j, row in merged_df.iterrows():
            # print(row)
            # Parse the creation time using the updated function
            creation_time = parse_creation_time(row['creation_time'])

            if creation_time is None:
                continue  # Skip rows where creation time is invalid

            # Check if the creation time falls between the current start and end dates
            if start_date <= creation_time < end_date:
                quarter = get_quarter(creation_time, start_date, end_date)
                f.write("{\n")
                f.write(f"id: {j + 1},\n")
                f.write(f"title: \"{row['title']}\",\n")
                url_title = str(row['title']).replace(' ', '_').replace(
                    '/', '_').replace('-', '_').replace('#', '_').replace('\'', '_').lower()
                f.write(f"imageUrl: \"{image_directory}/{url_title}.jpg\",\n")
                f.write(f"link: \"{row['productUrl']}\",\n")
                f.write(f"quarter: \"{quarter}\",\n")
                f.write("},\n")

        f.write("]\n\n")

print(f"Gallery images data written to {output_file_path}")


# saving the images

def parse_creation_time(creation_time_str):
    try:
        # Try parsing with milliseconds
        return datetime.strptime(creation_time_str, '%Y-%m-%dT%H:%M:%S.%fZ')
    except ValueError:
        # Fallback to parsing without milliseconds
        return datetime.strptime(creation_time_str, '%Y-%m-%dT%H:%M:%SZ')


while len(image_directories):
    image_directory = 'public' + image_directories.pop()
    start_date = start_dates.pop()
    end_date = end_dates.pop()

    os.makedirs(image_directory, exist_ok=True)

    for j, row in merged_df.iterrows():
        creation_time_str = row['creation_time']

        # Skip rows with missing or invalid creation time
        if str(creation_time_str) == 'nan':
            continue

        # Parse the creation time
        creation_time = parse_creation_time(str(creation_time_str))

        # If creation time is valid and within the desired range, process the image
        if creation_time is not None and start_date < creation_time < end_date:
            # Create image filename
            image_filename = os.path.join(
                image_directory,
                str(row['title']).replace(' ', '_').replace(
                    '/', '_').replace('-', '_').replace('#', '_').replace('\'', '_').lower() + '.jpg'
            )

            # Fetch the image data only if the file doesn't already exist
            if not os.path.isfile(image_filename):
                image_url = merged_df['coverPhotoBaseUrl'][j] + "=w3000-h1500"
                image_data_response = authed_session.get(image_url)

                # If the request was successful, save the image
                if image_data_response.status_code == 200:
                    image_data = image_data_response.content
                    with open(image_filename, 'wb') as f:
                        f.write(image_data)
                else:
                    print(f"Error fetching image: {image_data_response.status_code}")

        # Open the image using the default image viewer
        # print({image_filename})
            # if os.name == 'xposix':  # Linux/macOS
            #     subprocess.call(['open', image_filename])
            # elif os.name == 'nt':  # Windows
            #     os.startfile(image_filename)
            #     print('Image saved:', image_filename)
            # else:
            #     print("skipped due to already inputted")
