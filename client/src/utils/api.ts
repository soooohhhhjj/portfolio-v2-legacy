export interface LogEntry {
  type: "STOP" | "RESUME";
  timestamp: string;
  duration?: number;
}

export async function logStarStop(log: LogEntry) {
  try {
    const res = await fetch("http://localhost:5000/starLogs", { // replace with your backend URL
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
