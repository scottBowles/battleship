function shipFactory(length, name) {
    let unHitPips = length
    const hit = () => {
        unHitPips -= 1
        return isSunk() ? "sunk" : false
    }
    const isSunk = () => unHitPips < 1
    return {
        length,
        name,
        hit,
        isSunk
    }
}

export default shipFactory