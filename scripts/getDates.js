document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

// menu.js

const hamburgerBtn = document.querySelector("#hamburger");
const navMenu = document.querySelector(".navMenu");

hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburgerBtn.classList.toggle("active");
});