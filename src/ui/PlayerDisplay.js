import React from 'react'

function PlayerDisplay(props) {
    const { phase, handlePlaceShipsRandomly, startGame, newGame, winningPlayer, player, opponent } = props

    const display = phase === "setup"
        ? (
            <div>
                <h3>Place Your Ships!</h3>
                <div>
                    <button style={{ marginLeft: "10px", marginRight: "10px" }} name="placeShipsRandomly" onClick={ handlePlaceShipsRandomly }>Change Positions</button>
                    <button style={{ marginLeft: "10px", marginRight: "10px" }} name="startGame" onClick={ startGame }>Start Game</button>
                </div>
            </div>
        )
        : phase === "endgame" 
        ? (
            <div>
                <h3>{ winningPlayer.name } Wins!</h3>
                <button onClick={ newGame }>New Game?</button>
            </div>
        )
        : <h3>Attack!</h3>
    
    return (
        <div style={{ height: "65px" }}>
            { display }
        </div>
    )
}

export default PlayerDisplay