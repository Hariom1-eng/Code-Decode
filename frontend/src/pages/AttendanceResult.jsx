import React from 'react'

export default function AttendanceResult(){
  const params = new URLSearchParams(window.location.search)
  const msg = params.get('msg')

  return (
    <div style={{ padding: 20 }}>
      <h2>Attendance Result</h2>
      {msg ? <p>{decodeURIComponent(msg)}</p> : <p>No message provided.</p>}
    </div>
  )
}
