import _pandas as pd
import _gspread 
import json
import datetime

def changeDate(date):
    if ('-' in date):
        date = date[0:date.rfind('-')]
    date = date.replace('/','-')
    if (date.rfind('-') == 1):
        date = "0" + date 
    if (date.rfind('-') + 2 == len(date)):
        date = date[0:-1] + "0" + date[-1]
    return str(year) + "-" + date   

# Getting current year 
today = datetime.date.today()
year = today.year
# Communicating with Google Sheets API, open the Google Sheet 
gc = gspread.service_account(filename = "app/api/hello/.config/service_account.json")
sh = gc.open("TASA Scheduling 23-24")

# Get the current sheet of interest and its records
sheet_instance = sh.get_worksheet(2)
records_data = sheet_instance.get_all_records()

# Convert to pandas DataFrame
records_df = pd.DataFrame.from_dict(records_data)
# Convert DataFrame to JSON format
events = []
for index, row in records_df.iterrows():
    event = {
        "title": row["Event name"],
        "day of week": row["Day of week"],
        "date": row["Date"],
        "time": row["Time"],
        "location": row["Location"],
        "customTime" : "",
        "ready" : row["Ready to add to website?"]
    }
    # Changing the date to YYYY-MM-DD
    event["date"] = changeDate(event["date"])
    # Check cases in which customTime is necessary
    if (len(event["time"]) > 0):
        if not event["time"][0].isnumeric():
            event["customTime"] = event["time"]
            if event["customTime"].lower() == "tbd":
                event["customTime"] = event["customTime"].upper()
        else:
            # print(event["time"])
            event["time"] = event["time"].upper()
            
    # Check if can/should be added to event list
    if event["ready"] == "Yes":
        events.append(event)

# # Output the JSON data
print(json.dumps(events, indent=2))