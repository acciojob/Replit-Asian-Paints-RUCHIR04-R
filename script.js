function changeColor() {
    let blockId = document.getElementById("block_id").value;
    let color = document.getElementById("colour_id").value;

    resetColors(); // Reset all colors to transparent

    if(blockId >= 1 && blockId <= 9) {
        document.getElementById(blockId).style.backgroundColor = color;
    }
}

function resetColors() {
    for(let i = 1; i <= 9; i++) {
        document.getElementById(i).style.backgroundColor = "transparent";
    }
}
