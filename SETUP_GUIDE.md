# 🎁 Valentine App — Setup Guide

## 1. Save User Responses to Google Sheets (Secretly)

Your app already has the `collectAndSendData()` function and `googleScriptURL` config. You just need to create a Google Apps Script to receive the data.

---

### Step-by-Step

#### A. Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Name it **"Valentine Responses"**
3. In Row 1, add these headers (one per column):

```
timestamp | defaultMood | superpower | goodEvening | engagementGuess | priyanshiBirthday | bestNickname | firstDate | favoriteFood | betterCook | birthdayQuarter | totalWrongAttempts | decodeStressed | decodeLoveLanguage | decodePeaceOffering | decodeDealbreaker | swipe1 | swipe2 | swipe3 | swipe4 | swipe5 | swipe6 | swipe7 | swipe8 | valentineAnswer | allSwipes
```

#### B. Create a Google Apps Script
1. In the Google Sheet, go to **Extensions → Apps Script**
2. Delete the default code and paste this:

```javascript
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
```

3. Click **Deploy → New Deployment**
4. Choose type: **Web app**
5. Set:
   - **Execute as**: Me
   - **Who has access**: Anyone
6. Click **Deploy** and copy the URL

#### C. Paste the URL in your app

In `app.js`, line 8, replace the empty string:

```javascript
googleScriptURL: "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec",
```

That's it! When Anmol clicks "Yes" on the Valentine question, all responses silently go to your Google Sheet. The `mode: 'no-cors'` in the existing fetch call means there's no visible network activity indicator.

---

## 2. Convert to PWA (Progressive Web App)

PWA makes the app installable on phones, works offline, and looks like a native app (no browser URL bar).

You need 3 things:
- `manifest.json` — app metadata
- `sw.js` — service worker for offline caching
- Update `index.html` — link the manifest + register the service worker

All three files are provided alongside this guide. Just place them in the same folder as your `index.html`.

### What changes in `index.html`:

Add inside `<head>`:
```html
<link rel="manifest" href="manifest.json">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="The Application">
<link rel="apple-touch-icon" href="icon-192.png">
```

Add before `</body>`:
```html
<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('SW registered'))
        .catch(err => console.log('SW failed:', err));
    });
  }
</script>
```

### Generate App Icons

You need two icon files: `icon-192.png` (192×192) and `icon-512.png` (512×512).

**Quick option**: Use any online favicon generator like [favicon.io](https://favicon.io) — upload a heart emoji or your own image, download the icons, and rename them.

### How to Install the PWA
- **Android Chrome**: Visit the site → tap the 3-dot menu → "Add to Home screen" or you'll see an install banner
- **iPhone Safari**: Visit the site → tap Share → "Add to Home Screen"
- **Desktop Chrome**: You'll see an install icon in the address bar

---

## 3. Add Your Photo to the Gift Screen (End Screen)

The gift box screen already supports a photo — it just needs a URL. There are two ways:

### Option A: Use an Image URL (Easiest)

1. Upload your photo to **[Imgur](https://imgur.com)** (no account needed) or **[Postimages](https://postimages.org)**
2. Copy the **direct image link** (must end in `.jpg`, `.png`, etc.)
3. In `app.js`, line 17, paste the URL:

```javascript
photoURL: "https://i.imgur.com/yourimage.jpg",
```

### Option B: Use a Local Image File

1. Save your photo (e.g., `our-photo.jpg`) in the **same folder** as `index.html`
2. In `app.js`, line 17:

```javascript
photoURL: "our-photo.jpg",
```

### Photo Tips

- **Recommended size**: Keep it under 1MB for fast loading — compress at [TinyPNG](https://tinypng.com) if needed
- **Aspect ratio**: Square or landscape works best (the CSS will handle fitting)
- **Fallback**: If the image fails to load, the app automatically shows a 💑 emoji instead, so nothing breaks

### How It Works in the App

When Anmol taps the gift box on the final screen, the lid opens and reveals:
1. **Your photo** (or 💑 emoji if no photo is set)
2. **Your message** (the `message` field in config)
3. **Your signature** (the `signature` field — currently "Batman Fan")

You can also customize the message and signature right there in the config:

```javascript
giftBox: {
    photoURL: "our-photo.jpg",
    message: `Your personal message here...`,
    signature: "Your signature here"
},
```

---

### Hosting
For the service worker and PWA to work, the app must be served over **HTTPS**. Free options:
- **GitHub Pages** — push your folder to a repo, enable Pages
- **Netlify** — drag and drop your folder
- **Vercel** — connect your repo
