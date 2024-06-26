// script.js

const modeToggle = document.getElementById('mode-toggle');
const body = document.body;
let isDarkMode = false;

modeToggle.addEventListener('click', () => {
    isDarkMode =!isDarkMode;
    body.classList.toggle('dark-mode', isDarkMode);
    updateToggleText();
});

function updateToggleText() {
    const modeText = modeToggle.querySelector('.mode-text');
    modeText.textContent = isDarkMode? 'Dark Mode' : 'Light Mode';
}