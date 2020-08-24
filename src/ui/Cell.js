import React, { useState } from 'react'
import style from "./Cell.css"

function Cell (props) {
    const { index, value, whoseBoard, position, handleCellClick, handleDrop } = props
    
    function handleDragover(ev) {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "move";
    }

    return (
        <div id="grid" onDrop={ handleDrop } onDragOver={ handleDragover} onClick={() => handleCellClick(position, whoseBoard)} style={ getCellStyle(value, whoseBoard) }>
            <span data-index={ index } className="overlay"></span>
        </div>
    )
}

const getCellStyle = (cellValue, whoseBoard) => {
    const getColor = (cellValue, whoseBoard) => {
        if (whoseBoard === "Player") {
            switch (cellValue) {
                case "Carrier":
                    return "yellow"
                    break
                case "Battleship":
                    return "green"
                    break
                case "Cruiser":
                    return "orange"
                    break
                case "Submarine":
                    return "blue"
                    break
                case "Destroyer":
                    return "purple"
                    break
                case "hit":
                    return "red"
                    break
                case "miss":
                    return "rgba(0, 0, 0, .35)"
                    break
                default:
                    return "white"
                    break
            }
        }
        if (whoseBoard === "Opponent") {
            switch(cellValue) {
                case "hit":
                    return "red"
                    break
                case "miss":
                    return "rgba(0, 0, 0, .35)"
                    break
                default:
                    return "white"
                    break
            }
        }
    }
    const color = getColor(cellValue, whoseBoard)
    return {
        border: "1px black solid",
        backgroundColor: color
    }
}


export default Cell