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

