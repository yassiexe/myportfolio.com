// This file contains the JavaScript code for the portfolio. 
// It may include functionality such as interactivity, animations, or dynamic content loading.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully!');

    // Example of adding interactivity
    const toggleButton = document.getElementById('toggle-theme');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
        });
    }

    // Additional functionality can be added here
});