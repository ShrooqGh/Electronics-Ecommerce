document.addEventListener('DOMContentLoaded', function() {
    const loginToggle = document.getElementById('login-toggle');
    const registerToggle = document.getElementById('register-toggle');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginError = document.getElementById('login-error');
    const registerError = document.getElementById('register-error');
    const registerSuccess = document.getElementById('register-success');

    loginToggle.addEventListener('click', function() {
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
        loginToggle.classList.add('active');
        registerToggle.classList.remove('active');
        clearMessages();
    });

    registerToggle.addEventListener('click', function() {
        registerForm.classList.add('active');
        loginForm.classList.remove('active');
        registerToggle.classList.add('active');
        loginToggle.classList.remove('active');
        clearMessages();
    });

    
    function clearMessages() {
        loginError.textContent = '';
        registerError.textContent = '';
        registerSuccess.textContent = '';
    }

    
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const phone = document.getElementById('register-phone').value;
        const address = document.getElementById('register-address').value;

        
        if (!validateEmail(email)) {
            registerError.textContent = 'Please enter a valid email address.';
            return;
        }

        
        if (localStorage.getItem(email)) {
            registerError.textContent = 'User with this email already exists.';
            return;
        }

       
        const user = {
            name,
            email,
            password,
            phone,
            address,
            role: 'customer' 
        };

        
        localStorage.setItem(email, JSON.stringify(user));
        
        
        registerSuccess.textContent = 'Registration successful! You can now login.';
        registerError.textContent = '';
        
        
        registerForm.reset();
        
       
        setTimeout(() => {
            loginToggle.click();
        }, 1500);
    });

    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        
        const userData = localStorage.getItem(email);
        
        if (!userData) {
            loginError.textContent = 'User not found. Please register.';
            return;
        }

        const user = JSON.parse(userData);
        
        if (user.password !== password) {
            loginError.textContent = 'Incorrect password. Please try again.';
            return;
        }

        
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        
        
        window.location.href = 'dashboard.html';
    });


    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
