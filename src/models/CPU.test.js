import cpuFactory from "./CPU"
import shipFactory from "./Ship"
import gameboardFactory from "./Gameboard"

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

test("happy path", () => {
    const cpu = cpuFactory()
    expect(cpu.attack()).not.toBe(null)
})

test("happy path 2", () => {
    const cpu = cpuFactory()
    expect(cpu.attack()).not.toBeNaN()
})

test("with mock", () => {
    const cpu = cpuFactory("CPU", gameboardFactory)
    expect(cpu.attack()).toEqual(77)
})

// test("get ship positions -- first try is valid -- horizontal", () => {
//     const cpu = cpuFactory("CPU", gameboardFactory)
//     expect(cpu.getValidStartingPosition(3, "horizontal")).toBe(77)
// })

// test("get ship positions -- first try is invalid -- horizontal", () => {
//     const cpu = cpuFactory("CPU", gameboardFactory)
//     expect(cpu.getValidStartingPosition(4, "horizontal")).toBe(32)
// })

// test("get ship positions -- first try is valid -- vertical", () => {
//     const cpu = cpuFactory("CPU", gameboardFactory)
//     expect(cpu.getValidStartingPosition(3, "vertical")).toBe(77)
// })

// test("get ship positions -- first try is invalid -- vertical", () => {
//     const cpu = cpuFactory("CPU", gameboardFactory)
//     expect(cpu.getValidStartingPosition(4, "vertical")).toBe(32)
// })

// test("place ships randomly", () => {
//     const cpu = cpuFactory("CPU", gameboardFactory)
//     const ship1 = shipFactory(3, "ship1")
//     const ship2 = shipFactory(2, "ship2")
//     cpu.placeShipsRandomly([ship1, ship2])
//     expect(cpu.gameboard.board[52]).toBe("ship1")
//     expect(cpu.gameboard.board[51]).toBe("ship2")
//     expect(cpu.gameboard.board[4]).toBe(null)
// })

// test("place ships randomly -- overlap risk", () => {
//     const cpu = cpuFactory("CPU", gameboardFactory)
//     const ship1 = shipFactory(3, "ship1")
//     const ship2 = shipFactory(5, "ship2")
//     cpu.placeShipsRandomly([ship1, ship2])
//     expect(cpu.gameboard.board[52]).toBe("ship1")
//     expect(cpu.gameboard.board[57]).toBe(null)
//     expect(cpu.gameboard.board[41]).toBe("ship2")
//     expect(cpu.gameboard.board[4]).toBe(null)
// })