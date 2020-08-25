import { getValidStartingPosition, placeShipsRandomly } from "./shipFns"
import playerFactory from "./Player"
import gameboardFactory from "./Gameboard"
import shipFactory from "./Ship"

beforeEach(() => {
    jest.spyOn(global.Math, 'random')
        .mockImplementationOnce(() => .77)
        .mockImplementationOnce(() => .32)
        .mockImplementationOnce(() => .44)
        .mockImplementationOnce(() => .50)
        .mockImplementationOnce(() => .53)
        .mockImplementationOnce(() => .01)
});

afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
})

test("get ship positions -- first try is valid -- horizontal", () => {
    const player = playerFactory("Player", gameboardFactory)
    expect(getValidStartingPosition(3, "horizontal")).toBe(77)
})

test("get ship positions -- first try is invalid -- horizontal", () => {
    const player = playerFactory("player", gameboardFactory)
    expect(getValidStartingPosition(4, "horizontal")).toBe(32)
})

test("get ship positions -- first try is valid -- vertical", () => {
    const player = playerFactory("player", gameboardFactory)
    expect(getValidStartingPosition(3, "vertical")).toBe(77)
})

test("get ship positions -- first try is invalid -- vertical", () => {
    const player = playerFactory("player", gameboardFactory)
    expect(getValidStartingPosition(4, "vertical")).toBe(32)
})

test("place ships randomly", () => {
    const player = playerFactory("player", gameboardFactory)
    const { board } = player.gameboard
    const ship1 = shipFactory(3, "ship1")
    const ship2 = shipFactory(2, "ship2")
    placeShipsRandomly([ship1, ship2], player)
    expect(board[52]).toBe(ship1)
    expect(board[51]).toBe(ship2)
    expect(board[4]).toBe(null)
})

test("place ships randomly -- overlap risk", () => {
    const player = playerFactory("player", gameboardFactory)
    const { board } = player.gameboard
    const ship1 = shipFactory(3, "ship1")
    const ship2 = shipFactory(5, "ship2")
    placeShipsRandomly([ship1, ship2], player)
    expect(board[52]).toBe(ship1)
    expect(board[57]).toBe(null)
    expect(board[41]).toBe(ship2)
    expect(board[4]).toBe(null)
})
