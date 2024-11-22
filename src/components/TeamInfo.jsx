import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../App.css'

const TeamInfo = (props) => {

    console.log('The props!', props)

    // Pull the NAME of selected Team into a variable
    const { teamId } = useParams()
    
    console.log('team ID:', teamId)

    // Locates team with find(), so we can render data of that Team only!
    const singleTeam = props.teams.find((team) => 
        team._id === teamId) /* Finds team by its ID */
    console.log('Team Object:', singleTeam)


    // This code will work when we place the axios calls in the right spot, like App.jsx


    






    if (!singleTeam)
        return (
        <div>
            <h2> No team selected </h2>
        </div>
    )

    return (
        <>
            <div>
                <h1>{singleTeam.name}</h1>
                <h3>{singleTeam.motto}</h3>
                <h3>Playing Style: {singleTeam.playingStyle}</h3>
                <h3>Fantasy Points: {singleTeam.totalFantasyPoints}</h3>
            </div>

            <h1>Players</h1>
            <div className="players-container">
                <h1 className="players-title">Players</h1>
                <Link to="/" className="home-link">
                    <button className="auth-button">Home</button>
                </Link>
                <ul className="players-list">
                    {singleTeam.team_member_ids.map((teamMember) => (
                    <li key={teamMember.id} className="player-item">
                        <Link to={`/players/${teamMember.id}`}>
                        {teamMember.name}
                        </Link>
                    </li>
                    ))}
                </ul>
    </div>
        </>

        
    )
    
}



export default TeamInfo

// Not sure what variables are going to be used or anything but this should be enough to make a team page
// Uncomment when we have a route that will actually go to this page