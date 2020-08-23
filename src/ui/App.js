import React, { useState } from 'react'

import Board from './Board'
import PlayerDisplay from './PlayerDisplay'

import Player from "../models/Player"
import cpuFactory from "../models/CPU"

function App() {
    const [player, setPlayer] = useState(Player("Player"))
    const [opponent, setOpponent] = useState(cpuFactory())
    const [playerBoard, setPlayerBoard] = useState(player.gameboard.board)
    const [opponentBoard, setOpponentBoard] = useState(opponent.gameboard.board)
    const [phase, setPhase] = useState("setup")
    const [winningPlayer, setWinningPlayer] = useState()

    const playerAttack = (position) => {
        const playerAttackResult = opponent.receiveAttack(position)
        if (playerAttackResult === "Position already attacked") return false
        setOpponentBoard([...playerAttackResult])
        if (opponent.allSunk()) {
            endGame(player)
        } else {
            setPhase("opponentTurn")
            return true
        }
    }

    const opponentAttack = (position) => {
        const attackedPosition = opponent.attack()
        const opponentAttackResult = player.receiveAttack(attackedPosition)
        setPlayerBoard([...opponentAttackResult])
        if (player.allSunk()) {
            endGame(opponent)
        } else {
            setPhase("playerTurn")
        }
    }

    const endGame = (winningPlayer) => {
        setPhase("endgame")
        setWinningPlayer(winningPlayer)
    }

    const handleCellClick = (position, whoseBoard) => {
        if (whoseBoard !== "Opponent" || phase !== "playerTurn") return
        const isValidPlay = playerAttack(position)   
        if (isValidPlay && phase !== "endgame") {
            setTimeout(() => {
                opponentAttack(position)
            }, 300)
        } 
    }

    const handlePlaceShipsRandomly = () => {
        const { ships, board } = player.gameboard
        console.log({ships, board})
        const updatedBoard = player.placeShipsRandomly(ships, board)
        setPlayerBoard([...updatedBoard])
    }

    const startGame = () => {
        setPhase("playerTurn")
    }

    const newGame = () => {
        setPhase("setup")
        const playerName = player.name
        const newPlayer = Player(playerName || "Player")
        const newOpponent = cpuFactory()
        setPlayer(newPlayer)
        setPlayerBoard([...newPlayer.gameboard.board])
        setOpponent(newOpponent)
        setOpponentBoard([...newOpponent.gameboard.board])
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>BATTLESHIP!</h1>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Board whoseBoard="Player" name={ player.name } gameboard={ playerBoard } handleCellClick={ handleCellClick } />
                <Board whoseBoard="Opponent" name={ opponent.name } gameboard={ opponentBoard } handleCellClick={ handleCellClick } />
            </div>
            <PlayerDisplay phase={ phase } winningPlayer={ winningPlayer } handlePlaceShipsRandomly={ handlePlaceShipsRandomly } startGame={ startGame } newGame={ newGame } player={ player } opponent={ opponent }/>
        </div>
    )
}

export default App