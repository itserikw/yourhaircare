const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const background = document.getElementById('background');

// Show Register Form
function showRegister() {
    loginForm.classList.remove('active');
    registerForm.classList.add('active');
    background.style.backdropFilter = 'blur(8px)';
}

// Show Login Form
function showLogin() {
    registerForm.classList.remove('active');
    loginForm.classList.add('active');
    background.style.backdropFilter = 'blur(8px)';
}

// Close Form and Remove Blur
function closeForm() {
    loginForm.classList.remove('active');
    registerForm.classList.remove('active');
    background.style.backdropFilter = 'blur(0px)';
}