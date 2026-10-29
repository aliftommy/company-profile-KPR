"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import type { LapisanHero, TautanHero } from "@/data/site";

type Slide = { foto: string; alt: string; lapisan?: LapisanHero[]; tautan?: TautanHero; bawahGelap?: boolean };

/** Ukuran gambar slide (piksel) untuk menghitung posisi lapisan dalam persen bingkai 12:7. */
const LEBAR = 2400;
const TINGGI = 1400;

/** Seretan jari/mouse dari pointerdown sampai dilepas. */
type Seret = {
  id: number;
  x: number; // titik acuan (clientX)
  y: number;
  awal: number; // posisi slider saat mulai diseret
  lebar: number; // lebar slider dalam px = jarak satu gambar
  geser: boolean; // true setelah gerakannya dipastikan mendatar
  jejak: { x: number; t: number }[]; // titik ±100 ms terakhir, untuk kecepatan lemparan
};

/** Jarak gambar i dari posisi p, dibungkus ke [-n/2, n/2) supaya slider berputar tanpa ujung. */
const jarak = (i: number, p: number, n: number) => {
  const d = (((i - p) % n) + n) % n;
  return d >= n / 2 ? d - n : d;
};
const keluar = (t: number) => 1 - (1 - t) ** 4; // ease-out: setelah dipencet/diseret pengguna
const masukKeluar = (t: number) => (t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2); // ease-in-out: ganti otomatis

/**
 * Hero slider beranda: gambar berganti otomatis tiap `jeda` ms, bisa digeser kiri–kanan (jari atau mouse),
 * tombol panah, dan titik penanda. Berputar tanpa ujung (setelah gambar terakhir, gambar pertama masuk dari kanan).
 * `pos` = nomor gambar yang tampil (pecahan saat bergerak); tiap gambar digeser lewat style.transform langsung,
 * tanpa render ulang React. Mode kurangi animasi: gambar memudar, tidak bergeser.
 * Ganti otomatis berhenti saat diseret, saat fokus keyboard ada di tombol slider, saat slider di luar layar,
 * dan saat tab browser lain dibuka.
 */
export default function HeroSlider({ slides, jeda }: { slides: Slide[]; jeda: number }) {
  const n = slides.length;
  const [aktif, setAktif] = useState(0);
  const [tahan, setTahan] = useState({ seret: false, fokus: false, luar: false, tab: false });
  const kotak = useRef<HTMLDivElement>(null);
  const el = useRef<(HTMLDivElement | null)[]>([]);
  const pos = useRef(0);
  const tujuan = useRef(0);
  const raf = useRef(0);
  const pudar = useRef(false);
  const seret = useRef<Seret | null>(null);
  const seretSelesai = useRef(-Infinity); // waktu seretan terakhir dilepas (performance.now)

  const ubah = (k: keyof typeof tahan, v: boolean) => setTahan((h) => (h[k] === v ? h : { ...h, [k]: v }));

  const gambar = useCallback(() => {
    el.current.forEach((s, i) => {
      if (!s) return;
      const d = jarak(i, pos.current, n);
      if (pudar.current) {
        // Gambar berikut memudar di atas gambar sekarang, tanpa bergeser
        const atas = d > 0 && d < 1;
        s.style.transform = "none";
        s.style.opacity = atas ? String(1 - d) : "1";
        s.style.zIndex = atas ? "1" : "0";
        s.style.visibility = atas || (d <= 0 && d > -1) ? "visible" : "hidden";
      } else {
        s.style.transform = `translate3d(${d * 100}%, 0, 0)`;
        s.style.opacity = "1";
        s.style.zIndex = "0";
        s.style.visibility = Math.abs(d) < 1 ? "visible" : "hidden";
      }
    });
  }, [n]);

  const pindah = useCallback(
    (ke: number, otomatis = false) => {
      cancelAnimationFrame(raf.current);
      tujuan.current = ke;
      setAktif(((ke % n) + n) % n);
      const dari = pos.current;
      const lama = pudar.current ? 400 : otomatis ? 700 : 500;
      const kurva = otomatis ? masukKeluar : keluar;
      let mulai = -1;
      const langkah = (now: number) => {
        if (mulai < 0) mulai = now;
        const t = Math.min(1, (now - mulai) / lama);
        pos.current = dari + (ke - dari) * kurva(t);
        gambar();
        if (t < 1) raf.current = requestAnimationFrame(langkah);
      };
      raf.current = requestAnimationFrame(langkah);
    },
    [n, gambar],
  );

  // Ganti otomatis: hitung ulang dari nol setiap gambar berganti atau setelah jeda/seretan selesai
  const berhenti = tahan.seret || tahan.fokus || tahan.luar || tahan.tab;
  useEffect(() => {
    if (berhenti || n < 2) return;
    const t = window.setTimeout(() => pindah(tujuan.current + 1, true), jeda);
    return () => window.clearTimeout(t);
  }, [aktif, berhenti, jeda, n, pindah]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const atur = () => {
      pudar.current = mq.matches;
      gambar();
    };
    atur();
    mq.addEventListener("change", atur);

    const io = new IntersectionObserver(([e]) => ubah("luar", !e.isIntersecting));
    if (kotak.current) io.observe(kotak.current);

    const tab = () => ubah("tab", document.hidden);
    document.addEventListener("visibilitychange", tab);

    return () => {
      mq.removeEventListener("change", atur);
      io.disconnect();
      document.removeEventListener("visibilitychange", tab);
      cancelAnimationFrame(raf.current);
    };
  }, [gambar]);

  const tekan = (e: PointerEvent<HTMLDivElement>) => {
    if (n < 2 || !e.isPrimary || e.button !== 0 || (e.target as Element).closest("button")) return;
    seret.current = {
      id: e.pointerId,
      x: e.clientX,
      y: e.clientY,
      awal: pos.current,
      lebar: e.currentTarget.offsetWidth,
      geser: false,
      jejak: [],
    };
  };

  const gerak = (e: PointerEvent<HTMLDivElement>) => {
    const s = seret.current;
    if (!s || e.pointerId !== s.id) return;
    if (!s.geser) {
      const dx = e.clientX - s.x;
      const dy = e.clientY - s.y;
      if (Math.hypot(dx, dy) < 8) return; // ambang: ketukan biasa tidak dianggap geser
      if (Math.abs(dy) > Math.abs(dx)) {
        seret.current = null; // gerakan tegak = gulir halaman
        return;
      }
      cancelAnimationFrame(raf.current); // bisa ditangkap di tengah perpindahan
      s.geser = true;
      s.x = e.clientX; // mulai mengikuti dari titik ini supaya gambar tidak meloncat
      s.awal = pos.current;
      e.currentTarget.setPointerCapture(e.pointerId);
      ubah("seret", true);
    }
    pos.current = s.awal - (e.clientX - s.x) / s.lebar;
    gambar();
    s.jejak = s.jejak.filter((j) => e.timeStamp - j.t < 100);
    s.jejak.push({ x: e.clientX, t: e.timeStamp });
  };

  const lepas = (e: PointerEvent<HTMLDivElement>) => {
    const s = seret.current;
    if (!s || e.pointerId !== s.id) return;
    seret.current = null;
    if (!s.geser) return;
    seretSelesai.current = performance.now();
    ubah("seret", false);
    const dulu = s.jejak.find((j) => e.timeStamp - j.t < 100) ?? { x: e.clientX, t: e.timeStamp };
    const v = (e.clientX - dulu.x) / Math.max(1, e.timeStamp - dulu.t); // px/ms, negatif = jari ke kiri
    const p = pos.current;
    const d = p - s.awal; // positif = menuju gambar berikut
    // Dilempar cepat → pindah walau jaraknya pendek; diseret pelan → pindah bila lewat 20% lebar
    let ke =
      Math.abs(v) > 0.3 ? (v < 0 ? Math.floor(p) + 1 : Math.ceil(p) - 1)
      : Math.abs(d) > 0.2 ? (d > 0 ? Math.ceil(p) : Math.floor(p))
      : Math.round(p);
    const asal = Math.round(s.awal);
    ke = Math.min(asal + 1, Math.max(asal - 1, ke)); // satu geseran paling jauh satu gambar
    pindah(ke);
  };

  return (
    // Pembungkus karusel (seluas bingkai): tombol ←/→ dan jeda saat fokus keyboard berlaku untuk seluruh slider.
    // Titik penanda ada di luar .hero__slider (yang memotong gambar & panah) supaya di HP bisa diletakkan di bawah
    // bingkai (globals.css); di layar lebar letaknya tetap di dalam gambar.
    <div
      className="hero__karusel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Galeri foto Kopi Padu Rasa"
      // Slide berbagian bawah gelap: titik penanda diberi alas krem (globals.css)
      data-bawah-gelap={slides[aktif]?.bawahGelap || undefined}
      onKeyDown={(e) => {
        if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
        e.preventDefault();
        pindah(tujuan.current + (e.key === "ArrowLeft" ? -1 : 1));
      }}
      onFocus={(e) => ubah("fokus", e.target.matches(":focus-visible"))}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) ubah("fokus", false);
      }}
    >
      <div
        ref={kotak}
        className="hero__media hero__slider"
        data-seret={tahan.seret || undefined}
        onPointerDown={tekan}
        onPointerMove={gerak}
        onPointerUp={lepas}
        onPointerCancel={lepas}
        onClickCapture={(e) => {
          // Klik yang menyusul seretan bukan ketukan: jangan buka tautan slide
          if (performance.now() - seretSelesai.current < 400) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      >
        {slides.map((s, i) => (
          <div
            key={i}
            ref={(node) => {
              el.current[i] = node;
            }}
            className="hero__slide"
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} dari ${n}`}
            aria-hidden={i !== aktif || undefined}
            // Posisi awal sebelum JS berjalan: gambar 1 tampil, sisanya menunggu di luar layar
            style={{ transform: `translate3d(${jarak(i, 0, n) * 100}%, 0, 0)`, visibility: i === 0 ? "visible" : "hidden" }}
          >
            {s.foto ? (
              <Image
                src={`/assets/img/hero/${s.foto}`}
                alt={s.alt}
                fill
                // Bingkai hero 12:7 selebar layar (globals.css .hero__frame), jadi gambar selalu selebar layar
                sizes="100vw"
                // Semua dimuat langsung (gambar berikut tampil 2 detik lagi); gambar pertama didahulukan
                loading="eager"
                fetchPriority={i === 0 ? "high" : "low"}
                draggable={false}
              />
            ) : (
              <span className="ph">
                Gambar {i + 1} dari {n}<br />2400 × 1400 px
              </span>
            )}
            {s.lapisan?.map((l, j) => (
              // Lapisan bergerak: "ayun" (tangan) naik dari bawah lalu bergoyang; "melayang" (botol) muncul bergiliran
              // sesuai urutan (--urutan) lalu melayang naik-turun (globals.css)
              <span
                key={l.foto}
                className={l.gerak === "melayang" ? "hero__lapisan hero__lapisan--melayang" : "hero__lapisan"}
                style={{
                  left: `${(l.x / LEBAR) * 100}%`,
                  top: `${(l.y / TINGGI) * 100}%`,
                  width: `${(l.lebar / LEBAR) * 100}%`,
                  ...(l.gerak === "melayang" ? ({ "--urutan": j } as CSSProperties) : {}),
                }}
              >
                <Image
                  src={`/assets/img/hero/${l.foto}`}
                  alt=""
                  width={l.lebar}
                  height={l.tinggi}
                  sizes={`${Math.ceil((l.lebar / LEBAR) * 100)}vw`}
                  loading="eager"
                  fetchPriority={i === 0 ? "high" : "low"}
                  draggable={false}
                />
              </span>
            ))}
            {s.tautan &&
              // Lapisan link transparan di atas gambar & lapisan; draggable={false} supaya mouse tetap bisa menggeser slider.
              // Link ke luar situs (WhatsApp) → tab baru; halaman situs sendiri (/menu#seliter) → Link, tab yang sama.
              (/^https?:/.test(s.tautan.href) ? (
                <a
                  className="hero__tautan"
                  href={s.tautan.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={s.tautan.label}
                  draggable={false}
                />
              ) : (
                <Link className="hero__tautan" href={s.tautan.href} aria-label={s.tautan.label} draggable={false} />
              ))}
          </div>
        ))}

        {n > 1 && (
          <>
            <button
              type="button"
              className="hero__panah hero__panah--kiri"
              aria-label="Gambar sebelumnya"
              onClick={() => pindah(tujuan.current - 1)}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m15 6-6 6 6 6" />
              </svg>
            </button>
            <button
              type="button"
              className="hero__panah hero__panah--kanan"
              aria-label="Gambar berikutnya"
              onClick={() => pindah(tujuan.current + 1)}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m9 6 6 6-6 6" />
              </svg>
            </button>
          </>
        )}
      </div>

      {n > 1 && (
        <div className="hero__titik">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Gambar ${i + 1}`}
              aria-current={i === aktif || undefined}
              onClick={() => pindah(tujuan.current + jarak(i, tujuan.current, n))}
            />
          ))}
        </div>
      )}
    </div>
  );
}
