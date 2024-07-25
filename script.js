// Variables to track correct answer and feedback
const correctAnswer = "optionA"; // Adjust if needed
const explanations = {
    optionA: "Correct! Paint forms a strong barrier against oxygen and moisture, effectively preventing rust.",
    optionB: "Incorrect. Wax offers slight protection but is less effective than paint.",
    optionC: "Incorrect. Oil provides slightly less protection than wax.",
    optionD: "Incorrect. Distilled water accelerates rusting due to its corrosive nature."
};

// Event listeners for drag-and-drop functionality
document.addEventListener("DOMContentLoaded", function() {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.addEventListener('dragstart', dragStart);
    });
    const nail = document.getElementById('iron-nail');
    nail.addEventListener('dragover', dragOver);
    nail.addEventListener('drop', drop);
});

// Drag-and-drop functions
function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const optionId = event.dataTransfer.getData("text/plain");
    const selectedOption = document.getElementById(optionId);
    const nail = document.getElementById('iron-nail');
    
    nail.style.backgroundImage = `url('images/${selectedOption.alt}')`;
    nail.style.backgroundSize = 'cover';
    nail.style.backgroundPosition = 'center';
    
    if (optionId === correctAnswer) {
        nail.style.backgroundColor = "#b3e6b3"; // Green background for correct option
    } else {
        nail.style.backgroundColor = "#ffb3b3"; // Red background for incorrect option
    }
}

// Event listener for submit button click
document.getElementById('submit-button').addEventListener('click', function() {
    checkAnswer();
});

// Function to check answer
function checkAnswer() {
    const selectedOption = document.querySelector('.option.dragged');
    const feedbackDiv = document.getElementById('feedback');
    
    if (!selectedOption) {
        feedbackDiv.textContent = "Please select an option!";
        return;
    }
    
    if (selectedOption.id === correctAnswer) {
        feedbackDiv.textContent = explanations[correctAnswer];
    } else {
        feedbackDiv.textContent = explanations[selectedOption.id];
    }
}
