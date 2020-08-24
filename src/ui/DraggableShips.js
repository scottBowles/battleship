import React from 'react'

function DraggableShips(props) {
    const { ships, dragStart } = props
    return(
        <div style={{ display: "flex" }}>
            { ships.map(ship => (
                <div key={ ship.name } onDragStart={ props.dragStart } draggable data-name={ship.name} style={{height: "30px", width: `${ship.length * 40}px`, margin: "5px", backgroundColor: "pink"}}></div>    
            )) }
        </div>
    )
}

export default DraggableShips