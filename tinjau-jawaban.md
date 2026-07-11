# Menilai Jawaban (Tinjau)

Sebagian jawaban **tidak bisa dinilai otomatis** karena jawabannya bebas. Untuk itu SkillPintar menyediakan fitur **Tinjau (Review)** — pembuat tes memberi nilai secara manual.

## Jawaban apa saja yang perlu ditinjau?

Jawaban dari jenis soal berikut **selalu** masuk antrian tinjau:

- **Text Input** (esai / isian bebas)
- **Code Input** (jawaban kode)
- **Voice Input** (rekaman suara)
- **File Upload** (unggah berkas)

Soal pilihan (Multiple/Single Choice, Image/Audio Based) dinilai **otomatis** oleh sistem.

> **Sudah diverifikasi:** Fitur tinjau untuk jawaban **esai/freetext benar-benar berfungsi** dari ujung ke ujung — jawaban esai masuk antrian tinjau, diberi nilai oleh pembuat, lalu total nilai dihitung ulang dan diperbarui ke sesi peserta.

## Cara menilai

1. Buka **Dashboard → Test Builder → (pilih tes) → tab Sessions**, atau langsung dari [Sesi Tes](sesi-tes.md).
2. Sesi yang butuh dinilai punya badge **"{n} to review"** dan tombol **Review Answers**.
3. Klik **Review Answers** → terbuka halaman penilaian.
4. Untuk tiap jawaban Anda melihat:
   - **Jawaban peserta**.
   - Panduan penilaian umum (rubrik).
5. Beri keputusan: **Correct** / **Incorrect**, isi **poin** dan **feedback** bila perlu.
6. Klik **Save** untuk menyimpan nilai.

## Bagaimana nilai akhir dihitung

- Sistem menghitung ulang skor **hanya atas soal yang sudah dinilai** (soal yang masih menunggu tinjauan belum dihitung).
- Mendukung **nilai sebagian** (poin/maksimal poin), bukan cuma benar/salah.
- Setelah dinilai, total nilai, jumlah benar/salah **otomatis disalin ke sesi peserta**, dan peserta diberi tahu bila hasilnya sudah lengkap.
- Selama masih ada jawaban yang belum dinilai, halaman hasil menampilkan **"Final score pending review of {n} questions"**.

## Keterbatasan saat ini

> ⚠️ **Rubrik yang Anda tulis belum tampil ke penilai.** Saat membuat soal esai Anda bisa mengisi *panduan penilaian* (review guide), tetapi di layar penilaian saat ini yang ditampilkan hanya **rubrik umum bawaan**, bukan panduan spesifik yang Anda tulis. Fungsinya tetap jalan; ini keterbatasan tampilan yang akan diperbaiki.
