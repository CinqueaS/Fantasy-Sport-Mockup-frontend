import axios from "axios"
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/users`



const index = async () => {
  try {
    const res = await axios.get(BASE_URL, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      }) // Since this is PROTECTED ROUTE in backend, you MUST include header authorization
    const allUsers = res.data
    let allTeams = []
        for (let user of allUsers) {
            if (user.team) {
                allTeams.push(user.team)
            }
        }
    return allTeams
  } catch (error) {
    console.log(error)
  }
}
  
const show = async (userId) => {
try {
    const res = await axios.get(`${BASE_URL}/${userId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
    const team = res.data.team
    return team
    } catch (error) {
    console.log(error)
    }
}
  

const create = async (userId, formData) => {
  try {
    const res = await axios.post(`${BASE_URL}/${userId}/team`, formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
    return res.data
  } catch (error) {
    console.log(error)
  }
}


const update = async (userId, teamId, formData) => {
  try {
    const res = await axios.put(`${BASE_URL}/${userId}/team/${teamId}`, formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    return res.data
  } catch (error) {
    console.log(error)
  }
}

/* I dont believe the add/remove player from team functions need form data. Check here for errors if I'm proven wrong - JJC */

const addPlayerToTeam = async (userId, teamId, playerId, teamDetails = {}) => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.put(
      `${BASE_URL}/${userId}/team/${teamId}/add-player/${playerId}`,
      teamDetails, // Include optional team details in the request body
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return res.data;
  } catch (error) {
    console.error('Error adding player to team:', error.response?.data || error.message);
    throw error.response?.data || error;
  }
};

  const removePlayerFromTeam = async (userId, teamId, playerId) => {
    try {
      const res = await axios.put(`${BASE_URL}/${userId}/team/${teamId}/remove-player/${playerId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

const deleteTeam = async (userId, teamId) => {
  try {
    const res = await axios.delete(`${BASE_URL}/${userId}/team/${teamId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
    return res.data
  } catch (error) {
    console.log(error)
  }
}


export {
  index,
  show,
  create,
  update,
  addPlayerToTeam,
  removePlayerFromTeam,
  deleteTeam
}