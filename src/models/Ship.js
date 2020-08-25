function shipFactory(length, name, color, direction="horizontal") {
    const ship = {
        length,
        name,
        color,
        direction,
        unHitPips: length,
    }

    ship.changeDirection = (newDirection) => ship.direction = newDirection
    
    ship.hit = () => {
        ship.unHitPips -= 1
        return ship.isSunk() ? "sunk" : false
    }

    ship.isSunk = () => ship.unHitPips < 1

    return ship
}

export default shipFactory