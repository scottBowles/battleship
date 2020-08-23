import playerFactory from "./Player"
import config from "./config"

function cpuFactory(name="CPU", newGameboard=config.newGameboard) {
    const cpu = playerFactory(name, newGameboard)
    const { board } = cpu.gameboard

    cpu.getValidStartingPosition = (length, direction, board) => {
        const startingPosition = Math.floor(Math.random() * 100)
        if ((direction === "horizontal" && startingPosition % 10 <= 10 - length)
            || (direction === "vertical" && Math.floor(startingPosition / 10) <= 10 - length)) {
                return startingPosition
            } else {
                return cpu.getValidStartingPosition(length, direction)
            }
    }

    cpu.placeShipsRandomly = (ships) => {
        ships.forEach(ship => {
            const { length, name } = ship
            const direction = Math.random() < .5 ? "horizontal" : "vertical"
            const startingPosition = cpu.getValidStartingPosition(length, direction, board)
            const positions = []
            if (direction === "horizontal") {
                for (let i = 0; i < length; i++) {
                    positions.push(startingPosition + i)
                }
            } else if (direction === "vertical") {
                for (let i = 0; i < length; i++) {
                    positions.push(startingPosition + (i * 10))
                }
            }
            cpu.placeShip(name, positions)
        })
    }

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