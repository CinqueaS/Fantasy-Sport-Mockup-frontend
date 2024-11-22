import { useState } from 'react'
import { Link } from "react-router-dom"
import "../App.css"

const TeamForm = (props) => {

    const DefaultState = {
        teamName: '',
        teamMotto: '',
        teamPlaystyle: ''
    }

// if Editing a team fills the form with that teams info otherwise form is empty
const [formData, setFormData] = useState(props.selectedTeam ? props.selectedTeam : DefaultState)

const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
}

const handleSubmitForm =  (evt) => {
    evt.preventDefault()
    if (props.selectedTeam) {
        props.handleUpdateTeam(formData, props.selectedTeam._id)
    } else {
        props.handleAddTeam(formData)
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
                <label htmlFor='teamMotto'>Team Motto:</label>
                <input
                    id="teamMotto"
                    name="teamMotto"
                    value={formData.teamMotto}
                    onChange={handleChange}
                    required
                />
                <label htmlFor='teamPlaystyle'>Team Playstyle:</label>
                <input
                    id="teamPlaystyle"
                    name="teamPlaystyle"
                    value={formData.teamPlaystyle}
                    onChange={handleChange}
                    required
                />
                <button className="landing-button" type='submit'>{props.selectedTeam ? "Update Team" : "Create This Team"} </button>
             </form>
        </div>
    </main>
    )
}

export default TeamForm