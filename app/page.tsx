import { Chat } from '@/components/Chat'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold mb-4">OpenAI Chatbot by Vercel SDK</h1>
      <Chat />
    </main>
  )
}