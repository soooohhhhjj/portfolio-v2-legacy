import mongoose from "mongoose";

const starLogSchema = new mongoose.Schema({
  type: { type: String, enum: ["STOP", "RESUME"], required: true },
  timestamp: { type: Date, required: true },
  duration: { type: Number },
});

export default mongoose.model("StarLog", starLogSchema);
