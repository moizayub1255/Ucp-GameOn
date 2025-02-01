import React, { useEffect, useState } from "react";
import { usePoints } from "../../PointsContext";

const Dashboard = () => {
  const { pointsData, setPointsData, updatePoints } = usePoints();
  const [editedPoints, setEditedPoints] = useState({}); // 🆕 Store edited values

  useEffect(() => {
    const fetchPointsData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/points");
        const data = await response.json();
        setPointsData(data);
      } catch (error) {
        console.error("Error fetching points data:", error);
      }
    };

    fetchPointsData();
  }, []);

  const handleChange = (id, value) => {
    setEditedPoints((prev) => ({ ...prev, [id]: value })); // 🆕 Track local changes
  };

  const handleUpdatePoints = async (id) => {
    if (editedPoints[id] === undefined) return; // 🆕 Ignore if no change

    try {
      const token = localStorage.getItem("token");
      await fetch(`http://localhost:5000/api/points/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ points: editedPoints[id] }),
      });

      updatePoints(id, editedPoints[id]); // 🆕 Update context
      setEditedPoints((prev) => {
        const updated = { ...prev };
        delete updated[id]; // 🆕 Remove from local state after save
        return updated;
      });
    } catch (error) {
      console.error("Error updating points:", error);
    }
  };

  return (
    
    <div>
      
      <h1>Admin Dashboard</h1>
      {pointsData.length === 0 ? (
        <p>No teams found</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>Team</th>
              <th>Points</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pointsData.map((team) => (
              <tr key={team._id}>
                <td>{team.teamName}</td>
                <td>
                  <input
                    type="number"
                    value={editedPoints[team._id] ?? team.points} // 🆕 Use edited value if available
                    onChange={(e) => handleChange(team._id, Number(e.target.value))}
                  />
                </td>
                <td>
                  <button onClick={() => handleUpdatePoints(team._id)}>
                    Save
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
