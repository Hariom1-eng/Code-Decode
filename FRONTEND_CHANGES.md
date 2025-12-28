Recent frontend changes (navigation)

- Added dedicated result pages:
  - AI: `/ai/result` — opens in a new tab after generating an image or result.
  - Admin QR: `/admin/qr` — opens in a new tab after generating a QR token.
  - Attendance: `/attendance/result` — opens in a new tab after submitting attendance token.
- External news links now open in a new tab (`target="_blank"` and `rel="noopener noreferrer"`).

These changes make actions open on a separate page/tab for easier sharing and viewing of results.

Manual verification steps:

1. Start frontend dev server: `cd frontend && npm install && npm run dev`.
2. Open `http://localhost:5173` (or the port Vite reports).
3. Go to **AI Learning** page, enter a prompt and click **Generate** — a new tab should open to `/ai/result` showing the generated result.
4. Go to **Admin** page, click **Generate QR** (requires admin session) — a new tab should open to `/admin/qr` showing token and QR image.
5. Go to **Attendance**, enter token and student ID, click **Submit** — a new tab should open to `/attendance/result` showing confirmation message.
6. Go to **News** — clicking items should open the source in a new tab.

New features to verify:

- Campus Map
  - Open **Map** from the navbar and verify markers (Library, Cafeteria, Hostel, CS Lab) appear.
  - Use the search box to filter locations.
  - Test the **View on map** button from **Buses** page that opens `/map?focus=StopName` and ensures the corresponding marker is focused.

- Academics (Syllabus)
  - Open **Academics** and use the Branch and Semester filters.
  - Click **Download syllabus** links to confirm a PDF downloads/opens (uses a public sample PDF link).

- Buses (Routes & Timings)
  - Open **Buses** and verify each bus displays route, stops, and the computed next arrival time.
  - Click **View on map** next to a stop to open `/map?focus=StopName`.

If you prefer any of these actions to open in the **same tab** instead of a new tab, or prefer modal popups instead of new pages, tell me which behavior you prefer and I'll update accordingly.