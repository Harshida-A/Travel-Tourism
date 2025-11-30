import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="nav">
      <div className="nav-left">
        <div className="logo" onClick={() => navigate("/")}>
            TravelIndia
        </div>
        <nav className="nav-links">
          <a onClick={() => navigate("/")}>Home</a>
          <a onClick={() => navigate("/destination")}>Destination</a>
          <a onClick={() => navigate("/hotel")}>Hotel</a> {/* ✅ navigate to /hotel */}
          <a onClick={() => navigate("/restaurant")}>Restaurant</a> {/* ← FIXED */}
          <a>Transport</a>
          <a>Contact</a>
        </nav>

      </div>
      <div className="nav-right">
        <button className="login-btn"><a onClick={() => navigate("/Login")}>Login / Signup</a></button>
      </div>
    </header>
  );
}

export default Navbar;
