const button = document.querySelector("#dark-mode-button");
const darkModeWrapper = document.querySelector("#dark-mode-wrapper")

const iconSun = document.querySelector("#icon-sun");
const iconMoon = document.querySelector("#icon-moon");

const toggleDarkMode = () => {
    darkModeWrapper.classList.toggle('dark');
}

button.addEventListener('click', (e) => {
    darkModeWrapper.classList.toggle('dark');

    iconSun.classList.toggle('opacity-0');
    iconSun.classList.toggle('opacity-100');

    iconMoon.classList.toggle('opacity-100');
    iconMoon.classList.toggle('opacity-0');
})