import { GoogleAuth } from 'google-auth-library';
import { google } from 'googleapis';
import { type Message, type ResumeAccess } from '@shared/schema';

export class GoogleSheetsService {
  private sheets: any;
  private spreadsheetId: string;
  private auth: GoogleAuth;

  constructor() {
    // Initialize Google Auth
    this.auth = new GoogleAuth({
      keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    this.spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID || '';
    
    // Initialize Sheets API
    this.sheets = google.sheets({ version: 'v4', auth: this.auth });
  }

  async addMessage(message: Message): Promise<void> {
    try {
      const values = [
        [
          message.id,
          message.name,
          message.email,
          message.message,
          message.createdAt?.toISOString() || new Date().toISOString()
        ]
      ];

      await this.sheets.spreadsheets.values.append({
        spreadsheetId: this.spreadsheetId,
        range: 'Messages!A:E',
        valueInputOption: 'USER_ENTERED',
        requestBody: { values }
      });

      console.log('Message added to Google Sheets:', message.id);
    } catch (error) {
      console.error('Error adding message to Google Sheets:', error);
      // Fallback: log to console if Google Sheets fails
      console.log('Fallback - Message data:', message);
    }
  }

  async addResumeAccess(access: ResumeAccess): Promise<void> {
    try {
      const values = [
        [
          access.id,
          access.email,
          access.phone || '',
          access.accessedAt?.toISOString() || new Date().toISOString()
        ]
      ];

      await this.sheets.spreadsheets.values.append({
        spreadsheetId: this.spreadsheetId,
        range: 'ResumeAccess!A:D',
        valueInputOption: 'USER_ENTERED',
        requestBody: { values }
      });

      console.log('Resume access added to Google Sheets:', access.id);
    } catch (error) {
      console.error('Error adding resume access to Google Sheets:', error);
      // Fallback: log to console if Google Sheets fails
      console.log('Fallback - Resume access data:', access);
    }
  }

  async initializeSpreadsheet(): Promise<void> {
    try {
      // Create sheets if they don't exist
      const requests = [
        {
          addSheet: {
            properties: {
              title: 'Messages',
              gridProperties: {
                rowCount: 1000,
                columnCount: 5
              }
            }
          }
        },
        {
          addSheet: {
            properties: {
              title: 'ResumeAccess',
              gridProperties: {
                rowCount: 1000,
                columnCount: 4
              }
            }
          }
        }
      ];

      // Add headers for Messages sheet
      const messageHeaders = [
        ['ID', 'Name', 'Email', 'Message', 'Created At']
      ];

      // Add headers for ResumeAccess sheet
      const resumeHeaders = [
        ['ID', 'Email', 'Phone', 'Accessed At']
      ];

      // Try to create sheets (will fail if they already exist)
      try {
        await this.sheets.spreadsheets.batchUpdate({
          spreadsheetId: this.spreadsheetId,
          requestBody: { requests }
        });
      } catch (error) {
        console.log('Sheets might already exist, continuing...');
      }

      // Add headers
      await this.sheets.spreadsheets.values.update({
        spreadsheetId: this.spreadsheetId,
        range: 'Messages!A1:E1',
        valueInputOption: 'USER_ENTERED',
        requestBody: { values: messageHeaders }
      });

      await this.sheets.spreadsheets.values.update({
        spreadsheetId: this.spreadsheetId,
        range: 'ResumeAccess!A1:D1',
        valueInputOption: 'USER_ENTERED',
        requestBody: { values: resumeHeaders }
      });

      console.log('Google Sheets initialized successfully');
    } catch (error) {
      console.error('Error initializing Google Sheets:', error);
    }
  }
}
