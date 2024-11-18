import OpenAI from "openai";
import { NextResponse } from 'next/server';

const token = process.env["GITHUB_TOKEN"];

export async function POST(req: Request) {
  try {
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

    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        const text = response.choices[0].message.content || '';
        controller.enqueue(encoder.encode(text));
        controller.close();
      },
    });

    // const stream = response.choices[0].message.content;

    console.log(stream);

    return new NextResponse(stream);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}