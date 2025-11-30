import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const username = localStorage.getItem("username");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/");
    window.location.reload();
  };

  return (
    <header className="nav">
      <div className="nav-left">
        <div className="logo" onClick={() => navigate("/")}>
          TravelIndia
        </div>

        <nav className="nav-links">
          <a onClick={() => navigate("/")}>Home</a>
          <a onClick={() => navigate("/destination")}>Destination</a>
          <a onClick={() => navigate("/hotel")}>Hotel</a>
          <a onClick={() => navigate("/restaurant")}>Restaurant</a>
          <a>Transport</a>
          <a>Contact</a>
        </nav>
      </div>

      <div className="nav-right">
        {username ? (
          <>
            <span className="nav-username">👤 {username}</span>
            <button className="login-btn" onClick={logout}>Logout</button>
          </>
        ) : (
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login / Signup
          </button>
        )}
      </div>
    </header>
  );
}

export default Navbar;
