
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Destination from "./components/destination";
import StateDetails from "./components/StateDetails";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TopDestinations from "./components/TopDestinations";
import Hotels from "./components/Hotel";
import AboutUs from "./components/AboutUs";
import Restaurant from "./components/Restaurants";   // <-- add this

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <TopDestinations />
              <AboutUs />
            </>
          }
        />

        {/* Other Pages */}
        <Route path="/destination" element={<Destination />} />
        <Route path="/state/:name" element={<StateDetails />} />
        <Route path="/hotel" element={<Hotels />} />
        <Route path="/restaurant" element={<Restaurant />} />   
      </Routes>
    </Router>
  );
}

export default App;
