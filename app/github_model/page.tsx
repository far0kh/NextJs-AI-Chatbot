import { Chat } from '@/components/github_model/Chat'

export default function Home() {
  return (
    <main className="flex max-h-screen flex-col items-center justify-between p-4 md:p-12">
      <h1 className="text-2xl font-bold mb-4">OpenAI Chatbot by GitHub Model</h1>
      <Chat />
    </main>
  )
}