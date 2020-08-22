import stdGameboardFactory from "./stdGameboardFactory"

function preplacedGameboardFactory() {
    const board = stdGameboardFactory()
    board.placeShip("Carrier", [0, 1, 2, 3, 4])
    board.placeShip("Battleship", [21, 31, 41, 51])
    board.placeShip("Cruiser", [85, 86, 87])
    board.placeShip("Submarine", [44, 54, 64])
    board.placeShip("Destroyer", [90, 91])
    return board
}

export default preplacedGameboardFactory