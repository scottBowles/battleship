import config from "./config"

function playerFactory(name, newGameboard=config.newGameboard) {
    let gameboard = newGameboard()
    const changeName = (newName) => name = newName
    const allSunk = () => gameboard.allSunk()
    const receiveAttack = (pos) => gameboard.receiveAttack(pos)
    const placeShip = (token, pos) => gameboard.placeShip(token, pos)
    const resetGameboard = () => gameboard = newGameboard()
    
    return {
        name,
        receiveAttack,
        allSunk,
        placeShip,
        resetGameboard,
        // isValidStartingPosition,
        // getValidStartingPosition,
        // getValidPositions,
        // placeShipsRandomly,
        gameboard
    }
}

export default playerFactory