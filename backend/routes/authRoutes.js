import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import Team from "../models/Team.js";
import Points from "../models/Points.js";

//router object
const router = express.Router();

// Public routes
// REGISTER 
router.post("/register", registerController);

// LOGIN 
router.post("/login", loginController);

// Forgot Password 
router.post("/forgot-password", forgotPasswordController);

// Test 
router.get("/test", requireSignIn, isAdmin, testController);

// Admin routes 
router.use("/admin", requireSignIn, isAdmin); 

router.get("/admin/dashboard", (req, res) => {
  res.send("Admin Dashboard");
});


//Dashboard 

// Add a new team
router.post("/api/teams", async (req, res) => {
  try {
    const { name, points, img } = req.body;
    const team = new Team({ name, points, img });
    await team.save();
    res.status(201).json({ message: "Team added successfully", team });
  } catch (error) {
    res.status(500).json({ message: "Error adding team", error });
  }
});

// Update points for a team
router.put("/api/teams/:id", async (req, res) => {
  try {
    const { points } = req.body;
    const team = await Team.findByIdAndUpdate(req.params.id, { points }, { new: true });
    if (!team) {
      return res.status(404).json({ message: "Team not found" });
    }
    res.status(200).json({ message: "Points updated successfully", team });
  } catch (error) {
    res.status(500).json({ message: "Error updating points", error });
  }
});

// Delete a team
router.delete("/api/teams/:id", async (req, res) => {
  try {
    await Team.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Team deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting team", error });
  }
});

export default router;
