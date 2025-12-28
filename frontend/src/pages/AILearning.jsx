import React, { useState } from 'react'
import axios from 'axios'

export default function AILearning(){
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState(null)

  const b64Encode = (s)=> window.btoa(unescape(encodeURIComponent(s)))

  const handleGenerate = async ()=>{
    const res = await axios.post('/api/ai/generate-image', { prompt })
    setResult(res.data)
    try{
      const payload = b64Encode(JSON.stringify(res.data))
      window.open(`/ai/result?data=${encodeURIComponent(payload)}`, '_blank')
    }catch(e){
      console.error('Could not open AI result in new tab', e)
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>AI Learning Zone (Gemini)</h2>
      <p>Try prompts to generate images, PPT outlines, or scripts.</p>
      <input value={prompt} onChange={e=>setPrompt(e.target.value)} placeholder="Enter prompt" style={{width:'60%'}} />
      <button onClick={handleGenerate}>Generate</button>
      <pre>{JSON.stringify(result, null, 2)}</pre>
      <p>Notes: integrate Google Gemini API server-side to avoid exposing API keys.</p>
    </div>
  )
}