import { useParams } from "react-router-dom"

const TeamInfo = (props) => {

    console.log(props) // Always verify that any props are being passed correctly!

    // Pull the NAME of selected Team into a variable
    const { teamName } = useParams()
    
    console.log('team NAME:', teamName)

    // Locates team with find(), so we can render data of that Team only!
    const singleTeam = props.teams.find((team) => 
        team.name === teamName) /* Finds team by its NAME */
    console.log('Team Object:', singleTeam)


    // This code will work when we place the axios calls in the right spot, like App.jsx


    






    if (!props.team)
        return (
        <div>
            <h2> No team selected </h2>
        </div>
    )

    return (
        <>
            <div>
                <h1>{props.team.name}</h1>
                <h3>{props.team.motto}</h3>
                <h3>Playing Style: {props.team.playingStyle}</h3>
                <h3>Fantasy Points: {props.team.totalFantasyPoints}</h3>
            </div>

            <h1>Players</h1>
            <div className="players-container">
                <h1 className="players-title">Players</h1>
                <Link to="/" className="home-link">
                    <button className="auth-button">Home</button>
                </Link>
                <ul className="players-list">
                    {props.team.team_member_ids.map((teamMember) => (
                    <li key={teamMember.id} className="player-item">
                        <Link to={`/players/${teamMember.name}`}>
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