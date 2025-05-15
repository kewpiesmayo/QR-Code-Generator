# QR Code Generator Web App

[Vercel Link Demo](https://qr-code-generator-kewpiesmayos-projects.vercel.app/)

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
```
#### 2. Install dependencies
```
npm install
```
#### 3. Setup Supabase Tables
You need to set up two tables in your Supabase project: users and configs.

##### Row-Level Security (RLS)
For the current iteration, Row-Level Security (RLS) should be disabled on all Supabase tables:
⚠️ This setup is not secure for production environments.


```users``` Table
| Column Name | Type      | Default        | Description                                   |
| ----------- | --------- | -------------- | --------------------------------------------- |
| id          | bigint    | Auto-Increment | Primary key                                   |
| created\_at | timestamp | `now()`        | Timestamp of account creation                 |
| first\_name | text      |                | User’s first name                             |
| last\_name  | text      |                | User’s last name                              |
| username    | text      |                | Unique username                               |
| password    | text      |                | Plaintext password (not secure in production) |

Go to SQL Editor in Supabase and run this SQL:
```
create table public.users (
  id bigint generated always as identity primary key,
  created_at timestamp with time zone default now(),
  first_name text,
  last_name text,
  username text,
  password text
);
```

```configs``` Table
| Column Name      | Type   | Description                        |
| ---------------- | ------ | ---------------------------------- |
| id               | bigint | Primary key                        |
| user\_id         | bigint | Foreign key referencing `users.id` |
| name             | text   | Name of the saved QR config        |
| url              | text   | Encoded data for the QR code       |
| body\_color      | text   | Hex color code                     |
| bg\_color        | text   | Background color (hex)             |
| gradient\_type   | text   | "linear", "radial", or ""          |
| gradient\_color1 | text   | Hex value for gradient start       |
| gradient\_color2 | text   | Hex value for gradient end         |
| body\_shape      | text   | QR body style                      |
| eye\_frame       | text   | Eye frame shape                    |
| eye\_ball        | text   | Eye ball shape                     |
| eye\_color       | text   | Hex color for eye frames           |
| eyeball\_color   | text   | Hex color for eye balls            |
| logo\_mode       | text   | "default" or "clean"               |
| logo\_url        | text   | URL of logo image                  |

Go to SQL Editor in Supabase and run this SQL:
```
create table public.configs (
  id bigint generated always as identity primary key,
  user_id bigint references public.users(id),
  name text,
  url text,
  body_color text,
  bg_color text,
  gradient_type text,
  gradient_color1 text,
  gradient_color2 text,
  body_shape text,
  eye_frame text,
  eye_ball text,
  eye_color text,
  eyeball_color text,
  logo_mode text,
  logo_url text
);
```
#### 3. Environment Variables

Create a `.env` file in your project root with the following variables:

```env
SUPABASE_URL=your-supabase-url
SUPABASE_KEY=your-public-anon-key
```
⚠️ Do not commit your actual .env file — include a .env.example in your repo instead.
Find your supabase URL and key in the API settings of your supabase project.

---

## 🚀 Running the Application

Start the Express server:
```
npm start
```
---
## 📁 Project Structure
```
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
```

## 📡 API Documentation

The following RESTful endpoints are defined in `index.js`:

### `POST /signup`
Registers a new user.  
**Body:** `{ first_name, last_name, username, password }`

### `POST /login`
Authenticates a user.  
**Body:** `{ username, password }`

### `POST /logout`
Logs the user out of the current session.

### `GET /session`
Returns the logged-in user's session info.

### `POST /save-config`
Saves a QR config tied to the current user.

### `GET /configs/:userId`
Retrieves all saved configs for a user.

### `PUT /edit-config/:configId`
Renames a saved config.

### `DELETE /delete-config/:configId`
Deletes a specific config.

## 🧪 Testing

- Currently, there are **no automated tests**
- Manual testing has been done via browser and Postman

## 🐞 Known Issues

- No password encryption — data stored as plain text
- Configs are saved but not associated with a rendered QR image

## 📈 Future Enhancements

- Add password hashing and authentication security
- Implement Supabase Auth with UUID user management and RLS
- Save and render QR image previews
- Improve mobile UI layout
- Add unit tests and integration tests (e.g. Jest or Mocha)
- Support config sharing via public links
- Add drag-and-drop or image preview UI for logos
