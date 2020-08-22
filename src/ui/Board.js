import React from 'react'

function Board(props) {
    const { type, gameboard } = props
    const cells = gameboard.map((cell, index) => <div key={ index } style={ getCellStyle(cell) }></div>)
    
    return (
        <div>
            <h3>{type} Board</h3>
            <div style={ grid }>
                { cells }
            </div>
        </div>
    )
}

const grid = { 
    height: "400px",
    width: "400px",
    display: "grid", 
    gridTemplateRows: "repeat(10, 1fr)", 
    gridTemplateColumns: "repeat(10, 1fr)",
    margin: "32px"
}

const getCellStyle = (cell) => {
    const getColor = (cellValue) => {
        switch (cellValue) {
            case "hit":
                return "red"
                break
            case "miss":
                return "grey"
                break
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
            default:
                return "white"
                break
        }
    }
    const color = getColor(cell)
    return {
        border: "1px black solid",
        backgroundColor: color
    }
}

export default Board