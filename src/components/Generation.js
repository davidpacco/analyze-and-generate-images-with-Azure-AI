import React from 'react'

function Generation({ generation }) {
  return (
    <div>
      <h2>Image Generation</h2>

      <img width='350' src={generation[0].url} alt={generation[0].revised_prompt} />

      <pre>{JSON.stringify(generation[0], null, 4)}</pre>
    </div>
  )
}

export default Generation