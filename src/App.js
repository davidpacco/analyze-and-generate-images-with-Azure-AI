import React from 'react';

function App() {
  return (
    <>
      <h1>Computer vision</h1>

      <div>
        <label htmlFor="imgUrl">Insert URL or type prompt: </label>
      </div>
      <div>
        <input id="imgUrl" placeholder='Enter URL to analyze or textual prompt to generate an image' />
      </div>
      <div>
        <button>Analyze</button>
        <button>Generate</button>
      </div>
    </>
  );
}

export default App;
