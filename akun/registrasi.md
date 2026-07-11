# Registrasi (Daftar Akun)

Buat akun SkillPintar baru dari halaman registrasi.

**Alamat halaman:** `/auth/register`

## Langkah daftar

1. Buka halaman **Register**.
2. Isi tiga kolom berikut:
   - **Full Name** — nama lengkap Anda.
   - **Email** — email aktif (akan dikirimi tautan verifikasi).
   - **Password** — minimal **6 karakter**.
3. Klik tombol **Register**.
4. Jika berhasil, muncul tulisan hijau **"Registration successful"**.
5. Buka email Anda dan klik tautan verifikasi (lihat [Verifikasi Email](verifikasi-email.md)).

> Setelah daftar, halaman **tidak** berpindah otomatis. Anda tetap di halaman registrasi — lanjutkan dengan membuka email verifikasi, lalu masuk lewat halaman [Login](login.md).

## Aturan pengisian

Pesan kesalahan (tulisan merah) muncul jika:

- Nama kosong → *"Full name is required"*
- Email kosong → *"Email is required"*
- Format email salah → *"Invalid email format"*
- Password kosong → *"Password is required"*
- Email sudah terdaftar → *"User with this email already exists"*

## Yang terjadi di balik layar

- Akun dibuat dengan status **email belum terverifikasi**.
- Sistem otomatis mengirim **email verifikasi** (berlaku 24 jam).
- Akun tidak langsung tergabung ke organisasi mana pun. Organisasi dibuat/diikuti terpisah lewat [Pengaturan Organisasi](../pengaturan/organisasi.md).

## Tautan di halaman

- **Already have an account? Login** → kembali ke [Login](login.md).
