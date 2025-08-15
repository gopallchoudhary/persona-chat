# 🤖 Multi-Persona AI Chat (Next.js + Gemini API)

A modern, multi-persona chat application built with **Next.js**, **React Context API**, and **Google Gemini** models.  
Easily switch between different AI personas, maintain separate chat histories, and enjoy a sleek, responsive UI.

---

## 🚀 Features

- 🧠 **Multiple Personas** — Switch between assistants (e.g., Hitesh, Piyush) with unique API routes.
- 💬 **Persistent Chat Histories** — Each persona remembers your past messages.
- ⚡ **Real-Time Responses** — Uses Gemini API for fast and intelligent replies.
- 🎯 **Context-Aware Conversations** — Sends full chat history for better responses.
- 📱 **Responsive UI** — Clean design built with TailwindCSS.
- ⏳ **Typing Indicator** — Shows loader while assistant is “thinking”.

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 14, React, TailwindCSS
- **State Management:** React Context API
- **Backend API:** Next.js API Routes
- **AI Model:** Google Gemini via OpenAI-compatible API endpoint
- **HTTP Client:** Axios

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/multi-persona-ai-chat.git
   cd multi-persona-ai-chat
   ```

Install dependencies

npm install

# or

yarn install

Set environment variables
Create a .env.local file in the project root:

GEMINI_API_KEY=your_google_gemini_api_key

Run the development server

npm run dev

# or

yarn dev

Open http://localhost:3000 in your browser.

├── app/
│ ├── page.tsx # Home page
│ └── api/ # API routes for each persona
│
├── components/
│ ├── PersonaCard.tsx # Persona selector card
│ └── ChatPage.tsx # Chat UI
│
├── context/
│ └── PersonaChatContext.jsx # Global chat state
│
│
├── styles/
│ └── globals.css
│
└── README.md
