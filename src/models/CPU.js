import playerFactory from "./Player"

function cpuFactory() {
    const cpu = playerFactory("CPU")
    const opponentBoard = new Array(100).fill(null)
    cpu.attack = () => {
        const pos = Math.floor(Math.random() * 100)
        const attempts = 1
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