import React from 'react'

import Board from './Board'
// import CpuBoard from './CpuBoard'
// import PlayerDisplay from './PlayerDisplay'

import Player from "../models/Player"
import CPU from "../models/CPU"

const player = Player("Player")
const cpu = CPU()

function App() {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>BATTLESHIP!</h1>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Board type="Own" gameboard={player.gameboard.board}/>
                <Board type="Opponent" gameboard={cpu.gameboard.board} />
            </div>
            {
            // <CpuBoard />
            // <PlayerDisplay />
            }
        </div>
    )
}

export default App