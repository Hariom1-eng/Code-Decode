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

export default function QRResult(){
  const params = new URLSearchParams(window.location.search)
  const dataParam = params.get('data')
  const data = dataParam ? decodeParam(dataParam) : null

  return (
    <div style={{ padding: 20 }}>
      <h2>QR Result</h2>
      {data ? (
        <div>
          <p>Token: <code>{data.token}</code></p>
          {data.dataUrl && <img src={data.dataUrl} alt="qr" style={{ maxWidth: 300 }} />}
        </div>
      ) : (
        <p>No data to display.</p>
      )}
    </div>
  )
}
