import React from 'react'

function decodeParam(param){
  try{
    const json = decodeURIComponent(param)
    const str = decodeURIComponent(escape(window.atob(json)))
    return JSON.parse(str)
  }catch(e){
    try{ return JSON.parse(decodeURIComponent(param)) }catch{ return null }
  }
}

export default function AiResult(){
  const params = new URLSearchParams(window.location.search)
  const dataParam = params.get('data')
  const data = dataParam ? decodeParam(dataParam) : null

  return (
    <div style={{ padding: 20 }}>
      <h2>AI Result</h2>
      {data ? (
        <div>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(data, null, 2)}</pre>
          {data.dataUrl && <img src={data.dataUrl} alt="ai" style={{ maxWidth: 600 }} />}
        </div>
      ) : (
        <p>No data to display.</p>
      )}
    </div>
  )
}
