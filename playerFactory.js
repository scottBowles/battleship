import config from "./config"

function playerFactory(name, newGameboard=config.newGameboard) {
    const gameboard = newGameboard()
    const allSunk = () => gameboard.allSunk()
    const receiveAttack = (pos) => gameboard.receiveAttack(pos)
    const placeShip = (token, pos) => gameboard.placeShip(token, pos)
    const resetGameboard = () => gameboard = newGameboard()
    return {
        name,
        receiveAttack,
        allSunk,
        placeShip,
        resetGameboard
        // may need gameboard for DOM
    }
}

export default playerFactory