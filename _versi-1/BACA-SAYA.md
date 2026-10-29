# Versi 1 (21 Oktober 2026)

Salinan kode situs saat pengguna menyebutnya "versi 1", sebelum percobaan versi 2
(header & footer krem, latar halaman putih kekremanan).

Isi: `app/`, `components/`, `data/`, `next.config.ts`, `CLAUDE.md`, `tsconfig.json`, `package.json`.
Gambar di `public/` tidak disalin karena tidak berubah (dipakai bersama).

Cara kembali ke versi 1:
- Cepat (tanpa menyalin file): di `data/site.ts` ubah `VERSI_TAMPILAN` menjadi `1`,
  atau buka situs dengan `?versi=1` di alamat untuk melihat sementara.
- Total (membuang semua perubahan setelah 21 Okt 2026): salin folder `app/`, `components/`, `data/`
  dan `next.config.ts` dari sini kembali ke folder proyek, lalu `npm run build`.

Folder ini dikecualikan dari build (tsconfig.json → exclude).
