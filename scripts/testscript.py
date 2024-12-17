import gspread
import os;
import json;
from oauth2client.service_account import ServiceAccountCredentials
import pandas as pd
# problem with path, likely in macos permissions
path = '/Users/gabewkung/Downloads/ucsb-tasa-events-spreadsheet-69ab3e8df759.json'
 
gp = gspread.service_account(path)
gsheet = gp.open('TASA Event Data 24-25')
worksheet = gsheet.get_worksheet(0)

column = ['A', 'B', 'C', 'D', 'E']

def event(rowNum):
    rowNum = str(rowNum)
    for i in range(len(column)): 
        cell = column[i] + rowNum
        print(worksheet.acell(cell).value)

print(worksheet.row_values(20))


