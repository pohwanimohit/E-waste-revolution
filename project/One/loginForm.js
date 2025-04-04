const firebaseConfig = {
    apiKey: "AIzaSyCKWb8w6DZeCQN0iHw2wF6tpOJmCe1-GsE",
    authDomain: "loginform-30832.firebaseapp.com",
    databaseURL: "https://loginform-30832-default-rtdb.firebaseio.com",
    projectId: "loginform-30832",
    storageBucket: "loginform-30832.appspot.com", // ✅ Fixed incorrect URL
    messagingSenderId: "395169553561",
    appId: "1:395169553561:web:db408c977eda97136e6c08"
};

document.addEventListener("DOMContentLoaded", function () {
    const formTitle = document.getElementById("form-title");
    const submitBtn = document.getElementById("submit-btn");
    const toggleText = document.getElementById("toggle-text");
    const toggleLink = document.getElementById("toggle-link");
    const confirmPasswordGroup = document.getElementById("confirm-password-group");
    const authForm = document.getElementById("auth-form");

    let isSignUp = false;

    toggleLink.addEventListener("click", function (event) {
        event.preventDefault();
        isSignUp = !isSignUp;

        if (isSignUp) {
            formTitle.textContent = "Sign Up";
            submitBtn.textContent = "Sign Up";
            toggleText.innerHTML = 'Already have an account? <a href="#" id="toggle-link">Login</a>';
            confirmPasswordGroup.style.display = "block";
        } else {
            formTitle.textContent = "Login";
            submitBtn.textContent = "Login";
            toggleText.innerHTML = 'Don\'t have an account? <a href="#" id="toggle-link">Sign Up</a>';
            confirmPasswordGroup.style.display = "none";
        }
    });

    authForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission to server

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (isSignUp) {
            const confirmPassword = document.getElementById("confirm-password").value;
            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }
            alert("Sign-up successful! Redirecting...");
        } else {
            alert("Login successful! Redirecting...");
        }

        // Redirect to index.html after login/sign-up
        window.location.href = "index.html";
    });
});

