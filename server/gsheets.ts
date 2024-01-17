import { google } from "googleapis";

export async function getGoogleSheetsData(range: string) {
  const auth = await google.auth.getClient({
    projectId: "tasa-410709",
    credentials: {
      type: "service_account",
      private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_SHEETS_CLIENT_ID,
      token_url: "https://oauth2.googleapis.com/token",
      universe_domain: "googleapis.com",
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const data = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID || "",
    range: range,
  });

  return data.data.values;
}