import axios from "axios"
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/players`



const index = async () => {
  try {
    const res = await axios.get(BASE_URL)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

const getSupernaturalPlayers = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/supernatural`)
        return res.data
      } catch (error) {
        console.log(error)
      }
  }
  const getNormalPlayers = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/normal`)
        return res.data
      } catch (error) {
        console.log(error)
      }
  }

  const getDraftedPlayers = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/drafted`)
        return res.data
      } catch (error) {
        console.log(error)
      }
  }

  const getAvailablePlayers = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/available`)
        return res.data
      } catch (error) {
        console.log(error)
      }
  }
  
  const show = async (playerId) => {
    try {
        const res = await axios.get(`${BASE_URL}/${playerId}`)
        return res.data
      } catch (error) {
        console.log(error)
      }
  }

  const nameSearch = async (userSearch) => {
    try {
        const res = await axios.get(`${BASE_URL}/name-search/${userSearch}`)
        return res.data
      } catch (error) {
        console.log(error)
      }
  }
  

const create = async (formData) => {
  try {
    const res = await axios.post(BASE_URL, formData)
    return res.data
  } catch (error) {
    console.log(error)
  }
}


const update = async (formData, playerId) => {
  try {
    const res = await axios.put(`${BASE_URL}/${playerId}`, formData)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

const deleteplayer = async (playerId) => {
  try {
    const res = await axios.delete(`${BASE_URL}/${playerId}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}


export {
  index,
  nameSearch,
  getNormalPlayers,
  getSupernaturalPlayers,
  getAvailablePlayers,
  getDraftedPlayers,
  show,
  create,
  update,
  deleteplayer
}