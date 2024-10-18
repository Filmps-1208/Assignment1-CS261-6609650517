const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// ใช้จัดการ request ที่ส่งมาจาก front-end
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ดึงหน้า front-end ส่งกลับไปเมื่อเข้าถึง root
app.use(express.static('public'));

// จำลองฐานข้อมูลผู้ใช้
const users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' }
];

// API สำหรับการ Log in
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // ตรวจสอบว่าผู้ใช้กรอกข้อมูลทั้ง username และ password หรือไม่
    if (username && password) {
        // ตอบกลับสำเร็จโดยไม่ต้องตรวจสอบกับฐานข้อมูล
        res.status(200).json({ message: 'Login successful', username });
    } else {
        // ตอบกลับว่าข้อมูลไม่ครบถ้วน
        res.status(400).json({ message: 'Username and password are required' });
    }
});



// API สำหรับการยื่นคำร้อง
app.post('/api/submit-request', (req, res) => {
    const { username, email, request } = req.body;

    if (username && email && request) {
        res.status(200).json({ message: 'Request submitted successfully', data: req.body });
    } else {
        res.status(400).json({ message: 'All fields are required' });
    }
});

// เริ่ม server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
