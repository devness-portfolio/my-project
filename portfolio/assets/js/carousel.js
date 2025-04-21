// File: assets/js/carousel.js
// This script initializes the carousel if images are provided.

document.addEventListener("DOMContentLoaded", () => {
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
  } else {
    console.warn("Carousel elements not found or no images available.");
    if (prevBtn) prevBtn.style.display = "none";
    if (nextBtn) nextBtn.style.display = "none";
    if (dotsContainer) dotsContainer.style.display = "none";
  }
});
// --- End of Photography Carousel ---
