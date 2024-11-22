import { useParams } from "react-router-dom"

const PlayerInfo = (props) => {

    // Pull the NAME of selected Player into a variable
    const { playerId } = useParams()
    
    console.log('player ID:', playerId)

    // Locates player with find(), so we can render data of that Player only!
    const singlePlayer = props.players.find((player) => 
        player._id === playerId) /* Finds player by its NAME */
    console.log('Player Object:', singlePlayer)


    // This code will work when we place the axios calls in the right spot, like App.jsx


    






    if (!singlePlayer)
        return (
        <div>
            <h2> No player selected </h2>
        </div>
    )

    return (
        <div>
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
            <button onClick={() => props.handleFormView(singlePlayer)}>Add to team</button>
        </div>
    )
    
}



export default PlayerInfo

// Not sure what variables are going to be used or anything but this should be enough to make a player page
// Uncomment when we have a route that will actually go to this page