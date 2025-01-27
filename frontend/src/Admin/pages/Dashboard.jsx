import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const initialTeams = [
    {
      id: 1,
      name: "Jaguars",
      points: 10,
      img: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "Warriors",
      points: 20,
      img: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      name: "Falcons",
      points: 15,
      img: "https://via.placeholder.com/50",
    },
    {
      id: 4,
      name: "Hawks",
      points: 25,
      img: "https://via.placeholder.com/50",
    },
    {
      id: 5,
      name: "Gladiators",
      points: 30,
      img: "https://via.placeholder.com/50",
    },
  ];

  const [teams, setTeams] = useState(() => {
    const savedTeams = localStorage.getItem("teams");
    return savedTeams ? JSON.parse(savedTeams) : initialTeams;
  });

  const [editState, setEditState] = useState({});

  // Save updated teams to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("teams", JSON.stringify(teams));
  }, [teams]);

  const toggleEdit = (teamId) => {
    setEditState((prev) => ({
      ...prev,
      [teamId]: !prev[teamId],
    }));
  };

  const handlePointsChange = (teamId, points, category) => {
    setTeams((prevTeams) =>
      prevTeams.map((team) =>
        team.id === teamId && team.category === category
          ? { ...team, points: Number(points) }
          : team
      )
    );
  };

  const savePoints = (teamId, category) => {
    toggleEdit(teamId);
    alert("Points updated successfully");

    // Update separate storage for boys/girls
    const updatedTeams = JSON.parse(localStorage.getItem("teams")) || [];
    const boysTeams = updatedTeams.filter((team) => team.category === "Boys");
    const girlsTeams = updatedTeams.filter((team) => team.category === "Girls");

    localStorage.setItem("boysTeams", JSON.stringify(boysTeams));
    localStorage.setItem("girlsTeams", JSON.stringify(girlsTeams));
  };

  // const savePoints = (teamId) => {
  //   toggleEdit(teamId);
  //   alert("Points updated successfully");
  // };

  return (
    <div className="dashboard container py-4">
      <h1 className="text-center">Admin Dashboard</h1>
      <hr />
      {/* Overall PointTable for Home Page */}
      <h3 className="text-center">Overall PointTable</h3>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Team</th>
            <th>Points</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.id}>
              <td>{team.name}</td>
              <td>
                {editState[team.id] ? (
                  <input
                    type="number"
                    value={team.points}
                    onChange={(e) =>
                      handlePointsChange(team.id, e.target.value)
                    }
                  />
                ) : (
                  team.points
                )}
              </td>
              <td>
                {editState[team.id] ? (
                  <button
                    className="btn btn-success"
                    onClick={() => savePoints(team.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => toggleEdit(team.id)}
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* PointTable for Boys */}
    </div>
  );
};

export default Dashboard;
