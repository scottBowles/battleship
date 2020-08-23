import shipFactory from './Ship'

function gameboardFactory() {
    const board = new Array(100).fill(null)
    const ships = []
    const addShip = (length, name=ships.length) => {
        const ship = shipFactory(length, name)
        ships.push(ship)
        return ship
    }
    const placeShip = (token, positions) => { 
        board.forEach((space, index) => {
            if (space === token) board[index] = null
        })
        positions.forEach(pos => board[pos] = token)
        return board
    }
    const receiveAttack = (position) => {
        const value = board[position]
        if (["miss", "hit"].includes(value)) {
            return "Position already attacked"
        }
        if (value !== null) {
            const hitShip = ships.find(ship => ship.name === value)
            hitShip.hit()
        }
        board[position] = value === null ? "miss" : "hit"
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