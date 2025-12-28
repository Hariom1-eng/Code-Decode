import React, { useState } from 'react'
import axios from 'axios'

export default function Admin(){
  const [qr, setQr] = useState(null)
  const [error, setError] = useState(null)

  const generate = async ()=>{
    try{
      const res = await axios.post('/api/attendance/generate-qr', {}, { withCredentials: true })
      setQr(res.data)
      setError(null)
    }catch(err){
      setError(err.response?.data?.error || 'Error generating QR (are you admin?)')
      setQr(null)
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Panel</h2>
      <p>Generate QR token for attendance</p>
      <button onClick={generate}>Generate QR</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {qr && (
        <div>
          <p>Token: <code>{qr.token}</code></p>
          <img src={qr.dataUrl} alt="qr" style={{ maxWidth: 200 }} />
        </div>
      )}
    </div>
  )
}