document.getElementById('change_button').addEventListener('click', function() {
    const blockId = document.getElementById('block_id').value;
    const color = document.getElementById('colour_id').value;

    if (blockId < 1 || blockId > 9) {
        alert("Please enter a valid Block ID (1-9).");
        return;
    }

    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });

    // Change the background color of the selected grid item
    const selectedItem = document.getElementById(`grid-item-${blockId}`);
    selectedItem.style.backgroundColor = color;
});

document.getElementById('reset_button').addEventListener('click', function() { // Corrected ID
    // Reset all grid items to transparent
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });
    document.getElementById('block_id').value = '';
    document.getElementById('colour_id').value = '';
});