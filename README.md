# Panduan SkillPintar

Situs panduan SkillPintar (Bahasa Indonesia), diterbitkan dengan [Mintlify](https://mintlify.com). Dua bagian:

- **Panduan Pengguna** — untuk pembuat tes dan peserta.
- **Panduan Operasional** — untuk yang memasang dan merawat server.

## Sumber kebenaran ada di repo aplikasi

Isi halaman **tidak ditulis di sini**. Sumbernya:

- `docs/panduan-pengguna/` dan `docs/operasional/` di repo `muizidn/skillpintar-nextjs`.

Repo ini hanya menerbitkan. Alur perubahan:

1. Ubah file `.md` di repo aplikasi (lewat PR di sana — aturan repo itu mewajibkan panduan operasional diperbarui bersama perubahan kode).
2. Di repo ini: `node scripts/sync-from-app.mjs ../skillpintar-nextjs` — menghasilkan ulang semua `.mdx` di `panduan-pengguna/` dan `operasional/`.
3. Kalau ada halaman baru/hilang, sesuaikan `docs.json` (navigasi).
4. Commit, push ke `main` — Mintlify menerbitkan otomatis (GitHub App).

Jangan mengedit `.mdx` langsung; hasilnya akan tertimpa saat sync berikutnya.

## Pratinjau lokal

```bash
npm i -g mint
mint dev
```

Buka http://localhost:3000. `mint broken-links` memeriksa tautan.

## Yang ada di repo ini

| Path | Isi |
|---|---|
| `docs.json` | Konfigurasi Mintlify: nama, warna, navigasi (tab & grup) |
| `panduan-pengguna/**/*.mdx` | hasil sync (jangan diedit) |
| `operasional/*.mdx` | hasil sync (jangan diedit) |
| `scripts/sync-from-app.mjs` | konverter `.md` → `.mdx` (frontmatter, tautan, escape MDX) |
| `favicon.svg` | ikon |
