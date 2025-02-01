import React, { useState, useEffect } from "react";
import Headandfoot from "../../Layout/Headandfoot";
import axios from "axios";

const Girls = () => {
  const [games, setGames] = useState([]); // Initialize as empty array
  const [newGame, setNewGame] = useState("");
  const [points, setPoints] = useState({
    Jaguars: 0,
    Warriors: 0,
    Hawks: 0,
    Gladiators: 0,
  });

  // Fetch existing games for girls
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/games/games", {
          params: { category: "girls" },
        });
        console.log("API Response:", response.data);
        if (Array.isArray(response.data)) {
          setGames(response.data);
        } else {
          console.error("Expected an array but got:", response.data);
          setGames([]);
        }
      } catch (error) {
        console.error("Error fetching games:", error);
        setGames([]);
      }
    };
    fetchGames();
  }, []);

  // Add a new game
  const handleAddGame = async () => {
    if (!newGame) return alert("Please enter a game name");
    try {
      const response = await axios.post("http://localhost:5000/api/games/add-game", {
        name: newGame,
        category: "girls",
      });
      setGames([...games, response.data.game]);
      setNewGame("");
    } catch (error) {
      console.error("Error adding game:", error);
    }
  };

  // Update points for a game
  const handleUpdatePoints = async (gameId) => {
    try {
      await axios.put("http://localhost:5000/api/points-table/update-points", {
        gameId,
        category: "girls",
        points,
      });
      alert("Points updated successfully!");
    } catch (error) {
      console.error("Error updating points:", error);
    }
  };

  return (
    <Headandfoot>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>Girls Games Management</h1>
        <p>Add new games and update points for girls here.</p>

        {/* Add New Game Section */}
        <div>
          <h2>Add New Game</h2>
          <input
            type="text"
            value={newGame}
            onChange={(e) => setNewGame(e.target.value)}
            placeholder="Enter game name"
          />
          <button onClick={handleAddGame}>Add Game</button>
        </div>

        {/* Update Points Section */}
        <div>
          <h2>Update Points</h2>
          {games.length > 0 ? (
            games.map((game) => (
              <div key={game._id} style={{ marginBottom: "20px" }}>
                <h3>{game.name}</h3>
                <div>
                  <label>Jaguars: </label>
                  <input
                    type="number"
                    value={points.Jaguars}
                    onChange={(e) =>
                      setPoints({ ...points, Jaguars: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label>Warriors: </label>
                  <input
                    type="number"
                    value={points.Warriors}
                    onChange={(e) =>
                      setPoints({ ...points, Warriors: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label>Hawks: </label>
                  <input
                    type="number"
                    value={points.Hawks}
                    onChange={(e) =>
                      setPoints({ ...points, Hawks: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label>Gladiators: </label>
                  <input
                    type="number"
                    value={points.Gladiators}
                    onChange={(e) =>
                      setPoints({ ...points, Gladiators: e.target.value })
                    }
                  />
                </div>
                <button onClick={() => handleUpdatePoints(game._id)}>
                  Save Points
                </button>
              </div>
            ))
          ) : (
            <p>No games found. Add a new game to get started.</p>
          )}
        </div>
      </div>
    </Headandfoot>
  );
};

export default Girls;
