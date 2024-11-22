import React from "react"
import { AuthedUserContext } from "../App"
import { useContext } from 'react'
import { Link, Route, Routes } from "react-router-dom"

import "../App.css"

const HomePage = ({ handleSignout }) => {
  const user = useContext(AuthedUserContext)
  return (
    <>
      <h2>Welcome to our page, {user.username}</h2>
      <Link to="/" className="home-link" onClick={handleSignout}>
        <button className="auth-button">Sign Out</button>
        </Link>
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
            <Link to="/teams/creator" className="landing-button"> 
              Create a Team!
            </Link>
          </div>
    </>
  )
}

export default HomePage