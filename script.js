function changeColor() {
  const blockId = document.getElementById("block_id").value;
  const color = document.getElementById("colour_id").value;

  if (blockId < 1 || blockId > 9 || isNaN(blockId)) {
    alert("Please enter a valid Block ID (1-9).");
    return;
  }

  if (!color) {
    alert("Please enter a valid color.");
    return;
  }

  resetColors();

  
  const gridItem = document.getElementById(blockId);
  if (gridItem) {
    gridItem.style.backgroundColor = color;
  }
}

function resetColors() {
  for (let i = 1; i <= 9; i++) {
    const gridItem = document.getElementById(i);
    if (gridItem) {
      gridItem.style.backgroundColor = "transparent";
    }
  }
}