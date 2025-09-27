
import express, { Request, Response } from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

// i want to create an application which takes prompt and give me the response form gemini llm
if (!process.env.API_KEY) {
  throw new Error('API_KEY environment variable is not set.');
}

const configuration = new GoogleGenerativeAI(process.env.API_KEY);
const modelId = process.env.MODEL_ID || "gemini-2.5-flsh";
const model = configuration.getGenerativeModel({ model: modelId });

interface PromptRequest {
  prompt: string;
}

app.post("/prompt", async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body as PromptRequest;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    return res.status(200).json({
      success: true,
      data: text,
    });
  } catch (error) {
    console.error("Error generating content:", error);
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    res.status(500).json({
      success: false,
      message: errorMessage,
    });
  }
});

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

const port = parseInt(process.env.PORT || '3000');
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
