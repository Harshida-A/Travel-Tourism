// src/components/StateDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import visitingPlaces from "./visitingplace"; // your visiting places data
import "./StateDetails.css"; // correct CSS

function StateDetails() {
  const { name } = useParams();
  const navigate = useNavigate();
  const places = visitingPlaces[name] || [];

  return (
    <div className="details-container">
      <h1><center>Top Places to Visit in {name}</center></h1>

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="places-grid">
        {places.map((place, index) => (
          <div className="place-card" key={index}>
            <img src={place.img} alt={place.name} />
            <h2>{place.name}</h2>
            <p>{place.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StateDetails;
