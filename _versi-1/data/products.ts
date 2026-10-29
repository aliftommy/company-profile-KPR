// Daftar produk. Urutan di sini = urutan kartu di halaman.
//
// - kategori : "kopi" | "nonkopi" | "hangat" | "camilan"  (tab di halaman Menu)
// - foto     : nama file di public/assets/img/produk/web/ (WebP 600×900, latar transparan).
//              Kosongkan kalau belum ada foto; kartu menampilkan placeholder.
// - harga    : salah satu isi HARGA di bawah → pita bawah kartu; diklik untuk ganti ukuran Normal ↔ Besar
// - deskripsi: teks pita bawah untuk produk tanpa harga (mis. Camilan yang belum diisi)
// - favorit  : true → tampil di "Menu favorit" beranda + pita "★ Favorit" di halaman Menu
// - unggulan : true → kartu berlatar oranye

export type Kategori = "kopi" | "nonkopi" | "hangat" | "camilan";

/** Harga dalam rupiah, angka saja (mis. 15000); tampil otomatis sebagai "Rp 15.000". */
export type Harga = { normal: number; besar: number };

export type Produk = {
  nama: string;
  kategori: Kategori;
  foto?: string;
  alt?: string;
  harga?: Harga;
  deskripsi?: { id: string; en: string };
  favorit?: boolean;
  unggulan?: boolean;
};

// =====================================================================
//  HARGA MENU: ubah di sini.
//  Tulis angka saja, tanpa "Rp" dan tanpa titik (15000 tampil "Rp 15.000").
//  normal = ukuran Normal, besar = ukuran Besar.
// =====================================================================
export const HARGA = {
  // ---- Es ----
  kopiPaduKrimi:  { normal: 13000, besar: 18000 },
  kopiPaduAren:   { normal: 13000, besar: 18000 },
  kopiPaduPandan: { normal: 15000, besar: 20000 },
  paduKaramel:    { normal: 15000, besar: 20000 },
  paduKano:       { normal: 13000, besar: 18000 },
  berikano:       { normal: 15000, besar: 20000 },
  paduCoklat:     { normal: 13000, besar: 18000 },
  paduMatcha:     { normal: 15000, besar: 22000 },

  // ---- Padu Hangat ----
  kopiPaduKrimiHangat: { normal: 13000, besar: 18000 },
  kopiPaduArenHangat:  { normal: 13000, besar: 18000 },
  paduKanoHangat:      { normal: 13000, besar: 18000 },
  paduMatchaHangat:    { normal: 15000, besar: 22000 },
  paduCoklatHangat:    { normal: 13000, besar: 18000 },
} satisfies Record<string, Harga>;

/** 15000 → "Rp 15.000" */
export const rupiah = (n: number) => "Rp " + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const belumDiisi = { id: "[Deskripsi singkat]", en: "[Short description]" };

export const KATEGORI: { key: Kategori; id: string; en: string }[] = [
  { key: "kopi", id: "Kopi", en: "Coffee" },
  { key: "nonkopi", id: "Non-Kopi", en: "Non-Coffee" },
  { key: "hangat", id: "Padu Hangat", en: "Padu Hangat (Hot)" },
  { key: "camilan", id: "Camilan", en: "Snacks" },
];

export const PRODUK: Produk[] = [
  // ---- Kopi ----
  { nama: "Kopi Padu Krimi", kategori: "kopi", foto: "kopi-padu-krimi.webp", alt: "Es Kopi Padu Krimi", harga: HARGA.kopiPaduKrimi, favorit: true },
  { nama: "Kopi Padu Aren", kategori: "kopi", foto: "kopi-padu-aren.webp", alt: "Es Kopi Padu Aren", harga: HARGA.kopiPaduAren, favorit: true },
  { nama: "Kopi Padu Pandan", kategori: "kopi", foto: "kopi-padu-pandan.webp", alt: "Es Kopi Padu Pandan", harga: HARGA.kopiPaduPandan },
  { nama: "Padu Karamel", kategori: "kopi", foto: "padu-karamel.webp", alt: "Es Padu Karamel", harga: HARGA.paduKaramel },
  { nama: "Padu Kano", kategori: "kopi", foto: "padu-kano.webp", alt: "Es Padu Kano", harga: HARGA.paduKano },
  { nama: "Berikano", kategori: "kopi", foto: "berikano.webp", alt: "Es Berikano", harga: HARGA.berikano },

  // ---- Non-Kopi ----
  { nama: "Padu Coklat", kategori: "nonkopi", foto: "coklat.webp", alt: "Es Padu Coklat", harga: HARGA.paduCoklat, favorit: true },
  { nama: "Padu Matcha", kategori: "nonkopi", foto: "matcha.webp", alt: "Es Padu Matcha", harga: HARGA.paduMatcha, favorit: true },

  // ---- Padu Hangat (varian panas; foto belum ada) ----
  { nama: "Kopi Padu Krimi", kategori: "hangat", alt: "Kopi Padu Krimi hangat", harga: HARGA.kopiPaduKrimiHangat },
  { nama: "Kopi Padu Aren", kategori: "hangat", alt: "Kopi Padu Aren hangat", harga: HARGA.kopiPaduArenHangat },
  { nama: "Padu Kano", kategori: "hangat", alt: "Padu Kano hangat", harga: HARGA.paduKanoHangat },
  { nama: "Padu Matcha", kategori: "hangat", alt: "Padu Matcha hangat", harga: HARGA.paduMatchaHangat },
  { nama: "Padu Coklat", kategori: "hangat", alt: "Padu Coklat hangat", harga: HARGA.paduCoklatHangat },

  // ---- Camilan (masih contoh, ganti dengan produk sebenarnya) ----
  { nama: "[Nama produk]", kategori: "camilan", deskripsi: belumDiisi },
  { nama: "[Nama produk]", kategori: "camilan", deskripsi: belumDiisi },
  { nama: "[Nama produk]", kategori: "camilan", deskripsi: belumDiisi },
  { nama: "[Nama produk]", kategori: "camilan", deskripsi: belumDiisi },
];

// Padu+++: tambahan berbayar per ukuran minuman (kotak di bawah kartu menu)
export const TAMBAHAN: { nama: string; normal: string; besar: string }[] = [
  { nama: "Extra shot", normal: "+Rp 2.000", besar: "+Rp 3.000" },
  { nama: "Oat milk", normal: "+Rp 3.000", besar: "+Rp 5.000" },
];

// Seliter Padu: kemasan 1 liter (section hero di bawah daftar menu)
export const SELITER: { nama: string; harga: string }[] = [
  { nama: "Kopi Padu Krimi", harga: "Rp 60.000" },
  { nama: "Kopi Padu Aren", harga: "Rp 60.000" },
  { nama: "Padu Matcha", harga: "Rp 70.000" },
  { nama: "Padu Coklat", harga: "Rp 60.000" },
];
