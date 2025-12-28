import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Buses(){
  const [buses, setBuses] = useState([])
  useEffect(()=>{
    axios.get('/api/buses')
      .then(res => setBuses(res.data.buses))
      .catch(err => console.error(err))
  }, [])

  const viewOnMap = (stopName) => {
    try{
      const url = `/map?focus=${encodeURIComponent(stopName)}`
      window.open(url, '_blank')
    }catch(e){ console.error(e) }
  }

  const nextArrival = (times)=>{
    const now = new Date()
    const minutes = (h,m)=>{ const d = new Date(now); d.setHours(h); d.setMinutes(m); d.setSeconds(0); return d }
    const upcoming = times.map(t => {
      const [hh,mm] = t.split(':').map(Number)
      const d = minutes(hh,mm)
      if(d < now) d.setDate(d.getDate()+1)
      return { time: t, diff: d - now }
    }).sort((a,b)=>a.diff - b.diff)
    return upcoming.length ? upcoming[0].time : times[0]
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Bus Routes & Timings</h2>
      <table className="table">
        <thead>
          <tr><th>Bus</th><th>Route</th><th>Next Arrival</th><th>Stops</th></tr>
        </thead>
        <tbody>
          {buses.map(b=> (
            <tr key={b.id}>
              <td>{b.name}</td>
              <td>{b.route}</td>
              <td>{nextArrival(b.times)}</td>
              <td>
                {b.stops.map(s => (
                  <div key={s.name} style={{ display: 'flex', gap: 8, alignItems:'center' }}>
                    <span>{s.name}</span>
                    <button className="btn btn-sm btn-outline-primary" onClick={()=>viewOnMap(s.name)}>View on map</button>
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}