import React from 'react'

function DraggableShips(props) {
    const { ships, dragStart } = props
    return(
        <div>
            <div style={{ display: "flex", marginLeft: "20px" }}>Drag in place. Right click ship below to change direction.</div>
            <div style={{ display: "flex" }}>
                { ships.map(ship => (
                    <div key={ ship.name } style={{ height: `${ship.length * 40}px`, width: `${ship.length * 40}px`, margin: "10px" }}>
                        <div
                            ship={ ship } 
                            onDragStart={ props.dragStart } 
                            draggable 
                            data-name={ship.name} 
                            style={ shipStyles(ship) }
                        >
                        </div>
                    </div>
                )) }
            </div>
        </div>
    )
}

function shipStyles(ship) {
    return {
            height: "40px", 
            width: `${ship.length * 40}px`, 
            margin: "5px", 
            backgroundColor: ship.color
    }
}

export default DraggableShips