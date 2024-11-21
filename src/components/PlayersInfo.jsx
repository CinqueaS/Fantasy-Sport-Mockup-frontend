import { useParams } from "react-router-dom"

const PlayerInfo = (props) => {

    console.log(props) // Always verify that any props are being passed correctly!

    // Pull the NAME of selected Player into a variable
    const { playerName } = useParams()
    
    console.log('player NAME:', playerName)

    // Locates player with find(), so we can render data of that Player only!
    const singlePlayer = props.players.find((player) => 
        player.name === playerName) /* Finds player by its NAME */
    console.log('Player Object:', singlePlayer)


    // This code will work when we place the axios calls in the right spot, like App.jsx


    






    if (!props.player)
        return (
        <div>
            <h2> No player selected </h2>
        </div>
    )

    return (
        <div>
            <h1>{props.player.name}</h1>
            <h3>Gender: {props.player.gender}</h3>
            <h3>Position: {props.player.position}</h3>
            <h3>Species: {props.player.species}</h3>
            <h3>Height in cm: {props.player.heightCm}</h3>
            <h3>Weight in kg: {props.player.weightKg}</h3>
            <h3>Yards: {props.player.yards}</h3>
            <h3>Touchdowns: {props.player.touchdowns}</h3>
            <h3>Interceptions: {props.player.interceptions}</h3>
            <h3>Fantasy Points: {props.player.fantasyPoints}</h3>
            <button onClick={() => props.handleFormView(props.player)}>Add to team</button>
        </div>
    )
    
}



export default PlayerInfo

// Not sure what variables are going to be used or anything but this should be enough to make a player page
// Uncomment when we have a route that will actually go to this page