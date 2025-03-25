document.addEventListener("DOMContentLoaded", () => {
    const signupContainer = document.getElementById("signup-container");
    const showSignup = document.getElementById("show-signup");
    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");

    // Show Signup Form
    if (showSignup) {
        showSignup.addEventListener("click", (event) => {
            event.preventDefault();
            signupContainer.classList.remove("hidden");
        });
    }

    // Function to Save User Data in Local Storage
    function saveUser(user) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        
        // Check if Email Already Exists
        if (users.some(u => u.email === user.email)) {
            alert("Email already registered! Try logging in.");
            return false;
        }

        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        return true;
    }

    // Signup Form Submission
    if (signupForm) {
        signupForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const name = signupForm["signup-name"].value.trim();
            const email = signupForm["signup-email"].value.trim();
            const mobile = signupForm["signup-mobile"].value.trim();
            const password = signupForm["signup-password"].value.trim();
            const role = signupForm["signup-role"].value;

            if (!name || !email || !mobile || !password) {
                alert("All fields are required!");
                return;
            }

            // Store User in Browser
            if (saveUser({ name, email, mobile, password, role })) {
                alert("Signup successful! You can now log in.");
                signupForm.reset();
                signupContainer.classList.add("hidden"); // Hide signup form after success
            }
        });
    }

    // Login Form Submission
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const email = loginForm["login-email"].value.trim();
            const password = loginForm["login-password"].value.trim();

            if (!email || !password) {
                alert("Both email and password are required!");
                return;
            }

            // Retrieve Users from Local Storage
            const users = JSON.parse(localStorage.getItem("users")) || [];
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                alert("Login successful!");
                localStorage.setItem("loggedInUser", JSON.stringify(user)); // Store session
                window.location.href = "Home.html"; // Redirect to home page
            } else {
                alert("Login failed: Invalid email or password!");
            }
        });
    }
});
