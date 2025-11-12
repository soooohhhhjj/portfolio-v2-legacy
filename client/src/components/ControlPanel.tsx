import { useState, useRef } from "react";
import { logStarStop } from "../utils/api"; // your API helper

interface LogEntry {
  type: "STOP" | "RESUME";
  timestamp: string;
  duration?: number; // pause duration in seconds
}

interface ControlPanelProps {
  onTogglePause: () => void; // function to pause/resume Starfield
  paused: boolean;            // current state of Starfield
}

export default function ControlPanel({ onTogglePause, paused }: ControlPanelProps) {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const pauseStartRef = useRef<Date | null>(null);

  const handleClick = async () => {
    const now = new Date();
    let logEntry: LogEntry;

    if (!paused) {
      // STOP clicked
      pauseStartRef.current = now;
      logEntry = { type: "STOP", timestamp: now.toISOString() };
    } else {
      // RESUME clicked
      let duration = 0;
      if (pauseStartRef.current) {
        duration = (now.getTime() - pauseStartRef.current.getTime()) / 1000;
      }
      logEntry = { type: "RESUME", timestamp: now.toISOString(), duration };
      pauseStartRef.current = null;
    }

    // Update frontend logs
    setLogs((prev) => [logEntry, ...prev]);

    // Send to backend
    try {
      await logStarStop(logEntry); // implement this in utils/api.ts
    } catch (err) {
      console.error("Failed to save log:", err);
    }

    // Toggle the Starfield
    onTogglePause();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="flex flex-col w-[400px] h-[200px] bg-black text-green-400 font-mono rounded shadow-lg border-4 border-gray-400">
        {/* Optional title bar */}
        <div className="bg-gray-700 text-white px-2 py-1 rounded-t flex items-center font-bold">
          Control Panel
        </div>

        {/* Logs */}
        <div className="flex-1 overflow-y-auto p-2 border-t border-gray-400">
          {logs.map((log, idx) => (
            <div key={idx}>
              [{new Date(log.timestamp).toLocaleTimeString()}] {log.type}
              {log.duration && ` - paused for ${log.duration.toFixed(1)}s`}
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="h-12 flex items-center justify-center p-2 border-t border-gray-400">
          <button
            className={`w-full h-full font-bold rounded transition
              ${paused ? "bg-green-400 hover:bg-green-500 text-black" : "bg-red-500 hover:bg-red-600 text-white"}`}
            onClick={handleClick}
          >
            {paused ? "RESUME" : "STOP"}
          </button>
        </div>
      </div>
    </div>
  );
}
