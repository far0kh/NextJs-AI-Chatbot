import OpenAI from "openai";

import { streamText } from 'ai';

export const runtime = 'edge';

const token = process.env["GITHUB_TOKEN"];

export async function POST(req: Request) {
  const { messages } = await req.json();

  const client = new OpenAI({
    baseURL: "https://models.inference.ai.azure.com",
    apiKey: token
  });

  const response = await client.chat.completions.create({
    messages,
    model: "gpt-4o-mini",
    temperature: 1,
    max_tokens: 4096,
    top_p: 1
  });
  console.log(response.choices[0].message.content);
  const newPrompt = response.choices[0].message.content;
  return new Response(JSON.stringify(newPrompt), { status: 201 })
}