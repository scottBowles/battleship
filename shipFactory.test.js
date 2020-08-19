import shipFactory from './shipFactory'

test("Ship size", () => {
    expect(shipFactory(5).length).toBe(5)
})

test("Ship size test 2", () => {
    expect(shipFactory(4).length).toBe(4)
})

test("Hit to sunk", () => {
    const ship = shipFactory(3)
    ship.hit(0)
    ship.hit(2)
    ship.hit(1)
    expect(ship.isSunk()).toBe(true)
})

test("Hit but not sunk", () => {
    const ship = shipFactory(3)
    ship.hit(0)
    ship.hit(2)
    expect(ship.isSunk()).toBe(false)
})

test("Hit twice in one place; not sunk", () => {
    const ship = shipFactory(3)
    ship.hit(0)
    ship.hit(0)
    ship.hit(2)
    expect(ship.isSunk()).toBe(false)
})

test("Hit twice in one place; sunk", () => {
    const ship = shipFactory(3)
    ship.hit(0)
    ship.hit(0)
    ship.hit(1)
    ship.hit(2)
    expect(ship.isSunk()).toBe(true)
})

test("Hit called with arg outside of ship length range; not sunk", () => {
    const ship = shipFactory(3)
    ship.hit(6)
    ship.hit(0)
    ship.hit(2)
    expect(ship.isSunk()).toBe(false)
})

test("Hit called with arg outside of ship length range; sunk", () => {
    const ship = shipFactory(3)
    ship.hit(4)
    ship.hit(0)
    ship.hit(1)
    ship.hit(2)
    expect(ship.isSunk()).toBe(true)
})

