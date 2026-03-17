export interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  created_at: string
}

export interface Outfit {
  id: string
  user_id: string
  name: string | null
  items: string[]
  prompt: string
  created_at: string
}