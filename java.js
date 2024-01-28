const darkModeToggle = document.getElementById('darkModeToggle');
const root = document.documentElement;

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        root.style.setProperty('--background-color', '#121212'); // Dark mode background
        root.style.setProperty('--text-color', '#ffffff'); // Dark mode text color
    } else {
        root.style.setProperty('--background-color', '#ffffff'); // Light mode background
        root.style.setProperty('--text-color', '#000000'); // Light mode text color
    }
});
