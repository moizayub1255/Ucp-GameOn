import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import { isAdmin, protect } from "./middlewares/authMiddleware.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
}));
app.use(express.json());  
app.use(morgan("dev"));
app.use(bodyParser.json()); 

// Test 
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working fine!" });
});

// Admin 
app.get("/api/v1/admin/dashboard", protect, isAdmin, (req, res) => {
  try {
    res.json({ message: "Admin dashboard content" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.use("/api/v1/auth", authRoutes);


mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/gameon", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB:", err));


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
