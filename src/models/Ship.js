function shipFactory(length, name, color, direction="horizontal") {
    const ship = {
        length,
        name,
        color,
        unHitPips: length,
    }
    
    ship.hit = () => {
        ship.unHitPips -= 1
        return ship.isSunk() ? "sunk" : false
    }

    ship.isSunk = () => ship.unHitPips < 1

    return ship
}

export default shipFactory