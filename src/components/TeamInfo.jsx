import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../App.css'

const TeamInfo = (props) => {

    /* console.log('The props!', props) */

    // Pull the NAME of selected Team into a variable
    const { teamId } = useParams()
    
    /* console.log('team ID:', teamId) */

    // Locates team with find(), so we can render data of that Team only!
    const singleTeam = props.teams.find((team) => 
        team._id === teamId) /* Finds team by its ID */
    /* console.log('Team Object:', singleTeam) */


    // This code will work when we place the axios calls in the right spot, like App.jsx

    const reloadPage = () => {

        window.location.reload()
    }
    






    if (!singleTeam)
        return (
        <div>
            <h2> No team selected </h2>
        </div>
    )

    return (
        <>
        <div className="landing-buttons">
            <Link to="/" className="landing-button">
                Home
            </Link>
            <Link to="/players" className="landing-button"> 
              See Players! 
            </Link>
            <Link to="/teams" className="landing-button"> 
              See Teams! 
            </Link>
            </div>
            <div>
                <h1>{singleTeam.teamName}</h1>
                <h3>{singleTeam.motto}</h3>
                <h3>Playing Style: {singleTeam.playingStyle}</h3>
                <h3>Fantasy Points: {singleTeam.totalFantasyPoints}</h3>
                <h3>{singleTeam.description}</h3>
            </div>

            <div className="players-container">
                <h1 className="players-title">Players</h1>
                <Link to="/" className="home-link">
                    <button className="auth-button">Home</button>
                </Link>
                <ul className="players-list">
                    {singleTeam.team_member_ids.map((teamMember) => (
                    <li key={teamMember.id} className="player-item">
                        <Link to={`/players/${teamMember._id}`}>
                        {teamMember.name}
                        <h3>{teamMember.name} ({teamMember.fantasyPoints} points)</h3>
                        <h4>{teamMember.position}</h4>
                        <h4>{teamMember.isSuperNatural ? `POWER PLAYER!` : `Sportsballer!`}</h4>
                        </Link>
                    </li>
                    ))}
                </ul>
                
                <button className='landing-button' onClick={() => {props.deleteTeam(props.user._id, singleTeam._id); reloadPage()} }>
                    <Link to ={`/teams`} >Delete Your Team</Link></button>
    </div>
        </>

        
    )
    
}



export default TeamInfo

// {props.user.team._id === singleTeam._id ? (
//     <button className='landing-button' onClick={() => {props.deleteTeam(props.user._id, singleTeam._id); reloadPage()} }>
//         <Link to ={`/teams`} >Delete Your Team</Link></button>
//         ) : (
//             <button className='landing-button' disabled>
//         <Link to ={`/teams`} >You do not own this team!</Link></button>
//         )}