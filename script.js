document.addEventListener("DOMContentLoaded", function () {
    // Navigation buttons
    const homeBtn = document.getElementById("home-btn");
    const buyBtn = document.getElementById("buy-btn");
    const sellBtn = document.getElementById("sell-btn");
    const rentBtn = document.getElementById("rent-btn");
    const profileBtn = document.getElementById("profile-btn");

    // Sections
    const sections = {
        home: document.getElementById("home-section"),
        buy: document.getElementById("buy-section"),
        sell: document.getElementById("sell-section"),
        rent: document.getElementById("rent-section"),
        profile: document.getElementById("profile-section")
    };

    // Function to show only the selected section
    function showSection(section) {
        Object.values(sections).forEach(sec => {
            if (sec) sec.style.display = "none"; // Hide only if section exists
        });
        if (section) section.style.display = "block"; // Show selected section
    }

    // Ensure Home is visible by default
    showSection(sections.home);

    // Event listeners for navbar buttons
    homeBtn.addEventListener("click", () => showSection(sections.home));
    buyBtn.addEventListener("click", () => showSection(sections.buy));
    sellBtn.addEventListener("click", () => showSection(sections.sell));
    rentBtn.addEventListener("click", () => showSection(sections.rent));
    profileBtn.addEventListener("click", () => showSection(sections.profile));

    // Login/Signup Modal Elements
    const loginBtn = document.getElementById("login-btn");
    const authModal = document.getElementById("auth-modal");
    const closeModal = document.querySelector(".close");
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const modalTitle = document.getElementById("modal-title");
    const switchToSignup = document.getElementById("switch-to-signup");
    const switchToLogin = document.getElementById("switch-to-login");

    // Ensure modal is hidden on page load
    authModal.style.display = "none";

    // Open Login/Signup Modal
    loginBtn.addEventListener("click", function () {
        authModal.style.display = "flex";
        loginForm.style.display = "block";
        signupForm.style.display = "none";
        modalTitle.textContent = "Login";
    });

    // Close modal when clicking "X"
    closeModal.addEventListener("click", function () {
        authModal.style.display = "none";
    });

    // Close modal when clicking outside the content
    window.addEventListener("click", function (e) {
        if (e.target === authModal) {
            authModal.style.display = "none";
        }
    });

    // Switch to Signup Form
    switchToSignup.addEventListener("click", function (e) {
        e.preventDefault();
        loginForm.style.display = "none";
        signupForm.style.display = "block";
        modalTitle.textContent = "Sign Up";
    });

    // Switch to Login Form
    switchToLogin.addEventListener("click", function (e) {
        e.preventDefault();
        signupForm.style.display = "none";
        loginForm.style.display = "block";
        modalTitle.textContent = "Login";
    });

    // Handle Login
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("login-username").value;
        alert("Login successful! Welcome, " + username);
        authModal.style.display = "none";
    });

    // Handle Signup
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Signup successful! Please login.");
        signupForm.style.display = "none";
        loginForm.style.display = "block";
        modalTitle.textContent = "Login";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const exploreBtn = document.querySelector(".explore-btn");
    const nextSection = document.getElementById("featured-items"); // Change this ID to the first content section after home

    exploreBtn.addEventListener("click", function () {
        nextSection.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const cartBtn = document.getElementById("cart-btn");
    const cartCount = document.getElementById("cart-count");
    let cartItems = [];

    // Add item to cart function
    function addToCart(itemName, price) {
        cartItems.push({ name: itemName, price: price });
        cartCount.textContent = cartItems.length;
        alert(`${itemName} added to cart!`);
    }

    // Example: Add rent items to cart
    document.querySelectorAll(".clothing-item").forEach(item => {
        item.addEventListener("click", function () {
            const name = this.querySelector("p").textContent;
            addToCart(name, "₹" + this.dataset.price);
        });
    });

    // Show cart details on click
    cartBtn.addEventListener("click", function () {
        if (cartItems.length === 0) {
            alert("Your cart is empty!");
        } else {
            let cartDetails = cartItems.map(item => `${item.name} - ${item.price}`).join("\n");
            alert("Your Cart:\n" + cartDetails);
        }
    });
});
