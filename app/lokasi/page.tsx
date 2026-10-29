import type { Metadata } from "next";
import T from "@/components/T";
import OutletList from "@/components/OutletList";
import { JUMLAH_TOKO, OUTLET } from "@/data/outlets";
import { JUDUL_HALAMAN } from "@/data/site";

export const metadata: Metadata = {
  title: JUDUL_HALAMAN["/lokasi"].id,
  description: "[ISI: deskripsi halaman Lokasi, sekitar 150 karakter]",
};

export default function Lokasi() {
  return (
    <>
      {/* Frame judul (.page-hero) dihapus 28 Okt 2026 atas permintaan pengguna; judulnya tetap ada untuk Google & pembaca layar */}
      <h1 className="sr-only" id="page-title">
        <T id={`${JUMLAH_TOKO} toko, cari yang paling dekat`} en={`${JUMLAH_TOKO} stores: find the nearest`} />
      </h1>

      <section className="section lokasi-daftar" aria-labelledby="daftar-outlet-title">
        <div className="container">
          <div className="media media--map locations__map">
            {/* Tempel embed Google Maps di sini:
                <iframe src="..." loading="lazy" title="Peta toko Kopi Padu Rasa"></iframe> */}
            <span className="ph">Peta sebaran toko (embed Google Maps)</span>
          </div>

          {/* Data toko ada di data/outlets.ts */}
          <OutletList outlet={OUTLET} />
        </div>
      </section>
    </>
  );
}
