let loggedInUsername = '';

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        loggedInUsername = username;
        document.getElementById('welcome-message').innerText = `Welcome, ${username}`;
        document.getElementById('request-btn').disabled = false;  // Enable the Request Form button
    } else {
        alert('Please enter both username and password.');
    }
}

function goToRequestForm() {
    if (loggedInUsername) {
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('request-form-page').style.display = 'block';
        document.getElementById('request-username').value = loggedInUsername;  // Pre-fill username
    }
}

function submitForm() {
    const username = document.getElementById('request-username').value;
    const email = document.getElementById('email').value;
    const request = document.getElementById('request').value;

    if (username && email && request) {
        const submittedInfo = document.getElementById('submitted-info');
        submittedInfo.innerHTML = `
            <h3>Submitted Information</h3>
            <p><strong>Username:</strong> ${username}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Request:</strong> ${request}</p>
        `;
    } else {
        alert('Please fill out all fields.');
    }
}

function logout() {
    loggedInUsername = '';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('welcome-message').innerText = '';
    document.getElementById('request-btn').disabled = true;
    document.getElementById('submitted-info').innerHTML = '';  // Clear submitted info

    // Show login page again and hide request form page
    document.getElementById('login-page').style.display = 'block';
    document.getElementById('request-form-page').style.display = 'none';
}
