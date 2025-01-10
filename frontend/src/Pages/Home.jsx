import React from "react";
import Headandfoot from "../Layout/Headandfoot";
import "../Styles/Home.css";
import AboutMe from "./Aboutme";

const Home = () => {
  const leaderboard = [
    { rank: 1, img: "falcon.png", team: "Falcons", points: 0, matchesPlayed: 0 },
    { rank: 2, img: "warriors.png", team: "Warriors", points: 0, matchesPlayed: 0 },
    { rank: 3, img: "hawks.png", team: "Hawks", points: 0, matchesPlayed: 0 },
    { rank: 4, img: "gladiators.png", team: "Gladiators", points: 0, matchesPlayed: 0 },
    { rank: 5, img: "jaguars.png", team: "Jaguars", points: 0, matchesPlayed: 0 },
  ];

  return (
    <Headandfoot>
      <div className="video-container">
        <video
          src="Video1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-100"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        ></video>
      </div>

      <div className="container py-5">
        <h1 className="text-center mb-4">Points Table</h1>
<p className="text-center">The points table displays the overall (Boys & Girls) standings of all teams based on their accumulated points and the number of matches played. As the competition progresses, you’ll see frequent updates in the rankings. To Check Boys and Girls Standings Seperately you can visit the Leaderboard Page.</p>
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
            {leaderboard.map((team, index) => (
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

      <h1 className="d-flex justify-content-center">Our Teams</h1>
<div className="row row-cols-1 row-cols-md-3 g-4 p-4 d-flex justify-content-center">
  <div className="col">
    <div className=" h-100 w-100">
      <img src="warriors.png" className="card-img-top" alt="Warriors" />
      {/* <h3 className="d-flex justify-content-center">Warriors</h3> */}
    </div>
  </div>
  <div className="col">
    <div className=" h-100 w-100">
      <img src="hawks.png" className="card-img-top" alt="Hawks" />
      {/* <h3 className="d-flex justify-content-center">Hawks</h3> */}
    </div>
  </div>
  <div className="col">
    <div className=" h-100 w-100">
      <img src="gladiators.png" className="card-img-top" alt="Gladiators" />
      {/* <h3 className="d-flex justify-content-center">Gladiators</h3> */}
    </div>
  </div>
  <div className="col">
    <div className="h-100 w-100">
      <img src="falcon.png" className="card-img-top" alt="Falcons" />
      {/* <h3 className="d-flex justify-content-center">Falcons</h3> */}
    </div>
  </div>
  <div className="col">
    <div className="h-100 w-100">
      <img src="jaguars.png" className="card-img-top" alt="Jaguars" />
      {/* <h3 className="d-flex justify-content-center">Jaguars</h3> */}
    </div>
  </div>
</div>


<AboutMe></AboutMe>

     
    </Headandfoot>
  );
};

export default Home;