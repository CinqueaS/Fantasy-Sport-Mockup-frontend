import React from "react"
import { Link, Route, Routes } from "react-router-dom"

import "../App.css"

const HomePage = () => {
  return (
    <>
      <h2>Your time is up, my time is now!</h2>
          <div className="landing-buttons">
            <Link to="/about-Us" className="landing-button"> 
              About Us! 
            </Link>
            <Link to="/players" className="landing-button"> 
              See Players! 
            </Link>
            <Link to="/teams" className="landing-button"> 
              See Teams! 
            </Link>
          </div>
    </>
  )
}

export default HomePage
