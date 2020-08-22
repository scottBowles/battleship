import preplacedGameboardFactory from "./PreplacedGameboard"

test("happy path", () => {
    const gameboard = preplacedGameboardFactory()
    gameboard.receiveAttack(90)
    gameboard.receiveAttack(91)
    const board = gameboard.receiveAttack(92)
    expect(board[90]).toBe("hit")
    expect(board[91]).toBe("hit")
    expect(board[92]).toBe("miss")
})