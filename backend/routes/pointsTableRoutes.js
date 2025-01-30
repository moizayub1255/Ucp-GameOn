// File: routes/pointsTableRoutes.js
import express from "express";
import {
  getPointsTable,
  addGame,
  updatePoints,
} from "../controllers/pointsTableController.js";

const router = express.Router();

// Endpoint to fetch the points table
router.get("/", getPointsTable);

// Endpoint to add a new game
router.post("/add-game", addGame);

// Endpoint to update points for a game
router.put("/update-points", updatePoints);

export default router;
