Let's create a simple AI chatbot using Next.js (App Router), OpenAI, shadcn/ui components, and TypeScript. We'll use the Vercel AI SDK to streamline the integration with OpenAI.

## Getting Started

1. First, create a new Next.js project with TypeScript:

```bash
npx create-next-app@latest nextjs-ai-chatbot --typescript
cd nextjs-ai-chatbot
```

2. Install the necessary dependencies:

```bash
npm install ai @ai-sdk/openai @vercel/analytics
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge
npm install lucide-react
npm install zod
```

3. Install shadcn/ui components:

```bash
npx shadcn@latest init
```

## Use GitHub Models
https://github.com/marketplace/models

```bash
npm install openai
```