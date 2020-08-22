import React, { useState } from 'react'

import Board from './Board'
// import PlayerDisplay from './PlayerDisplay'

function App(props) {
    const { player, opponent } = props

    const [playerBoard, setPlayerBoard] = useState(player.gameboard.board)
    const [opponentBoard, setOpponentBoard] = useState(opponent.gameboard.board)
    const [playerTurn, setPlayerTurn] = useState("Player")

    async function getAttackResult(position) {
        const attackResult = await opponent.receiveAttack(position)
        return attackResult
    }

    const handleCellClick = (position, whoseBoard) => {
        if (whoseBoard !== "Opponent" || playerTurn !== "Player") return

        const playerAttackResult = opponent.receiveAttack(position)
        if (playerAttackResult === "Position already attacked") return
        setOpponentBoard([...playerAttackResult])
        if (opponent.allSunk()) endGame(player)
        setPlayerTurn("Opponent")

        const attackedPosition = opponent.attack()
        const opponentAttackResult = player.receiveAttack(attackedPosition)
        setPlayerBoard([...opponentAttackResult])
        if (player.allSunk()) endGame(opponent)
        setPlayerTurn("Player")
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>BATTLESHIP!</h1>
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