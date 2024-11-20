import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../app.css'

const Teams = () => {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('') 
        setTeams(response.data)
      } catch (error) {
        console.error('Error fetching teams:', error)
      }
    }

    fetchTeams()
  }, [])

  return (
    <div className="teams-container">
      <h1 className="teams-title">Teams</h1>
      <ul className="teams-list">
        {teams.map((team) => (
          <li key={team.id} className="team-item">
            {team.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Teams
