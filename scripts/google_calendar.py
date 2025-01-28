import datetime
import os.path

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

import pandas as pd
from pytz import timezone
import pytz

import json
# If modifying these scopes, delete the file token.json.
SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"]


def main():
    """Shows basic usage of the Google Calendar API.
    Prints the start and name of the next 10 events on the user's calendar.
    """
    creds = None
    # The file token.json stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists("token.json"):
        creds = Credentials.from_authorized_user_file("token.json", SCOPES)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                "credentials.json", SCOPES
            )
            creds = flow.run_local_server(port=8080)
        # Save the credentials for the next run
        with open("token.json", "w") as token:
            token.write(creds.to_json())

    try:
        service = build("calendar", "v3", credentials=creds)

        # Call the Calendar API
        now = datetime.datetime.utcnow().isoformat() + "Z"  # 'Z' indicates UTC time
        events_result = (
            service.events()
            .list(
                calendarId="7hptoesel85ltt2ndeg0dtptec@group.calendar.google.com",
                timeMin=now,
                maxResults=10,
                singleEvents=True,
                orderBy="startTime",
            )
            .execute()
        )
        events = events_result.get("items", [])

        if not events:
            print("No upcoming events found.")
            return

        # Prints the start and name of the next 10 events
        for event in events:

            # catch keyerror on location and print TBD if location is not available
            if "location" not in event:
                event["location"] = "tbd"

        # Create a panda dataframe with beginning time, end time, title, location
        df = pd.DataFrame(
            columns=["beginning time", "end time", "title", "location"]
        )
        for event in events:
            data = {
                "beginning time": event["start"].get("dateTime"),
                "end time": event["end"].get("dateTime"),
                "title": event["summary"],
                "location": event["location"],
            }

            temp_df = pd.DataFrame(data, index=[0])

            df = pd.concat([df, temp_df])

        # Convert the time to day of week, date, and time
        df["day of week"] = pd.to_datetime(df["beginning time"]).dt.day_name()
        df["date"] = pd.to_datetime(df["beginning time"]).dt.date

        # Create time which is from start to end
        df["start"] = pd.to_datetime(df["beginning time"]).dt.time  
        df["end"] = pd.to_datetime(df["end time"]).dt.time

        event_list = []
        for index, row in df.iterrows():
            event = {
                "title": row["title"],
                "day of week": row["day of week"],
                "date": row["date"],
                "time": "",
                "end": row["end"],
                "start": row["start"],
                "location": row["location"],
                "customTime" : "",
            }
            # Changing the date to YYYY-MM-DD
            if not pd.isna(event["date"]):
                event["date"] = event["date"].strftime("%Y-%m-%d")
            else:
                event["date"] = "TBD"

            # change time to 12 hour format
            if not pd.isna(event["start"]):
                event["start"] = event["start"].strftime("%I:%M %p")
            else:
                event["start"] = "TBD"

            # change end time to 12 hour format
            if not pd.isna(event["end"]):
                event["end"] = event["end"].strftime("%I:%M %p")
            else:
                event["end"] = "TBD"
            
            # Check cases in which customTime is necessary
            if event["start"] != "TBD" and event["end"] != "TBD":
                event["time"] = event["start"].upper() + " - " + event["end"].upper()               
            else: 
                event["customTime"] = "TBD"
            event_list.append(event)

        print(event_list)
        # Define the filename for the output file
        output_file = 'data/eventData.ts'

        # Open the file for writing
        with open(output_file, 'w') as f:
            # Write the JavaScript variable declaration
            f.write("const events = \n")
            # Write the JSON data with indentation
            json.dump(event_list, f, indent=2)
            # Write JavaScript variable termination
            f.write(";\n\n")
            # Write export statement
            f.write("export default events; \n")        


    except HttpError as error:
            print(f"An error occurred: {error}")


        



if __name__ == "__main__":
    main()
