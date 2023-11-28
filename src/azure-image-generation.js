import OpenAI from "openai";

export function generateImage(setResultCallback, prompt) {
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

  async function main(prompt) {
    const image = await openai.images.generate({ model: "dall-e-3", prompt: prompt });

    setResultCallback(image.data);
  }

  main(prompt)
}