import type { CSSProperties } from "react";
import type { Metadata } from "next";
import T from "@/components/T";
import { WhatsAppIcon } from "@/components/Icons";
import { JUDUL_HALAMAN, WHATSAPP_KEMITRAAN, waLink } from "@/data/site";

export const metadata: Metadata = {
  title: JUDUL_HALAMAN["/kemitraan"].id,
  description: `Alur kemitraan dan keuntungan investasi Kopi Padu Rasa. Info kemitraan: WhatsApp ${WHATSAPP_KEMITRAAN.tampil}.`,
};

const keuntungan = [
  <T key="1" id="Brand & Sistem Bisnis yang Sudah Teruji" en="A Proven Brand & Business System" />,
  <T key="2" id="Pendampingan dari Awal hingga Operasional" en="Support from Day One to Daily Operations" />,
  <T key="3" id="Peluang Bisnis yang Terukur & Berkelanjutan" en="A Measurable & Sustainable Business Opportunity" />,
];

// Tahapan kemitraan dari pengguna (19 Okt 2026); "Outlet" ditulis "Toko" sesuai aturan teks situs.
const alur = [
  <T key="1" id="Konsultasi Kemitraan" en="Partnership Consultation" />,
  <T key="2" id="Pengajuan Kuota Investasi" en="Investment Quota Application" />,
  <T key="3" id="Pembayaran Uang Muka" en="Down Payment" />,
  <T key="4" id="Survei Lokasi" en="Site Survey" />,
  <T key="5" id="Penandatanganan Akad" en="Contract Signing" />,
  <T key="6" id="Pembayaran Tahap 1 – Pembangunan Toko" en="Payment Stage 1 – Store Construction" />,
  <T key="7" id="Pembayaran Tahap 2 – Progres 50%" en="Payment Stage 2 – 50% Completion" />,
  <T key="8" id="Pembayaran Tahap 3 – Pelunasan" en="Payment Stage 3 – Final Payment" />,
  <T key="9" id="Toko Siap Beroperasi" en="Store Ready to Operate" />,
];

/** Jumlah langkah per baris jalan berkelok di layar lebar (≥760px). */
const PER_BARIS = 3;

/**
 * Posisi langkah ke-i di jalan berkelok (layar lebar): baris ganjil berjalan ke kanan,
 * baris genap ke kiri. Tiap langkah menggambar jalan menuju langkah berikutnya:
 * data-lurus = langkah berikutnya sebaris (arah kanan/kiri),
 * data-belok = ujung baris, jalan memutar turun ke baris berikutnya.
 * Di HP (satu kolom) CSS memakai urutan biasa dan jalan meliuk kanan-kiri.
 */
function posisi(i: number, jumlah: number) {
  const baris = Math.floor(i / PER_BARIS);
  const ke = i % PER_BARIS;
  const arah = baris % 2 === 0 ? "kanan" : "kiri";
  const terakhir = i === jumlah - 1;
  const ujungBaris = ke === PER_BARIS - 1;
  return {
    style: { "--baris": baris + 1, "--kolom": arah === "kanan" ? ke + 1 : PER_BARIS - ke } as CSSProperties,
    "data-lurus": !terakhir && !ujungBaris ? arah : undefined,
    "data-belok": !terakhir && ujungBaris ? arah : undefined,
  };
}

export default function Kemitraan() {
  return (
    <>
      <section className="page-hero" aria-labelledby="page-title">
        <div className="container">
          <p className="eyebrow"><T id="Kemitraan" en="Partnership" /></p>
          <h1 id="page-title">
            <T id="Buka toko Kopi Padu Rasa di lokasimu" en="Open a Kopi Padu Rasa store in your area" />
          </h1>
          <div className="actions">
            {/* WhatsApp kemitraan (data/site.ts → WHATSAPP_KEMITRAAN), pesan pembuka sudah terisi */}
            <a
              className="btn btn--primary"
              href={waLink("Halo Kopi Padu Rasa, saya tertarik dengan program kemitraan.", WHATSAPP_KEMITRAAN.nomor)}
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon />
              WhatsApp {WHATSAPP_KEMITRAAN.tampil}
            </a>
          </div>
        </div>
      </section>

      {/* ===== KEUNTUNGAN (3 kartu sebaris) + ALUR (jalan berkelok) ===== */}
      <section className="section section--dark on-dark" aria-labelledby="keuntungan-title">
        <div className="container">
          <h2 className="section__title" id="keuntungan-title"><T id="Keuntungan Investasi" en="Investment Benefits" /></h2>
          <ul className="benefits">
            {keuntungan.map((k, i) => (
              <li key={i}>{k}</li>
            ))}
          </ul>

          <h2 className="section__title alur__title" id="alur-title"><T id="Alur Kemitraan" en="Partnership Steps" /></h2>
          <ol className="alur" aria-labelledby="alur-title">
            {alur.map((a, i) => (
              <li className="alur__langkah" key={i} {...posisi(i, alur.length)}>
                <span className="alur__no" aria-hidden="true">{i + 1}</span>
                <h3 className="alur__nama">{a}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
