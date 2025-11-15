// src/App.tsx
import Starfield from "./components/Starfield";
import Welcome from "./screens/Welcome";
import Hero from "./screens/Hero";
import { useState } from "react";

export default function App() {
  const [welcomeDone, setWelcomeDone] = useState(false);

  return (
    <main className="relative h-screen overflow-hidden text-white">
      <Starfield mode="normal" />

      {!welcomeDone && <Welcome onDone={() => setWelcomeDone(true)} />}

      {welcomeDone && <Hero />}
    </main>
  );
}
