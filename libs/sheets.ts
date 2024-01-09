// https://dev.to/frasnym/connecting-your-nextjs-mini-project-with-google-spreadsheets-as-database-1o2d
import { google } from 'googleapis';
export async function getAlumniSheet() {
  try {
    const target = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      undefined,
      (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      target
    );

    const sheets = google.sheets({ version: 'v4', auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'alumni', // sheet name
    });

    const rows = response.data.values;
    if (rows?.length) {
      return rows.map((row) => ({
        name: row[0],
		year: row[1],
		bio: row[2],
		linkedin: row[3]
      }));
    }
  } catch (err) {
    console.log(err);
  }
  return [];
}
