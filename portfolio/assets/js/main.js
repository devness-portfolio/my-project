// File: assets/js/script.js
// This script is called after DOM is fully loaded
// to show the functionalities bundled in one script theme switching, smooth scrolling,
// photography carousel, and footer year update functionalities.
// Import necessary modules

import setupTheme from "./assets/js/theme.js";
import setupScrolling from "./assets/js/scroll.js";
import setupCarousel from "./assets/js/carousel.js";
import updateFooterYear from "./assets/js/footer.js";

document.addEventListener("DOMContentLoaded", () => {
  setupTheme();
  setupScrolling();
  setupCarousel();
  updateFooterYear();
});
