// Google Apps Script code to handle form submissions
// 1. Go to script.google.com
// 2. Create a new project
// 3. Replace the default code with this code
// 4. Deploy as a web app with execute permissions set to "Anyone"
// 5. Copy the web app URL and replace YOUR_GOOGLE_APPS_SCRIPT_URL_HERE in Contact.tsx

function doPost(e) {
  try {
    // Get the active spreadsheet (create one first and get its ID)
    const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE'; // Replace with your Google Sheet ID
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
    
    // Parse the form data
    const data = JSON.parse(e.postData.contents);
    
    // If this is the first submission, add headers
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 7).setValues([[
        'Timestamp', 'Name', 'Email', 'Phone', 'Property Type', 'Message', 'Source'
      ]]);
    }
    
    // Add the form data to the sheet
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.email,
      data.phone,
      data.propertyType,
      data.message,
      data.source
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Handle GET requests for testing
function doGet() {
  return ContentService
    .createTextOutput('Form handler is working!')
    .setMimeType(ContentService.MimeType.TEXT);
}