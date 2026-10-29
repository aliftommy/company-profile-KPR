// Daftar toko. Satu baris = satu toko; nomor di koin kartu mengikuti urutan baris.
// Jumlah toko di teks situs ("28 toko") dihitung otomatis dari jumlah baris (JUMLAH_TOKO).
//
// - nama   : nama toko (judul kartu)
// - alamat : alamat lengkap
// - maps   : link Google Maps untuk tombol "Petunjuk arah".
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
  alamat: string;
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

export const OUTLET: Outlet[] = [
  /* 01 */ { nama: "Agus Salim", alamat: "[Alamat lengkap]", maps: "", gofood: "https://gofood.link/a/R64VS9h", grab: "https://app.grab.com/s/rzH9Pkgu", shopee: "https://shopee.co.id/universal-link/now-food/shop/22545283?deep_and_deferred=1" },
  /* 02 */ { nama: "Mappaodang", alamat: "[Alamat lengkap]", maps: "", gofood: "https://gofood.link/a/REPsddu", grab: "https://app.grab.com/s/xmmK4OLl", shopee: "https://shopee.co.id/universal-link/now-food/shop/22502275?deep_and_deferred=1" },
  /* 03 */ { nama: "Goa Ria", alamat: "[Alamat lengkap]", maps: "", gofood: "https://gofood.link/a/RJsrAb1", grab: "https://app.grab.com/s/3PPnjeZH", shopee: "https://shopee.co.id/universal-link/now-food/shop/22528962?deep_and_deferred=1" },
  /* 04 */ { nama: "Malengkeri", alamat: "[Alamat lengkap]", maps: "", gofood: "https://gofood.link/a/RJssjAG", grab: "https://app.grab.com/s/5VDPBA36", shopee: "https://shopee.co.id/universal-link/now-food/shop/22529125?deep_and_deferred=1" },
  /* 05 */ { nama: "Tamalate", alamat: "[Alamat lengkap]", maps: "", gofood: "https://gofood.link/a/RTzo1Tw", grab: "https://app.grab.com/s/2Lxbnpoe", shopee: "https://shopee.co.id/universal-link/now-food/shop/22529107?deep_and_deferred=1" },
  /* 06 */ { nama: "Sunu", alamat: "[Alamat lengkap]", maps: "", gofood: "https://gofood.link/a/RTzowJ1", grab: "https://app.grab.com/s/C6pvg49m", shopee: "https://shopee.co.id/universal-link/now-food/shop/22543594?deep_and_deferred=1" },
  /* 07 */ { nama: "Pallangga", alamat: "[Alamat lengkap]", maps: "", gofood: "https://gofood.link/a/S8cdje3", grab: "https://app.grab.com/s/5W29Ocfv" },
  /* 08 */ { nama: "Samata", alamat: "[Alamat lengkap]", maps: "", gofood: "https://gofood.link/a/TaDzoYq", grab: "https://app.grab.com/s/ug0Ou4Bb", shopee: "https://shopee.co.id/universal-link/now-food/shop/22667871?deep_and_deferred=1" },
  /* 09 */ { nama: "Antang", alamat: "[Alamat lengkap]", maps: "", gofood: "https://gofood.link/a/TaDzfdY", grab: "https://app.grab.com/s/B8LxZGlI", shopee: "https://shopee.co.id/universal-link/now-food/shop/22818495?deep_and_deferred=1" },
  /* 10 */ { nama: "BTP", alamat: "[Alamat lengkap]", maps: "", gofood: "https://gofood.link/a/TaDvCnw", grab: "https://app.grab.com/s/QPlmgOMY", shopee: "https://shopee.co.id/universal-link/now-food/shop/23159763?deep_and_deferred=1" },
  /* 11 */ { nama: "Limbung", alamat: "[Alamat lengkap]", maps: "", grab: "https://app.grab.com/s/FCsjdvKF" },
  /* 12 */ { nama: "Rappocini", alamat: "[Alamat lengkap]", maps: "", gofood: "https://gofood.link/a/TwFA41Y", grab: "https://app.grab.com/s/JSnvY37d", shopee: "https://shopee.co.id/universal-link/now-food/shop/23349574?deep_and_deferred=1" },
  /* 13 */ { nama: "Gagak", alamat: "[Alamat lengkap]", maps: "", gofood: "https://gofood.link/a/TN2RbWU", grab: "https://app.grab.com/s/3zjn5Ngw", shopee: "https://shopee.co.id/universal-link/now-food/shop/23205967?deep_and_deferred=1" },
  /* 14 */ { nama: "Aroepala", alamat: "[Alamat lengkap]", maps: "", gofood: "https://gofood.link/a/TXARYeo", grab: "https://app.grab.com/s/6rE4JUro", shopee: "https://shopee.co.id/universal-link/now-food/shop/23319060?deep_and_deferred=1" },
  /* 15 */ { nama: "Urip", alamat: "[Alamat lengkap]", maps: "", gofood: "https://gofood.link/a/TXARYDS", grab: "https://app.grab.com/s/XzFoLJeV", shopee: "https://shopee.co.id/universal-link/now-food/shop/23319391?deep_and_deferred=1" },
  /* 16 */ { nama: "Tallasalapang", alamat: "[Alamat lengkap]", maps: "", gofood: "https://gofood.link/a/TXARZHj", grab: "https://app.grab.com/s/dgwXw9wb", shopee: "https://shopee.co.id/universal-link/now-food/shop/23319516?deep_and_deferred=1" },
  /* 17 */ { nama: "Bougenville", alamat: "[Alamat lengkap]", maps: "", gofood: "https://gofood.link/a/UaDnTKo", grab: "https://app.grab.com/s/FTC54hmz", shopee: "https://shopee.co.id/universal-link/now-food/shop/23410424?deep_and_deferred=1" },
  /* 18 */ { nama: "Yusuf Bauty", alamat: "[Alamat lengkap]", maps: "", gofood: "https://gofood.link/a/UaDnVSU", grab: "https://app.grab.com/s/gCLMwlnl", shopee: "https://shopee.co.id/universal-link/now-food/shop/23429835?deep_and_deferred=1" },
  /* 19 */ { nama: "Borong", alamat: "[Alamat lengkap]", maps: "", gofood: "https://gofood.link/a/UdkUkmm", grab: "https://app.grab.com/s/m0ArEXUG", shopee: "https://shopee.co.id/universal-link/now-food/shop/23432852?deep_and_deferred=1" },
  /* 20 */ { nama: "Pajjaiang", alamat: "[Alamat lengkap]", maps: "", gofood: "https://gofood.link/a/Ut5RqX3", grab: "https://app.grab.com/s/pGrSEspZ", shopee: "https://shopee.co.id/universal-link/now-food/shop/23574792?deep_and_deferred=1" },
  /* 21 */ { nama: "Paccerakkang", alamat: "[Alamat lengkap]", maps: "", gofood: "https://gofood.link/a/Ut5RrTw", grab: "https://app.grab.com/s/X7kCDYXi", shopee: "https://shopee.co.id/universal-link/now-food/shop/23574451?deep_and_deferred=1" },
  /* 22 */ { nama: "Pasar Jongkok", alamat: "[Alamat lengkap]", maps: "", gofood: "https://gofood.link/a/Ut5Rsw1", grab: "https://app.grab.com/s/xZCh67Gq", shopee: "https://shopee.co.id/universal-link/now-food/shop/23590573?deep_and_deferred=1" },
  /* 23 */ { nama: "Perintis", alamat: "[Alamat lengkap]", maps: "", gofood: "https://gofood.link/a/Ut5RshU", grab: "https://app.grab.com/s/gbFMaoP8", shopee: "https://shopee.co.id/universal-link/now-food/shop/23624121?deep_and_deferred=1" },
  /* 24 */ { nama: "Barombong", alamat: "[Alamat lengkap]", maps: "", gofood: "https://gofood.link/a/Ut5RteE", grab: "https://app.grab.com/s/K630wiXL", shopee: "https://shopee.co.id/universal-link/now-food/shop/23595806?deep_and_deferred=1" },
  /* 25 */ { nama: "Poros Malino", alamat: "[Alamat lengkap]", maps: "", gofood: "https://gofood.link/a/Ut5RrUL", grab: "https://app.grab.com/s/FzROKYDu", shopee: "https://shopee.co.id/universal-link/now-food/shop/23633400?deep_and_deferred=1" },
  /* 26 */ { nama: "Takalar", alamat: "[Alamat lengkap]", maps: "" },
  /* 27 */ { nama: "Pattalassang", alamat: "[Alamat lengkap]", maps: "", gofood: "https://gofood.link/a/UKMVy1Y", shopee: "https://shopee.co.id/universal-link/now-food/shop/23895133?deep_and_deferred=1" },
  /* 28 */ { nama: "Parepare", alamat: "[Alamat lengkap]", maps: "" },
];

/** Jumlah toko untuk teks seperti "28 toko" (judul Lokasi, beranda, Tentang, judul tab). */
export const JUMLAH_TOKO = OUTLET.length;
