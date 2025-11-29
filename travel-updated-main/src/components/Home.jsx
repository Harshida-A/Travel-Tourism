import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; 

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="title-box">
        <h1>India Travel & Tourism App</h1>
        <p className="welcome-text">
          Welcome to your ultimate guide to exploring Incredible India!
        </p>
      </div>

      <div className="button-group">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/destination")}>Destination</button>
        <button>Hotel</button>
        <button>Contact</button>
        <button>Restaurant</button>
        <button>Transport</button>
      </div>
    </>
  );
}

export default Home;
