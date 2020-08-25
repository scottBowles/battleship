import React from 'react'

function DraggableShips(props) {
    const { ships, dragStart, toggleShipDirection } = props

    return(
        <div>
            <div style={{ display: "flex", marginLeft: "20px" }}>Drag in place. Click ship below to change direction.</div>
            <div style={{ display: "flex" }}>
                { ships.map(ship => (
                    <div>
                        <h4 style={{ marginBottom: "5px" }}>{ ship.name }</h4>
                        <div key={ ship.name } style={{ height: `${ship.length * 40}px`, width: `${ship.length * 40}px`, margin: "10px" }}>
                            <div
                                ship={ ship } 
                                onDragStart={ props.dragStart } 
                                draggable 
                                data-name={ship.name} 
                                data-ship={JSON.stringify(ship)}
                                style={ shipStyles(ship) }
                                onClick={ toggleShipDirection }
                            >
                            </div>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    )
}

function shipStyles(ship) {
    const { direction } = ship
    return {
            height: direction === "vertical" ? `${ship.length * 40}px` : "40px", 
            width: direction === "horizontal" ? `${ship.length * 40}px` : "40px", 
            backgroundColor: ship.color
    }
}

export default DraggableShips