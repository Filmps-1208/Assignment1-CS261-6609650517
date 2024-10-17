let loggedInUsername = '';

// ฟังก์ชันสำหรับ Log in
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        loggedInUsername = username;
        document.getElementById('welcome-message').innerText = `Welcome, ${username}`;
        document.getElementById('request-btn').disabled = false;  // เปิดใช้งานปุ่ม Request Form
    } else {
        alert('Please enter both username and password.');
    }
}

// ฟังก์ชันสำหรับนำทางไปยังหน้าฟอร์ม Request Form
function goToRequestForm() {
    if (loggedInUsername) {
        // เก็บข้อมูลผู้ใช้ใน LocalStorage เพื่อส่งต่อไปยังหน้าฟอร์ม
        localStorage.setItem('username', loggedInUsername);
        // เปลี่ยนเส้นทางไปยัง request.html
        window.location.href = 'html/request.html';
    }
}

// ฟังก์ชันสำหรับแสดงข้อมูลที่ส่งจากหน้า login ไปยัง request form
window.onload = function() {
    const requestUsernameField = document.getElementById('request-username');
    if (requestUsernameField) {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            requestUsernameField.value = storedUsername;
        }
    }
}

// ฟังก์ชันสำหรับ Submit ฟอร์ม
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

// ฟังก์ชันสำหรับ Log out
function logout() {
    // ลบข้อมูลผู้ใช้จาก LocalStorage
    localStorage.removeItem('username');
    
    // ล้างข้อมูลที่หน้าฟอร์ม
    document.getElementById('request-username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('request').value = '';
    document.getElementById('submitted-info').innerHTML = '';  // ล้างข้อมูลที่แสดง

    // เปลี่ยนเส้นทางกลับไปหน้า Log in
    window.location.href = '../index.html';
}

