import React, { useEffect, useState } from "react";
import Headandfoot from "../Layout/Headandfoot";
import "../Styles/Home.css";
import AboutMe from "./Aboutme";
import axios from "axios";

const Home = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/auth/api/teams"
        );
        setLeaderboard(response.data);
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    };
    fetchLeaderboard();
  }, []);

  // Fetch teams from localStorage whenever the component renders
  const [teams, setTeams] = useState(() => {
    const savedTeams = localStorage.getItem("teams");
    return savedTeams ? JSON.parse(savedTeams) : [];
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const savedTeams = localStorage.getItem("teams");
      if (savedTeams) {
        setTeams(JSON.parse(savedTeams));
      }
    }, 1000); // Update every second to check for changes
    return () => clearInterval(interval);
  }, []);

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
        <p className="text-center">
          The points table displays the overall (Boys & Girls) standings of all
          teams based on their accumulated points and the number of matches
          played. As the competition progresses, you’ll see frequent updates in
          the rankings. To Check Boys and Girls Standings Separately, visit the
          Leaderboard Page.
        </p>
        <table className="table table-bordered table-striped table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col" className="text-center">
                Rank
              </th>
              <th scope="col" className="text-center">
                Team
              </th>
              <th scope="col" className="text-center">
                Points
              </th>
            </tr>
          </thead>
          <tbody>
            {teams
              .sort((a, b) => b.points - a.points) // Sort by points in descending order
              .map((team, index) => (
                <tr key={team.id} className="text-center">
                  <td>{index + 1}</td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center">
                      {/* <img
                src={team.img || "https://via.placeholder.com/50"} // Default image
                alt={team.name}
                style={{
                  width: "40px",
                  height: "40px",
                  marginRight: "10px",
                  borderRadius: "50%",
                }}
              /> */}
                      {team.name}
                    </div>
                  </td>
                  <td>{team.points}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <h1 className="d-flex justify-content-center">Our Teams</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 p-4 d-flex justify-content-center">
        <img src="jaguars.png" alt="" />
        <img src="warriors.png" alt="" />
        <img src="hawks.png" alt="" />
        <img src="falcon.png" alt="" />
        <img src="gladiators.png" alt="" />
      </div>

      <AboutMe></AboutMe>
    </Headandfoot>
  );
};

export default Home;
