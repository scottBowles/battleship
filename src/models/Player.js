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
        changeName,
        receiveAttack,
        allSunk,
        placeShip,
        resetGameboard,
        gameboard
    }
}

export default playerFactory