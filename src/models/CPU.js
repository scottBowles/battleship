import playerFactory from "./Player"
import config from "./config"
import stdGameboardFactory from "./StdGameboard"

function cpuFactory(name="CPU", newGameboard=stdGameboardFactory) {
    const cpu = playerFactory(name, newGameboard)
    const { board, ships } = cpu.gameboard

    cpu.getValidStartingPosition = (length, direction, board) => {
        const startingPosition = Math.floor(Math.random() * 100)
        if ((direction === "horizontal" && startingPosition % 10 <= 10 - length)
            || (direction === "vertical" && Math.floor(startingPosition / 10) <= 10 - length)) {
                return startingPosition
            } else {
                return cpu.getValidStartingPosition(length, direction)
            }
    }

    cpu.getValidPositions = (length, board) => {
        const direction = Math.random() < .5 ? "horizontal" : "vertical"
        const startingPosition = cpu.getValidStartingPosition(length, direction, board)
        const positions = []
        let isValid = true
        for (let i = 0; i < length; i++) {
            const newPosition = direction === "horizontal" 
                ? startingPosition + i 
                : startingPosition + (i * 10)
            if (board[newPosition]) {
                isValid = false
            }
            positions.push(newPosition)
        }
        if (!isValid) return cpu.getValidPositions(length, board)
        return positions
    }

    cpu.placeShipsRandomly = (ships) => {
        ships.forEach(ship => {
            const { length, name } = ship
            const positions = cpu.getValidPositions(length, board)
            cpu.placeShip(name, positions)
        })
    }

    cpu.placeShipsRandomly(ships)

    const opponentBoard = new Array(100).fill(null)

    cpu.attack = () => {
        let pos = Math.floor(Math.random() * 100)
        let attempts = 1
        while (opponentBoard[pos] !== null && attempts <= 100) {
            pos = Math.floor(Math.random() * 100)
            attempts++
        }
        opponentBoard[pos] = "attacked"
        return pos
    }

    return cpu
}

export default cpuFactory