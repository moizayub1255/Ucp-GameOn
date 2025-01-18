import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import { isAdmin, protect } from "./middlewares/authMiddleware.js";

dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
  })
);

app.use(express.json());
app.use(morgan("dev"));

// Test Route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working fine!" });
});

// Admin Dashboard Route (Protected and Admin Only)
app.get("/api/v1/admin/dashboard", protect, isAdmin, (req, res) => {
  try {
    res.json({ message: "Admin dashboard content" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Authentication Routes
app.use("/api/v1/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
