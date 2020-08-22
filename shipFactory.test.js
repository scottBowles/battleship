import shipFactory from './shipFactory'

test("Ship size", () => {
    expect(shipFactory(5, "test").length).toBe(5)
})

test("Ship size test 2", () => {
    expect(shipFactory(4, "test").length).toBe(4)
})

test("Hit to sunk", () => {
    const ship = shipFactory(3, "test")
    ship.hit()
    ship.hit()
    ship.hit()
    expect(ship.isSunk()).toBe(true)
})

test("Hit but not sunk", () => {
    const ship = shipFactory(3, "test")
    ship.hit()
    ship.hit()
    expect(ship.isSunk()).toBe(false)
})

test("Hit twice in one place; sunk", () => {
    const ship = shipFactory(3, "test")
    ship.hit(0)
    ship.hit(0)
    ship.hit(1)
    ship.hit(2)
    expect(ship.isSunk()).toBe(true)
})

test("With a name", () => {
    const ship = shipFactory(3, "Battleship")
    expect(ship.name).toBe("Battleship")
})
