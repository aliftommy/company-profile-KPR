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
      <section className="page-hero" aria-labelledby="page-title">
        <div className="container">
          <p className="eyebrow"><T id="Lokasi" en="Locations" /></p>
          <h1 id="page-title">
            <T id={`${JUMLAH_TOKO} toko, cari yang paling dekat`} en={`${JUMLAH_TOKO} stores: find the nearest`} />
          </h1>
          <p className="page-hero__lead">
            <T id=" " en=" " />
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="daftar-outlet-title">
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
