import React from "react";
import "./destination.css";
import stateImages from "../stateImages.js"; 
import { useNavigate, useLocation } from "react-router-dom";

const states = [
  { name: "Andhra Pradesh", desc: "Known for Tirupati Temple and rich culture." },
  { name: "Arunachal Pradesh", desc: "Land of the rising sun and beautiful monasteries." },
  { name: "Assam", desc: "Famous for tea gardens and Kaziranga National Park." },
  { name: "Bihar", desc: "Home to ancient Nalanda University and Bodh Gaya." },
  { name: "Chhattisgarh", desc: "Rich in forests, waterfalls, and tribal culture." },
  { name: "Goa", desc: "Popular for beaches, nightlife, and Portuguese heritage." },
  { name: "Gujarat", desc: "Known for Gir lions, White Rann, and vibrant festivals." },
  { name: "Haryana", desc: "Famous for heritage sites and agricultural prosperity." },
  { name: "Himachal Pradesh", desc: "A Himalayan paradise with mountains and hill stations." },
  { name: "Jharkhand", desc: "Land of forests, waterfalls, and mineral riches." },
  { name: "Karnataka", desc: "Known for IT hub Bengaluru and rich cultural landmarks." },
  { name: "Kerala", desc: "God's Own Country with backwaters and lush greenery." },
  { name: "Madhya Pradesh", desc: "Heart of India with temples, caves, and tiger reserves." },
  { name: "Maharashtra", desc: "Home to Mumbai, beaches, forts, and Bollywood." },
  { name: "Manipur", desc: "Land of jewels with lakes, culture, and sports heritage." },
  { name: "Meghalaya", desc: "Abode of clouds with waterfalls and living root bridges." },
  { name: "Mizoram", desc: "A peaceful state with rolling hills and tribal culture." },
  { name: "Nagaland", desc: "Known for tribes, Hornbill Festival, and mountains." },
  { name: "Odisha", desc: "Temple state with Jagannath Puri and Konark Sun Temple." },
  { name: "Punjab", desc: "Land of food, farms, and the Golden Temple." },
  { name: "Rajasthan", desc: "Royal state with deserts, forts, and palaces." },
  { name: "Sikkim", desc: "Known for Kanchenjunga, monasteries, and nature." },
  { name: "Tamil Nadu", desc: "Rich in temples, heritage, and classical arts." },
  { name: "Telangana", desc: "Hyderabad’s pearls, biryani, and Charminar." },
  { name: "Tripura", desc: "Land of palaces, lakes, and archaeological sites." },
  { name: "Uttar Pradesh", desc: "Home to the Taj Mahal and spiritual cities." },
  { name: "Uttarakhand", desc: "Land of Gods with mountains, rivers, and temples." },
  { name: "West Bengal", desc: "Rich in art, culture, and Kolkata’s heritage." }
];


function Destination() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchQuery = location.state?.searchQuery || "";

  // Filter states based on search
  const filteredStates = states.filter((state) =>
    state.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="destination-container">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back to Home
      </button>
      
      <h1 className="title"><center>Explore 28 States of India</center></h1>

      <div className="cards-grid">
        {filteredStates.length > 0 ? (
          filteredStates.map((state, index) => (
            <div
              className="card clickable-card"
              key={index}
              onClick={() => navigate(`/state/${state.name}`)}
            >
              <img src={stateImages[state.name]} alt={state.name} className="state-img" />
              <h2>{state.name}</h2>
              <p>{state.desc}</p>
            </div>
          ))
        ) : (
          <p>No destinations found for "{searchQuery}"</p>
        )}
      </div>
    </div>
  );
}

export default Destination;
