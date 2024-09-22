const modeButton = document.querySelector("#mode");
const body = document.body;

modeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        modeButton.textContent = "🔆";
        modeButton.ariaLabel = "Light Mode";
    } else {
        modeButton.textContent = "🕶️";
        modeButton.ariaLabel = "Dark Mode";
    }
});