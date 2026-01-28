# Google Sheets Integration Setup Guide

This guide shows how to set up Google Sheets as the data store for capturing user information when they download your resume.

## Overview

Instead of using a traditional database, this application uses Google Sheets to store:
- Contact messages from the contact form
- Resume access requests (email + phone number)

## Setup Steps

### 1. Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Google Sheets API**:
   - Go to "APIs & Services" → "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

### 2. Create Service Account

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "Service Account"
3. Fill in service account details:
   - Name: `portfolio-sheets-service`
   - Description: `Service account for portfolio Google Sheets access`
4. Click "Create and Continue"
5. Skip granting roles (click "Done")
6. After creation, click on the service account email
7. Go to "Keys" tab → "Add Key" → "Create new key"
8. Select **JSON** and click "Create"
9. Save the downloaded JSON file securely

### 3. Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "Portfolio Data"
3. Note the spreadsheet ID from the URL:
   ```
   https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit
   ```
4. Share the spreadsheet with the service account:
   - Click "Share" button
   - Paste the service account email (from the JSON file)
   - Give "Editor" permissions
   - Click "Send"

### 4. Configure Environment Variables

Create a `.env` file in your project root:

```bash
# Google Sheets Configuration
GOOGLE_APPLICATION_CREDENTIALS="/path/to/your/service-account-key.json"
GOOGLE_SHEETS_SPREADSHEET_ID="your_spreadsheet_id_here"
```

### 5. Alternative: Use Google Form (Simpler Approach)

If you prefer not to set up service accounts, you can use Google Forms:

1. **Create Google Form**:
   - Go to [Google Forms](https://forms.google.com)
   - Create a new form "Resume Download Request"
   - Add fields: Email, Phone Number
   - Note the form ID from the URL

2. **Update the application**:
   - Replace Google Sheets API calls with Google Form submission
   - Use the form's pre-filled URL approach

### 6. Test the Integration

1. Start your application: `npm run dev`
2. Open the resume download modal
3. Enter test email and phone number
4. Check your Google Sheet for new entries

## Sheet Structure

The application will create two sheets automatically:

### Messages Sheet
- Column A: ID
- Column B: Name  
- Column C: Email
- Column D: Message
- Column E: Created At

### ResumeAccess Sheet
- Column A: ID
- Column B: Email
- Column C: Phone
- Column D: Accessed At

## Security Considerations

- Keep your service account key file secure and never commit it to git
- Add `.env` and `*.json` key files to `.gitignore`
- Consider using environment variables in production
- Regularly review who has access to your Google Sheet

## Troubleshooting

### Common Issues

1. **"Permission denied" errors**:
   - Ensure Google Sheets API is enabled
   - Check service account has Editor permissions on the sheet
   - Verify the spreadsheet ID is correct

2. **"File not found" errors**:
   - Check the path to your service account key file
   - Ensure the JSON file is properly formatted

3. **No data appearing in sheets**:
   - Check server logs for error messages
   - Verify the sheet names match exactly ("Messages", "ResumeAccess")
   - Ensure headers are properly set

### Fallback Behavior

If Google Sheets integration fails, the application will:
- Log the data to console as fallback
- Still allow resume downloads
- Continue functioning normally

## Production Deployment

For production deployment:

1. Use environment variables instead of `.env` file
2. Store service account key securely (e.g., AWS Secrets Manager, Google Secret Manager)
3. Consider using a dedicated Google Cloud project for production
4. Set up monitoring for Google Sheets API quota usage

## Benefits of This Approach

- **Zero database maintenance**: No need to manage PostgreSQL servers
- **Easy data access**: View and export data directly from Google Sheets
- **Simple backup**: Google Sheets automatically backs up your data
- **Low cost**: Free tier covers most use cases
- **Easy collaboration**: Share access with team members if needed
