"use client";

import { useEffect, useState } from "react";
import { addName, getNames, getHealth } from "../lib/api";

export default function Home() {
  const [name, setName] = useState("");
  const [names, setNames] = useState<string[]>([]);
  const [status, setStatus] = useState("checking...");

  async function loadNames() {
    const data = await getNames();
    setNames(data.names);
  }

  useEffect(() => {
    // check backend health
    getHealth()
      .then(() => setStatus("Backend Connected ✅"))
      .catch(() => setStatus("Backend Not Reachable ❌"));

    loadNames();
  }, []);

  async function handleAdd() {
    if (!name) return;
    await addName(name);
    setName("");
    loadNames();
  }

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>Skylar FastAPI Demo</h1>

      <p>
        <b>Status:</b> {status}
      </p>

      <hr />

      <h2>Add Name</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
        style={{ padding: 8, marginRight: 10 }}
      />
      <button onClick={handleAdd} style={{ padding: 8 }}>
        Add
      </button>

      <hr />

      <h2>Names List</h2>
      <ul>
        {names.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
}
