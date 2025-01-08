// Example of JavaScript for adding interactivity
document.addEventListener("DOMContentLoaded", function() {
    const heroImage = document.querySelector(".hero-image img");
    heroImage.addEventListener("mouseover", function() {
      heroImage.style.filter = "none"; // Remove blur on hover
    });
    heroImage.addEventListener("mouseout", function() {
      heroImage.style.filter = "blur(2px)"; // Add blur back on mouse out
    });
  });
  