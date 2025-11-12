import { useState, useRef, useEffect } from "react";
import { logStarStop, getStarLogs } from "../utils/api";

interface LogEntry {
  type: "STOP" | "RESUME";
  timestamp: string;
  duration?: number;
}

interface ControlPanelProps {
  onTogglePause: () => void;
  paused: boolean;
}

export default function ControlPanel({ onTogglePause, paused }: ControlPanelProps) {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const pauseStartRef = useRef<Date | null>(null);
  const logsEndRef = useRef<HTMLDivElement | null>(null);

  // ✅ Fetch logs when component mounts
  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const data = await getStarLogs();
        // Show oldest → newest
        setLogs(data.reverse());
      } catch (err) {
        console.error("Error fetching logs:", err);
      }
    };
    fetchLogs();
  }, []);

  // ✅ Scroll to bottom when logs update
  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  // ✅ Handle button click
  const handleClick = async () => {
    const now = new Date();
    let logEntry: LogEntry;

    if (!paused) {
      pauseStartRef.current = now;
      logEntry = { type: "STOP", timestamp: now.toISOString() };
    } else {
      let duration = 0;
      if (pauseStartRef.current) {
        duration = (now.getTime() - pauseStartRef.current.getTime()) / 1000;
      }
      logEntry = { type: "RESUME", timestamp: now.toISOString(), duration };
      pauseStartRef.current = null;
    }

    try {
      await logStarStop(logEntry);
      setLogs((prev) => [...prev, logEntry]); // append to bottom
      onTogglePause();
    } catch (err) {
      console.error("Error saving log:", err);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="flex flex-col w-[800px] h-[400px] bg-black text-green-400 font-mono rounded border border-gray-700 shadow-lg">
        
        {/* Logs */}
        <div
          className="flex-1 overflow-y-auto p-2 border-b border-green-600 custom-scrollbar"
          style={{ scrollBehavior: "smooth" }}
        >
          {logs.map((log, idx) => (
            <div key={idx}>
              [{new Date(log.timestamp).toLocaleString()}] {log.type}
              {log.duration && ` - paused for ${log.duration.toFixed(1)}s`}
            </div>
          ))}
          <div ref={logsEndRef} />
        </div>

        {/* Button */}
        <div className="h-12 flex items-center justify-center p-2">
          <button
            className={`w-full h-full font-bold rounded transition 
            ${paused
              ? "bg-green-500 hover:bg-green-600 text-black"
              : "bg-red-600 hover:bg-red-700 text-white"
            }`}
            onClick={handleClick}
          >
            {paused ? "RESUME" : "STOP"}
          </button>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: rgba(0, 255, 0, 0.3);
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background-color: rgba(0, 255, 0, 0.5);
          }
        `}
      </style>
    </div>
  );
}
