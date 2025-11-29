import React from "react";
import "./Restaurant.css";  // create this or reuse hotel CSS

const Restaurant = () => {
  const tamilNaduRestaurants = [
    {
      name: "Annalakshmi Restaurant",
      location: "Chennai",
      desc: "Traditional South Indian Veg Meals.",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/9c/55/f4/annalakshmi.jpg?w=900&h=500&s=1",
    },
    {
      name: "Junior Kuppanna",
      location: "Tamil Nadu",
      desc: "Authentic Kongu-style Non-Veg dishes.",
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDgGz_r6u-jRC3s6DGbU2v-bOaBJyOuTnrUfQKNFnrhraZZ_JLHXGaMBhQPWGqzZgdYyevl1R_dxFwPDm1HrFV-4jZLen2fHze48EwD90_KgbDE3aAfZY-qnwDPVAXwtaFICl0la_W1F4/s1600/IMG_8024.JPG",
    },
    {
      name: "Buhari Hotel",
      location: "Chennai",
      desc: "Origin of Chicken-65 & iconic/images/restaurants/buhari.jpg",
      img: "https://buhari.in/images/welcome-slider/slide3.jpg",
    },
    {
      name: "Ratna Cafe",
      location: "Chennai",
      desc: "Famous sambar idli since 1948.",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/c1/a6/9b/ratna-cafe.jpg?w=600&h=400&s=1",
    },
  ];

  return (
    <div className="main-container">
      <h1 className="title">Best Restaurants in Each State</h1>
      <h2 className="state-title">Tamil Nadu</h2>

      <div className="card-container">
        {tamilNaduRestaurants.map((item, index) => (
          <div key={index} className="card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <p style={{ fontWeight: "bold" }}>{item.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
