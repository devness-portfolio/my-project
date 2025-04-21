// File: assets/js/footer.js
// This script updates the footer with the current year

document.addEventListener("DOMContentLoaded", () => {
  // --- Update Footer Year ---
  const currentYearSpan = document.getElementById("current-year");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});
