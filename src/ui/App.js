import React, { useState } from 'react'

import Board from './Board'
import PlayerDisplay from './PlayerDisplay'

function App(props) {
    const { player, opponent } = props

    const [playerBoard, setPlayerBoard] = useState(player.gameboard.board)
    const [opponentBoard, setOpponentBoard] = useState(opponent.gameboard.board)
    const [phase, setPhase] = useState("playerTurn")

    const playerAttack = (position) => {
        const playerAttackResult = opponent.receiveAttack(position)
        if (playerAttackResult === "Position already attacked") return false
        setOpponentBoard([...playerAttackResult])
        if (opponent.allSunk()) endGame(player)
        setPhase("opponentTurn")
        return true
    }

    const opponentAttack = (position) => {
        const attackedPosition = opponent.attack()
        const opponentAttackResult = player.receiveAttack(attackedPosition)
        setPlayerBoard([...opponentAttackResult])
        if (player.allSunk()) endGame(opponent)
        setPhase("playerTurn")
    }

    const handleCellClick = (position, whoseBoard) => {
        if (whoseBoard !== "Opponent" || phase !== "playerTurn") return
        const isValidPlay = playerAttack(position)   
        if (isValidPlay) {
            setTimeout(() => {
                opponentAttack(position)
            }, 300)
        } 
    }

    const handlePlaceShipsRandomly = () => {
        const { ships, board } = player.gameboard
        const updatedBoard = player.placeShipsRandomly(ships, board)
        setPlayerBoard([...updatedBoard])
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>BATTLESHIP!</h1>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Board whoseBoard="Player" name={ player.name } gameboard={ playerBoard } handleCellClick={ handleCellClick } />
                <Board whoseBoard="Opponent" name={ opponent.name } gameboard={ opponentBoard } handleCellClick={ handleCellClick } />
            </div>
            <PlayerDisplay handlePlaceShipsRandomly={ handlePlaceShipsRandomly } />
        </div>
    )
}

export default App