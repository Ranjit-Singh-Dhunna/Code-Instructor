
<h1 align="center">🧠 Code Buddy</h1>


> An AI-powered tool that helps learners get instant reviews on their code. Paste your code, click **Review**, and get intelligent feedback to learn, debug, and improve faster. Best tool for beginners in school.

---

## 🤖 How It Works

1. User writes/pastes code into the code editor.
2. On clicking "Review", the code is sent to the backend.
3. The backend routes the code to an AI API.
4. AI generates a review and sends it back.
5. Response is rendered in markdown with syntax highlighting.

---

## 🚀 Features

- **Easy-to-use Interface** with one-click code submission
- 🧾 **AI-Powered Code Review** – Paste your code and receive structured feedback.
- 🧑‍💻 **Live Code Editor** – Clean and responsive syntax-highlighted editor.
- 🧠 **Syntax-Aware Feedback** – Markdown-rendered AI responses with code highlighting.
- 📤 **Fast API Integration** – Backend routes requests to a smart AI service.
- ⚡ **Powered by Vite + React** – Fast, modern, and modular frontend stack.
- 🔒 **Simple** – JSON-based communication over Express backend.



---

## 🔧 Setup Instructions

### 🖥️ Backend

```bash
cd BackEnd
npx nodemon
```

### 💻 Frontend

```bash
cd Frontend
npm run dev
```

### ⚙️ Environment Variables (`.env`)
```env
GOOGLE_GEMINI_API=your_key_here
```
---

## 📸 Demo


<p align="center">
  <a href="https://youtu.be/BCNwCZL0TMI" target="_blank">
    <img src="https://img.youtube.com/vi/BCNwCZL0TMI/hqdefault.jpg" alt="Watch Demo" width="700"/>
  </a>
</p>

> 🎬 Click the image above to watch the full demo (1:55).

---

## 📡 API Endpoint

`POST /ai/get-review`

```json
Request Body:
{
  "code": "const a = 5;"
}

Response:
{
  "feedback": "Your variable 'a' is not used anywhere..."
}
```



---


## 🧱 Tech Stack

### Frontend
- React
- Vite
- PrismJS + React Simple Code Editor
- react-markdown + rehype-highlight
- Axios

### Backend
- Node.js
- Express.js
- dotenv
- AI Service (e.g., OpenAI API or similar – assumed)

### Tooling
- ESLint + React Plugin
- Environment Variable Support
- Modern JavaScript (ES2020+)

---

📚 **Project inspiration from [Sheryians Coding School](https://sheryians.com)**
