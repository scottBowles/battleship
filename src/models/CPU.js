import playerFactory from "./Player"
import config from "./config"
import stdGameboardFactory from "./StdGameboard"

function cpuFactory(name="CPU", newGameboard=stdGameboardFactory) {
    const cpu = playerFactory(name, newGameboard)
    const { board, ships } = cpu.gameboard

    cpu.placeShipsRandomly(ships, board)

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