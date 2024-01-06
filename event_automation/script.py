import gspread 
import pandas as pd
import numpy as np

#communicating with google sheets api, open the google sheet 
gc = gspread.service_account(filename = ".config/service_account.json")
sh = gc.open("Upcoming Events")

#get the current sheet of interest and its records
sheet_instance = sh.get_worksheet(0)
records_data = sheet_instance.get_all_records()

#creating pandas from the data
records_df = pd.DataFrame.from_dict(records_data)
print(records_df)


