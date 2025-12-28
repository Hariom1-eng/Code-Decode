import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Academics(){
  const [subjects, setSubjects] = useState([])

  useEffect(()=>{
    axios.get('/api/academics/syllabus')
      .then(res => setSubjects(res.data.subjects))
      .catch(err => console.error(err))
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h2>Academics — RGPV Syllabus & Notes</h2>
      <ul>
        {subjects.map(s => <li key={s.id}>{s.name} — Sem {s.semester} ({s.branch})</li>)}
      </ul>
      <p>Notes and PDFs will be loaded from Google Drive (integration to add).</p>
    </div>
  )
}