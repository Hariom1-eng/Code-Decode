import React from 'react'

export default function APIDocs(){
  return (
    <div style={{ padding: 20 }}>
      <h2>Google APIs & Usage</h2>
      <table border="1" cellPadding="6">
        <thead>
          <tr><th>API</th><th>Use</th></tr>
        </thead>
        <tbody>
          <tr><td>Google Maps API</td><td>Campus navigation & route visualization</td></tr>
          <tr><td>Google Drive API</td><td>Store & fetch syllabus/notes</td></tr>
          <tr><td>Google Gemini API</td><td>AI content generation (images, PPTs)</td></tr>
          <tr><td>Google OAuth</td><td>Sign in with Gmail</td></tr>
          <tr><td>Google Calendar API</td><td>Exam & event reminders</td></tr>
        </tbody>
      </table>
    </div>
  )
}