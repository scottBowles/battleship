
const isValidStartingPosition = (position, length, direction, board) => (
    (direction === "horizontal" && position % 10 <= 10 - length)
    || 
    (direction === "vertical" && Math.floor(position / 10) <= 10 - length)
)
const getValidStartingPosition = (length, direction, board) => {
    const startingPosition = Math.floor(Math.random() * 100)
    if (isValidStartingPosition(startingPosition, length, direction, board)) {
            return startingPosition
        } else {
            return getValidStartingPosition(length, direction)
        }
}

const getPositionsArray = (startingPosition, length, direction) => {
    const positions = []
    for (let i = 0; i < length; i++) {
        const newPosition = direction === "horizontal" 
            ? +startingPosition + i 
            : +startingPosition + (i * 10)
        positions.push(newPosition)
    }
    return positions
}

const isAvailableSpace = (board, positions) => (
    positions.reduce((acc, cur) => acc && board[cur] === null, true)
)


const getValidPositions = (length, board) => {
    const direction = Math.random() < .5 ? "horizontal" : "vertical"
    const startingPosition = getValidStartingPosition(length, direction, board)
    const positions = getPositionsArray(startingPosition, length, direction)
    if (!isAvailableSpace(board, positions)) return getValidPositions(length, board)
    return positions
}

const placeShipsRandomly = (ships, player) => {
    const { board, placeShip } = player.gameboard
    ships.forEach(ship => {
        const { length, name } = ship
        const positions = getValidPositions(length, board)
        placeShip(name, positions)
    })
    return board
}

export {
    isValidStartingPosition,
    getValidStartingPosition,
    getPositionsArray,
    isAvailableSpace,
    getValidPositions,
    placeShipsRandomly
}