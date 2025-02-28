import express from "express";
import authRoutes from "./routes/auth.routes.js";

// ...existing code...

const app = express();

// ...existing code...

app.use(express.json());
app.use("/api/auth", authRoutes);

// ...existing code...

export default app;
