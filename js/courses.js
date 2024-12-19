



////////////////////nav/////////////////////////////////

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

////////////////////nav/////////////////////////////////



