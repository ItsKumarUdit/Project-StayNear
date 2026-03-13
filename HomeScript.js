document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("login-button");
    const searchBar = document.getElementById("search");
    const menuToggle = document.querySelector(".fa-bars");
    
    // Login button functionality
    if (loginButton) {
        loginButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "Register.html";
        });
    }
    
    // Sidebar menu toggle (if applicable)
    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            alert("Sidebar menu clicked! Implement functionality here.");
        });
    }
    
    // Search bar functionality placeholder
    if (searchBar) {
        searchBar.addEventListener("input", function () {
            console.log("Searching: ", searchBar.value);
            // Implement search functionality here
        });
    }
    
});
document.addEventListener("click", function (event) {
    const sidebar = document.getElementById("sidebar");
    const hamburger = document.querySelector(".hamburger");
    if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
        sidebar.style.left = "-250px";
    }
});
 
const data = JSON.parse(localStorage.getItem('hostelInfo'));

let currentIndex = 0;
    const slider = document.getElementById("slider");
    const images = slider.children;
    const totalImages = images.length;
    const dots = document.querySelectorAll('.slider-dot');
    let autoSlideInterval;

    function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalImages;
      updateSlider();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      updateSlider();
    }

    function startAutoSlide() {
      autoSlideInterval = setInterval(nextSlide, 3000);
    }

    document.addEventListener('DOMContentLoaded', () => {
      document.querySelector('.left-arrow').addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        prevSlide();
        startAutoSlide();
      });

      document.querySelector('.right-arrow').addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        nextSlide();
        startAutoSlide();
      });

      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          clearInterval(autoSlideInterval);
          currentIndex = index;
          updateSlider();
          startAutoSlide();
        });
      });

      slider.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
      slider.addEventListener('mouseleave', startAutoSlide);

      updateSlider();
      startAutoSlide();
    });
    function toggleSidebar() {
      const sidebar = document.getElementById("sidebar");
      sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
    }

