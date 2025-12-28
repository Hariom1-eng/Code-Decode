import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Buses(){
  const [buses, setBuses] = useState([])
  useEffect(()=>{
    axios.get('/api/buses')
      .then(res => setBuses(res.data.buses))
      .catch(err => console.error(err))
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h2>Bus Routes & Timings</h2>
      <ul>
        {buses.map(b=> <li key={b.id}>{b.name}: {b.route} — {b.time}</li>)}
      </ul>
    </div>
  )
}