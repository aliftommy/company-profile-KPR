"use client";

import { useEffect, useRef, useState } from "react";
import T from "./T";

/**
 * Pita harga di kartu menu: diklik untuk ganti ukuran Normal ↔ Besar. Tiap kartu menyimpan pilihannya sendiri.
 * Seluruh kartu ikut bisa dipencet: klik di luar pita diteruskan ke tombol ini (tombol tetap jadi kontrol keyboard).
 */
export default function PriceToggle({ normal, besar: hargaBesar }: { normal: string; besar: string }) {
  const [besar, setBesar] = useState(false);
  // Setelah ketukan pertama, label & harga baru muncul dengan pudar + blur (lihat .product__size[data-diganti])
  const [diganti, setDiganti] = useState(false);
  const ukuran = besar ? "besar" : "normal";
  const tombol = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const el = tombol.current;
    const kartu = el?.closest<HTMLElement>(".product");
    if (!el || !kartu) return;
    const teruskan = (e: MouseEvent) => {
      if (!el.contains(e.target as Node)) el.click();
    };
    kartu.addEventListener("click", teruskan);
    return () => kartu.removeEventListener("click", teruskan);
  }, []);

  return (
    <button
      ref={tombol}
      className="product__desc product__size"
      type="button"
      data-ukuran={ukuran}
      data-diganti={diganti || undefined}
      onClick={() => {
        setBesar((b) => !b);
        setDiganti(true);
      }}
    >
      {/* key berganti → elemen dibuat ulang, sehingga animasi masuknya berjalan */}
      <span key={ukuran} className="product__ukuran">
        {besar ? <T id="Besar" en="Large" /> : <T id="Normal" en="Regular" />}
      </span>
      <span aria-live="polite">
        <span key={ukuran} className="product__harga">{besar ? hargaBesar : normal}</span>
      </span>
      <span className="sr-only">
        <T id=", ganti ukuran" en=", change size" />
      </span>
    </button>
  );
}
