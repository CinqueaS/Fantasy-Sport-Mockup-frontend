import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import "../App.css"

const TeamForm = (props) => {
    const navigate = useNavigate()
    const DefaultState = {
        teamName: '',
        motto: '',
        playingStyle: ''
    }

// if Editing a team fills the form with that teams info otherwise form is empty
const [formData, setFormData] = useState(props.selectedTeam ? props.selectedTeam : DefaultState)

const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
}

const handleSubmitForm =  (evt) => {
    evt.preventDefault()
    if (props.selectedTeam) {
        props.updateTeam(props.user._id, props.selectedTeam._id, formData)
        navigate('/Teams/:teamId')
    } else {
        props.createTeam(props.user._id, formData)
        navigate('/Teams')
    }
}
    
    return (
        <main className='auth-container'>
        <div className='auth-box'>
             <Link to="/" className="home-link">
                <button className="auth-button">Home</button>
                </Link>
             <form onSubmit={handleSubmitForm}>
                <label htmlFor='teamName'>Team Name:</label>
                <input
                    id="teamName"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    required
                />
                <label htmlFor='motto'>Team Motto:</label>
                <input
                    id="motto"
                    name="motto"
                    value={formData.motto}
                    onChange={handleChange}
                    required
                />
                <label htmlFor='playingStyle'>Team Playstyle:</label>
                <input
                    id="playingStyle"
                    name="playingStyle"
                    value={formData.playingStyle}
                    onChange={handleChange}
                    required
                />
                <button className="landing-button" type='submit'>{props.selectedTeam ? "Update Team" : "Create This Team"} </button>
                
                <button className='landing-button' onClick={() => props.deleteTeam(props.selectedTeam._id)}>Delete Your Team</button>
                
                
             </form>
        </div>
    </main>
    )
}

export default TeamForm