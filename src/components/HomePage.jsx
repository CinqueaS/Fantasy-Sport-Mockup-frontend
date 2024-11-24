import React from "react"
import { AuthedUserContext } from "../App"
import { useContext } from 'react'
import { Link, Route, Routes } from "react-router-dom"

import "../App.css"

const HomePage = ({ handleSignout }) => {
  const user = useContext(AuthedUserContext)
  return (
    <>
      <h1>Welcome {user.username}</h1>
      
          <div className="landing-container">
            <img src="/Fant-Sport-Image.avif" alt="Fant-Sports Img" />
            <Link to="/about-Us" className="landing-button"> 
              About Us! 
            </Link>
            <Link to="/players" className="landing-button"> 
              See Players! 
            </Link>
            <Link to="/teams" className="landing-button"> 
              See Teams! 
            </Link>
            <Link to="/players/creator" className="landing-button">
              Create a Player!
            </Link>
            <Link to="/teams/creator" className="landing-button">
              Create a Team!
            </Link>
            <Link to="/" className="home-link" onClick={handleSignout}>
            <button className="landing-button">Sign Out</button>
            </Link>
          </div>
    </>
  )
}

export default HomePage