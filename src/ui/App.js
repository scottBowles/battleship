import React, { useState } from 'react'

import Board from './Board'
import PlayerDisplay from './PlayerDisplay'
import DraggableShips from './DraggableShips'

import Player from "../models/Player"
import cpuFactory from "../models/CPU"
import { placeShipsRandomly, getPositionsArray, isValidStartingPosition, isAvailableSpace } from '../models/shipFns';

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
        const { ships } = player.gameboard
        const updatedBoard = placeShipsRandomly(ships, player)
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

    const dragStart = (ev) => {
        ev.dataTransfer.setData("text/plain", ev.target.dataset.name)
        ev.dataTransfer.dropEffect = "move";
    }

    function handleDrop(event) {
        event.preventDefault();
        
        const index = event.target.dataset.index
        const shipName = event.dataTransfer.getData("text/plain");
        const ship = player.gameboard.ships.find(ship => ship.name === shipName)
        const positions = getPositionsArray(index, ship.length, "horizontal")
        if (!isValidStartingPosition(index, ship.length, "horizontal", player.gameboard.board) || !isAvailableSpace(playerBoard, positions)) {
            return
        }
        player.placeShip(ship, positions)
        setPlayerBoard([...player.gameboard.board])
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>BATTLESHIP!</h1>
            <PlayerDisplay phase={ phase } winningPlayer={ winningPlayer } handlePlaceShipsRandomly={ handlePlaceShipsRandomly } startGame={ startGame } newGame={ newGame } player={ player } opponent={ opponent }/>
            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap-reverse" }}>
                <Board player={ player } whoseBoard="Player" board={ playerBoard } handleCellClick={ handleCellClick } handleDrop = { handleDrop } />
                <Board player={ opponent } whoseBoard="Opponent" board={ opponentBoard } handleCellClick={ handleCellClick } />
            </div>
            { phase === "setup" && <DraggableShips ships={ player.gameboard.ships } dragStart={ dragStart } /> }
        </div>
    )
}

export default App