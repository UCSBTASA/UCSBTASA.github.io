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
# date (mm-dd-yy) => day of the week
def dayOfTheWeek(date):
    try:
        # Check if the date string fits the format %Y-%m-%d
        date_object = datetime.datetime.strptime(date, "%Y-%m-%d")
        return date_object.strftime("%A")
    except ValueError:
        return "Invalid date format. Please use YYYY-MM-DD."

# Getting current year 
today = datetime.date.today()
year = today.year

# Communicating with Google Sheets API, open the Google Sheet 
service_account_path = "/Users/gabewkung/Downloads/ucsb-tasa-events-spreadsheet-69ab3e8df759.json"
spreadsheet_name = "TASA Event Data 24-25"

gc = gspread.service_account(service_account_path)
sh = gc.open(spreadsheet_name)



# Get the current sheet of interest and its records
sheet_instance = sh.get_worksheet(0)
records_data = sheet_instance.get_all_records()

# Convert to pandas DataFrame
records_df = pd.DataFrame.from_dict(records_data)
# Convert DataFrame to JSON format
# debugger: records_df => columns => T: Index => values: ndarray => [0:L]: list
events = []
print(records_df.iterrows())
for index, row in records_df.iterrows():
    event = {
        "title": row["Name of Event"],
        "day of week": dayOfTheWeek(row["Date (YYYY-MM-DD)"]),
        "date": row["Date (YYYY-MM-DD)"],
        "time": (row["Start Time"] + "-" + row["End Time"]) if row["End Time"] != "" else row["Start Time"],
        "location": row["Location"],
        "customTime" : "",
        "ready" : "Yes"
    }
    # Changing the date to YYYY-MM-DD
    #event["date"] = changeDate(event["date"])

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
