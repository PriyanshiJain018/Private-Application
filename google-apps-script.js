// =============================================
// GOOGLE APPS SCRIPT — Paste this in Apps Script
// =============================================
// Steps:
// 1. Create a Google Sheet with headers in Row 1
// 2. Go to Extensions → Apps Script
// 3. Paste this entire code
// 4. Deploy → New Deployment → Web App
//    - Execute as: Me
//    - Who has access: Anyone
// 5. Copy the deployment URL
// 6. Paste it in app.js → CONFIG.googleScriptURL
// =============================================

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp,
      data.defaultMood,
      data.superpower,
      data.goodEvening,
      data.engagementGuess,
      data.priyanshiBirthday,
      data.bestNickname,
      data.firstDate,
      data.favoriteFood,
      data.betterCook,
      data.birthdayQuarter,
      data.totalWrongAttempts,
      data.decodeStressed,
      data.decodeLoveLanguage,
      data.decodePeaceOffering,
      data.decodeDealbreaker,
      data.swipe1,
      data.swipe2,
      data.swipe3,
      data.swipe4,
      data.swipe5,
      data.swipe6,
      data.swipe7,
      data.swipe8,
      data.thisOrThat,
      data.valentineAnswer,
      data.allSwipes
    ]);
    
    return ContentService.createTextOutput(
      JSON.stringify({ status: "success" })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
