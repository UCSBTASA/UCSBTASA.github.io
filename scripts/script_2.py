import gspread 
import pandas as pd
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
service_account_path = "service_account.json"

gc = gspread.service_account(filename = service_account_path)
sh = gc.open("TASA Scheduling 24-25")

# Get the current sheet of interest and its records
sheet_instance = sh.worksheet("Website Events")
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

# Define the filename for the output file
output_file = 'data/eventData.ts'

# Open the file for writing
with open(output_file, 'w') as f:
    # Write the JavaScript variable declaration
    f.write("const events = \n")
    # Write the JSON data with indentation
    json.dump(events, f, indent=2)
    # Write JavaScript variable termination
    f.write(";\n\n")
    # Write export statement
    f.write("export default events; \n")
