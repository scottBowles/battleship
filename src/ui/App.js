import React, { useState } from 'react'

import Board from './Board'
// import PlayerDisplay from './PlayerDisplay'

function App(props) {
    console.log('render App')

    const { player, opponent } = props

    const [playerBoard, setPlayerBoard] = useState(player.gameboard.board)
    const [opponentBoard, setOpponentBoard] = useState(opponent.gameboard.board)

    async function getAttackResult(position) {
        const attackResult = await opponent.receiveAttack(position)
        return attackResult
    }

    const handleCellClick = (position, whoseBoard) => {
        if (whoseBoard === "Opponent"){
            const attackResult = opponent.receiveAttack(position)
            if (attackResult !== "Position already attacked") {
                setOpponentBoard([...attackResult])
            }
        }
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>BATTLESHIP!</h1>
            <p>{opponentBoard[0]}</p>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Board whoseBoard="Player" gameboard={ playerBoard } handleCellClick={ handleCellClick } />
                <Board whoseBoard="Opponent" gameboard={ opponentBoard } handleCellClick={ handleCellClick } />
            </div>
            {
            // <PlayerDisplay />
            }
        </div>
    )
}

export default App