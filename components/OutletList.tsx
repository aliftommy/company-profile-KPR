import type { CSSProperties } from "react";
import T from "./T";
import { FOTO_TOKO, JAM_BUKA, WILAYAH, linkMaps, urutAbjad, type Outlet } from "@/data/outlets";

/**
 * Judul "Semua toko" + kartu toko (pola kartu poin + koin bernomor Supercell Store).
 * Kartu diurutkan abjad nama toko (28 Okt 2026, permintaan pengguna; kotak "Cari toko" ikut dihapus),
 * jadi nomor koin mengikuti urutan abjad, bukan urutan baris di data/outlets.ts.
 */
export default function OutletList({ outlet }: { outlet: Outlet[] }) {
  const urut = urutAbjad(outlet);

  return (
    <>
      <div className="section__head section__head--row">
        <h2 id="daftar-outlet-title">
          <T id="Semua toko" en="All stores" />
        </h2>
      </div>

      <ul className="outlet-list" id="outlet-list">
        {urut.map((o, i) => (
          <li className="outlet" key={o.nama} style={{ "--foto": `url("${o.foto ?? FOTO_TOKO}")` } as CSSProperties}>
            <span className="outlet__no">{String(i + 1).padStart(2, "0")}</span>
            <p className="outlet__city">
              <T id={(o.wilayah ?? WILAYAH).id} en={(o.wilayah ?? WILAYAH).en} />
            </p>
            <h3 className="outlet__name">{o.nama}</h3>
            <p className="outlet__hours">
              <T id={`Buka ${(o.jam ?? JAM_BUKA).id}`} en={`Open ${(o.jam ?? JAM_BUKA).en}`} />
            </p>
            <a className="outlet__link" href={linkMaps(o)} target="_blank" rel="noopener">
              <T id="Petunjuk arah" en="Directions" /> →
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
