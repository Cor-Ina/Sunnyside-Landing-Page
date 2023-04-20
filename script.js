
const hamburgerIcon = document.getElementById('hamburger-icon');
const hamburgerMenu = document.getElementById('hamburger-menu');

hamburgerIcon.addEventListener('click', function () {
  hamburgerMenu.classList.toggle('active');
})

window.addEventListener('resize', function() {
  if (window.matchMedia("(min-width: 600px)").matches) {
    hamburgerMenu.classList.remove('active');
  }
})

