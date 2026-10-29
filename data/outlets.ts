// Daftar toko. Satu baris = satu toko. Urutan baris bebas: kartu di halaman Lokasi (nomor koin ikut abjad) dan
// pop up "Pilih toko" GoFood/GrabFood/ShopeeFood diurutkan abjad nama toko lewat urutAbjad().
// Jumlah toko di teks situs ("28 toko") dihitung otomatis dari jumlah baris (JUMLAH_TOKO).
//
// - nama   : nama toko (judul kartu)
// - maps   : link Google Maps untuk tombol "Petunjuk arah" (kartu toko tidak menampilkan alamat, 28 Okt 2026).
//            Kosongkan ("") kalau belum ada: tombol membuka pencarian Google Maps "Kopi Padu Rasa <nama>".
// - wilayah, jam, foto (opsional): isi hanya kalau toko itu berbeda dari WILAYAH / JAM_BUKA / FOTO_TOKO di bawah.
//            wilayah & jam ditulis dua bahasa, mis. wilayah: { id: "Sulawesi Barat", en: "West Sulawesi" }.
//            foto: path di folder public, mis. foto: "/assets/img/toko/rappocini.webp".
// - gofood, grab, shopee : link GoFood / GrabFood / ShopeeFood toko ini (pop up "Pilih toko" di tombol aplikasinya).
//            Toko yang belum punya link aplikasi itu tampil "Akan datang".

/** Label kecil di atas nama toko (semua toko di provinsi ini). */
export const WILAYAH = { id: "Sulawesi Selatan", en: "South Sulawesi" };
/** Jam buka semua toko. */
export const JAM_BUKA = { id: "24 jam", en: "24 hours" };
/** Foto latar kartu toko (dari foto-asli/produk/foto-toko.png, 800 × 1000). */
export const FOTO_TOKO = "/assets/img/foto-toko.webp";

export type Outlet = {
  nama: string;
  maps: string;
  wilayah?: { id: string; en: string };
  jam?: { id: string; en: string };
  foto?: string;
  gofood?: string;
  grab?: string;
  shopee?: string;
};

/** Aplikasi pesan-antar yang linknya per toko (kolom di Outlet). */
export type LayananToko = "gofood" | "grab" | "shopee";

/** Link "Petunjuk arah": link dari data, atau pencarian Google Maps kalau masih kosong. */
export const linkMaps = (o: Outlet) =>
  o.maps ||
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Kopi Padu Rasa ${o.nama} ${(o.wilayah ?? WILAYAH).id}`)}`;

/** Toko diurutkan abjad nama (kartu Lokasi & pop up "Pilih toko"). */
export const urutAbjad = (daftar: Outlet[]) => [...daftar].sort((a, b) => a.nama.localeCompare(b.nama, "id"));

export const OUTLET: Outlet[] = [
  /* 01 */ { nama: "Agus Salim", maps: "https://maps.app.goo.gl/vVUNe9nskBRWhTmG8", gofood: "https://gofood.link/a/R64VS9h", grab: "https://app.grab.com/s/rzH9Pkgu", shopee: "https://shopee.co.id/universal-link/now-food/shop/22545283?deep_and_deferred=1" },
  /* 02 */ { nama: "Mappaodang", maps: "https://maps.app.goo.gl/Mqfqkc2Cw2VVuV1T9", gofood: "https://gofood.link/a/REPsddu", grab: "https://app.grab.com/s/xmmK4OLl", shopee: "https://shopee.co.id/universal-link/now-food/shop/22502275?deep_and_deferred=1" },
  /* 03 */ { nama: "Goa Ria", maps: "https://maps.app.goo.gl/rqKXXPA9z76T7eo6A", gofood: "https://gofood.link/a/RJsrAb1", grab: "https://app.grab.com/s/3PPnjeZH", shopee: "https://shopee.co.id/universal-link/now-food/shop/22528962?deep_and_deferred=1" },
  /* 04 */ { nama: "Malengkeri", maps: "https://maps.app.goo.gl/9C89FCXC6bZE7Rm76", gofood: "https://gofood.link/a/RJssjAG", grab: "https://app.grab.com/s/5VDPBA36", shopee: "https://shopee.co.id/universal-link/now-food/shop/22529125?deep_and_deferred=1" },
  /* 05 */ { nama: "Tamalate", maps: "https://maps.app.goo.gl/WrAvWGitCp1muV3d9", gofood: "https://gofood.link/a/RTzo1Tw", grab: "https://app.grab.com/s/2Lxbnpoe", shopee: "https://shopee.co.id/universal-link/now-food/shop/22529107?deep_and_deferred=1" },
  /* 06 */ { nama: "Sunu", maps: "https://maps.app.goo.gl/GHfXDkSPAX8Fyj5h9", gofood: "https://gofood.link/a/RTzowJ1", grab: "https://app.grab.com/s/C6pvg49m", shopee: "https://shopee.co.id/universal-link/now-food/shop/22543594?deep_and_deferred=1" },
  /* 07 */ { nama: "Pallangga", maps: "https://maps.app.goo.gl/t2AzQTztdGh4Y6wF9", gofood: "https://gofood.link/a/S8cdje3", grab: "https://app.grab.com/s/5W29Ocfv" },
  /* 08 */ { nama: "Samata", maps: "https://maps.app.goo.gl/LjpRWTVScZ5qVSFv8", gofood: "https://gofood.link/a/TaDzoYq", grab: "https://app.grab.com/s/ug0Ou4Bb", shopee: "https://shopee.co.id/universal-link/now-food/shop/22667871?deep_and_deferred=1" },
  /* 09 */ { nama: "Antang", maps: "https://maps.app.goo.gl/5Hx83hdB5r3r3idc9", gofood: "https://gofood.link/a/TaDzfdY", grab: "https://app.grab.com/s/B8LxZGlI", shopee: "https://shopee.co.id/universal-link/now-food/shop/22818495?deep_and_deferred=1" },
  /* 10 */ { nama: "BTP", maps: "https://maps.app.goo.gl/L96rn2RgNDXkd6aC9", gofood: "https://gofood.link/a/TaDvCnw", grab: "https://app.grab.com/s/QPlmgOMY", shopee: "https://shopee.co.id/universal-link/now-food/shop/23159763?deep_and_deferred=1" },
  /* 11 */ { nama: "Limbung", maps: "https://maps.app.goo.gl/6kbzoyAhz8E65XWWA", grab: "https://app.grab.com/s/FCsjdvKF" },
  /* 12 */ { nama: "Rappocini", maps: "https://maps.app.goo.gl/ked4R3GAJEqjKFCi9", gofood: "https://gofood.link/a/TwFA41Y", grab: "https://app.grab.com/s/JSnvY37d", shopee: "https://shopee.co.id/universal-link/now-food/shop/23349574?deep_and_deferred=1" },
  /* 13 */ { nama: "Gagak", maps: "https://maps.app.goo.gl/1WXDubfnJhPfi3bn8", gofood: "https://gofood.link/a/TN2RbWU", grab: "https://app.grab.com/s/3zjn5Ngw", shopee: "https://shopee.co.id/universal-link/now-food/shop/23205967?deep_and_deferred=1" },
  /* 14 */ { nama: "Aroepala", maps: "https://maps.app.goo.gl/ikHn55N8DTP41wXT9", gofood: "https://gofood.link/a/TXARYeo", grab: "https://app.grab.com/s/6rE4JUro", shopee: "https://shopee.co.id/universal-link/now-food/shop/23319060?deep_and_deferred=1" },
  /* 15 */ { nama: "Urip", maps: "https://maps.app.goo.gl/xhhbZn3bdiSL4jGh8", gofood: "https://gofood.link/a/TXARYDS", grab: "https://app.grab.com/s/XzFoLJeV", shopee: "https://shopee.co.id/universal-link/now-food/shop/23319391?deep_and_deferred=1" },
  /* 16 */ { nama: "Tallasalapang", maps: "https://maps.app.goo.gl/UgEHguyvBZD8keQR6", gofood: "https://gofood.link/a/TXARZHj", grab: "https://app.grab.com/s/dgwXw9wb", shopee: "https://shopee.co.id/universal-link/now-food/shop/23319516?deep_and_deferred=1" },
  /* 17 */ { nama: "Bougenville", maps: "https://maps.app.goo.gl/cT7AfuYnWDr1mhG99", gofood: "https://gofood.link/a/UaDnTKo", grab: "https://app.grab.com/s/FTC54hmz", shopee: "https://shopee.co.id/universal-link/now-food/shop/23410424?deep_and_deferred=1" },
  /* 18 */ { nama: "Yusuf Bauty", maps: "https://maps.app.goo.gl/uqYpRJN7385rHTcQA", gofood: "https://gofood.link/a/UaDnVSU", grab: "https://app.grab.com/s/gCLMwlnl", shopee: "https://shopee.co.id/universal-link/now-food/shop/23429835?deep_and_deferred=1" },
  /* 19 */ { nama: "Borong", maps: "", gofood: "https://gofood.link/a/UdkUkmm", grab: "https://app.grab.com/s/m0ArEXUG", shopee: "https://shopee.co.id/universal-link/now-food/shop/23432852?deep_and_deferred=1" },
  /* 20 */ { nama: "Pajjaiang", maps: "https://maps.app.goo.gl/xvqHzDTi5XJaQDV2A", gofood: "https://gofood.link/a/Ut5RqX3", grab: "https://app.grab.com/s/pGrSEspZ", shopee: "https://shopee.co.id/universal-link/now-food/shop/23574792?deep_and_deferred=1" },
  /* 21 */ { nama: "Paccerakkang", maps: "https://maps.app.goo.gl/aLbn65PgX9LNx5QU9", gofood: "https://gofood.link/a/Ut5RrTw", grab: "https://app.grab.com/s/X7kCDYXi", shopee: "https://shopee.co.id/universal-link/now-food/shop/23574451?deep_and_deferred=1" },
  /* 22 */ { nama: "Pasar Jongkok", maps: "", gofood: "https://gofood.link/a/Ut5Rsw1", grab: "https://app.grab.com/s/xZCh67Gq", shopee: "https://shopee.co.id/universal-link/now-food/shop/23590573?deep_and_deferred=1" },
  /* 23 */ { nama: "Perintis", maps: "https://maps.app.goo.gl/LhsfURhpXszz4We1A", gofood: "https://gofood.link/a/Ut5RshU", grab: "https://app.grab.com/s/gbFMaoP8", shopee: "https://shopee.co.id/universal-link/now-food/shop/23624121?deep_and_deferred=1" },
  /* 24 */ { nama: "Barombong", maps: "", gofood: "https://gofood.link/a/Ut5RteE", grab: "https://app.grab.com/s/K630wiXL", shopee: "https://shopee.co.id/universal-link/now-food/shop/23595806?deep_and_deferred=1" },
  /* 25 */ { nama: "Poros Malino", maps: "https://maps.app.goo.gl/3cXcxLRjJhFmUt8E9", gofood: "https://gofood.link/a/Ut5RrUL", grab: "https://app.grab.com/s/FzROKYDu", shopee: "https://shopee.co.id/universal-link/now-food/shop/23633400?deep_and_deferred=1" },
  /* 26 */ { nama: "Takalar", maps: "" },
  /* 27 */ { nama: "Pattalassang", maps: "", gofood: "https://gofood.link/a/UKMVy1Y", shopee: "https://shopee.co.id/universal-link/now-food/shop/23895133?deep_and_deferred=1" },
  /* 28 */ { nama: "Pare-Pare", maps: "" },
];

/** Jumlah toko untuk teks seperti "28 toko" (judul Lokasi, beranda, Tentang, judul tab). */
export const JUMLAH_TOKO = OUTLET.length;
