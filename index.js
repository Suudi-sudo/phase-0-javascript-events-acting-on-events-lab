// Your code here


const dodger = document.getElementById('dodger');

// Moves the DODGER to the left
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);

    if (left > 0) { // Prevent moving out of bounds
        dodger.style.left = `${left - 10}px`;
    }
}

// Moves the DODGER to the right
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);

    // Assuming the game container is 400px wide, adjust this if your container is different
    if (left < 360) { // Prevent moving out of bounds
        dodger.style.left = `${left + 10}px`;
    }
}

// Add event listeners to listen for arrow key presses
document.addEventListener('keydown', function(event){
    if (event.key === 'Arrowleft') {
        moveDodgerLeft();
    }
    else if (event.key === 'ArrowRight') {
         moveDodgerRight
    }
})
