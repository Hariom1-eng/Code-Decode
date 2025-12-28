import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Academics(){
  const [subjects, setSubjects] = useState([])

  const [filterBranch, setFilterBranch] = useState('')
  const [filterSemester, setFilterSemester] = useState('')

  useEffect(()=>{
    axios.get('/api/academics/syllabus')
      .then(res => setSubjects(res.data.subjects))
      .catch(err => console.error(err))
  }, [])

  const branches = Array.from(new Set(subjects.map(s => s.branch)))
  const semesters = Array.from(new Set(subjects.map(s => s.semester)))

  const filtered = subjects.filter(s => (filterBranch ? s.branch === filterBranch : true) && (filterSemester ? s.semester === Number(filterSemester) : true))

  return (
    <div style={{ padding: 20 }}>
      <h2>Academics — RGPV Syllabus & Notes</h2>

      <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
        <div>
          <label>Branch: </label>
          <select value={filterBranch} onChange={e=>setFilterBranch(e.target.value)}>
            <option value="">All</option>
            {branches.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
        <div>
          <label>Semester: </label>
          <select value={filterSemester} onChange={e=>setFilterSemester(e.target.value)}>
            <option value="">All</option>
            {semesters.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <ul>
        {filtered.map(s => (
          <li key={s.id} style={{ marginBottom: 8 }}>
            <strong>{s.name}</strong> — Sem {s.semester} ({s.branch}) {' '}
            {s.syllabusUrl && <a href={s.syllabusUrl} target="_blank" rel="noopener noreferrer">Download syllabus</a>}
          </li>
        ))}
      </ul>
      <p>Notes and PDFs will be loaded from Google Drive (integration to add).</p>
    </div>
  )
}