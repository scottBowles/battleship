import gameboardFactory from './gameboardFactory'

test("Place ship", () => {
    const gameboard = gameboardFactory()
    const ship = gameboard.addShip(4, 0)
    const board = gameboard.placeShip(ship.name, [0, 1, 2, 3])
    expect(board[0]).toBe(0)
    expect(board[1]).toBe(0)
    expect(board[2]).toBe(0)
    expect(board[4]).not.toBe(0)
})

test("Place ship 2", () => {
    const gameboard = gameboardFactory()
    const ship = gameboard.addShip(4, "Battleship")
    const board = gameboard.placeShip(ship.name, [0, 1, 2, 3])
    expect(board[0]).toBe("Battleship")
    expect(board[1]).toBe("Battleship")
    expect(board[2]).toBe("Battleship")
    expect(board[4]).not.toBe("Battleship")
})

test("Move ship", () => {
    const gameboard = gameboardFactory()
    const ship = gameboard.addShip(4, "Battleship")
    const firstBoard = gameboard.placeShip(ship.name, [0, 1, 2, 3])
    const board = gameboard.placeShip(ship.name, [0, 11, 21, 31])
    expect(board[0]).toBe("Battleship")
    expect(board[1]).not.toBe("Battleship")
    expect(board[2]).not.toBe("Battleship")
    expect(board[11]).toBe("Battleship")
    expect(board[21]).toBe("Battleship")
})

test("Receive attack (miss)!", () => {
    const gameboard = gameboardFactory()
    const board = gameboard.receiveAttack(12)
    expect(board[12]).toBe("miss")
})

test("Receive hit", () => {
    const gameboard = gameboardFactory()
    const ship = gameboard.addShip(4, "Battleship")
    const board = gameboard.placeShip(ship.name, [0, 1, 2, 3])
    const updatedBoard = gameboard.receiveAttack(3)
    expect(updatedBoard[3]).toBe("hit")
})

test("Attack in position already attacked", () => {
    const gameboard = gameboardFactory()
    gameboard.receiveAttack(3)
    expect(gameboard.receiveAttack(3)).toBe("Position already attacked")
})

test("allSunk -- true", () => {
    const gameboard = gameboardFactory()
    const ship = gameboard.addShip(2, "Destroyer")
    const board = gameboard.placeShip(ship.name, [33, 34])
    const updatedBoard1 = gameboard.receiveAttack(33)
    const updatedBoard2 = gameboard.receiveAttack(34)
    expect(gameboard.allSunk()).toBe(true)
})

test("allSunk -- false", () => {
    const gameboard = gameboardFactory()
    const ship = gameboard.addShip(2, "Destroyer")
    const board = gameboard.placeShip(ship.name, [33, 34])
    const updatedBoard1 = gameboard.receiveAttack(33)
    expect(gameboard.allSunk()).toBe(false)
})

test("allSunk -- no boats", () => {
    const gameboard = gameboardFactory()
    expect(gameboard.allSunk()).toBe(true)
})