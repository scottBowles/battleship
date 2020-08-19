function shipFactory(length) {
    const pips = new Array(length).fill(false)
    const hit = (pos) => pips[pos] = true
    const isSunk = () => pips.reduce((acc, cur) => acc && cur)
    return {
        length,
        hit,
        isSunk
    }
}

export default shipFactory