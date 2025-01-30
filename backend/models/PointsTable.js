// File: models/PointsTable.js
import mongoose from "mongoose";

// Schema for individual games
const gameSchema = new mongoose.Schema({
  gameName: { type: String, required: true },
  boysPoints: {
    hawks: { type: Number, default: 0 },
    warriors: { type: Number, default: 0 },
    gladiators: { type: Number, default: 0 },
    jaguars: { type: Number, default: 0 },
  },
  girlsPoints: {
    hawks: { type: Number, default: 0 },
    warriors: { type: Number, default: 0 },
    gladiators: { type: Number, default: 0 },
    jaguars: { type: Number, default: 0 },
  },
});

// Main schema for points table
const PointsTableSchema = new mongoose.Schema({
  games: [gameSchema], // Array of games
});

export default mongoose.model("PointsTable", PointsTableSchema);
