import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../App.css'

const Players = () => {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/players') 
        setPlayers(response.data)
      } catch (error) {
        console.error('Error fetching players:', error)
      }
    }

    fetchPlayers()
  }, [])

  return (
    <div className="players-container">
      <h1 className="players-title">Players</h1>
      <Link to="/" className="home-link">
        <button className="auth-button">Home</button>
        </Link>
      <ul className="players-list">
        {players.map((player) => (
          <li key={player.id} className="player-item">
            {player.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Players

