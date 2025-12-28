import React, { useState } from 'react'
import axios from 'axios'

export default function Attendance(){
  const [token, setToken] = useState('')
  const [studentId, setStudentId] = useState('')
  const [message, setMessage] = useState(null)

  const submit = async ()=>{
    try{
      const res = await axios.post('/api/attendance/qr-scan', { token, studentId })
      setMessage(res.data.message)
      try{
        const msg = encodeURIComponent(res.data.message)
        window.open(`/attendance/result?msg=${msg}`, '_blank')
      }catch(e){
        console.error('Failed to open attendance result in new tab', e)
      }
    }catch(err){
      setMessage(err.response?.data?.error || 'Error')
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Attendance</h2>

      <h3>Scan QR (enter token)</h3>
      <div>
        <label>Token: <input value={token} onChange={e=>setToken(e.target.value)} /></label>
      </div>
      <div>
        <label>Student ID: <input value={studentId} onChange={e=>setStudentId(e.target.value)} /></label>
      </div>
      <button onClick={submit}>Submit</button>
      {message && <p>{message}</p>}

      <h3>Other options</h3>
      <ul>
        <li>Manual marking (admin panel)</li>
        <li>Advanced: face recognition (future)</li>
      </ul>

      <p>Server endpoints: <code>/api/attendance/qr-scan</code>, <code>/api/attendance/manual</code></p>
    </div>
  )
}