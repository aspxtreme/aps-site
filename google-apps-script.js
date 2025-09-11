// Google Apps Script code to handle form submissions
// 1. Go to script.google.com
// 2. Create a new project
// 3. Replace the default code with this code
// 4. Deploy as a web app with execute permissions set to "Anyone"
// 5. Copy the web app URL and replace YOUR_GOOGLE_APPS_SCRIPT_URL_HERE in Contact.tsx and ContactPage.tsx

// Configuration
const CONFIG = {
  SPREADSHEET_ID: '1eOmLWPV8nx6q8a6GWOAANjmz71w9nF8TCw0wb74P6sU', // Your Google Sheet ID
  DRIVE_FOLDER_ID: '1rnxfncuPjUeo4HaRiuZZMPWbkZBF1umc', // Your Google Drive folder ID
  NOTIFICATION_EMAILS: [
    'troy@allstarpropertyservice.com',
    'donald@allstarpropertyservice.com'
  ],
  EMAIL_SUBJECT: 'New Contact Form Submission - All Star Property Services'
};

function doPost(e) {
  try {
    // Set CORS headers for the response
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };

    // Parse the form data
    const data = JSON.parse(e.postData.contents);
    
    // Get or create the spreadsheet
    const sheet = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID).getActiveSheet();
    
    // If this is the first submission, add headers
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 8).setValues([[
        'Timestamp', 'Name', 'Email', 'Phone', 'Property Type', 'Message', 'Source', 'Files'
      ]]);
      
      // Format headers
      const headerRange = sheet.getRange(1, 1, 1, 8);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('white');
    }
    
    // Handle file attachments (if any)
    let attachmentInfo = 'No files attached';
    if (data.files && data.files.length > 0) {
      attachmentInfo = handleFileAttachments(data.files);
    }
    
    // Add the form data to the sheet
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.propertyType || '',
      data.message || '',
      data.source || 'Website Contact Form',
      attachmentInfo
    ]);
    
    // Send email notification
    sendEmailNotification(data, attachmentInfo);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Form submitted successfully!'
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(corsHeaders);
      
  } catch (error) {
    console.error('Error processing form:', error);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false, 
        error: 'Failed to process form submission. Please try again or contact us directly.',
        details: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      });
  }
}

// Handle OPTIONS requests for CORS
function doGet(e) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
  
  return ContentService
    .createTextOutput('All Star Property Services Form Handler is running!')
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders(corsHeaders);
}

function handleFileAttachments(files) {
  try {
    const folder = DriveApp.getFolderById(CONFIG.DRIVE_FOLDER_ID);
    const uploadedFiles = [];
    
    files.forEach((fileData, index) => {
      try {
        // Decode base64 file data
        const blob = Utilities.newBlob(
          Utilities.base64Decode(fileData.content),
          fileData.mimeType,
          `${new Date().getTime()}_${fileData.name}`
        );
        
        // Upload to Drive folder
        const file = folder.createFile(blob);
        uploadedFiles.push({
          name: fileData.name,
          url: file.getUrl(),
          id: file.getId()
        });
        
      } catch (fileError) {
        console.error(`Error uploading file ${fileData.name}:`, fileError);
        uploadedFiles.push({
          name: fileData.name,
          error: 'Upload failed'
        });
      }
    });
    
    return `${uploadedFiles.length} files uploaded: ${uploadedFiles.map(f => f.name).join(', ')}`;
    
  } catch (error) {
    console.error('Error handling file attachments:', error);
    return 'File upload error';
  }
}

function sendEmailNotification(data, attachmentInfo) {
  try {
    const subject = CONFIG.EMAIL_SUBJECT;
    
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #181B38; color: white; padding: 20px; text-align: center;">
          <h2>New Contact Form Submission</h2>
          <p style="margin: 0; color: #7DFFFC;">All Star Property Services</p>
        </div>
        
        <div style="padding: 20px; background-color: #f9f9f9;">
          <h3 style="color: #181B38; margin-top: 0;">Contact Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold; color: #181B38;">Name:</td>
              <td style="padding: 10px;">${data.name || 'Not provided'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold; color: #181B38;">Email:</td>
              <td style="padding: 10px;"><a href="mailto:${data.email}">${data.email || 'Not provided'}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold; color: #181B38;">Phone:</td>
              <td style="padding: 10px;"><a href="tel:${data.phone}">${data.phone || 'Not provided'}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold; color: #181B38;">Property Type:</td>
              <td style="padding: 10px;">${data.propertyType || 'Not specified'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold; color: #181B38;">Source:</td>
              <td style="padding: 10px;">${data.source || 'Website Contact Form'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold; color: #181B38;">Attachments:</td>
              <td style="padding: 10px;">${attachmentInfo}</td>
            </tr>
          </table>
          
          <h3 style="color: #181B38; margin-top: 30px;">Project Details</h3>
          <div style="background-color: white; padding: 15px; border-left: 4px solid #D62430; margin-bottom: 20px;">
            <p style="margin: 0; line-height: 1.5;">${data.message || 'No message provided'}</p>
          </div>
          
          <div style="background-color: #181B38; color: white; padding: 15px; text-align: center; margin-top: 20px;">
            <p style="margin: 0;">
              <strong>Submitted:</strong> ${data.timestamp ? new Date(data.timestamp).toLocaleString() : new Date().toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    `;
    
    const plainTextBody = `
New Contact Form Submission - All Star Property Services

Contact Details:
- Name: ${data.name || 'Not provided'}
- Email: ${data.email || 'Not provided'}
- Phone: ${data.phone || 'Not provided'}
- Property Type: ${data.propertyType || 'Not specified'}
- Source: ${data.source || 'Website Contact Form'}
- Attachments: ${attachmentInfo}

Project Details:
${data.message || 'No message provided'}

Submitted: ${data.timestamp ? new Date(data.timestamp).toLocaleString() : new Date().toLocaleString()}
    `;
    
    // Send email to all team members
    CONFIG.NOTIFICATION_EMAILS.forEach(email => {
      try {
        MailApp.sendEmail({
          to: email,
          subject: subject,
          htmlBody: htmlBody,
          body: plainTextBody
        });
      } catch (emailError) {
        console.error(`Failed to send email to ${email}:`, emailError);
      }
    });
    
  } catch (error) {
    console.error('Error sending email notification:', error);
  }
}