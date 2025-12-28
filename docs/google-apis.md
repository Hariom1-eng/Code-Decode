# Google API Integration Guide

Suggested APIs and notes:

- Google Maps JavaScript API
  - Use to render interactive campus map and routes.
  - API key required (restrict to referrer).

- Google Drive API
  - Use service account or OAuth to upload and list notes/syllabus.
  - Store shareable links in `Note.fileUrl`.

- Google Gemini (AI)
  - Use server-side calls to generate images, PPT outlines, scripts.
  - Keep API keys/credentials server-side.

- Google OAuth 2.0
  - Use for login with Gmail. Save tokens and create session or JWT.

- Google News / RSS
  - Use News API or RSS feeds and filter for Google/A.I. keywords.

Environment variables (backend/.env):
- GOOGLE_API_KEY
- GOOGLE_CLIENT_ID
- GOOGLE_CLIENT_SECRET
- GOOGLE_SERVICE_ACCOUNT (optional JSON path)

Security: never commit keys. Use `.env` or secret manager for production.
