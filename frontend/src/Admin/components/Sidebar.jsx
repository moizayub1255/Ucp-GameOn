import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar bg-dark text-white vh-100">
      <h2 className="p-3">Admin Panel</h2>
      <ul className="list-unstyled p-2">
        <li>
          <Link to="/admin/dashboard" className="text-white text-decoration-none">Dashboard</Link>
        </li>
    
      </ul>
    </div>
  );
};

export default Sidebar;
