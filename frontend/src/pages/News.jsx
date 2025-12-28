import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function News(){
  const [news, setNews] = useState([])
  useEffect(()=>{
    axios.get('/api/news')
      .then(res => setNews(res.data.news))
      .catch(err => console.error(err))
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h2>AI & Google Updates</h2>
      <ul>
        {news.map(n=> <li key={n.id}><a href={n.link} target="_blank" rel="noopener noreferrer">{n.title}</a></li>)}
      </ul>
      <p>Future: add Google News API integration and admin announcements.</p>
    </div>
  )
}