import React from "react";
import Headandfoot from "../Layout/Headandfoot";

const Leaderboard = () => {
  const tableStyle = {
    margin: "20px auto",
    borderCollapse: "collapse",
    width: "90%",
    textAlign: "center",
    border: "1px solid #ccc",
  };

  const thStyle = {
    padding: "10px",
    backgroundColor: "#f4f4f4",
    border: "1px solid #ccc",
    fontWeight: "bold",
  };

  const tdStyle = {
    padding: "10px",
    border: "1px solid #ccc",
  };

  const imgStyle = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
  };

  return (
    <Headandfoot>
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>See who's on TOP</h1>
      <p>
        In GameOn, we have separate sports competitions for boys and girls. On
        this page, you can see separate leaderboards for boys and girls with
        fixed positions.
      </p>


    {/* Girls Leaderboard */}
    <div>
        <h2>Girls Leaderboard</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Games</th>
              <th style={thStyle}>
                <img src="./jaguars.png" alt="Jaguars" style={imgStyle} />
              </th>
              <th style={thStyle}>
                <img
                  src="./warriors.png"
                  alt="UCP Warriors"
                  style={imgStyle}
                />
              </th>
              <th style={thStyle}>
                <img src="./hawks.png" alt="UCP Hawks" style={imgStyle} />
              </th>
              <th style={thStyle}>
                <img
                  src="./gladiators.png"
                  alt="Gladiators"
                  style={imgStyle}
                />
              </th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Cricket</td>
              <td style={tdStyle}>0</td>
              <td style={tdStyle}>0</td>
              <td style={tdStyle}>0</td>
              <td style={tdStyle}>0</td>
            </tr>
            <tr>
              <td style={tdStyle}>Football</td>
              <td style={tdStyle}>0</td>
              <td style={tdStyle}>0</td>
              <td style={tdStyle}>0</td>
              <td style={tdStyle}>0</td>
            </tr>
            <tr>
              <td style={tdStyle}>Basketball</td>
              <td style={tdStyle}>0</td>
              <td style={tdStyle}>0</td>
              <td style={tdStyle}>0</td>
              <td style={tdStyle}>0</td>
            </tr>
            <tr>
              <td style={tdStyle}>Hockey</td>
              <td style={tdStyle}>0</td>
              <td style={tdStyle}>0</td>
              <td style={tdStyle}>0</td>
              <td style={tdStyle}>0</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Boys Leaderboard */}
      <div>
        <h2>Boys Leaderboard</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Games</th>
              <th style={thStyle}>
                <img src="./jaguars.png" alt="Jaguars" style={imgStyle} />
              </th>
              <th style={thStyle}>
                <img
                  src="./warriors.png"
                  alt="UCP Warriors"
                  style={imgStyle}
                />
              </th>
              <th style={thStyle}>
                <img src="./hawks.png" alt="UCP Hawks" style={imgStyle} />
              </th>
              <th style={thStyle}>
                <img
                  src="./gladiators.png"
                  alt="Gladiators"
                  style={imgStyle}
                />
              </th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Cricket</td>
              <td style={tdStyle}>0</td>
              <td style={tdStyle}>0</td>
              <td style={tdStyle}>0</td>
              <td style={tdStyle}>0</td>
            </tr>
            <tr>
              <td style={tdStyle}>Football</td>
              <td style={tdStyle}>0</td>
              <td style={tdStyle}>0</td>
              <td style={tdStyle}>0</td>
              <td style={tdStyle}>0</td>
            </tr>
            <tr>
              <td style={tdStyle}>Basketball</td>
              <td style={tdStyle}>0</td>
              <td style={tdStyle}>0</td>
              <td style={tdStyle}>0</td>
              <td style={tdStyle}>0</td>
            </tr>
            <tr>
              <td style={tdStyle}>Hockey</td>
              <td style={tdStyle}>0</td>
              <td style={tdStyle}>0</td>
              <td style={tdStyle}>0</td>
              <td style={tdStyle}>0</td>
            </tr>
          </tbody>
        </table>
      </div>

      
    </div>
    </Headandfoot>
  );
};

export default Leaderboard;
