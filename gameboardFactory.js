import shipFactory from './shipFactory'

function gameboardFactory() {
    const board = new Array(100)
    const ships = []
    const addShip = (length) => {
        const ship = shipFactory(length)
        ships.push(ship)
    }
    const placeShip = (pos, ship) => { board[pos] = ship }
    return {
        board,
        addShip,
        placeShip
    }
}

export default gameboardFactory