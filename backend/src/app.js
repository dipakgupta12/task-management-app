import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import allRoutes from "./routers/index.js";

dotenv.config();
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// all routes
app.use("/api", allRoutes);

export default app;
