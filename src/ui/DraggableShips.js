import React from 'react'

function DraggableShips(props) {
    const { ships, dragStart, toggleShipDirection } = props

    return(
        <div>
            <div style={{ display: "flex", marginLeft: "20px" }}>Drag in place. Click ship below to change direction.</div>
            <div style={{ display: "flex" }}>
                { ships.map(ship => (
                    <div key={ ship.name }>
                        <h4 style={{ marginBottom: "5px" }}>{ ship.name }</h4>
                        <div style={{ height: `${ship.length * 40}px`, width: `${ship.length * 40}px`, margin: "10px" }}>
                            <div
                                ship={ ship } 
                                onDragStart={ props.dragStart } 
                                draggable 
                                data-name={ship.name} 
                                data-ship={JSON.stringify(ship)}
                                style={ shipStyles(ship) }
                                onClick={ toggleShipDirection }
                            >
                                <div style={{ display: "flex", alignItems: "center", width: "40px", height: "40px" }}>
                                    <svg viewBox="0 0 100 80" width="40" height="40">
                                        <rect x="20" y="13" width="55" height="7"></rect>
                                        <rect x="20" y="30" width="55" height="7"></rect>
                                        <rect x="20" y="47" width="55" height="7"></rect>
                                    </svg>
                                </div>
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
            backgroundColor: ship.color,
            display: "flex"
    }
}

export default DraggableShips