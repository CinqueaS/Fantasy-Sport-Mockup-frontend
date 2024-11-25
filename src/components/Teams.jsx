import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../App.css'

const Teams = (props) => {
  const teams = props.teams

  return (
<p>
<div className="landing-buttons">
            <Link to="/" className="landing-button">
                Home
            </Link>
            <Link to="/players" className="landing-button"> 
              See Players! 
            </Link>
            <Link to="/teams" className="landing-button"> 
              See Teams! 
            </Link>
            </div>
      <div className="teams-container">
        <h1 className="teams-title">Teams</h1>
        <Link to="/" className="home-link">
          <button className="auth-button">Home</button>
          </Link>
        <ul className="teams-list">
          {teams.map((team) => (
            <li key={team._id} className="team-item">
              <Link to={`/teams/${team._id}`}>
                <p>{team.teamName}</p>
                <p>Players: {team.team_member_ids.length}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
</p>
  )
}

export default Teams
