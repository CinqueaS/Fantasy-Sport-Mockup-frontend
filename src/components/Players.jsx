import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../App.css'

const Players = (props) => {
  /* console.log(props.players) */

  return (
    <div className="players-container">
      <h1 className="players-title">Players</h1>
      <Link to="/" className="home-link">
        <button className="auth-button">Home</button>
        </Link>
      <ul className="players-list">
        {props.players.map((player) => (
          <li key={player._id} className="player-item" >
            <Link to={`/players/${player._id}`}>
            <h3>{player.name} ({player.fantasyPoints} points)</h3>
            <h4>{player.position}</h4>
            <h4>{player.isSuperNatural ? `POWER PLAYER!` : `Sportsballer!`}</h4>
            <h4>{player.owner_id ? `${player.owner_id.team.teamName} player` : `Available`}</h4>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Players