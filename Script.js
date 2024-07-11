// Add any JavaScript functionality here if needed
console.log("JavaScript is working!");

// Example: Add interactive functionality
const categories = document.querySelectorAll('aside ul li');

categories.forEach(category => {
    category.addEventListener('click', () => {
        alert(`You clicked on: ${category.innerText}`);
    });
});