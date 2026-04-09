// script.js

// Function to handle navigation
function handleNavigation(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
}

// Function to handle button interactions
function setupButtonInteractions() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Button clicked: ' + button.textContent);
        });
    });
}

// Function for user-friendly animations
function addAnimation(element, animationClass) {
    element.classList.add(animationClass);
    setTimeout(() => {
        element.classList.remove(animationClass);
    }, 1000);
}

// Initialize features
document.addEventListener('DOMContentLoaded', () => {
    setupButtonInteractions();
});