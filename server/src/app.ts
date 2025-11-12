import express from "express";
import cors from "cors";
import exampleRoutes from "./routes/example";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/example", exampleRoutes);

export default app;
