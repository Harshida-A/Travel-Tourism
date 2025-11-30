import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Destination from "./components/destination";
import StateDetails from "./components/StateDetails";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TopDestinations from "./components/TopDestinations";
import Hotels from "./components/Hotel";
import AboutUs from "./components/AboutUs";
import Restaurant from "./components/Restaurants";
import Login from "./components/login";
import Signup from "./components/Signup";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
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

        <Route path="/destination" element={<Destination />} />
        <Route path="/state/:name" element={<StateDetails />} />
        <Route path="/hotel" element={<Hotels />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
