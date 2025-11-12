import { Router } from "express";
import StarLog from "../models/StarLog";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { type, timestamp, duration } = req.body;
    const log = new StarLog({ type, timestamp, duration });
    await log.save();
    res.status(201).json(log);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (_, res) => {
  try {
    const logs = await StarLog.find().sort({ timestamp: -1 });
    res.json(logs);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
