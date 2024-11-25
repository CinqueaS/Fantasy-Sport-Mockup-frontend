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
import PlayerForm from './components/PlayerForm'

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
  const [selectedPlayer, setSelectedPlayer] = useState(null)
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
        throw new Error(updatedTeam.error)
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

  const deleteTeam = async (userId, teamId) => {
    try {
      const deletedTeam = await teamsService.deleteTeam(userId, teamId)

      if (deletedTeam.error) {
        throw new Error(deletedTeam.error)
      }
      setTeams(teams.filter((team) => team._id !== deletedTeam._id))
      setSelectedTeam(null)
    } catch (error) {
      console.log(error)
    }
  }



  /* Sets the selected team to whoever is logged in if they have one */
  async function updateSelectedTeam(loggedUser) {
    const loggedUserId = loggedUser._id
    const userData = await userService.show(loggedUserId)
    if (userData.team) {
      setSelectedTeam(userData.team)
    } else {
      setSelectedTeam(null)
    }
  }

  if (user) {
    updateSelectedTeam(user)
  }



  const handlePlayerRemoval = (player) => {
    setSelectedTeam((prevTeam) => ({
      ...prevTeam,
      players: [...(prevTeam?.players || []), player],
    }))
  }

  const handlePlayerAddition = (player) => {
    setSelectedTeam((prevTeam) => ({
      ...prevTeam,
      players: [...(prevTeam?.players || []), player],
    }))
  }

    /* Updates selected player for player creation form */

  function updateSelectedPlayer(player) {
    if (player) {
    setSelectedPlayer(player)
    } else { 
      setSelectedPlayer(null)
    }
  }

  async function createPlayer(formData) {
    try {
      const newPlayer = await playersService.create(formData)
      if (newPlayer.error) {
        throw new Error(newPlayer.error)
      }
      setPlayers([newPlayer, ...players])
    } catch (error) {
      console.log(error)
    }
  }

  async function updatePlayer(formData, playerId) {
    try {
      const updatedPlayer = await playersService.update(formData, playerId)

      if (updatedPlayer.error) {
        throw new Error(updatedPlayer.error)
      }

      const updatedPlayers = players.map((player) =>
        player._id !== updatedPlayer._id ? player : updatedPlayer
      )

      setPlayers(updatedPlayers)
      setSelectedPlayer(updatedPlayer)

    } catch (error) {
      console.log(error)
    }
  }

  async function deletePlayer(playerId) {
    try {
      const deletedPlayer = await playersService.deletePlayer(playerId)

      if (deletedPlayer.error) {
        throw new Error(deletedPlayer.error)
      }
      setPlayers(players.filter((player) => player._id !== deletedPlayer._id))
      setSelectedPlayer(null)
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
              <HomePage handleSignout={handleSignout} selectedTeam={selectedTeam} updateSelectedPlayer={updateSelectedPlayer}/>}
            />
            {/* Player Routes, all of them and specific one below */}
            <Route path="/Players" element={<Players players={players} updateSelectedPlayer={updateSelectedPlayer} deletePlayer={deletePlayer}/>} />
            <Route path="/Players/:playerId" element={<PlayerInfo players={players} userId={user?._id} teamId={selectedTeam?._id} handlePlayerAddition={handlePlayerAddition} updateSelectedPlayer={updateSelectedPlayer} deletePlayer={deletePlayer} />} />
            <Route path='/Players/creator' element={<PlayerForm createPlayer={createPlayer} updatePlayer={updatePlayer} selectedPlayer={selectedPlayer} user={user} />} />

            {/* Team Routes, all of them and specific one below */}
            <Route path="/Teams" element={<Teams teams={teams} />} />
            <Route path="/Teams/:teamId" element={<TeamInfo teams={teams} deleteTeam={deleteTeam} handlePlayerRemoval={handlePlayerRemoval} user={user}/>} />
            <Route path='/Teams/creator' element={<TeamForm createTeam={createTeam} updateTeam={updateTeam} selectedTeam={selectedTeam} user={user} />} />
          </>
        ) : (
          <Route path="/" element={<Landing />} />
        )}
        <Route path="/about-Us" element={<AboutUs />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />

      </Routes>
    </AuthedUserContext.Provider>
  )
}

export default App
