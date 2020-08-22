import shipFactory from './shipFactory'

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
        board[position] = board[position] === null ? "miss" : "hit"
        return board
    }
    const allSunk = () => {
        const isUnsunkValue = (val) => ![null, "hit", "miss"].includes(val)
        return (
            board.reduce((acc, cur) => acc && !isUnsunkValue(cur), true)
        )
    }
    return {
        addShip,
        placeShip,
        receiveAttack,
        allSunk,
        // may need board for dom
    }
}

export default gameboardFactory