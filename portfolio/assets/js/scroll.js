// File: assets/js/scroll.js
// This script ensures smooth scrolling for anchor links

document.addEventListener("DOMContentLoaded", () => {
  // --- Smooth Scrolling ---
  document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});
