# QR Code Generator Web App

## 📌 Description

This project is a web-based QR Code Generator that allows users to fully customize QR codes with colors, gradients, body and eye shapes, and optional logos. Users can save and manage their configurations after creating an account. The app is designed to be responsive and user-friendly for both desktop and mobile platforms.

## 🌐 Target Browsers

This app is designed and tested to work on:

- ✅ Google Chrome (Windows/macOS/iOS/Android)
- ✅ Microsoft Edge (Windows)
- ✅ Safari (macOS and iOS)
- ✅ Firefox (Windows/macOS)
- ⚠️ May work on Android default browser, but best on Chrome

## 🔗 Developer Manual

Please see below for full technical documentation to help future developers continue working on this project.

---

## 🛠 Developer Manual

This section is intended for developers who need to understand, run, and maintain the system.

### ⚙️ Installation Instructions

#### 1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/QR-Code-Generator.git
cd QR-Code-Generator
# QR-Code-Generator
```
#### 2. Install dependencies
```
npm install
```
#### 3. Environment Setup
```
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
```
⚠️ Do not commit your actual .env file — include a .env.example in your repo instead.

---

### 🚀 **Running the Application**

```markdown
## 🚀 Running the Application

Start the Express server:

```bash
npm start

---

### 📁 **Project Structure**

```markdown
## 📁 Project Structure

QR-Code-Generator/
├── public/
│ ├── index.html
│ ├── login.html
│ ├── AboutMe.html
│ ├── Help.html
│ ├── Home.js
│ ├── Login.js
│ ├── Help.js
│ ├── style.css
│ ├── login.css
│ └── Home.css
├── index.js # Express server
├── vercel.json # Vercel deployment config
├── .env # (Excluded)
├── .env.example # Template for .env
├── package.json
└── README.md
