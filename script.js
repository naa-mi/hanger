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

document.addEventListener("DOMContentLoaded", function () {
    const genderFilter = document.getElementById("filter-gender");
    const priceFilter = document.getElementById("filter-price");
    const priceValue = document.getElementById("price-value");
    const typeFilter = document.getElementById("filter-type");
    const applyFiltersBtn = document.getElementById("apply-filters");
    const clothingItems = document.querySelectorAll(".clothing-item");

    // Update displayed price when slider moves
    priceFilter.addEventListener("input", function () {
        priceValue.textContent = priceFilter.value;
    });

    // Function to apply filters
    function applyFilters() {
        const selectedGender = genderFilter.value;
        const selectedType = typeFilter.value;
        const selectedPrice = parseInt(priceFilter.value, 10);

        clothingItems.forEach((item) => {
            const itemGender = item.getAttribute("data-gender");
            const itemType = item.getAttribute("data-type");
            const itemPrice = parseInt(item.getAttribute("data-price"), 10);

            // Apply filter conditions
            const genderMatch = selectedGender === "all" || itemGender === selectedGender;
            const typeMatch = selectedType === "all" || itemType === selectedType;
            const priceMatch = itemPrice <= selectedPrice;

            if (genderMatch && typeMatch && priceMatch) {
                item.style.display = "block"; // Show item
            } else {
                item.style.display = "none"; // Hide item
            }
        });
    }

    // Attach event listener to the filter button
    applyFiltersBtn.addEventListener("click", applyFilters);
});
const rentImageInput = document.getElementById("rent-image");

// Create an image preview container
const imagePreviewContainer = document.createElement("div");
imagePreviewContainer.id = "rent-image-preview";
rentImageInput.insertAdjacentElement("afterend", imagePreviewContainer);

// Function to preview selected image
rentImageInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imagePreviewContainer.innerHTML = `<img src="${e.target.result}" alt="Selected Image" style="max-width: 200px; margin-top: 10px; border-radius: 8px;">`;
        };
        reader.readAsDataURL(file);
    } else {
        imagePreviewContainer.innerHTML = "";
    }
});
