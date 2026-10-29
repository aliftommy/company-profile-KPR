"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import T from "./T";
import { CloseIcon } from "./Icons";
import { JUMLAH_TOKO, OUTLET, urutAbjad, type LayananToko } from "@/data/outlets";

type Props = {
  /** Nama layanan di tombol & pop up, mis. "GrabFood" */
  nama: string;
  /** Kolom link per toko di data/outlets.ts */
  kunci: LayananToko;
  /** Kelas tombol: "chip" / "order-app" (halaman Menu) atau "order-chip" (footer) */
  className: string;
  /** Isi tombol; bawaan = nama layanan */
  children?: ReactNode;
};

/**
 * Tombol pesan online yang linknya berbeda per toko (GoFood, GrabFood, ShopeeFood).
 * Diklik → pop up <dialog> daftar toko: yang punya link bisa diklik, sisanya "Akan datang".
 * Isi pop up baru dirender saat dibuka (satu halaman bisa punya beberapa tombol seperti ini).
 */
export default function PilihToko({ nama, kunci, className, children }: Props) {
  const [buka, setBuka] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const idJudul = useId();

  // Semua toko urut abjad (28 Okt 2026, permintaan pengguna; dulu yang sudah ada di layanan ini tampil lebih dulu),
  // yang belum ada tetap di posisi abjadnya dengan label "Akan datang"
  const toko = urutAbjad(OUTLET);
  const ada = toko.filter((o) => o[kunci]);

  // Buka/tutup pop up + kunci scroll halaman (kelas yang sama dengan laci menu)
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (buka && !dialog.open) dialog.showModal();
    if (!buka && dialog.open) dialog.close();
    document.body.classList.toggle("nav-open", buka);
  }, [buka]);

  const tutup = () => setBuka(false);

  return (
    <>
      <button className={className} type="button" aria-haspopup="dialog" onClick={() => setBuka(true)}>
        {children ?? nama}
      </button>

      <dialog
        ref={dialogRef}
        className="toko-pop"
        aria-labelledby={idJudul}
        onClose={tutup}
        onClick={(e) => {
          // Klik area gelap di luar panel menutup pop up
          if (e.target === e.currentTarget) tutup();
        }}
      >
        {buka && (
          <div className="toko-pop__panel">
            <div className="toko-pop__top">
              <div>
                <p className="toko-pop__layanan">{nama}</p>
                <h2 className="toko-pop__judul" id={idJudul}>
                  <T id="Pilih toko" en="Choose a store" />
                </h2>
              </div>
              <button className="toko-pop__tutup" type="button" onClick={tutup}>
                <CloseIcon />
                <span className="sr-only">
                  <T id="Tutup" en="Close" />
                </span>
              </button>
            </div>
            <p className="toko-pop__info">
              <T
                id={`${ada.length} dari ${JUMLAH_TOKO} toko sudah ada di ${nama}.`}
                en={`${ada.length} of ${JUMLAH_TOKO} stores ${ada.length === 1 ? "is" : "are"} on ${nama}.`}
              />
            </p>

            <ul className="toko-pop__list">
              {toko.map((o) => (
                <li key={o.nama}>
                  {o[kunci] ? (
                    <a className="toko-pop__item" href={o[kunci]} target="_blank" rel="noopener" onClick={tutup}>
                      <span className="toko-pop__nama">{o.nama}</span>
                      <span className="toko-pop__aksi">
                        <T id="Pesan" en="Order" /> →
                      </span>
                    </a>
                  ) : (
                    <span className="toko-pop__item toko-pop__item--nanti">
                      <span className="toko-pop__nama">{o.nama}</span>
                      <span className="toko-pop__aksi">
                        <T id="Akan datang" en="Coming soon" />
                      </span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </dialog>
    </>
  );
}
