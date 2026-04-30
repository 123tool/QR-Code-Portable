## ⚡ QR Qode PORTAL

**QR Qode Portal** adalah framework generator QR Code berbasis web yang dioptimalkan untuk kecepatan dan kemudahan instalasi di lingkungan **Termux**, Linux, dan Windows. Menggunakan Node.js untuk performa yang lebih stabil dan manajemen library gambar yang lebih ringan.

---

## 🚀 Fitur Unggulan

- ✅ **Instant Installation**: Lebih ramah lingkungan Termux dibanding versi Python.
- ✅ **Auto IP Discovery**: Menampilkan IP Network secara otomatis untuk akses via WiFi.
- ✅ **Dynamic QR Types**: Support URL, Teks, WhatsApp (Auto-format), dan WiFi Network.
- ✅ **Custom Hex Color**: Ubah warna QR sesuai selera (Neo-Brutalist style).
- ✅ **Clean UI**: Antarmuka dashboard yang responsif, minimalis, dan profesional.

---

## Panduan Instalasi

Ikuti langkah-langkah di bawah ini untuk mengaktifkan portal di perangkat kamu:

### 1. Update & Install Node.js
Pastikan environment kamu sudah memiliki Node.js terpasang.
```bash
pkg update && pkg upgrade -y
pkg install nodejs git -y
```
## Clone repository
```
git clone https://github.com/123tool/QR-Code-Portable.git
cd QR-Code-Portable
```
## Install Dependencies
​Gunakan NPM untuk menginstall library express dan qrcode :
```
npm install
```
## Menjalankan Server
```
node app.js
```
**Server akan berjalan di port 5000. Cek terminal untuk melihat URL akses (Local & Network).**

**​Akses Portal :**
Buka browser di HP/PC, masukkan alamat IP yang muncul di terminal
```
http://192.168.1.5:5000
```
## ​Konfigurasi QR :
- ​Pilih tipe data (URL/WA/WiFi).
- ​Masukkan konten yang ingin dijadikan QR.
- ​Pilih warna kustom jika bosan dengan warna hitam.

## ​Generate & Save:
Klik tombol GENERATE, lalu klik DOWNLOAD PNG untuk menyimpan hasil.

## Catatan Teknis

**​Jika kamu menjalankan ini di Termux, pastikan koneksi WiFi aktif jika ingin mengakses portal ini dari perangkat lain. Jika hanya ingin akses di perangkat yang sama, gunakan http://localhost:5000.**
