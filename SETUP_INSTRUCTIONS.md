# Contact Form Integration Setup Guide

## Overview
This setup will make your contact forms functional by:
- ✅ Saving submissions to Google Sheets
- ✅ Sending email notifications to your team
- ✅ Handling file attachments via Google Drive
- ✅ Working on both Homepage and Contact Page

## Step 1: Set up Google Apps Script

1. **Go to [Google Apps Script](https://script.google.com)**
2. **Click "New Project"**
3. **Replace the default code** with the code from `google-apps-script.js` (it's already configured with your Sheet ID, Drive folder ID, and team emails)
4. **Save the project** (name it "APS Contact Form Handler")

## Step 2: Set Permissions

1. **Click "Run" to test the script** (this will prompt for permissions)
2. **Grant permissions** when prompted:
   - Read and write access to Google Sheets
   - Send email on your behalf  
   - Access to Google Drive
3. **Review permissions** and click "Allow"

## Step 3: Deploy as Web App

1. **Click "Deploy" > "New deployment"**
2. **Choose type: "Web app"**
3. **Configure settings:**
   - Execute as: **"Me"**
   - Who has access: **"Anyone"**
4. **Click "Deploy"**
5. **Copy the web app URL** (it looks like: `https://script.google.com/macros/s/ABC123.../exec`)

## Step 4: Update Website Forms

Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` in both files:
- `src/components/Contact.tsx` (Homepage form)
- `src/components/ContactPage.tsx` (Contact page form)

**Example:**
```javascript
// Replace this line:
const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_URL_HERE', {

// With this:
const response = await fetch('https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec', {
```

## Step 5: Test the Forms

1. **Submit a test form** from your website
2. **Check your Google Sheet** - you should see the new submission
3. **Check your email** - troy@ and donald@ should receive notifications
4. **Test file attachments** - files should appear in your Google Drive folder

## Your Pre-Configured Resources

✅ **Google Sheet:** [aps-website-contact-form-leads](https://docs.google.com/spreadsheets/d/1eOmLWPV8nx6q8a6GWOAANjmz71w9nF8TCw0wb74P6sU/edit?usp=sharing)

✅ **Google Drive Folder:** [Contact Form Attachments](https://drive.google.com/drive/folders/1rnxfncuPjUeo4HaRiuZZMPWbkZBF1umc?usp=sharing)

✅ **Email Recipients:**
- troy@allstarpropertyservice.com
- donald@allstarpropertyservice.com

## File Attachments

- Files are automatically uploaded to your Google Drive folder
- Each file gets a timestamp prefix to avoid conflicts
- File URLs are recorded in the Google Sheet
- File names are included in email notifications
- Supported formats: JPG, PNG, PDF, DOC, DOCX (up to 10MB each)

## Troubleshooting

### Form not submitting:
- Check that the Google Apps Script URL is correct in both form files
- Verify the script is deployed as a web app with "Anyone" access
- Test the script URL directly in a browser - you should see "Form Handler is running!"

### Not receiving emails:
- Check spam/junk folders
- Verify email addresses in the script configuration
- Check Google Apps Script execution logs for errors

### Files not uploading:
- Ensure the Google Drive folder permissions allow the script to write
- Check that files are under 10MB and in supported formats
- Review Google Apps Script logs for file upload errors

### Permissions issues:
- Re-run the script in Google Apps Script to refresh permissions
- Make sure you granted all required permissions (Sheets, Drive, Gmail)

## Security Notes

- The script uses CORS headers to allow website access
- No sensitive data is logged or stored beyond what's intended
- File uploads are restricted to your specific Google Drive folder
- Email notifications only go to pre-configured addresses

## Support

If you encounter issues:
1. Check the Google Apps Script execution logs
2. Test the script URL directly in a browser
3. Verify all permissions are granted
4. Ensure the Google Sheet and Drive folder are accessible

The forms are now fully functional and will capture leads with professional email notifications!