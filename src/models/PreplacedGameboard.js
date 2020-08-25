import stdGameboardFactory from "./StdGameboard"

function preplacedGameboardFactory() {
    const gameboard = stdGameboardFactory()
    const [ carrier, battleship, cruiser, submarine, destroyer ] = gameboard.ships
    gameboard.placeShip(carrier, [0, 1, 2, 3, 4])
    gameboard.placeShip(battleship, [21, 31, 41, 51])
    gameboard.placeShip(cruiser, [85, 86, 87])
    gameboard.placeShip(submarine, [44, 54, 64])
    gameboard.placeShip(destroyer, [90, 91])
    return gameboard
}

export default preplacedGameboardFactory