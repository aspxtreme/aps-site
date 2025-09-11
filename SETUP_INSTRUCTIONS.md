# Google Sheets Form Integration Setup

## Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Premier Facility Solutions - Contact Forms"
4. Copy the spreadsheet ID from the URL (the long string between `/d/` and `/edit`)

## Step 2: Set up Google Apps Script
1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Replace the default code with the code from `google-apps-script.js`
4. Replace `YOUR_SPREADSHEET_ID_HERE` with your actual spreadsheet ID
5. Save the project (name it "Form Handler")

## Step 3: Deploy the Script
1. Click "Deploy" > "New deployment"
2. Choose type: "Web app"
3. Set execute as: "Me"
4. Set access: "Anyone"
5. Click "Deploy"
6. Copy the web app URL

## Step 4: Update the Website
1. In `src/components/Contact.tsx`, replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with your web app URL
2. Save the file

## Step 5: Test
1. Submit a test form on your website
2. Check your Google Sheet - you should see the form data appear

## Alternative: Quick Setup with Formspree
If you prefer a simpler solution:
1. Go to [Formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form
4. Replace the Google Apps Script URL with your Formspree endpoint
5. Change the fetch method to match Formspree's requirements

## Troubleshooting
- Make sure the Google Apps Script has proper permissions
- Check that the spreadsheet ID is correct
- Verify the web app URL is correct
- Test the Google Apps Script directly by visiting its URL