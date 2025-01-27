import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  points: { type: Number, default: 0 },
  img: { type: String, default: "" }, // For team images
});

export default mongoose.model("Team", teamSchema);
