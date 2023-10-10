// Get a reference to the block element
const block = document.querySelector('.block');

// Function to update the block's position based on mouse movement
function moveBlock(event) {
    // Get the mouse's X and Y coordinates
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculate the new position for the block (centered on cursor)
    const blockX = mouseX - block.offsetWidth / 2;
    const blockY = mouseY - block.offsetHeight / 2;

    // Update the block's position
    block.style.left = blockX + 'px';
    block.style.top = blockY + 'px';
}

// Add an event listener to track mouse movement
document.addEventListener('mousemove', moveBlock);

