import Starfield from "./components/Starfield";
import Welcome from "./screens/Welcome";
import Hero from "./screens/Hero";
import { useState } from "react";

export default function App() {
  const [welcomeDone, setWelcomeDone] = useState(false);

  return (
    <main className="relative h-screen overflow-hidden text-white">
      <Starfield mode="normal" />
      {!welcomeDone && (
        <Welcome
          text="Welcome to My Portfolio Website.😊"
          speed={40}
          onDone={() => setTimeout(() => setWelcomeDone(true), 600)} // optional delay
        />
      )}

      {welcomeDone && (
        <Hero
          startAnimation={welcomeDone}
          blockDelays={{
            navbar: 0.2,
            profile: 0.4,
            intro: 0.6,
            headline: 0.8,
            subtitle: 1,
            buttons: 1.2,
          }}
        />
      )}
    </main>
  );
}
