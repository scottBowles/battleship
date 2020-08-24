import React from 'react'

function DraggableShips(props) {
    return(
        <div>
            <div onDragStart={ props.dragStart } draggable data-name="Carrier" style={{height: "30px", width: "120px", backgroundColor: "pink"}}></div>
        </div>
    )
}

export default DraggableShips