import React from 'react'

function Analysis({ analysis, imgUrl }) {
  return (
    <>
      <h2>Computer Vision Analysis</h2>

      <img width='350' src={imgUrl} alt={analysis.captionResult.text} />

      <div>
        {analysis && <pre>{JSON.stringify(analysis, null, 4)}</pre>}
      </div>
    </>
  )
}

export default Analysis