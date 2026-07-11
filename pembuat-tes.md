# Pembuat Tes

**Pembuat Tes** dipakai untuk menyusun tes dari soal-soal di [Bank Soal](bank-soal.md), mengatur waktu, mengundang peserta, dan mempublikasikannya.

**Alamat halaman:** `/dashboard/test-builder`

## Tampilan daftar tes

- Judul **Total Test Group** dengan jumlah tes.
- Kotak **pencarian** tes.
- Tombol **Create New Test**.
- Tab: **All / Free / Premium / Drafts**.

Tiap kartu tes menampilkan status (**Active / Inactive / Draft / Archived**), badge Premium (bila ada), pembuat, judul, tanggal, jumlah peserta & soal, serta dua tombol: **Edit Test** dan **Manage Questions**.

## Membuat tes baru

1. Klik **Create New Test**.
2. Terbuka editor tes. Secara default tes baru berstatus **Draft**, akses **Private**, durasi **30 menit**.
3. Isi data lalu klik **Save**.

> Sebelum bisa disimpan, minimal **Judul** dan **Pembuat (Creator)** harus terisi. Jika belum, muncul daftar *"Please fill in the required fields before saving."*

Editor punya beberapa tab: **Information, Benefits, Premium, Topics, Participants, Questions, Sessions**.

## Pengaturan di tab Information

Tab **Information** berisi beberapa kartu:

- **Basics** — Judul, Deskripsi, **Access** (Public/Private), **Status** (Draft/Active/Inactive/Archived).
- **Categorization & Authoring** — Kategori (bisa buat baru) dan Pembuat (Creator).
- **Difficulty & Timing:**
  - **Difficulties** — centang Easy/Medium/Hard/Expert.
  - **Duration** — durasi pengerjaan (dalam detik, ditampilkan sebagai menit:detik).
  - **Questions per session** — jumlah soal yang diambil acak dari kumpulan tiap sesi (kosongkan untuk tampilkan semua).
  - **Shuffle questions** — mengacak urutan soal tiap sesi.
- **Media** — URL gambar sampul & media halaman depan.
- **Proctoring (pengawasan):**
  - **Enable proctoring** — menyembunyikan soal & memberi peringatan saat peserta berpindah tab.
  - **Warning threshold** — batas peringatan.
  - **Auto-end after** — akhiri otomatis setelah sekian pelanggaran.

> **Catatan:** Saat ini **belum ada pengaturan nilai kelulusan (passing score)** dan **belum ada fitur "bagian/section"** — semua soal berada dalam satu kumpulan. Struktur hanya bisa dijelaskan lewat tab **Topics** (deskriptif).

## Menambah soal dari Bank Soal

1. Buka **Manage Questions** (dari kartu tes atau tab Questions) → halaman **List Questions**.
2. Klik **Add Question** → muncul jendela **Select new questions to add**.
3. Jendela menampilkan seluruh soal di bank organisasi (kolom No. / Questions / Type / Difficulty).
4. Centang soal yang diinginkan (satu-satu atau pilih semua).
5. Klik **Add ( N ) Questions**. Muncul notifikasi *"Changes saved!"*.

Untuk menghapus: centang baris soal lalu hapus. Anda juga bisa membuat soal baru dari sini lewat tautan **Create Question**.

## Mempublikasikan tes

Publikasi dilakukan lewat tab **Information → Basics**:

- Set **Access = Public** dan **Status = Active**.

Tidak ada tombol "Publish" terpisah — cukup ubah status & akses lalu simpan. Setiap tes punya **halaman depan publik** di `/test-landing/[id]`.

## Membagikan tes (undangan)

Untuk tes **Private**, gunakan tab **Participants**:

1. Masukkan email peserta ke **Allowlist**.
2. Klik **Generate / refresh links** untuk membuat **tautan undangan sekali pakai** per email.
3. Klik **Copy link** dan bagikan ke peserta.

Peserta membuka tautan → halaman depan tes → bisa mengerjakan tanpa perlu mendaftar akun. Tautan punya masa berlaku dan berlabel **Used** setelah dipakai.

> Allowlist dan tautan undangan hanya berlaku bila akses tes disetel **Private**.

## Jenis jawaban yang butuh penilaian manual

Jika tes memuat soal **esai (Text Input), kode (Code Input), rekam suara (Voice Input), atau unggah berkas (File Upload)**, jawaban tersebut **tidak dinilai otomatis**. Anda perlu menilainya sendiri — lihat [Menilai Jawaban (Tinjau)](tinjau-jawaban.md).
