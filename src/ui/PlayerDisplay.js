import React from 'react'

function PlayerDisplay(props) {
    const { phase, handlePlaceShipsRandomly, startGame, newGame, winningPlayer, player, opponent } = props

    return phase === "setup"
        ? (
            <div>
                <h3>Place Your Ships!</h3>
                <button name="placeShipsRandomly" onClick={ handlePlaceShipsRandomly }>Place Ships Randomly</button>
                <button name="startGame" onClick={ startGame }>Start Game</button>
            </div>
        )
        : phase === "endgame" 
        ? (
            <div>
                <h3>{ winningPlayer.name } Wins!</h3>
                <button onClick={ newGame }>New Game?</button>
            </div>
        )
        : phase === "playerTurn"
        ? (
            <div>
                <h3>{player.name}'s Turn</h3>
            </div>
        )
        : phase === "opponentTurn"
        ? (
            <div>
                <h3>{opponent.name}'s Turn</h3>
            </div>
        )
        : null
}

export default PlayerDisplay