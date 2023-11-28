import React, { useState } from 'react';
import Analysis from './components/Analysis';
import Generation from './components/Generation';
import { analyzeImage } from './azure-image-analysis';
import { generateImage } from './azure-image-generation';

function App() {
  const [analysis, setAnalysis] = useState(null)
  const [generatedImg, setGeneratedImg] = useState(null)
  const [input, setInput] = useState('')
  const [imgUrl, setImgUrl] = useState('')

  const handleImageAnalysis = () => {
    analyzeImage(setAnalysis)
    setImgUrl(input)
    setGeneratedImg(null)
  }

  const handleImageGeneration = () => {
    generateImage(setGeneratedImg, input)
    setAnalysis(null)
  }

  if (!process.env.REACT_APP_AZURE_API_KEY || !process.env.REACT_APP_OPENAI_API_KEY) {
    return (
      <p>Key and/or endpoint not configured for cognitive services</p>
    )
  }

  return (
    <>
      <h1>Computer vision</h1>

      <div>
        <label htmlFor="inputImageUrl">Insert URL or type prompt: </label>
      </div>
      <div>
        <input
          id="inputImageUrl"
          placeholder='Enter URL to analyze or textual prompt to generate an image'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleImageAnalysis}>Analyze</button>
        <button onClick={handleImageGeneration}>Generate</button>
      </div>

      <hr />

      {analysis && <Analysis analysis={analysis} imgUrl={imgUrl} />}
      {generatedImg && <Generation generation={generatedImg} />}
    </>
  );
}

export default App;
