// File: controllers/pointsTableController.js
import PointsTable from "../models/PointsTable.js";

// Get the complete points table
export const getPointsTable = async (req, res) => {
  try {
    const pointsTable = await PointsTable.findOne();
    res.status(200).json(pointsTable || { games: [] });
  } catch (error) {
    res.status(500).json({ message: "Error fetching points table", error });
  }
};

// Add a new game to the points table
export const addGame = async (req, res) => {
  const { gameName, boysPoints, girlsPoints } = req.body;

  if (!gameName || !boysPoints || !girlsPoints) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    let pointsTable = await PointsTable.findOne();
    if (!pointsTable) {
      pointsTable = new PointsTable({ games: [] });
    }

    pointsTable.games.push({ gameName, boysPoints, girlsPoints });
    await pointsTable.save();
    res.status(201).json({ message: "Game added successfully!", pointsTable });
  } catch (error) {
    res.status(500).json({ message: "Error adding game", error });
  }
};

// Update points for a specific game
export const updatePoints = async (req, res) => {
  const { gameId, boysPoints, girlsPoints } = req.body;

  try {
    const pointsTable = await PointsTable.findOne();
    if (!pointsTable) {
      return res.status(404).json({ message: "Points table not found" });
    }

    const game = pointsTable.games.id(gameId);
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }

    game.boysPoints = boysPoints;
    game.girlsPoints = girlsPoints;
    await pointsTable.save();
    res.status(200).json({ message: "Points updated successfully!", pointsTable });
  } catch (error) {
    res.status(500).json({ message: "Error updating points", error });
  }
};
