import mongoose from "mongoose";

const pointsSchema = new mongoose.Schema({
  game: String,
  team: String,
  points: Number,
});

export default mongoose.model("Points", pointsSchema);
