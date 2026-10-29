// Data umum situs: kontak, sosial media, menu navigasi, dan judul tab per halaman.

import { JUMLAH_TOKO, type LayananToko } from "./outlets";

export const WHATSAPP = {
  nomor: "628218717165", // format internasional untuk link: 62 + nomor tanpa 0 di depan
  tampil: "0821-8717-165", // cara nomor ditulis di halaman
};

/** WhatsApp khusus kemitraan (tombol di halaman Kemitraan). */
export const WHATSAPP_KEMITRAAN = {
  nomor: "6285177049460",
  tampil: "0851 7704 9460",
};

/** Link WhatsApp, opsional dengan pesan pembuka yang sudah terisi. Nomor bawaan: WHATSAPP. */
export const waLink = (pesan?: string, nomor = WHATSAPP.nomor) =>
  `https://wa.me/${nomor}${pesan ? `?text=${encodeURIComponent(pesan)}` : ""}`;

/**
 * Gambar hero slider di beranda (frame paling atas): berganti otomatis tiap HERO_JEDA milidetik,
 * bisa digeser kiri–kanan, ada tombol panah dan titik penanda.
 * Cara mengisi: taruh file gambar di public/assets/img/hero/, lalu tulis nama file-nya di `foto`
 * (mis. "hero-1.jpg"). Ukuran 2400 × 1400 px (rasio 12:7): bingkai hero selebar layar dengan bentuk 12:7,
 * jadi gambar tampil utuh di semua perangkat; gambar dengan rasio lain terpotong sedikit di tepinya.
 * `foto` kosong ("") → kotak placeholder.
 * `alt` = penjelasan isi gambar untuk Google dan pembaca layar.
 * `lapisan` (opsional): gambar transparan di atas foto yang bergoyang pelan dan naik dari bawah saat slide-nya
 * masuk (mis. tangan memegang HP). x, y, lebar, tinggi dalam piksel gambar 2400 × 1400.
 */
export type LapisanHero = { foto: string; x: number; y: number; lebar: number; tinggi: number };

export const HERO_SLIDE: { foto: string; alt: string; lapisan?: LapisanHero }[] = [
  // Latar: foto-asli/Fast order (1).png (banner tanpa tangan, WebP q.88). Tangan: foto-asli/Tangan.png (WebP q.90,
  // transparan), letaknya dicocokkan per piksel dengan banner lama foto-asli/produk/Fast order.png
  {
    foto: "fast-order-latar.webp",
    alt: "Pesan cepat? WhatsApp Kopi Padu Rasa di 0821 8717 165: tangan memegang HP dengan pesan \"Min, Saya Mau Order\"",
    lapisan: { foto: "fast-order-tangan.webp", x: 1449, y: 143, lebar: 1006, tinggi: 1257 },
  },
  { foto: "", alt: "[ISI: penjelasan gambar 2]" },
  { foto: "", alt: "[ISI: penjelasan gambar 3]" },
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
  { nama: "WhatsApp", href: waLink("Halo Kopi Padu Rasa, saya mau pesan.") },
];

export const SOSMED = {
  instagram: "https://www.instagram.com/kopipadurasa/",
  tiktok: "https://www.tiktok.com/@kopipadurasa",
  facebook: "https://www.facebook.com/", // ISI: link halaman Facebook Kopi Padu Rasa
  threads: "https://www.threads.com/@kopipadurasa", // Threads memakai nama akun Instagram yang sama
};

export type Ikon = "home" | "cup" | "store" | "chat" | "info" | "pin";

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
};
