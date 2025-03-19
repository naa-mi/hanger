document.addEventListener("DOMContentLoaded", function () {
    
    const authForm = document.getElementById("authForm");
    const authTitle = document.getElementById("authTitle");
    const authName = document.getElementById("authName");
    const authToggle = document.getElementById("authToggle");

    let isLogin = true;

    authForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("authEmail").value;
        const password = document.getElementById("authPassword").value;

        if (!isLogin) {
            const name = authName.value;
            if (name && email && password) {
                alert("Account Created Successfully!");
                closeAuthModal();
            } else {
                alert("Please fill all fields.");
            }
        } else {
            if (email && password) {
                alert("Login Successful!");
                closeAuthModal();
            } else {
                alert("Please fill all fields.");
            }
        }
    });

    window.openAuthModal = function () {
        document.getElementById("authModal").style.display = "block";
    };

    window.closeAuthModal = function () {
        document.getElementById("authModal").style.display = "none";
    };

    window.toggleAuth = function () {
        isLogin = !isLogin;
        authTitle.textContent = isLogin ? "Login" : "Sign Up";
        authName.style.display = isLogin ? "none" : "block";
        authToggle.innerHTML = isLogin 
            ? "Don't have an account? <a href='#' onclick='toggleAuth()'>Sign up</a>"
            : "Already have an account? <a href='#' onclick='toggleAuth()'>Login</a>";
    };
});

function uploadClothing() {
    let file = document.getElementById("uploadImage").files[0];
    if (file) {
        alert("Image uploaded successfully!");
    } else {
        alert("Please select an image.");
    }
}
