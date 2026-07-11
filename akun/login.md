# Masuk (Login)

Halaman masuk digunakan untuk mengakses akun SkillPintar Anda.

**Alamat halaman:** `/auth/login`

## Langkah masuk

1. Buka halaman **Login**.
2. Isi **Email** dan **Password** Anda.
   - Tombol mata di kolom password bisa diklik untuk menampilkan/menyembunyikan tulisan password.
3. Klik tombol **Login**.
4. Jika berhasil, Anda diarahkan otomatis ke **Dashboard**.

> Saat proses masuk berjalan, tombol berubah menjadi **"Logging in..."** dan tidak bisa diklik dua kali.

## Catatan penting

- SkillPintar hanya mendukung masuk dengan **email dan password**. Belum ada login lewat Google/media sosial, dan tidak ada opsi "ingat saya".
- Password minimal **6 karakter** (diperiksa di sisi server).

## Jika gagal masuk

| Kondisi | Yang muncul | Yang harus dilakukan |
|---|---|---|
| Email/password salah | Pesan merah: *"Login failed. Please check your credentials."* | Periksa kembali email dan password. |
| Email belum diverifikasi | Kotak peringatan kuning: akun ada tapi email belum diverifikasi | Klik tombol **"Resend verification email"** yang muncul, lalu cek kotak masuk email. |

Saat email belum diverifikasi, Anda bisa langsung mengirim ulang email verifikasi dari halaman ini:

- Saat mengirim: tampil **"Sending…"**
- Berhasil: **"Sent. Check your inbox."**
- Kolom email kosong: **"Enter your email above first."**

## Tautan di halaman login

- **Register** → membuat akun baru ([Registrasi](registrasi.md)).
- **Forgot Password?** → atur ulang password ([Lupa Password](lupa-password.md)).
