import { useState, createContext, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Login from './components/Login'
import Signup from "./components/Signup"
import Landing from './components/Landing'
import HomePage from './components/HomePage'

import AboutUs from "./components/AboutUs"
import Players from './components/Players'
import Teams from './components/Teams'
import TeamInfo from './components/TeamInfo'
import TeamForm from './components/TeamForm'
import PlayerInfo from './components/PlayersInfo'

import * as authService from '../src/services/authService'
import * as playersService from '../src/services/playersService'
import * as userService from '../src/services/userService'
import * as teamsService from '../src/services/teamsService'


export const AuthedUserContext = createContext(null)

function App() {
  // Landing wont render because of the way this line is being used. That is the main issue.
  const [user, setUser] = useState(authService.getUser()) // The user that is signed in
  const [allUsers, setAllUsers] = useState([]) // ALL users, may be shown on page
  const [players, setPlayers] = useState([]) // All players
  const [teams, setTeams] = useState([]) // ALL teams
  const [selectedTeam, setSelectedTeam] = useState(null)
  useEffect(() => {

    async function getAllPlayers() {
      const playersData = await playersService.index()
      // Set state:
      setPlayers(playersData)
    }

    async function getAllUsers() {
      const allUserData = await userService.index()
      // Set state:
      setAllUsers(allUserData)
    }

    async function getAllTeams() {
      const teamsData = await teamsService.index()
      // Set state:
      setTeams(teamsData)
    }
    if (user) {
      getAllPlayers()
      getAllTeams()
      getAllUsers()
    } // Data is not fetched if there is no user logged in
  }, [user]) // Placing user in the dependency array will cause this function to fire when:
  // 1. Page loads
  // 2. user state changes

  const handleSignout = () => {
    authService.signout()
    setUser(null)
  }

  /* console.log(players) */
  const createTeam = async (userId, formData) => {
    try {
      const newTeam = await teamsService.create(userId, formData)
      if (newTeam.error) {
        throw new Error(newTeam.error)
      }
      setTeams([newTeam, ...teams])
    } catch (error) {
      console.log(error)
    }
  }

  const updateTeam = async (userId, teamId, formData) => {
    try {
      const updatedTeam = await teamsService.update(userId, teamId, formData)

      if (updatedTeam.error) {
        throw new Error (updatedTeam.error)
      }

      const updatedTeams = teams.map((team) => 
        team._id !== updatedTeam._id ? team : updatedTeam
      )

      setTeams(updatedTeams)
      setSelectedTeam(updatedTeam)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthedUserContext.Provider value={user}>

      
      <Routes>
        {user ? (
          <>
            <Route path="/" element={
              <HomePage handleSignout={handleSignout} />} 
              />
              {/* About us Route */}
              <Route path="/about-Us" element={<AboutUs />} />

              {/* Player Routes, all of them and specific one below */}
              <Route path="/Players" element={<Players players={players} />} />
              <Route path="/Players/:playerId" element={<PlayerInfo players={players} />} />

              {/* Team Routes, all of them and specific one below */}
              <Route path="/Teams" element={<Teams teams={teams} />} />
              <Route path="/Teams/:teamId" element={<TeamInfo teams={teams} />} />
              <Route path='/Teams/creator' element={<TeamForm createTeam={createTeam} updateTeam={updateTeam} selectedTeam={selectedTeam} />} />
          </>
        ) : (
          <Route path="/" element={<Landing />} />
        )}

        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />

      </Routes>
    </AuthedUserContext.Provider>
  )
}

export default App
