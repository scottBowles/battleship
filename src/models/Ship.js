function shipFactory(length, name, color, direction="horizontal") {
    const ship = {
        length,
        name,
        color,
        direction,
        unHitPips: length,
    }
    
    ship.hit = () => {
        ship.unHitPips -= 1
        return ship.isSunk() ? "sunk" : false
    }

    ship.isSunk = () => ship.unHitPips < 1

    ship.toggleDirection = () => {
        ship.direction = 
            ship.direction === "horizontal" 
            ? "vertical" 
            : "horizontal"
    }

    return ship
}

export default shipFactory