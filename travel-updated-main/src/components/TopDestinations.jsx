import React from "react";
import { useNavigate } from "react-router-dom";
import "./TopDestinations.css";

const destinations = [
  { id: 1, name: "Uttar Pradesh", image: "https://i.natgeofe.com/n/8eba070d-14e5-4d07-8bab-9db774029063/93080.jpg" },
  { id: 2, name: "Goa", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5KspwgkBx6iEVSfqPFhayvgYNUUfVpR1XA&s" },
  { id: 3, name: "Kerala", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfyFdbefzaiehfVnQUOtIXnkOyPb7fDrb0okTw3dcDh3JaD-Cbz5nYo2bi-VHb97fiLZM&usqp=CAU" },
  { id: 4, name: "Rajasthan", image: "https://indiaholidaymall.com/images/blog/Top-10-Tourism-Places-of-Rajasthan.jpg" },
];

function TopDestinations() {
  const navigate = useNavigate();
  return (
    <section className="top-dest">
      <h2>Top Trending Destinations</h2>
      <p>Explore the hottest travel spots in India.</p>
      <div className="dest-grid">
        {destinations.map((d) => (
          <div
            className="dest-card"
            key={d.id}
            onClick={() => navigate(`/state/${d.name}`)}
          >
            <img src={d.image} alt={d.name} />
            <div className="dest-name">{d.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopDestinations;
