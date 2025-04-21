// File: assets/js/theme.js
// This script handles the theme switch functionality
// and applies the saved theme on page load.

document.addEventListener("DOMContentLoaded", () => {
  // --- Theme Switch ---
  const themeToggle = document.getElementById("checkbox");
  const body = document.body;
  const currentTheme = localStorage.getItem("theme");

  // Apply saved theme on load
  if (currentTheme === "dark") {
    body.classList.add("dark-mode");
    themeToggle.checked = true;
  }

  // Toggle theme on switch change
  themeToggle.addEventListener("change", () => {
    body.classList.toggle("dark-mode");
    let theme = "light";
    if (body.classList.contains("dark-mode")) {
      theme = "dark";
    }
    localStorage.setItem("theme", theme);
  });
});
