import React, { useEffect, useState } from "react";
import { usePoints } from "../../PointsContext";

const Dashboard = () => {
  const { pointsData, setPointsData, updatePoints } = usePoints();

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
  }, []); // Empty dependency to run once

  const handleUpdatePoints = async (id, newPoints) => {
    try {
      const token = localStorage.getItem("token"); // ✅ Token correctly fetched

      await fetch(`http://localhost:5000/api/points/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // ✅ Fixed Template Literal Syntax
        },
        body: JSON.stringify({ points: newPoints }),
      });

      updatePoints(id, newPoints); // Update points in context
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
                <td>
                  {/* <img
                    src={team.image} // ✅ Ensure backend provides an image URL
                    alt={team.teamName}
                    style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  /> */}
                  {team.teamName}
                </td>
                <td>
                  <input
                    type="number"
                    value={team.points}
                    onChange={(e) =>
                      handleUpdatePoints(team._id, Number(e.target.value))
                    }
                  />
                </td>
                <td>
                  <button onClick={() => handleUpdatePoints(team._id, team.points)}>
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
