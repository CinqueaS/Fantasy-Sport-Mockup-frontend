import axios from "axios"
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/users`



const index = async () => {
  try {
    const res = await axios.get(BASE_URL)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
  
const show = async (userId) => {
try {
    const res = await axios.get(`${BASE_URL}/${userId}`)
    return res.data
    } catch (error) {
    console.log(error)
    }
}


export {
  index,
  show,
}