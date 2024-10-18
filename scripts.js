let loggedInUsername = '';

// ฟังก์ชันสำหรับ Log in
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Login successful') {
                loggedInUsername = data.username; // รับชื่อผู้ใช้จาก back-end
                document.getElementById('welcome-message').innerText = `Welcome, ${loggedInUsername}`; // แสดงชื่อผู้ใช้
                document.getElementById('request-btn').disabled = false;  // เปิดใช้งานปุ่ม Request Form
            } else {
                alert('Invalid username or password');
            }
        })
        .catch(error => console.error('Error:', error));
    } else {
        alert('Please enter both username and password.');
    }
}

// ฟังก์ชันสำหรับยื่นคำร้อง
function submitForm() {
    const username = document.getElementById('request-username').value;
    const email = document.getElementById('email').value;
    const request = document.getElementById('request').value;

    if (username && email && request) {
        fetch('/api/submit-request', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, request })
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Request submitted successfully') {
                const submittedInfo = document.getElementById('submitted-info');
                submittedInfo.innerHTML = `
                    <h3>Submitted Information</h3>
                    <p><strong>Username:</strong> ${username}</p>
                    <p><strong>E-mail:</strong> ${email}</p>
                    <p><strong>Request:</strong> ${request}</p>
                `;
            } else {
                alert('Failed to submit request');
            }
        })
        .catch(error => console.error('Error:', error));
    } else {
        alert('Please fill out all fields.');
    }
}
