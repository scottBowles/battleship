import React from 'react'

function Board(props) {
    const { type, gameboard } = props
    const cells = gameboard.map((cell, index) => <div key={ index } style={ getCellStyle(cell, type) }></div>)
    
    return (
        <div>
            <h3>{type} Board</h3>
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

const getCellStyle = (cell, boardType) => {
    const getColor = (cellValue, boardType) => {
        if (boardType === "Player") {
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
                    return "grey"
                    break
                default:
                    return "white"
                    break
            }
        }
        if (boardType === "Opponent") {
            switch(cellValue) {
                case "hit":
                    return "red"
                    break
                case "miss":
                    return "grey"
                    break
                default:
                    return "white"
                    break
            }
        }
    }
    const color = getColor(cell, boardType)
    return {
        border: "1px black solid",
        backgroundColor: color
    }
}

export default Board