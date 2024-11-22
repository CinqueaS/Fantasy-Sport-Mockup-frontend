import React from "react";
import { Link } from "react-router-dom";
import AboutUs from "./components/AboutUs"
import Players from './components/Players'
import Teams from './components/Teams'
import "../app.css";

const HomePage = () => {
  return (

        <div className="landing-buttons">
          <Link to="/players" className="landing-button">Players</Link>
          <Link to="/teams" className="landing-button">Players</Link>
          <Link to="/about-us" className="landing-link"> About Us</Link>
        </div>
  );
};

export default HomePage;
