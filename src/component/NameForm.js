"use client";

import { useState } from "react";

export default function NameForm() {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/custom-name", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });

      if (!res.ok) throw new Error("Submission failed");

      const data = await res.json();
      setResult(data.reversed);
    } catch (err) {
      setError(err.message);
    }
  }

  async function loadSavedName() {
    setError("");

    try {
      const res = await fetch("/api/custom-name");
      if (!res.ok) throw new Error("Failed to load name");

      const data = await res.json();
      setResult(data.reversed_name);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="py-6">
      <h1 className="text-3xl mb-4">Part 4</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Enter name"
        />
        <button className="border px-4 py-2">Submit</button>
      </form>

      <button
        onClick={loadSavedName}
        className="border px-4 py-2 mt-4"
      >
        Load Saved Name
      </button>

      {result && <p className="mt-4">Reversed: {result}</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </div>
  );
}
