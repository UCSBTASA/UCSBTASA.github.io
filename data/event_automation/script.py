import gspread 
import pandas as pd
import json

# Communicating with Google Sheets API, open the Google Sheet 
gc = gspread.service_account(filename = ".config/service_account.json")
sh = gc.open("Upcoming Events")

# Get the current sheet of interest and its records
sheet_instance = sh.get_worksheet(0)
records_data = sheet_instance.get_all_records()

# Convert to pandas DataFrame
records_df = pd.DataFrame.from_dict(records_data)

# Convert DataFrame to JSON format
events = []
for index, row in records_df.iterrows():
    event = {
        "title": row["Name of Event"],
        "date": row["Date (YYYY-MM-DD)"],
        "startTime": row["Start Time"],
        "endTime": row["End Time"],
        "location": row["Location"]
    }
    events.append(event)

# Output the JSON data
print(json.dumps(events, indent=2))