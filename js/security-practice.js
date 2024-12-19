// security-practice.js
// //////////////////////////////////////////////////////this is for nabbar////////////////////////////////////////////
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

// ////////////////////////////////////Close menu if clicked outside of the menu/////////////////////////////////////
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const menuToggle = document.querySelector('.menu-toggle');
    
    // Check if the clicked area is outside the menu and the menu toggle button
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove('show');
    }
});



// Function to update the scroll indicator
window.onscroll = function() {
    var scrollIndicator = document.querySelector('.scroll-indicator');
    var scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    scrollIndicator.style.width = scrollPercentage + '%';
};



// Get the header element
const header = document.querySelector('header');

// Define the default and scroll padding
const defaultPadding = '5.8rem';
const scrolledPadding = '1.5rem';

// Listen for the scroll event
window.addEventListener('scroll', function() {
    // Check if the page is scrolled down
    if (window.scrollY > 0) {
        // Set the header padding to the smaller value when scrolled
        header.style.padding = `1.5rem 0`;
    } else {
        // Reset to the default padding when at the top
        header.style.padding = `5.8rem 0`;
    }
});
