import playerFactory from "./Player"
import config from "./config"
import stdGameboardFactory from "./StdGameboard"
import { placeShipsRandomly } from "./shipFns"

function cpuFactory(name="Computer", newGameboard=stdGameboardFactory) {
    const cpu = playerFactory(name, newGameboard)
    const { board, ships } = cpu.gameboard

    placeShipsRandomly(ships, cpu)

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