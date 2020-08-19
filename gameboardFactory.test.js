import gameboardFactory from './gameboardFactory'

test("Place ship", () => {
    const gameboard = gameboardFactory()
    gameboard.addShip(4)
    gameboard.placeShip(0, 0)
    expect(gameboard.board[0] === 0)
})

// test("Place ship", () => {
//     const gameboard = gameboardFactory()

// })