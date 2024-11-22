import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../App.css'

const Teams = (props) => {
  const teams = props.teams

  return (
    <div className="teams-container">
      <h1 className="teams-title">Teams</h1>
      <Link to="/" className="home-link">
        <button className="auth-button">Home</button>
        </Link>
      <ul className="teams-list">
        {teams.map((team) => (
          <li key={team.id} className="team-item">
            <Link to={`/team/${team.name}`}>
              {team.teamName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Teams
