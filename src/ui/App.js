import React from 'react'

import Board from './Board'
// import PlayerDisplay from './PlayerDisplay'

import Player from "../models/Player"
import CPU from "../models/CPU"


function App() {
    const player = Player("Player")
    const cpu = CPU()
    return (
        <div style={{ textAlign: "center" }}>
            <h1>BATTLESHIP!</h1>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Board type="Player" gameboard={player.gameboard.board}/>
                <Board type="Opponent" gameboard={cpu.gameboard.board} />
            </div>
            {
            // <PlayerDisplay />
            }
        </div>
    )
}

export default App