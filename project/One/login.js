document.getElementById('auth-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if the form is in sign-up mode
    if (document.getElementById('form-title').innerText === 'Sign Up') {
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Sign up the user
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert('User registered successfully!');
            // Optionally redirect or update UI
        } catch (error) {
            alert(error.message);
        }
    } else {
        // Log in the user
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('Login successful!');
            // Optionally redirect or update UI
        } catch (error) {
            alert(error.message);
        }
    }
});

// Toggle between login and sign-up
document.getElementById('toggle-link').addEventListener('click', (e) => {
    e.preventDefault();

    const formTitle = document.getElementById('form-title');
    const submitBtn = document.getElementById('submit-btn');
    const toggleText = document.getElementById('toggle-text');
    const confirmPasswordGroup = document.getElementById('confirm-password-group');

    if (formTitle.innerText === 'Sign Up') {
        formTitle.innerText = 'Login';
        submitBtn.innerText = 'Login';
        toggleText.innerHTML = `Don't have an account? <a href="#" id="toggle-link">Sign Up</a>`;
        confirmPasswordGroup.style.display = 'none';
    } else {
        formTitle.innerText = 'Sign Up';
        submitBtn.innerText = 'Sign Up';
        toggleText.innerHTML = `Already have an account? <a href="#" id="toggle-link">Login</a>`;
        confirmPasswordGroup.style.display = 'block';
    }

    // Re-add event listener for the newly created toggle link
    document.getElementById('toggle-link').addEventListener('click', (e) => {
        e.preventDefault();
        toggleForm();
    });
});
