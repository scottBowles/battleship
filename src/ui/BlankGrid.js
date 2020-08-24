import React from 'react'

function BlankGrid() {
    function handleDragover(ev) {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "move";
       }
    function handleDrop(ev) {
        ev.preventDefault();
        console.log(ev.target)
        // Get the id of the target and add the moved element to the target's DOM
        const data = ev.dataTransfer.getData("text/plain");
        ev.target.appendChild(document.getElementById(data));
    }
    return (
        <div style={wrapper}>
            <div style={gridStyle} id="blankGrid" onDrop={ handleDrop } onDragOver={ handleDragover}></div>
        </div>
    )
}

const gridStyle = { 
    height: "400px",
    width: "400px",
    display: "grid", 
    gridTemplateRows: "repeat(10, 1fr)", 
    gridTemplateColumns: "repeat(10, 1fr)",
    margin: "32px",
    gap: "10px"
}

const wrapper = {
    height: "400px",
    width: "400px",
    backgroundColor: "navy"
}

export default BlankGrid