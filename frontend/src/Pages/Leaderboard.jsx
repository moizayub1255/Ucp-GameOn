import React from "react";
import Headandfoot from "../Layout/Headandfoot";

const Leaderboard = () => {
  const boys_leaderboard = [
    { rank: 1, img: "falcon.png", team: "Falcons", points: 0, matchesPlayed: 0 },
    { rank: 2, img: "warriors.png", team: "Warriors", points: 0, matchesPlayed: 0 },
    { rank: 3, img: "hawks.png", team: "Hawks", points: 0, matchesPlayed: 0 },
    { rank: 4, img: "gladiators.png", team: "Gladiators", points: 0, matchesPlayed: 0 },
    { rank: 5, img: "jaguars.png", team: "Jaguars", points: 0, matchesPlayed: 0 },
  ];
  
  const girls_leaderboard = [
    { rank: 1, img: "falcon.png", team: "Falcons", points: 0, matchesPlayed: 0 },
    { rank: 2, img: "warriors.png", team: "Warriors", points: 0, matchesPlayed: 0 },
    { rank: 3, img: "hawks.png", team: "Hawks", points: 0, matchesPlayed: 0 },
    { rank: 4, img: "gladiators.png", team: "Gladiators", points: 0, matchesPlayed: 0 },
    { rank: 5, img: "jaguars.png", team: "Jaguars", points: 0, matchesPlayed: 0 },
  ];
  
  return (
    <Headandfoot>
      <div className="container py-5">
        <h1 className="text-center mb-4">See who's on TOP</h1>

        <p className="text-center">
          In GameOn, we have separate sports competitions for boys and girls. On this page, you can see separate leaderboards for boys and girls, while the home page shows combined scores for all teams.
        </p>

        <h1 className="text-center">Boys</h1>
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Team</th>
              <th scope="col">Points</th>
              <th scope="col">Matches</th>
            </tr>
          </thead>
          <tbody>
            {boys_leaderboard.map((team, index) => (
              <tr key={index}>
                <td>{team.rank}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={team.img}
                      alt={team.team}
                      style={{ width: "50px", height: "50px", marginRight: "10px" }}
                    />
                    {team.team}
                  </div>
                </td>
                <td>{team.points}</td>
                <td>{team.matchesPlayed}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h1 className="text-center">Girls</h1>
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Team</th>
              <th scope="col">Points</th>
              <th scope="col">Matches</th>
            </tr>
          </thead>
          <tbody>
            {girls_leaderboard.map((team, index) => (
              <tr key={index}>
                <td>{team.rank}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={team.img}
                      alt={team.team}
                      style={{ width: "50px", height: "50px", marginRight: "10px" }}
                    />
                    {team.team}
                  </div>
                </td>
                <td>{team.points}</td>
                <td>{team.matchesPlayed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Headandfoot>
  );
};

export default Leaderboard;
