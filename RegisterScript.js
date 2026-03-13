document.addEventListener("DOMContentLoaded", () => {
  const signupContainer = document.getElementById("signup-container");
  const showSignup = document.getElementById("show-signup");
  const signupForm = document.getElementById("signup-form");
  const loginForm = document.getElementById("login-form");

  // Toggle password visibility
  document.querySelectorAll(".toggle-password").forEach(toggle => {
      toggle.addEventListener("click", () => {
          const targetId = toggle.getAttribute("data-target");
          const passwordInput = document.getElementById(targetId);
          if (passwordInput.type === "password") {
              passwordInput.type = "text";
              toggle.textContent = "🙈"; // Optional: Change icon when visible
          } else {
              passwordInput.type = "password";
              toggle.textContent = "👁️";
          }
      });
  });

  // Show Signup Form & Hide Login
  if (showSignup) {
      showSignup.addEventListener("click", (event) => {
          event.preventDefault();
          signupContainer.classList.remove("hidden");
          loginForm.parentElement.classList.add("hidden");
      });
  }

  // Save new user to localStorage
  function saveUser(user) {
      let users = JSON.parse(localStorage.getItem("users")) || [];

      // Check if mobile number already exists
      if (users.some(u => u.mobile === user.mobile)) {
          alert("Mobile number already registered! Please login instead.");
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

          // Basic validation for signup fields
          if (!name || !email || !mobile || !password || !role) {
              alert("All fields are required!");
              return;
          }

          // Validate mobile number format (10 digits)
          if (!/^[0-9]{10}$/.test(mobile)) {
              alert("Please enter a valid 10-digit mobile number.");
              return;
          }

          const newUser = { name, email, mobile, password, role };

          if (saveUser(newUser)) {
              alert("Signup successful! Logging you in...");
              localStorage.setItem("staynear_user", JSON.stringify(newUser));
              window.location.href = "index.html";
          }
      });
  }

  // Login Form Submission
  if (loginForm) {
      loginForm.addEventListener("submit", (event) => {
          event.preventDefault();

          const mobile = loginForm["login-mobile"].value.trim();
          const password = loginForm["login-password"].value.trim();

          // Basic validation for login fields
          if (!mobile || !password) {
              alert("Both mobile number and password are required!");
              return;
          }

          // Validate mobile number format (10 digits)
          if (!/^[0-9]{10}$/.test(mobile)) {
              alert("Please enter a valid 10-digit mobile number.");
              return;
          }

          const users = JSON.parse(localStorage.getItem("users")) || [];
          const user = users.find(u => u.mobile === mobile && u.password === password);

          if (user) {
              alert("Login successful!");
              localStorage.setItem("staynear_user", JSON.stringify(user));
              window.location.href = "index.html";
          } else {
              alert("Invalid mobile number or password!");
          }
      });
  }
});
  
    document.addEventListener("DOMContentLoaded", () => {
      const user = JSON.parse(localStorage.getItem("staynear_user"));
      const authBtn = document.getElementById("auth-button");
      const profilePopup = document.getElementById("profile-popup");
      const logoutBtn = document.getElementById("logout-btn");
  
      let isProfilePinned = false;
  
      if (user && authBtn) {
        authBtn.textContent = "Profile";
        authBtn.href = "#";
  
        const showPopup = () => {
          if (!isProfilePinned) profilePopup.classList.remove("hidden");
        };
  
        const hidePopup = () => {
          if (!isProfilePinned) profilePopup.classList.add("hidden");
        };
  
        // Hover behavior
        authBtn.addEventListener("mouseenter", showPopup);
        authBtn.addEventListener("mouseleave", () => {
          setTimeout(() => {
            if (!profilePopup.matches(':hover') && !isProfilePinned) hidePopup();
          }, 200);
        });
  
        profilePopup.addEventListener("mouseenter", showPopup);
        profilePopup.addEventListener("mouseleave", () => {
          if (!isProfilePinned) hidePopup();
        });
  
        // Toggle on click
        authBtn.addEventListener("click", (e) => {
          e.preventDefault();
          isProfilePinned = !isProfilePinned;
          profilePopup.classList.toggle("hidden", !isProfilePinned);
        });
  
        // Fill profile details
        document.getElementById("profile-name").textContent = "Name: " + user.name;
        document.getElementById("profile-email").textContent = "Email: " + user.email;
        document.getElementById("profile-mobile").textContent = "Mobile: " + user.mobile;
        document.getElementById("profile-role").textContent = "Role: " + user.role;
      }
  
      // Logout
      logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("staynear_user");
        window.location.reload();
      });
  
      // Cancel button
      document.getElementById("cancel-btn").addEventListener("click", () => {
        isProfilePinned = false;
        profilePopup.classList.add("hidden");
      });
    });
    window.onscroll = function () {
    const btn = document.getElementById("topBtn");

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}