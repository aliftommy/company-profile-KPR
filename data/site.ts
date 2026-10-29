// Data umum situs: kontak, sosial media, menu navigasi, dan judul tab per halaman.

import { JUMLAH_TOKO, type LayananToko } from "./outlets";

export const WHATSAPP = {
  nomor: "628218717165", // format internasional untuk link: 62 + nomor tanpa 0 di depan
  tampil: "0821-8717-165", // cara nomor ditulis di halaman
};

/**
 * Versi tampilan situs.
 * 1 = header & footer coklat, latar halaman krem (versi 1, 21 Okt 2026; salinan kodenya di folder _versi-1/).
 * 2 = percobaan: header & footer krem, latar halaman putih kekremanan (aturannya di akhir app/globals.css).
 * Untuk membandingkan tanpa build ulang, buka alamat dengan ?versi=1 atau ?versi=2
 * (berlaku untuk tab browser itu sampai ditutup).
 */
export const VERSI_TAMPILAN: 1 | 2 = 2;

/** WhatsApp khusus kemitraan (tombol di halaman Kemitraan). */
export const WHATSAPP_KEMITRAAN = {
  nomor: "6285177049460",
  tampil: "0851 7704 9460",
};

/** WhatsApp khusus lamaran kerja (tombol di hero & penutup halaman Karir). */
export const WHATSAPP_KARIR = {
  nomor: "6282346145331",
  tampil: "0823 4614 5331",
};

/** Link WhatsApp, opsional dengan pesan pembuka yang sudah terisi. Nomor bawaan: WHATSAPP. */
export const waLink = (pesan?: string, nomor = WHATSAPP.nomor) =>
  `https://wa.me/${nomor}${pesan ? `?text=${encodeURIComponent(pesan)}` : ""}`;

/** Pesan pembuka WhatsApp untuk memesan (tombol WhatsApp di PESAN_ONLINE dan banner "Pesan Cepat?"). */
const PESAN_WHATSAPP = "Halo Kopi Padu Rasa, saya mau pesan.";

/**
 * Gambar hero slider di beranda (frame paling atas): berganti otomatis tiap HERO_JEDA milidetik,
 * bisa digeser kiri–kanan, ada tombol panah dan titik penanda.
 * Cara mengisi: taruh file gambar di public/assets/img/hero/, lalu tulis nama file-nya di `foto`
 * (mis. "hero-1.jpg"). Ukuran 2400 × 1400 px (rasio 12:7): bingkai hero selebar layar dengan bentuk 12:7,
 * jadi gambar tampil utuh di semua perangkat; gambar dengan rasio lain terpotong sedikit di tepinya.
 * `foto` kosong ("") → kotak placeholder.
 * `alt` = penjelasan isi gambar untuk Google dan pembaca layar.
 * `lapisan` (opsional): daftar gambar transparan di atas foto yang bergerak; yang lebih akhir di daftar tampil
 * di depan. x, y, lebar, tinggi dalam piksel gambar 2400 × 1400. `gerak`:
 *   "ayun" (bawaan) → naik dari bawah saat slide-nya masuk, lalu bergoyang pelan (mis. tangan memegang HP);
 *   "melayang" → muncul bergiliran dari bawah sesuai urutan daftar, lalu melayang naik-turun dengan bayangan
 *   di bawahnya (mis. botol).
 * `tautan` (opsional): seluruh gambar jadi link; `label` = nama link untuk pembaca layar. Link ke luar situs
 * (https://…, mis. WhatsApp) dibuka di tab baru, link ke halaman situs sendiri (/menu#seliter) di tab yang sama.
 * `bawahGelap` (opsional): bagian bawah gambar gelap → titik penanda slider diberi alas pil krem selama slide ini
 * tampil, supaya garis coklat titiknya tetap terlihat seperti di slide yang terang.
 */
export type LapisanHero = { foto: string; x: number; y: number; lebar: number; tinggi: number; gerak?: "ayun" | "melayang" };
export type TautanHero = { href: string; label: string };

export const HERO_SLIDE: { foto: string; alt: string; lapisan?: LapisanHero[]; tautan?: TautanHero; bawahGelap?: boolean }[] = [
  // Big Service KPR (layanan acara): foto-asli/produk/big-service-kpr.png (WebP q.88). Gambar pertama sejak
  // 29 Okt 2026 (dulu placeholder gambar 3). Isi tulisannya disalin ke alt untuk Google & pembaca layar.
  {
    foto: "big-service.webp",
    alt: "Big Service KPR. Apa pun acaranya, siapa pun tamunya, Kopi Padu Rasa jadi bagian hangat ceritanya. 1. Padu-Go: minimum order 50 cup, styrofoam, pengiriman (excluded). 2. Padu-Big: minimum order 250 cup, pengiriman, booth, 2 barista (excluded). 3. Padu-Prime: minimum order 250 cup, pengiriman (+2 barista), booth, custom greetings.",
  },
  // Latar: foto-asli/Fast order (1).png (banner tanpa tangan, WebP q.88). Tangan: foto-asli/Tangan.png (WebP q.90,
  // transparan), letaknya dicocokkan per piksel dengan banner lama foto-asli/produk/Fast order.png
  {
    foto: "fast-order-latar.webp",
    alt: "Pesan cepat? WhatsApp Kopi Padu Rasa di 0821 8717 165: tangan memegang HP dengan pesan \"Min, Saya Mau Order\"",
    lapisan: [{ foto: "fast-order-tangan.webp", x: 1449, y: 143, lebar: 1006, tinggi: 1257 }],
    // Banner menulis "atau klik HP ini yah": diklik di mana saja → WhatsApp pesan
    tautan: { href: waLink(PESAN_WHATSAPP), label: `Pesan lewat WhatsApp ${WHATSAPP.tampil}` },
  },
  // Seliter Padu: latar foto-asli/produk/Background1L.png (WebP q.88), botol foto-asli/produk/<rasa>1L.png
  // (WebP q.90, dipotong ke batas botol). Botol kopi di tengah lebih besar, Coklat & Matcha di pinggir lebih kecil;
  // jarak antar botol sama, 40 px (x berikut = x + lebar + 40), rombongan di tengah gambar. Semua berdiri di
  // "lantai" coklat, di bawah logo. Dasar botol tengah di y 1220 supaya tidak tertimpa titik penanda slider di HP.
  {
    foto: "seliter-latar.webp",
    alt: "Seliter Padu: botol 1 liter Padu Coklat, Kopi Padu Aren, Kopi Padu Krimi, dan Padu Matcha di depan siluet kota",
    lapisan: [
      { foto: "seliter-coklat.webp", x: 290, y: 375, lebar: 383, tinggi: 790, gerak: "melayang" },
      { foto: "seliter-matcha.webp", x: 1717, y: 375, lebar: 392, tinggi: 790, gerak: "melayang" },
      { foto: "seliter-aren.webp", x: 713, y: 320, lebar: 463, tinggi: 900, gerak: "melayang" },
      { foto: "seliter-krimi.webp", x: 1216, y: 320, lebar: 461, tinggi: 900, gerak: "melayang" },
    ],
    bawahGelap: true, // titik penanda berada di atas lantai coklat gelap
    // Diklik di mana saja → section Seliter Padu di halaman Menu (tab yang sama)
    tautan: { href: "/menu#seliter", label: "Lihat Seliter Padu di halaman Menu" },
  },
];
export const HERO_JEDA = 5000; // 5 detik

/**
 * Link pesan online (pil di footer + tombol besar di frame pertama halaman Menu).
 * Kosongkan href ("") kalau belum ada link: tombolnya tampil sebagai penanda yang tidak bisa diklik.
 * perToko: tombol membuka pop up pilih toko; link tiap toko diisi di data/outlets.ts (gofood / grab / shopee).
 */
export const PESAN_ONLINE: { nama: string; href: string; perToko?: LayananToko }[] = [
  { nama: "GoFood", href: "", perToko: "gofood" },
  { nama: "GrabFood", href: "", perToko: "grab" },
  { nama: "ShopeeFood", href: "", perToko: "shopee" },
  { nama: "WhatsApp", href: waLink(PESAN_WHATSAPP) },
];

export const SOSMED = {
  instagram: "https://www.instagram.com/kopipadurasa/",
  tiktok: "https://www.tiktok.com/@kopipadurasa",
  facebook: "https://www.facebook.com/", // ISI: link halaman Facebook Kopi Padu Rasa
  threads: "https://www.threads.com/@kopipadurasa", // Threads memakai nama akun Instagram yang sama
};

export type Ikon = "home" | "cup" | "store" | "chat" | "info" | "pin" | "karir";

/**
 * Halaman yang sedang dimatikan: tidak tampil di laci burger, footer, dan tombol yang menuju ke sana,
 * dan alamatnya dialihkan ke beranda (next.config.ts). Hapus dari daftar ini untuk menyalakannya lagi.
 */
export const HALAMAN_NONAKTIF: string[] = ["/kontak", "/tentang"];
export const halamanAktif = (href: string) => !HALAMAN_NONAKTIF.includes(href);

type ItemNav = { href: string; id: string; en: string; ikon: Ikon };

/** Urutan menu di laci burger dan di footer (halaman di HALAMAN_NONAKTIF dilewati). */
const SEMUA_NAV: ItemNav[] = [
  { href: "/", id: "Beranda", en: "Home", ikon: "home" },
  { href: "/menu", id: "Menu", en: "Menu", ikon: "cup" },
  { href: "/kemitraan", id: "Kemitraan", en: "Partnership", ikon: "store" },
  { href: "/kontak", id: "Kontak", en: "Contact", ikon: "chat" },
  { href: "/tentang", id: "Tentang", en: "About", ikon: "info" },
  { href: "/lokasi", id: "Lokasi", en: "Locations", ikon: "pin" },
  { href: "/karir", id: "Karir", en: "Careers", ikon: "karir" },
];
export const NAV = SEMUA_NAV.filter((n) => halamanAktif(n.href));

/** Judul tab browser per halaman (bahasa Indonesia dipakai juga untuk Google). */
export const JUDUL_HALAMAN: Record<string, { id: string; en: string }> = {
  "/": { id: `Kopi Padu Rasa · Kopi to Go di ${JUMLAH_TOKO} Toko`, en: `Kopi Padu Rasa · Coffee to Go at ${JUMLAH_TOKO} Stores` },
  "/tentang": { id: "Tentang Kami · Kopi Padu Rasa", en: "About Us · Kopi Padu Rasa" },
  "/menu": { id: "Menu · Kopi Padu Rasa", en: "Menu · Kopi Padu Rasa" },
  "/lokasi": { id: `Lokasi ${JUMLAH_TOKO} Toko · Kopi Padu Rasa`, en: `${JUMLAH_TOKO} Store Locations · Kopi Padu Rasa` },
  "/kemitraan": { id: "Kemitraan · Kopi Padu Rasa", en: "Partnership · Kopi Padu Rasa" },
  "/kontak": { id: "Kontak · Kopi Padu Rasa", en: "Contact · Kopi Padu Rasa" },
  "/karir": { id: "Karir · Kopi Padu Rasa", en: "Careers · Kopi Padu Rasa" },
};
