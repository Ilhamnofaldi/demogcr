# Gunakan image dasar Node.js dari Docker Hub
FROM node:22

# Tentukan direktori kerja dalam container
WORKDIR /app

# Salin package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin seluruh kode aplikasi ke dalam container
COPY . .

# Build aplikasi jika menggunakan frontend (seperti React, Angular, dll.)
RUN npm run build

# Tentukan port yang akan digunakan dalam container
EXPOSE 8080

# Jalankan aplikasi
CMD ["npm", "run", "preview"]
