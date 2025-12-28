# Backend — Smart Campus

Run:

1. npm install
2. Copy `.env.example` to `.env` and set `MONGODB_URI`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, and `SESSION_SECRET`.
   - Ensure `GOOGLE_CALLBACK_URL` points to `http://localhost:5000/api/auth/google/callback` (or your backend URL)
3. npm run dev
4. (Optional) npm run seed — create sample subjects, notes and an admin user (email: admin@example.com)

Google OAuth setup:
- In Google Cloud Console create OAuth 2.0 Client ID for Web application
- Add authorized redirect URI: `http://localhost:5000/api/auth/google/callback`
- Add the Client ID / Client Secret into your `.env`


Endpoints:
- GET /api/map
- GET /api/academics/syllabus
- POST /api/ai/generate-image
- GET /api/news
- GET /api/buses
- POST /api/attendance/generate-qr (admin)
- POST /api/attendance/qr-scan
- POST /api/attendance/manual
- GET /api/auth/google — start Google OAuth
- GET /api/auth/google/callback — OAuth callback
- GET /api/auth/me — current user
- POST /api/auth/logout — logout
