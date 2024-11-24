import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import "../App.css"

const PlayerForm = (props) => {
    const navigate = useNavigate()
    const DefaultState = {
        name: '',
        gender: '',
        position: '',
        species: '',
        isSupernatural: '',
        heightCm: '',
        weightKg: '',
        yards: '',
        touchdowns: '',
        interceptions: ''

    }

// if Editing a player fills the form with that players info otherwise form is empty
const [formData, setFormData] = useState(props.selectedPlayer ? props.selectedPlayer : DefaultState)

const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
}

const handleSubmitForm =  (evt) => {
    evt.preventDefault()
    if (props.selectedPlayer) {
        props.updatePlayer(props.selectedPlayer._id, formData)
        navigate('/Players/:playerId')
        props.updatePlayer(props.selectedPlayer._id, formData)
        navigate(`/Players/${props.selectedPlayer._id}`)
    } else {
        props.createPlayer(formData)
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
                <label htmlFor='name'>Player Name:</label>
                <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor='gender'>Gender:</label>
                <input
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                />
            <label htmlFor='position'>Position</label>
                <input
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                />
                <label htmlFor='species'>Species (Leave blank if human)</label>
                <input
                    id="species"
                    name="species"
                    value={formData.species}
                    onChange={handleChange}
                    required
                />

                <label htmlFor='isSupernatural'>Do they have superpowers? (treu/false)</label>
                <input
                    id="isSupernatural"
                    name="isSupernatural"
                    value={formData.isSupernatural}
                    onChange={handleChange}
                    required
                />

                <label htmlFor='heightCm'>Height (In centimeters)</label>
                <input
                    id="heightCm"
                    name="heightCm"
                    value={formData.heightCm}
                    onChange={handleChange}
                    required
                />

                <label htmlFor='weightKg'>Weight (In Kilograms)</label>
                <input
                    id="weightKg"
                    name="weightKg"
                    value={formData.weightKg}
                    onChange={handleChange}
                    required
                />

                <label htmlFor='yards'>Yards</label>
                <input
                    id="yards"
                    name="yards"
                    value={formData.yards}
                    onChange={handleChange}
                    required
                />

                <label htmlFor='touchdowns'>Touchdowns</label>
                <input
                    id="touchdowns"
                    name="touchdowns"
                    value={formData.touchdowns}
                    onChange={handleChange}
                    required
                />

                <label htmlFor='interceptions'>Interceptions</label>
                <input
                    id="interceptions"
                    name="interceptions"
                    value={formData.interceptions}
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