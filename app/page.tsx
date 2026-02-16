"use client";

import { useState } from "react";
import { sayHello } from "../lib/api";

export default function Home() {
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");

  async function handleSubmit() {
    try {
      const data = await sayHello(name);
      setResponse(data.message);
    } catch {
      setResponse("API error ❌");
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">FastAPI + Next.js</h1>

      <input
        className="border p-2 rounded"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Send
      </button>

      {response && <div className="text-xl mt-4">{response}</div>}
    </main>
  );
}
