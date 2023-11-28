const endpoint = 'https://react-computer-vision-test.cognitiveservices.azure.com/'

export function analyzeImage(setResultCallback) {
  const inputImageUrl = document.getElementById('inputImageUrl').value
  const url = endpoint + 'computervision/imageanalysis:analyze?features=caption,objects,read&model-version=latest&language=en&api-version=2023-02-01-preview'

  const data = { 'url': inputImageUrl }
  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': process.env.REACT_APP_AZURE_API_KEY
    },
    body: JSON.stringify(data)
  }

  fetch(url, params)
    .then(response => response.json())
    .then(json => {
      setResultCallback(json)
    })
    .catch(error => console.log(error))
}