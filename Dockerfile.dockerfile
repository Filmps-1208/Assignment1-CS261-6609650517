# ใช้ node.js เวอร์ชัน LTS
FROM node:lts

# กำหนด working directory ภายใน container
WORKDIR /usr/src/app

# คัดลอกไฟล์ package.json และ package-lock.json ไปยัง container
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกไฟล์ที่เหลือทั้งหมดไปยัง container
COPY . .

# กำหนด port ที่จะใช้งาน
EXPOSE 3000

# สั่งให้รันแอปพลิเคชัน
CMD ["node", "backend/app.js"]
