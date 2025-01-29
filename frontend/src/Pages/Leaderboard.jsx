import React, { useState, useEffect } from "react";
import Headandfoot from "../Layout/Headandfoot";

const Leaderboard = () => {
  const [teams, setTeams] = useState([]);
  const [boys, setBoys] = useState([]);
  const [girls, setGirls] = useState([]);

  useEffect(() => {
    // const savedTeams = JSON.parse(localStorage.getItem("teams")) || [];
    const boysTeams = JSON.parse(localStorage.getItem("boysTeams")) || [];
    const girlsTeams = JSON.parse(localStorage.getItem("girlsTeams")) || [];

    // setTeams(savedTeams); // Overall table
    setBoys(boysTeams); // Boys table
    setGirls(girlsTeams); // Girls table
  }, []);

  const renderTable = (category) => {
    const filteredTeams =
      category === "Boys"
        ? boys // Boys teams from state
        : girls; // Girls teams from state

    return (
      <div className="container py-4">
        <h3 className="text-center">{category} Points Table</h3>
        <table className="table table-bordered table-striped table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col" className="text-center">
                #
              </th>
              <th scope="col" className="text-center">
                Game
              </th>
              <th scope="col" className="text-center">
                House
              </th>
              <th scope="col" className="text-center">
                Points
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredTeams.map((team, index) => (
              <tr key={team.id} className="text-center">
                <td>{index + 1}</td>
                <td>{team.name}</td>
                <td>{team.house}</td>
                <td>{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <Headandfoot>
      {renderTable("Girls")}
      {renderTable("Boys")}
    </Headandfoot>
  );
};

export default Leaderboard;
