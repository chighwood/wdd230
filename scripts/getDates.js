document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

// menu.js

const hamburgerBtn = document.querySelector("#hamburger");
const navMenu = document.querySelector(".navMenu");

hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburgerBtn.classList.toggle("active");
});

// Number of Visits

const visitsDisplay = document.querySelector(".visits");

let numberVisits = Number(window.localStorage.getItem("numberVisits-ls")) || 0;

if (numberVisits !== 0) {
	visitsDisplay.textContent = numberVisits;
} else {
	visitsDisplay.textContent = `Welcome to my Home Page!`;
}
numberVisits++;

localStorage.setItem("numberVisits-ls", numberVisits);

