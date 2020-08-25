import gameboardFactory from "./Gameboard"

function stdGameboardFactory() {
    const gameboard = gameboardFactory()
    gameboard.addShip(5, "Carrier", "#848482")
    gameboard.addShip(4, "Battleship", "#2F4F4F")
    gameboard.addShip(3, "Cruiser", "#555555")
    gameboard.addShip(3, "Submarine", "#36454F")
    gameboard.addShip(2, "Destroyer", "#2A3439")
    return gameboard
}

export default stdGameboardFactory