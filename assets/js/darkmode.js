(function() {
    // Get the stored theme or system preference
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
    
    // Apply theme immediately
    document.documentElement.setAttribute('data-theme', initialTheme);
})();
  
window.onload = function () {
    var toggle = document.getElementById("theme-toggle");

    // Get the user's system preference for dark/light mode
    var prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Get the user's stored theme preference from localStorage
    var storedTheme = localStorage.getItem('theme');

    // Determine the initial theme
    var initialTheme = storedTheme || (prefersDarkMode ? "dark" : "light");

    // Set the initial theme
    document.documentElement.setAttribute('data-theme', initialTheme);

    // Update the toggle button icon based on the initial theme
    updateToggleIcon(initialTheme);

    // Toggle between dark and light themes
    toggle.onclick = function () {
        var currentTheme = document.documentElement.getAttribute("data-theme");
        var targetTheme = currentTheme === "light" ? "dark" : "light";

        // Set the new theme
        document.documentElement.setAttribute('data-theme', targetTheme);
        localStorage.setItem('theme', targetTheme);

        // Update the toggle button icon
        updateToggleIcon(targetTheme);
    };

    // Function to update the toggle button icon
    function updateToggleIcon(theme) {
        var moonIcon = document.querySelector(".d-block-light");
        var sunIcon = document.querySelector(".d-block-dark");

        if (theme === "dark") {
            moonIcon.classList.add("d-none");
            sunIcon.classList.remove("d-none");
        } else {
            sunIcon.classList.add("d-none");
            moonIcon.classList.remove("d-none");
        }
    }
};