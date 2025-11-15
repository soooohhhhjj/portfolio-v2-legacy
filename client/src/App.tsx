// src/App.tsx
import Starfield from "./components/Starfield";
import Welcome from "./screens/Welcome";
import Hero from "./screens/Hero";

export default function App() {
  return (
    <main className="relative h-screen overflow-hidden text-white">
      <Starfield mode="normal" />

      <Welcome />
      <Hero />
    </main>
  );
}
