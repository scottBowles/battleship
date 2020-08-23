import React from 'react'

function PlayerDisplay(props) {
    return (
        <div>
            <button name="placeShipsRandomly" onClick={ props.handlePlaceShipsRandomly }>Place Ships Randomly</button>
        </div>
    )
}

export default PlayerDisplay