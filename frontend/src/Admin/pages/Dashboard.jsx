import React from "react";
import DashboardCard from "../components/DashboardCard";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <div className="d-flex justify-content-around flex-wrap">
        <DashboardCard title="Total Events" value="12" />
        <DashboardCard title="Total Participants" value="340" />
        <DashboardCard title="Registrations Today" value="45" />
      </div>
    </div>
  );
};

export default Dashboard;
