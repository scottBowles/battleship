import React from 'react'

function DraggableShips(props) {
    const { ships, dragStart } = props
    return(
        <div style={{ display: "flex" }}>
            { ships.map(ship => (
                <div 
                    key={ ship.name } 
                    ship={ ship } 
                    onDragStart={ props.dragStart } 
                    draggable data-name={ship.name} 
                    style={ shipStyles(ship) }
                >
                </div>    
            )) 
            }
        </div>
    )
}

function shipStyles(ship) {
    return {
            height: "30px", 
            width: `${ship.length * 40}px`, 
            margin: "5px", 
            backgroundColor: ship.color
    }
}

export default DraggableShips