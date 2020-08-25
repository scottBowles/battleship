import shipFactory from './Ship'

function gameboardFactory() {
    const board = new Array(100).fill(null)
    const ships = []
    const addShip = (length, name, color) => {
        const ship = shipFactory(length, name, color)
        ships.push(ship)
        return ship
    }
    const placeShip = (ship, positions) => { 
        board.forEach((space, index) => {
            if (space === ship) board[index] = null
        })
        positions.forEach(pos => board[pos] = ship)
        return board
    }
    const receiveAttack = (position) => {
        const hitResult = board[position]
        if (["miss", "hit"].includes(hitResult)) {
            return "Position already attacked"
        }
        if (hitResult !== null) {
            hitResult.hit()
        }
        board[position] = hitResult === null ? "miss" : "hit"
        return board
    }
    const allSunk = () => ships.reduce((acc, cur) => acc && cur.isSunk(), true)
    return {
        addShip,
        placeShip,
        receiveAttack,
        allSunk,
        board,
        ships
    }
}

export default gameboardFactory