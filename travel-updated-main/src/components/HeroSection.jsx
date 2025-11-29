import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";

const backgrounds = [
  "https://cdn.pixabay.com/photo/2017/05/10/13/39/ladakh-2300904_1280.jpg",
  "https://trendpickle.com/wp-content/uploads/2020/09/img_90e8594dd813bd02ad9b4342e65f345d_1513225298701_processed_original.jpg",
  "https://images.pexels.com/photos/31756519/pexels-photo-31756519.jpeg?cs=srgb&dl=pexels-harsh-kukadiya-244412142-31756519.jpg&fm=jpg",
  "https://deih43ym53wif.cloudfront.net/hanging_bridge_himachal_india_shutterstock_1087070918_c59e0eb675.jpeg",
];

function HeroSection() {
  const [query, setQuery] = useState("");
  const [bgIndex, setBgIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    if (!query) return;
    navigate("/destination", { state: { searchQuery: query } });
  };

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }}
    >
      <div className="hero-overlay">
        <h1 className="hero-title">India Tour Packages</h1>
        <p className="hero-subtitle">Where Every Experience Counts!</p>
        <div className="hero-search">
          <input
            type="text"
            placeholder="Enter Your Dream Destination!"
            className="hero-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button className="hero-search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
