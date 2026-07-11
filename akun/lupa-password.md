# Lupa Password

Jika lupa password, Anda bisa mengatur ulang lewat email.

## Langkah 1 — Minta tautan reset

**Alamat halaman:** `/auth/forgot-password`

1. Buka halaman **Forgot Password**.
2. Isi **Email** akun Anda.
3. Klik **Send Reset Link**.
4. Muncul pesan **"Reset link sent to your email"**.
5. Buka email dan klik tautan reset.

> **Keamanan:** Demi privasi, sistem selalu menampilkan pesan yang sama walau email tidak terdaftar. Tautan reset **berlaku 1 jam**.

## Langkah 2 — Buat password baru

**Alamat halaman:** `/auth/reset-password?token=...` (dibuka dari tautan di email)

1. Isi **New Password**.
   - Ada kotak centang **"Show password"** untuk menampilkan tulisan.
2. Isi **Confirm Your Password** (harus sama).
3. Klik **Reset**.
4. Jika berhasil, Anda diarahkan ke halaman konfirmasi lalu bisa **masuk kembali**.

### Aturan password baru

- Kedua kolom wajib diisi.
- Panjang minimal **8 karakter**.
- Kedua kolom harus **sama persis**.

> Jika tautan dibuka tanpa token yang sah, halaman hanya menampilkan *"Please provide a valid token."* — mintalah tautan reset baru dari Langkah 1.

## Ganti password saat sudah masuk

Kalau Anda masih ingat password lama dan ingin menggantinya, gunakan halaman **`/auth/change-password`** (butuh status sudah login).
