# SynthMind Bootcamp - Google Spreadsheet Integration Setup

## Step 1: Create Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it: **SynthMind Bootcamp Registrations**
4. In the first sheet, add these column headers in row 1:

| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Timestamp | Registration ID | Full Name | Email | Mobile | College/Organization | Degree | Year of Study | City | State | LinkedIn | GitHub | Area of Interest | Goals | Selected Tier |

## Step 2: Create Google Apps Script

1. In your spreadsheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste the following code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Get form data from POST request
    var params = e.parameter;
    
    // Prepare data array
    var rowData = [
      params.timestamp || new Date().toLocaleString("en-IN", {timeZone: "Asia/Kolkata"}),
      params.registrationId || "",
      params.fullName || "",
      params.email || "",
      params.mobile || "",
      params.college || "",
      params.degree || "",
      params.yearOfStudy || "",
      params.city || "",
      params.state || "",
      params.linkedin || "N/A",
      params.github || "N/A",
      params.areaOfInterest || "",
      params.goals || "",
      params.selectedTier || ""
    ];
    
    // Append data to sheet
    sheet.appendRow(rowData);
    
    // Send confirmation email (optional - you can enable this later)
    try {
      sendConfirmationEmail(params);
    } catch (emailError) {
      Logger.log("Email sending failed: " + emailError.toString());
    }
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      "status": "success",
      "registrationId": params.registrationId,
      "message": "Registration successful"
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log("Error: " + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      "status": "error",
      "message": error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Email confirmation function
function sendConfirmationEmail(params) {
  var recipientEmail = params.email;
  var subject = "SynthMind Bootcamp Registration Confirmation - " + params.registrationId;
  
  var body = "Dear " + params.fullName + ",\n\n" +
             "Thank you for registering for the SynthMind Bootcamp!\n\n" +
             "Your Registration Details:\n" +
             "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
             "Registration ID: " + params.registrationId + "\n" +
             "Selected Tier: " + params.selectedTier + "\n" +
             "Email: " + params.email + "\n" +
             "Mobile: " + params.mobile + "\n" +
             "College: " + params.college + "\n" +
             "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n" +
             "Next Steps:\n" +
             "1. Please save your Registration ID for future reference\n" +
             "2. Our team will contact you within 24-48 hours with payment details\n" +
             "3. Check your email for the bootcamp schedule and joining instructions\n\n" +
             "Program Details:\n" +
             "📅 Duration: 3 Days Intensive Bootcamp\n" +
             "🎯 Focus: AI × Biology × Agents\n" +
             "🚀 Outcome: Industry-Ready Portfolio\n\n" +
             "For any queries, please contact:\n" +
             "📧 Email: support@molsys.com\n" +
             "📱 WhatsApp: +91 XXXXX XXXXX\n\n" +
             "We're excited to have you on board!\n\n" +
             "Best Regards,\n" +
             "Team SynthMind\n" +
             "MOLSYS PVT LTD\n" +
             "Partner with NVIDIA Inception Program";
  
  try {
    MailApp.sendEmail(recipientEmail, subject, body);
    
    // Optional: Send notification to admin
    var adminEmail = "admin@molsys.com"; // Replace with your admin email
    var adminSubject = "New SynthMind Bootcamp Registration - " + params.registrationId;
    var adminBody = "New registration received!\n\n" +
                    "Registration ID: " + params.registrationId + "\n" +
                    "Name: " + params.fullName + "\n" +
                    "Email: " + params.email + "\n" +
                    "Tier: " + params.selectedTier + "\n" +
                    "Timestamp: " + params.timestamp;
    
    MailApp.sendEmail(adminEmail, adminSubject, adminBody);
    
  } catch (error) {
    Logger.log("Email error: " + error.toString());
  }
}

// Test function (optional - you can run this manually to test)
function testPost() {
  var testData = {
    parameter: {
      timestamp: new Date().toLocaleString("en-IN", {timeZone: "Asia/Kolkata"}),
      registrationId: "SM-TEST123",
      fullName: "Test User",
      email: "test@example.com",
      mobile: "+91 98765 43210",
      college: "Test College",
      degree: "B.Tech",
      yearOfStudy: "3rd Year",
      city: "Mumbai",
      state: "Maharashtra",
      linkedin: "https://linkedin.com/in/test",
      github: "https://github.com/test",
      areaOfInterest: "AI / Machine Learning",
      goals: "Learn AI and build projects",
      selectedTier: "Elite Program"
    }
  };
  
  var result = doPost(testData);
  Logger.log(result.getContent());
}
```

## Step 3: Deploy the Script

1. Click the **Deploy** button → **New deployment**
2. Click the gear icon ⚙️ next to "Select type" → Choose **Web app**
3. Configure:
   - **Description**: SynthMind Bootcamp Registration Handler
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Click **Deploy**
5. **Important**: Copy the Web app URL that appears (it will look like: `https://script.google.com/macros/s/AKfycb.../exec`)
6. Click **Done**

## Step 4: Update the React Component

1. Open `src/Pages/Omics.js`
2. Find the line that says (around line 84):
   ```javascript
   "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE",
   ```
3. Replace it with your actual Web app URL from Step 3
4. Save the file

## Step 5: Test the Integration

1. Run your React app: `npm start`
2. Navigate to: `http://localhost:3000/#/Omicsworkshop`
3. Fill out the registration form
4. Submit and check if:
   - Data appears in your Google Spreadsheet
   - You receive a confirmation email (if enabled)
   - The success alert shows with a Registration ID

## Optional Enhancements

### Enable Email Notifications
- Make sure the email addresses in the script are correct
- Gmail has a daily limit of 100 emails for free accounts

### Add Data Validation
- Go to your spreadsheet
- Select columns and add Data Validation rules
- Example: Email column should contain "@"

### Create a Dashboard View
- Use Google Sheets built-in charts to visualize:
  - Registrations by tier
  - Registrations over time
  - Geographic distribution (by state/city)

### Set Up Automatic Responses
- Use Google Sheets triggers to send follow-up emails
- Create automated reminders before the bootcamp

## Troubleshooting

**Issue**: "no-cors" mode - can't read response
- **Solution**: This is expected behavior. The form will still work even though you can't see the response.

**Issue**: Email not sending
- **Solution**: Check Gmail quotas and ensure the sender email has permission.

**Issue**: Data not appearing in sheet
- **Solution**: 
  1. Check if the Web app URL is correct
  2. Ensure deployment is set to "Anyone" for access
  3. Check the Apps Script logs (View → Logs)

**Issue**: CORS errors
- **Solution**: Use "mode: 'no-cors'" in the fetch request (already implemented)

## Security Notes

- The Web app URL is public, so anyone with the link can submit data
- Consider adding a honeypot field or CAPTCHA for production
- Rate limiting can be implemented in the Apps Script
- Keep your spreadsheet private - only share with authorized users

## Next Steps

1. ✅ Create the spreadsheet with headers
2. ✅ Add the Apps Script code
3. ✅ Deploy and get the Web app URL
4. ✅ Update the React component with the URL
5. ✅ Test the registration flow
6. 🎯 Configure payment integration (Razorpay/Stripe)
7. 🎯 Set up automated email sequences
8. 🎯 Create a dashboard for registration analytics

---

**Ready to launch! 🚀**

Access the registration page at: `https://yourdomain.com/#/Omicsworkshop`

**Note**: The SynthMind Bootcamp registration is now at the same URL you shared before (`/Omicsworkshop`). The previous content has been safely commented out in the same file.
