// Get the container
const container = document.getElementById('form-container');

// Create form element
const form = document.createElement('form');
form.className = 'login-form animate-slide';

// Heading
const heading = document.createElement('h2');
heading.textContent = 'Login';
form.appendChild(heading);

// Email Label & Input
const emailLabel = document.createElement('label');
emailLabel.textContent = 'Email';
form.appendChild(emailLabel);

const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.placeholder = 'Enter your email';
emailInput.required = true;
form.appendChild(emailInput);

// Password Label & Input
const passwordLabel = document.createElement('label');
passwordLabel.textContent = 'Password';
form.appendChild(passwordLabel);

const passwordContainer = document.createElement('div');
passwordContainer.className = 'password-container';

const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.placeholder = 'Enter your password';
passwordInput.required = true;

const toggleBtn = document.createElement('span');
toggleBtn.textContent = '👁️';
toggleBtn.className = 'toggle-password';
toggleBtn.onclick = () => {
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    toggleBtn.textContent = passwordInput.type === 'password' ? '👁️' : '🙈';
};

passwordContainer.appendChild(passwordInput);
passwordContainer.appendChild(toggleBtn);
form.appendChild(passwordContainer);

// Login Button
const loginBtn = document.createElement('button');
loginBtn.type = 'button';
loginBtn.textContent = 'Login';
form.appendChild(loginBtn);

// Append form to container
container.appendChild(form);

// Handle login click
loginBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Remove old error class
    emailInput.classList.remove('error', 'shake');
    passwordInput.classList.remove('error', 'shake');

    // Validate fields
    if (!email || !password) {
        if (!email) emailInput.classList.add('error', 'shake');
        if (!password) passwordInput.classList.add('error', 'shake');
        alert('Please fill in all fields.');
        return;
    }

    if (!email.match(emailPattern)) {
        emailInput.classList.add('error', 'shake');
        alert('Please enter a valid email.');
        return;
    }

    if (password.length < 6) {
        passwordInput.classList.add('error', 'shake');
        alert('Password must be at least 6 characters.');
        return;
    }

    alert(`✅ Login Successful!\n\nEmail: ${email}\nPassword: ${password}`);
});
