# Pengaturan Organisasi

Organisasi memungkinkan Anda bekerja bersama tim — berbagi bank soal, tes, dan hasil.

## Daftar organisasi

**Alamat:** `/dashboard/settings/organizations`

- Tombol **Create Organization** untuk membuat organisasi baru.
- Kotak pencarian organisasi.
- Tabel: **Name, Status, Created At, Actions**.
  - Badge **Owner** (pemilik) atau **Collaborator** (kolaborator).
  - Status **Active / Inactive**.
- Tombol **Edit** dan **Delete** hanya aktif untuk **pemilik**.

Membuat/mengubah organisasi: isi **Organization Name** + centang **Active**, lalu **Save**.
Menghapus: konfirmasi *"Are you sure you want to delete this organization? This action cannot be undone."*

## Detail organisasi & anggota

**Alamat:** `/dashboard/settings/organization` (organisasi yang sedang aktif)

Dua tab:

- **Organization Details** — ubah nama organisasi & status aktif, lalu **Save Changes**.
- **Members** — statistik anggota (**Active Members**, **Pending Invitations**, **Administrators**) dan tabel anggota untuk mengubah peran, menghapus anggota, atau membatalkan undangan.

## Mengundang anggota

Klik **Invite Member** → dialog **Add Member**, dengan dua cara:

**1. Email Invite**
1. Isi **Email Address**.
2. Pilih **Member Role**.
3. Klik **Send Invitation** — email undangan dikirim ke anggota.

**2. Invitation Link**
1. (Opsional) Isi email agar hanya alamat itu yang bisa memakai tautan.
2. Pilih **Member Role**.
3. Klik **Generate Link** → salin tautan dengan tombol **Copy**.
4. Tautan **berlaku 7 hari**.

### Peran (Role)

- **Admin** — akses penuh ke pengaturan organisasi & anggota.
- **Editor** — bisa mengubah konten & sebagian pengaturan.
- **Member** — akses dasar fitur organisasi.

*(Peran Owner tidak bisa diberikan ke orang lain.)*

## Menerima undangan (bagi penerima)

Penerima membuka tautan `/invitation?code=...`:

- **Valid** → klik **Accept Invitation** (atau **Login to Accept** bila belum masuk).
- Status lain yang mungkin: **Invitation Expired**, **Invalid Invitation**, **Invitation Accepted**, **Invitation Declined**.

Setelah bergabung, muncul konfirmasi hijau *"You have successfully joined the organization!"*.

## Berpindah organisasi

Di menu profil (pojok kanan atas):

- Lihat organisasi aktif, atau pilih **Personal account** untuk tanpa organisasi.
- Pilih organisasi lain dari daftar **Switch Organization** (organisasi nonaktif tidak bisa dipilih).
- Setelah berpindah, halaman **dimuat ulang** agar hak akses menyesuaikan.
- Tautan cepat: **Add Organization**, **Manage Organizations**.

## Role Management

**Alamat:** `/dashboard/settings/role-management`

- Buat peran baru dengan **Create Role**.
- Tabel: **Name, Description, Type (Built-in/Custom), Actions**.
- Peran **Built-in** tidak bisa diubah/dihapus; peran **Custom** bisa diedit & dihapus.
