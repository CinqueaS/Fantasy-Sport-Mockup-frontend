import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../App.css'

const Teams = () => {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users') 
        const allUsers = response.data
        let allTeams = []
        for (let user of allUsers) {
            if (user.team) {
                allTeams.push(user.team)
            }
        }
        setTeams(allTeams)
      } catch (error) {
        console.error('Error fetching teams:', error)
      }
    }

    fetchTeams()
  }, [])

  return (
    <div className="teams-container">
      <h1 className="teams-title">Teams</h1>
      <Link to="/" className="home-link">
        <button className="auth-button">Home</button>
        </Link>
      <ul className="teams-list">
        {teams.map((team) => (
          <li key={team.id} className="team-item">
            {team.teamName}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Teams
