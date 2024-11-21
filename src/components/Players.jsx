import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../app.css'

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

