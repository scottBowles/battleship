import React from 'react'
import Cell from './Cell'


function Board(props) {
    const { whoseBoard, player, board, handleCellClick, handleDrop } = props
    
    const cells = board.map((cell, index) => (
        <Cell 
            index={ index }
            value={ cell } 
            whoseBoard={ whoseBoard } 
            position={ index }
            handleCellClick={ handleCellClick }
            key={ index } 
            handleDrop={ handleDrop }
        >
        </Cell>
    ))

    return (
        <div>
            <h3>{ player.name }'s Board</h3>
            <div style={ gridStyle }>
                { cells }
            </div>
        </div>
    )
}

const gridStyle = { 
    height: "400px",
    width: "400px",
    display: "grid", 
    gridTemplateRows: "repeat(10, 1fr)", 
    gridTemplateColumns: "repeat(10, 1fr)",
    margin: "32px"
}

export default Board