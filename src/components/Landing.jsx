import React from "react"
import { Link } from "react-router-dom"
import "../App.css"

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-box">
        <h1 className="landing-title">Welcome to the Galactic Gridiron!</h1>
        <p className="landing-description">
          Dive into a universe of interstellar sports and cosmic competition.
          Manage teams of alien athletes, upgrade your tech, and compete for
          the ultimate glory!
        </p>
        <div className="landing-buttons">
          <Link to="/signup" className="landing-button">
            Get Started
          </Link>
          <Link to="/about-us" className="landing-link">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Landing
