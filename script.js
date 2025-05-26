const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
})

document.getElementById("change-theme").addEventListener("click", function () {
    const newColor = "#e74c3c";
    document.documentElement.style.setProperty('--main-color', newColor);
  });