// Original Script for Devness Portfolio.
// Split into multiple files for better organization and maintainability.
// File: assets/js/script.js
// This script combines theme switching, smooth scrolling,
// photography carousel, and footer year update functionalities.
// Import necessary modules
// No imports needed as this is a single script file
// Ensure the DOM is fully loaded before executing scripts

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

  // --- Photography Carousel ---
  const imageUrls = [
    // IMPORTANT: public S3 image URLs
    "https://devness-portfolio.s3.us-east-1.amazonaws.com/images/IMG_8788.JPG",
    "https://devness-portfolio.s3.us-east-1.amazonaws.com/images/IMG_8790.JPG",
    "https://devness-portfolio.s3.us-east-1.amazonaws.com/images/IMG_8791.JPG",
    "https://devness-portfolio.s3.us-east-1.amazonaws.com/images/IMG_8792.JPG",
    "https://devness-portfolio.s3.us-east-1.amazonaws.com/images/IMG_8793.JPG",
    "https://devness-portfolio.s3.us-east-1.amazonaws.com/images/IMG_8794.JPG",
    "https://devness-portfolio.s3.us-east-1.amazonaws.com/images/IMG_8795.JPG",
    // Add more image URLs here
  ];

  const carouselImage = document.getElementById("carousel-image");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const dotsContainer = document.querySelector(".carousel-dots");

  let currentIndex = 0;

  function createImageDots() {
    dotsContainer.innerHTML = ""; // Clear existing dots
    imageUrls.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (index === currentIndex) {
        dot.classList.add("active");
      }
      dot.addEventListener("click", () => {
        currentIndex = index;
        updateCarousel();
      });
      dotsContainer.appendChild(dot);
    });
  }

  function updateCarousel() {
    if (imageUrls.length > 0 && carouselImage) {
      carouselImage.src = imageUrls[currentIndex];
      carouselImage.alt = `Photography ${currentIndex + 1}`; // Update alt text

      // Update active dot
      const dots = dotsContainer.querySelectorAll(".dot");
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
      });
    } else if (carouselImage) {
      // Handle case with no images
      carouselImage.alt = "No images available";
      // Optionally display a placeholder or message
    }
  }

  if (prevBtn && nextBtn && carouselImage && imageUrls.length > 0) {
    prevBtn.addEventListener("click", () => {
      currentIndex =
        currentIndex === 0 ? imageUrls.length - 1 : currentIndex - 1;
      updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
      currentIndex =
        currentIndex === imageUrls.length - 1 ? 0 : currentIndex + 1;
      updateCarousel();
    });

    // Initial setup
    createImageDots();
    updateCarousel();
  } else if (imageUrls.length === 0) {
    console.warn("No image URLs provided for the carousel.");
    // Optionally hide carousel controls if no images
    if (prevBtn) prevBtn.style.display = "none";
    if (nextBtn) nextBtn.style.display = "none";
    if (dotsContainer) dotsContainer.style.display = "none";
  }

  // --- Update Footer Year ---
  const currentYearSpan = document.getElementById("current-year");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});
