import datetime
import os.path
import os 
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

import pandas as pd
from pytz import timezone
import pytz

import json

# Replace with your API key and Calendar ID
API_KEY = os.getenv("API_KEY")
CALENDAR_ID = "7hptoesel85ltt2ndeg0dtptec@group.calendar.google.com"

def main():
    # Build the service with the API key instead of credentials
    service = build("calendar", "v3", developerKey=API_KEY)

    # Get current time in UTC for the query
    now = datetime.datetime.utcnow().isoformat() + "Z"
    events_result = (
        service.events()
        .list(
            calendarId=CALENDAR_ID,
            timeMin=now,
            maxResults=10,
            singleEvents=True,
            orderBy="startTime",
        )
        .execute()
    )
    # print(events_result)
    events = events_result.get("items", [])
    if not events:
            print("No upcoming events found.")
            return

    # Ensure every event has a location, defaulting to "tbd" if missing
    for event in events:
        if "location" not in event:
            event["location"] = "tbd"

    # Create a DataFrame with beginning time, end time, title, location
    df = pd.DataFrame(columns=["beginning time", "end time", "title", "location"])
    for event in events:
        print(event)
        rsvpLink = event.get("description", "")
        link = ""
        if rsvpLink.startswith('<a href="') and rsvpLink.endswith('</a>'):
            link = rsvpLink.split('"')[1]
            rsvpLink = link

        data = {
            "beginning time": event["start"].get("dateTime"),
            "end time": event["end"].get("dateTime"),
            "title": event.get("summary", "No Title"),
            "location": event["location"],
            "rsvpLink": rsvpLink,
        }
        temp_df = pd.DataFrame(data, index=[0])
        df = pd.concat([df, temp_df], ignore_index=True)

    # Convert times to UTC timezone-aware datetime
    df["beginning time"] = pd.to_datetime(df["beginning time"], utc=True, errors="coerce")
    df["end time"] = pd.to_datetime(df["end time"], utc=True, errors="coerce")

    # Define your desired timezone
    local_tz = "America/Los_Angeles"
    df["start"] = df["beginning time"].dt.tz_convert(local_tz).dt.time
    df["end"] = df["end time"].dt.tz_convert(local_tz).dt.time
    df["day of week"] = df["beginning time"].dt.tz_convert(local_tz).dt.day_name()
    df["date"] = df["beginning time"].dt.tz_convert(local_tz).dt.date

    # Prepare the event list
    event_list = []
    for _, row in df.iterrows():
        event_dict = {
            "title": row["title"],
            "day of week": row["day of week"],
            "date": row["date"].strftime("%Y-%m-%d") if pd.notna(row["date"]) else "TBD",
            "time": "",
            "start": row["start"].strftime("%I:%M %p") if pd.notna(row["start"]) else "TBD",
            "end": row["end"].strftime("%I:%M %p") if pd.notna(row["end"]) else "TBD",
            "location": row["location"],
            "customTime": "",
            "rsvpLink": row["rsvpLink"],
        }

        if event_dict["start"] != "TBD" and event_dict["end"] != "TBD":
            event_dict["time"] = event_dict["start"].upper() + " - " + event_dict["end"].upper()
        else:
            event_dict["customTime"] = "TBD"

        event_list.append(event_dict)

    print(event_list)

    # Write output to a TypeScript file
    output_file = "data/eventData.ts"
    with open(output_file, "w") as f:
        f.write("const events = \n")
        json.dump(event_list, f, indent=2)
        f.write(";\n\n")
        f.write("export default events;\n")
        
if __name__ == "__main__":
    main()
