import React from "react";
import Headandfoot from "../Layout/Headandfoot";
import "../Styles/Leaderboard.css";

const Leaderboard = () => {
  const boys_leaderboard = [
    {
      img: "falcon.png",
      team: "Falcons",
      points: ["", "", "", "", ""],
    },
    {
      img: "warriors.png",
      team: "Warriors",
      points: ["", "", "", "", ""],
    },
    {
      img: "hawks.png",
      team: "Hawks",
      points: ["", "", "", "", ""],
    },
    {
      img: "gladiators.png",
      team: "Gladiators",
      points: ["", "", "", "", ""],
    },
    {
      img: "jaguars.png",
      team: "Jaguars",
      points: ["", "", "", "", ""],
    },
  ];

  const girls_leaderboard = [
    {
      img: "falcon.png",
      team: "Falcons",
      points: ["", "", "", "", ""],
    },
    {
      img: "warriors.png",
      team: "Warriors",
      points: ["", "", "", "", ""],
    },
    {
      img: "hawks.png",
      team: "Hawks",
      points: ["", "", "", "", ""],
    },
    {
      img: "gladiators.png",
      team: "Gladiators",
      points: ["", "", "", "", ""],
    },
    {
      img: "jaguars.png",
      team: "Jaguars",
      points: ["", "", "", "", ""],
    },
  ];

  const games = ["Cricket", "Football", "Basketball", "Hockey", "Volleyball"];

  const renderLeaderboard = (leaderboard) => (
    <div className="table-responsive">
      <table
        className="table table-bordered text-center"
        style={{ width: "100%", maxWidth: "900px", margin: "auto" }}
      >
        <thead>
          <tr>
            <th>Games</th>
            {leaderboard.map((team, index) => (
              <th key={index}>
                <img
                  src={team.img}
                  alt={team.team}
                  style={{ width: "100px", height: "100px" }}
                />
                {/* <div>{team.team}</div> */}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {games.map((game, gameIndex) => (
            <tr key={gameIndex}>
              <td>{game}</td>
              {leaderboard.map((team, teamIndex) => (
                <td key={teamIndex}>{team.points[gameIndex]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <Headandfoot>
      <div className="container py-5">
        <h1 className="text-center mb-4">See who's on TOP</h1>
        <p className="text-center">
          In GameOn, we have separate sports competitions for boys and girls. On
          this page, you can see separate leaderboards for boys and girls with
          fixed positions.
        </p>
        <h1 className="text-center ">Girls</h1>
        {renderLeaderboard(girls_leaderboard)}
        <h1 className="text-center mt-5">Boys</h1>
        {renderLeaderboard(boys_leaderboard)}
      </div>
    </Headandfoot>
  );
};

export default Leaderboard;
