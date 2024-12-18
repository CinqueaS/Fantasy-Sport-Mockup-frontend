import { useParams, Link } from "react-router-dom"
import * as teamService from '../services/teamsService'
const PlayerInfo = (props) => {

    // Pull the NAME of selected Player into a variable
    const { playerId} = useParams()

    // Locates player with find(), so we can render data of that Player only!
    const singlePlayer = props.players.find((player) => 
        player._id === playerId) /* Finds player by its Id */


    


    const handleAddPlayer = async () => {
        try {
          await teamService.addPlayerToTeam(props.userId, props.teamId, singlePlayer._id)
          alert(`${singlePlayer.name} has been added to the team!`)
           props.handlePlayerAddition(singlePlayer)
        } catch (error) {
          console.error("Error adding player:", error)
          alert("Failed to add player. Please try again.")
        }
      }
 

      





    if (!singlePlayer)
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
                  <h2> No player selected </h2>
                </div>
            </>
    )

    return (
        <>
        <div>
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
            <h1>{singlePlayer.name}</h1>
            <h3>Gender: {singlePlayer.gender}</h3>
            <h3>Position: {singlePlayer.position}</h3>
            <h3>Species: {singlePlayer.species}</h3>
            <h3>Height in cm: {singlePlayer.heightCm}</h3>
            <h3>Weight in kg: {singlePlayer.weightKg}</h3>
            <h3>Yards: {singlePlayer.yards}</h3>
            <h3>Touchdowns: {singlePlayer.touchdowns}</h3>
            <h3>Interceptions: {singlePlayer.interceptions}</h3>
            <h3>Fantasy Points: {singlePlayer.fantasyPoints}</h3>

            {singlePlayer.isDrafted ? (
                <Link to={`/teams/${singlePlayer.owner_id.team._id}`}>
                <h3>Drafted to the {singlePlayer.owner_id.team.teamName}</h3>
                </Link>
                ) : (
            <button className="auth-button" onClick={handleAddPlayer}>Add to team</button>
        )}

            <button className="auth-button" onClick={() => props.deletePlayer(singlePlayer._id)}>Delete</button>
            <Link to={`/Players/creator`}>
            <button className="auth-button" onClick={() => props.updateSelectedPlayer(singlePlayer)}>Update Stats</button>
            </Link>
        
        </div>
        </>
    )
    
}



export default PlayerInfo

