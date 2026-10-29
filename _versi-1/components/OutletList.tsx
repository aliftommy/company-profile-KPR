"use client";

import { useState, type CSSProperties } from "react";
import T from "./T";
import { useLang } from "./LanguageProvider";
import { FOTO_TOKO, JAM_BUKA, WILAYAH, linkMaps, type Outlet } from "@/data/outlets";

/** Judul "Semua toko" + kotak pencarian + kartu toko (pola kartu poin + koin bernomor Supercell Store). */
export default function OutletList({ outlet }: { outlet: Outlet[] }) {
  const { lang } = useLang();
  const [cari, setCari] = useState("");
  const kata = cari.trim().toLowerCase();
  const cocok = (o: Outlet) => {
    const w = o.wilayah ?? WILAYAH;
    return !kata || [w.id, w.en, o.nama, o.alamat].join(" ").toLowerCase().includes(kata);
  };
  const adaHasil = outlet.some(cocok);

  return (
    <>
      <div className="section__head section__head--row">
        <h2 id="daftar-outlet-title">
          <T id="Semua toko" en="All stores" />
        </h2>
        <div className="search">
          <label htmlFor="outlet-search">
            <T id="Cari toko" en="Search stores" />
          </label>
          <input
            id="outlet-search"
            type="search"
            autoComplete="off"
            placeholder={lang === "en" ? "e.g. Rappocini" : "Mis. Rappocini"}
            value={cari}
            onChange={(e) => setCari(e.target.value)}
          />
        </div>
      </div>

      <ul className="outlet-list" id="outlet-list">
        {outlet.map((o, i) => (
          <li
            className="outlet"
            key={i}
            hidden={!cocok(o)}
            style={{ "--foto": `url("${o.foto ?? FOTO_TOKO}")` } as CSSProperties}
          >
            <span className="outlet__no">{String(i + 1).padStart(2, "0")}</span>
            <p className="outlet__city">
              <T id={(o.wilayah ?? WILAYAH).id} en={(o.wilayah ?? WILAYAH).en} />
            </p>
            <h3 className="outlet__name">{o.nama}</h3>
            <p className="outlet__addr">{o.alamat}</p>
            <p className="outlet__hours">
              <T id={`Buka ${(o.jam ?? JAM_BUKA).id}`} en={`Open ${(o.jam ?? JAM_BUKA).en}`} />
            </p>
            <a className="outlet__link" href={linkMaps(o)} target="_blank" rel="noopener">
              <T id="Petunjuk arah" en="Directions" /> →
            </a>
          </li>
        ))}
      </ul>
      <p className="outlet-empty" id="outlet-empty" hidden={adaHasil}>
        <T id="Toko tidak ditemukan. Coba kata kunci lain." en="No stores found. Try a different keyword." />
      </p>
    </>
  );
}
