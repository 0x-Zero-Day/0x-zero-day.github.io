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







//////////////////write words///////////////////
var typed = new Typed(".write", {
  strings: ["Scratch", "HTML", "CSS", "JavaScript","Web Security", "Python", "C++"],
  typeSpeed: 70, // Slower typing speed (200ms per character)
  backSpeed: 50, // Slower erasing speed (150ms per character)
  backDelay: 1000, // Delay before backspacing starts (in milliseconds)
  loop: true
});

//////////////////write words///////////////////








//////////////////////// this for go to top///////////////////////////////////
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
} 





//////////////////////















