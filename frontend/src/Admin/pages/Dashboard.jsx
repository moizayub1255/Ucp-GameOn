import React from "react";
// import DashboardCard from "../components/DashboardCard";

const Dashboard = () => {
  return (
    <div style={{ width: '100%', height: '100vh', border: 'none' }}>
    <iframe
      src="/backup/index.html"
      title="Admin Dashboard"
      style={{
        width: '100%',
        height: '100%',
        border: 'none',
      }}
    />
  </div>
  );
};

export default Dashboard;
