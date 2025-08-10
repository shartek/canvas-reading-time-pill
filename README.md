# ⏱️ Canvas RCE Reading Time Range (MM:SS Format)

![Made by Shar ⭐](https://img.shields.io/badge/Made%20by-Shar%20%E2%AD%90-blueviolet)

A Tampermonkey userscript that adds a reading time estimate next to the word count in Canvas's Rich Content Editor (RCE). Designed for instructional designers and faculty who want to better gauge cognitive load and learner pacing.

---

## ✨ Features

- Displays reading time range in **minutes:seconds** format
- Automatically updates as you type or edit content
- Works in Canvas RCE across pages, assignments, discussions, etc.
- Lightweight and accessibility-conscious

---

## 📦 Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) browser extension
2. Click this link to install the script:  
   👉 [Install from GitHub](https://raw.githubusercontent.com/shartek/canvas-reading-time-pill/main/canvas-reading-time.user.js)
3. Accept the Tampermonkey prompt to add the script

---

## 🔄 Updates

Tampermonkey will check for updates automatically.  
To ensure updates work, the script includes:

```javascript
@updateURL    https://raw.githubusercontent.com/shartek/canvas-reading-time-pill/main/canvas-reading-time.user.js
@downloadURL  https://raw.githubusercontent.com/shartek/canvas-reading-time-pill/main/canvas-reading-time.user.js
````
---

## 🧠 Why Reading Time?

Reading time estimates help learners manage their time and expectations.  
They support:

- Cognitive load awareness
- Transparent pacing
- Accessible course design

This script was created to help instructional designers and faculty make informed decisions about content length and learner experience.

---

## 🛠 Development Notes

- Written in vanilla JavaScript
- No external dependencies
- Designed for Canvas's Rich Content Editor (RCE)
- Tested in Chrome
- Built with accessibility and cognitive load in mind

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

You’re free to use, modify, and distribute this script with attribution.  
No warranty is provided—use at your own risk.

---

## 📋 Changelog

### 1.9.1 — August 10, 2025
- Added `@author` field to fix Tampermonkey display
- Updated README with install instructions and changelog

### 1.9 — August 9, 2025
- Initial public release
- Displays reading time range in MM:SS format
- Auto-updates as content changes in Canvas RCE
