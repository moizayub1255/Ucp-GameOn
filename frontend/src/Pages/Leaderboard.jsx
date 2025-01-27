import React, { useState, useEffect } from "react";

const Leaderboard = () => {
  const [teams, setTeams] = useState(() => {
    const savedTeams = localStorage.getItem("teams");
    return savedTeams ? JSON.parse(savedTeams) : [];
  });

  const [boys, setBoys] = useState([]);
const [girls, setGirls] = useState([]);

useEffect(() => {
  const savedTeams = JSON.parse(localStorage.getItem("teams")) || [];
  const boysTeams = JSON.parse(localStorage.getItem("boysTeams")) || [];
  const girlsTeams = JSON.parse(localStorage.getItem("girlsTeams")) || [];

  setTeams(savedTeams); // Overall table
  setBoys(boysTeams); // Boys table
  setGirls(girlsTeams); // Girls table
}, []);
  

  const handleDelete = (teamId) => {
    const updatedTeams = teams.filter((team) => team.id !== teamId);
    localStorage.setItem("teams", JSON.stringify(updatedTeams));
  
    const boysTeams = updatedTeams.filter(team => team.category === "Boys");
    const girlsTeams = updatedTeams.filter(team => team.category === "Girls");
  
    localStorage.setItem("boysTeams", JSON.stringify(boysTeams));
    localStorage.setItem("girlsTeams", JSON.stringify(girlsTeams));
  
    setTeams(updatedTeams);
    setBoys(boysTeams);
    setGirls(girlsTeams);
  };
  

  const renderTable = (category) => {
    return (
      <div className="container py-4">
        <h3 className="text-center">{category} Points Table</h3>
        <table className="table table-bordered table-striped table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col" className="text-center">#</th>
              <th scope="col" className="text-center">Game</th>
              <th scope="col" className="text-center">House</th>
              <th scope="col" className="text-center">Points</th>
              <th scope="col" className="text-center">Action</th> {/* Added column for delete action */}
            </tr>
          </thead>
          <tbody>
            {teams
              .filter((team) => team.category === category) // Filter based on category
              .map((team, index) => (
                <tr key={team.id} className="text-center">
                  <td>{index + 1}</td>
                  <td>{team.name}</td>
                  <td>{team.house}</td>
                  <td>{team.points}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(team.id)} // Trigger delete
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      {renderTable("Girls")}
      {renderTable("Boys")}
    </div>
  );
};

export default Leaderboard;
