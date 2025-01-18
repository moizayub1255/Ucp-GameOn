import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import PageNotAvailable from "./Pages/PageNotAvailable.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import Events from "./Pages/Events.jsx";
import Teams from "./Pages/Teams.jsx";
import Leaderboard from "./Pages/Leaderboard.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import RegisterNow from "./Pages/RegisterNow.jsx";
import AdminLayout from "./Admin/AdminLayout.jsx";
import Dashboard from "./Admin/pages/Dashboard.jsx";
import ProtectedRoute from "./Admin/ProtectedRoute.jsx"; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/register-now" element={<RegisterNow />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<PageNotAvailable />} />

        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminLayout> {/* Admin layout wrapper */}
                <Dashboard /> {/* Admin Dashboard */}
              </AdminLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
