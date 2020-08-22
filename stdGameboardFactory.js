import gameboardFactory from "./gameboardFactory"

function stdGameboardFactory() {
    const board = gameboardFactory()
    board.addShip(5, "Carrier")
    board.addShip(4, "Battleship")
    board.addShip(3, "Cruiser")
    board.addShip(3, "Submarine")
    board.addShip(2, "Destroyer")
}

export default stdGameboardFactory