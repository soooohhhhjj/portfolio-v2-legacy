export interface LogEntry {
  type: "STOP" | "RESUME";
  timestamp: string;
  duration?: number;
}

// Save a log entry
export async function logStarStop(log: LogEntry) {
  try {
    const res = await fetch("http://localhost:5000/starLogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(log),
    });

    if (!res.ok) {
      throw new Error(`Failed to save log: ${res.statusText}`);
    }

    return await res.json();
  } catch (err) {
    console.error("API error:", err);
    throw err;
  }
}

// Fetch all saved logs
export async function getStarLogs() {
  try {
    const res = await fetch("http://localhost:5000/starLogs");
    if (!res.ok) {
      throw new Error(`Failed to fetch logs: ${res.statusText}`);
    }
    return await res.json();
  } catch (err) {
    console.error("API fetch error:", err);
    throw err;
  }
}
