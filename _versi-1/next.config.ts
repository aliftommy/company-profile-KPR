import type { NextConfig } from "next";
import { HALAMAN_NONAKTIF } from "./data/site";

const halamanLama = ["tentang", "menu", "lokasi", "kemitraan", "kontak"];

const nextConfig: NextConfig = {
  // Mode dev (`npm run dev:wifi`): izinkan perangkat di jaringan lokal (HP di WiFi/hotspot yang sama).
  // Tanpa ini Next.js memblokir skrip dev untuk alamat selain localhost, jadi di HP halaman tampil
  // tetapi semua tombol (☰, bahasa, tab, pencarian) tidak berfungsi. Tidak berpengaruh ke build produksi.
  allowedDevOrigins: [
    "192.168.*.*",
    "10.*.*.*",
    ...Array.from({ length: 16 }, (_, i) => `172.${16 + i}.*.*`),
  ],
  // Alamat versi HTML lama (mis. /menu.html) diarahkan ke halaman Next.js yang baru
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      ...halamanLama.map((p) => ({ source: `/${p}.html`, destination: `/${p}`, permanent: true })),
      // Halaman yang sedang dimatikan (data/site.ts → HALAMAN_NONAKTIF) dialihkan ke beranda; sementara, jadi tidak permanen
      ...HALAMAN_NONAKTIF.map((p) => ({ source: p, destination: "/", permanent: false })),
    ];
  },
};

export default nextConfig;
