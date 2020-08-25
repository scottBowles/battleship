function shipFactory(length, name, color) {
    let unHitPips = length
    const hit = () => {
        unHitPips -= 1
        return isSunk() ? "sunk" : false
    }
    const isSunk = () => unHitPips < 1
    return {
        length,
        name,
        color,
        hit,
        isSunk
    }
}

export default shipFactory