import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import "../App.css"

const PlayerForm = (props) => {
    const navigate = useNavigate()
    const DefaultState = {
        playerName: '',
        motto: '',
        description: '',
        playingStyle: ''
    }

// if Editing a player fills the form with that players info otherwise form is empty
const [formData, setFormData] = useState(props.selectedPlayer ? props.selectedPlayer : DefaultState)

const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
}

const handleSubmitForm =  (evt) => {
    evt.preventDefault()
    if (props.selectedPlayer) {
        props.updatePlayer(props.user._id, props.selectedPlayer._id, formData)
        navigate('/Players/:playerId')
        props.updatePlayer(props.user._id, props.selectedPlayer._id, formData)
        navigate(`/Players/${props.selectedPlayer._id}`)
    } else {
        props.createPlayer(props.user._id, formData)
        navigate('/Players')
    }
}
    
    return (
        <main className='auth-container'>
        <div className='auth-box'>
             <Link to="/" className="home-link">
                <button className="auth-button">Go</button>
                </Link>
                <h2>{props.selectedPlayer ? "Update Your Player" : "Create Your Player"}</h2>
             <form onSubmit={handleSubmitForm}>
                <label htmlFor='playerName'>Player Name:</label>
                <input
                    id="playerName"
                    name="playerName"
                    value={formData.playerName}
                    onChange={handleChange}
                    required
                />
                <label htmlFor='motto'>Player Motto:</label>
                <input
                    id="motto"
                    name="motto"
                    value={formData.motto}
                    onChange={handleChange}
                    required
                />
            `<label htmlFor='description'>Tell us more about the player:</label>
                <input
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
                <label htmlFor='playingStyle'>Player Playstyle:</label>
                <input
                    id="playingStyle"
                    name="playingStyle"
                    value={formData.playingStyle}
                    onChange={handleChange}
                    required
                />
                <button className="landing-button" type='submit'>{props.selectedPlayer ? "Update Player" : "Create This Player"} </button>
             </form>
        </div>
    </main>
    )
}

export default PlayerForm