import config from "./config"

function playerFactory(name, newGameboard=config.newGameboard) {
    let gameboard = newGameboard()
    const changeName = (newName) => name = newName
    const allSunk = () => gameboard.allSunk()
    const receiveAttack = (pos) => gameboard.receiveAttack(pos)
    const placeShip = (token, pos) => gameboard.placeShip(token, pos)
    const resetGameboard = () => gameboard = newGameboard()
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

    const getValidPositions = (length, board) => {
        const direction = Math.random() < .5 ? "horizontal" : "vertical"
        const startingPosition = getValidStartingPosition(length, direction, board)
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
        if (!isValid) return getValidPositions(length, board)
        return positions
    }

    const placeShipsRandomly = (ships, board) => {
        ships.forEach(ship => {
            const { length, name } = ship
            const positions = getValidPositions(length, board)
            placeShip(name, positions)
        })
        return board
    }
    return {
        name,
        receiveAttack,
        allSunk,
        placeShip,
        resetGameboard,
        isValidStartingPosition,
        getValidStartingPosition,
        getValidPositions,
        placeShipsRandomly,
        gameboard
    }
}

export default playerFactory