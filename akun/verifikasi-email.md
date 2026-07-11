# Verifikasi Email

Email wajib diverifikasi sebelum akun bisa dipakai untuk masuk.

## Kapan email verifikasi dikirim?

Otomatis **saat Anda mendaftar**. Sistem mengirim email berisi tautan verifikasi yang **berlaku 24 jam**.

## Langkah verifikasi

1. Buka email dari SkillPintar.
2. Klik tautan verifikasi di dalamnya.
3. Anda dibawa ke halaman **`/auth/verify-email`**.
4. Halaman otomatis memproses (tampil **"Verifying..."**).
5. Jika berhasil, muncul pesan sukses dan tombol **Login** → masuk ke akun Anda.

## Jika tautan gagal / kedaluwarsa

Bila token tidak sah atau sudah lewat 24 jam, halaman menampilkan pesan gagal beserta **formulir kirim ulang**:

1. Isi **Email** Anda.
2. Klik **Resend Email Verification**.
3. Berhasil → muncul konfirmasi email verifikasi sudah dikirim.

## Kirim ulang dari halaman khusus

Anda juga bisa kirim ulang lewat **`/auth/resend-verification`**:

1. Isi **Email**.
2. Klik **Send**.

Kemungkinan hasil:

- Berhasil → *"Verification email sent"*
- Email tidak ditemukan → *"User not found"*
- Sudah terverifikasi → *"Email is already verified"*

> Anda juga bisa mengirim ulang verifikasi langsung dari halaman [Login](login.md) jika mencoba masuk dengan akun yang belum terverifikasi.
