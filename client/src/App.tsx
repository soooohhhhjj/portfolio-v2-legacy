import Starfield from "./components/Starfield/Starfield";
import ControlPanel from "./components/ControlPanel";
import { useState } from "react";

export default function App() {
  const [paused, setPaused] = useState(false);

  const togglePause = () => setPaused((prev) => !prev);

  return (
    <>
      <Starfield mode={paused ? "paused" : "normal"} />
      <ControlPanel paused={paused} onTogglePause={togglePause} />
    </>
  );
}
