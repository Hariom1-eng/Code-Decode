import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

export default function CampusMap(){
  const [markers, setMarkers] = useState([])
  const [search, setSearch] = useState('')
  const mapRef = useRef(null)
  const mapInstance = useRef(null)
  const googleMarkers = useRef([])

  useEffect(()=>{
    axios.get('/api/map')
      .then(res => setMarkers(res.data.markers || []))
      .catch(err => { console.error(err); setMarkers([]) })
  }, [])

  // load google maps script
  useEffect(()=>{
    const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    if(!key){
      console.warn('VITE_GOOGLE_MAPS_API_KEY is not set')
      return
    }

    if(window.google) initMap()
    else{
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${key}`
      script.async = true
      script.defer = true
      script.onload = () => initMap()
      document.head.appendChild(script)
    }
  }, [markers])

  const initMap = ()=>{
    const center = markers[0] ? { lat: markers[0].lat, lng: markers[0].lng } : { lat: 23.2599, lng: 77.4126 }
    mapInstance.current = new window.google.maps.Map(mapRef.current, { center, zoom: 17 })

    // clear old markers
    googleMarkers.current.forEach(m => m.setMap(null))
    googleMarkers.current = []

    markers.forEach(m =>{
      const mk = new window.google.maps.Marker({ position: { lat: m.lat, lng: m.lng }, map: mapInstance.current, title: m.name })
      const infowindow = new window.google.maps.InfoWindow({ content: `<strong>${m.name}</strong>` })
      mk.addListener('click', () => infowindow.open({ anchor: mk, map: mapInstance.current }))
      googleMarkers.current.push(mk)
    })
  }

  const filtered = markers.filter(m => m.name.toLowerCase().includes(search.toLowerCase()))

  const focusMarker = (m)=>{
    const mk = googleMarkers.current.find(x => x.getTitle() === m.name)
    if(mk && mapInstance.current){
      mapInstance.current.panTo(mk.getPosition())
      mapInstance.current.setZoom(19)
      new window.google.maps.InfoWindow({ content: `<strong>${m.name}</strong>` }).open({ anchor: mk, map: mapInstance.current })
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Campus Map</h2>

      <div style={{ marginBottom: 10 }}>
        <input placeholder="Search by name..." value={search} onChange={e=>setSearch(e.target.value)} />
      </div>

      <div style={{ display: 'flex', gap: 20 }}>
        <div style={{ width: '60%', height: 500 }} ref={mapRef} />

        <div style={{ width: '35%', maxHeight: 500, overflowY:'auto' }}>
          <h4>Locations</h4>
          {filtered.map(m => (
            <div key={m.id} style={{ padding: 8, borderBottom: '1px solid #eee' }}>
              <strong>{m.name}</strong>
              <div>{m.lat}, {m.lng}</div>
              <button onClick={()=>focusMarker(m)}>Show on map</button>
            </div>
          ))}
          {filtered.length === 0 && <p>No results</p>}
        </div>
      </div>

    </div>
  )
}
