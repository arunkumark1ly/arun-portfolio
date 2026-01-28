/**
 * Google Apps Script Web App for handling form submissions.
 * Deploy as Web App: Execute as "Me", Access "Anyone".
 */

function doGet(e) {
  return ContentService.createTextOutput("Endpoint Active. Please use POST to submit data.")
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  const spreadsheetId = "1DZVz-LDXx9acTWb8vZgdR7Q5B_JrnVQDRuX9ki--rZE"; 
  const sheetName = "ResumeAccess"; 

  try {
    // Log basic request info
    Logger.log("=== doPost CALLED ===");
    Logger.log("Event object exists: " + (e !== undefined));
    Logger.log("Event type: " + typeof e);
    
    if (e) {
      Logger.log("Available properties: " + Object.keys(e));
    }

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);

    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    let sheet = spreadsheet.getSheetByName(sheetName);

    if (!sheet) {
      sheet = spreadsheet.insertSheet(sheetName);
      sheet.appendRow(["Timestamp", "Email", "Phone", "Message", "Source"]);
      Logger.log("Created new sheet: " + sheetName);
    }

    let email = "";
    let phone = "";
    let message = "";

    // --- STEP 1: Try to parse JSON data (Modern Fetch) ---
    if (e && e.postData && e.postData.type === "application/json") {
      Logger.log("Parsing JSON data");
      const payload = JSON.parse(e.postData.contents);
      email = payload["entry.1913421173"] || payload.email || "";
      phone = payload["entry.1241193714"] || payload.phone || "";
      message = payload.message || "";
    } 
    // --- STEP 2: Try to parse URL Encoded data (Standard Forms) ---
    else if (e && e.parameter && Object.keys(e.parameter).length > 0) {
      Logger.log("Parsing URL encoded data from e.parameter");
      Logger.log("Parameters: " + JSON.stringify(e.parameter));
      email = e.parameter["entry.1913421173"] || e.parameter.email || "";
      phone = e.parameter["entry.1241193714"] || e.parameter.phone || "";
      message = e.parameter.message || "";
    }
    // --- STEP 3: Fallback for raw text strings ---
    else if (e && e.postData && e.postData.contents) {
      Logger.log("Parsing raw postData contents");
      Logger.log("PostData type: " + e.postData.type);
      Logger.log("PostData contents: " + e.postData.contents);
      const raw = e.postData.contents;
      const parts = raw.split('&');
      parts.forEach(part => {
        const pair = part.split('=');
        const key = decodeURIComponent(pair[0]);
        const val = decodeURIComponent(pair[1] || "");
        Logger.log("Parsed pair: " + key + " = " + val);
        if (key === "entry.1913421173" || key === "email") email = val;
        if (key === "entry.1241193714" || key === "phone") phone = val;
      });
    } else {
      Logger.log("No data found in any expected format");
    }

    Logger.log("Final values - Email: '" + email + "', Phone: '" + phone + "', Message: '" + message + "'");
    
    const rowData = [
      new Date(), // This formats nicely in Sheets
      email,
      phone,
      message,
      "Portfolio Form"
    ];

    Logger.log("Row data: " + JSON.stringify(rowData));
    
    sheet.appendRow(rowData);
    lock.releaseLock();

    const response = {"status": "success", "data": rowData, "received": {email: email, phone: phone}};
    Logger.log("Sending response: " + JSON.stringify(response));
    
    return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log("Error occurred: " + error.toString());
    Logger.log("Error stack: " + error.stack);
    return ContentService.createTextOutput(JSON.stringify({"status": "error", "message": error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}