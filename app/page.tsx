import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import T from "@/components/T";
import HeroSlider from "@/components/HeroSlider";
import ProductCard from "@/components/ProductCard";
import { PRODUK } from "@/data/products";
import { HERO_JEDA, HERO_SLIDE, JUDUL_HALAMAN } from "@/data/site";
import { JUMLAH_TOKO } from "@/data/outlets";

export const metadata: Metadata = {
  title: JUDUL_HALAMAN["/"].id,
  description: "[ISI: deskripsi singkat untuk hasil pencarian Google, sekitar 150 karakter]",
};

/** Hotspot Menu / Lokasi / Jadi mitra di atas hero slider. false = dimatikan sementara; true = tampil lagi. */
const HOTSPOT_AKTIF: boolean = false;

/** Posisi hotspot: --x dan --y dalam persen dari kiri dan atas layar */
const posisi = (x: string, y: string, delay?: string) =>
  ({ "--x": x, "--y": y, ...(delay ? { "--delay": delay } : {}) }) as CSSProperties;

export default function Beranda() {
  const favorit = PRODUK.filter((p) => p.favorit);

  return (
    <>
      {/* ===== HERO =====
          Slider gambar dalam bingkai 12:7 tepat di bawah header, tanpa teks:
          ganti otomatis, bisa digeser, panah kiri–kanan, titik penanda.
          Gambarnya diisi di data/site.ts → HERO_SLIDE. Hotspot tampil di layar lebar saja (kalau HOTSPOT_AKTIF). */}
      <section className="hero" aria-labelledby="hero-title">
        {/* Judul untuk Google dan pembaca layar; tidak tampil di layar. */}
        <h1 className="sr-only" id="hero-title">Kopi Padu Rasa</h1>
        <div className="hero__frame">
          <HeroSlider slides={HERO_SLIDE} jeda={HERO_JEDA} />

          {HOTSPOT_AKTIF && (
            <>
              <Link className="hotspot" href="/menu" style={posisi("62%", "22%")}>
                <span className="hotspot__dot" aria-hidden="true" />
                <span className="hotspot__label"><T id="Menu" en="Menu" /></span>
              </Link>
              <Link className="hotspot" href="/lokasi" style={posisi("74%", "46%", ".8s")}>
                <span className="hotspot__dot" aria-hidden="true" />
                <span className="hotspot__label"><T id="Lokasi" en="Locations" /></span>
              </Link>
              <Link className="hotspot" href="/kemitraan" style={posisi("64%", "70%", "1.6s")}>
                <span className="hotspot__dot" aria-hidden="true" />
                <span className="hotspot__label"><T id="Jadi mitra" en="Partner with us" /></span>
              </Link>
            </>
          )}
        </div>
      </section>

      {/* ===== MENU FAVORIT (produk dengan favorit: true di data/products.ts) ===== */}
      <section className="section" aria-labelledby="home-menu-title">
        <div className="container">
          <div className="section__head section__head--row">
            <div>
              <p className="eyebrow">Menu</p>
              <h2 id="home-menu-title"><T id="Menu favorit" en="Customer favorites" /></h2>
            </div>
            <Link className="btn btn--ghost" href="/menu"><T id="Lihat semua menu →" en="See the full menu →" /></Link>
          </div>
          <div className="product-grid">
            {favorit.map((p) => (
              <ProductCard key={p.nama} produk={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== AJAKAN: Lokasi & Kemitraan ===== */}
      <section className="section">
        <div className="container cta-grid">
          <Link className="cta-card" href="/lokasi">
            <p className="eyebrow"><T id="Lokasi" en="Locations" /></p>
            <h2 className="cta-card__title"><T id={`${JUMLAH_TOKO} Toko, Cari yang Terdekat!`} en={`${JUMLAH_TOKO} Stores, Find the Nearest!`} /></h2>
            <p className="cta-card__teks">
              <T
                id="Temukan Kopi Padu Rasa terdekat dan nikmati kopi favoritmu kapan saja."
                en="Find the nearest Kopi Padu Rasa and enjoy your favorite coffee anytime."
              />
            </p>
            <span className="cta-card__more"><T id="Lihat lokasi →" en="See locations →" /></span>
          </Link>
          <Link className="cta-card cta-card--dark" href="/kemitraan">
            <p className="eyebrow"><T id="Kemitraan" en="Partnership" /></p>
            <h2 className="cta-card__title"><T id="Buka Toko Kopi Padu Rasa di lokasimu" en="Open a Kopi Padu Rasa store in your area" /></h2>
            <p className="cta-card__teks">
              <T
                id="Jadi bagian dari perjalanan kami."
                en="Be part of our journey."
              />
            </p>
            <span className="cta-card__more"><T id="Pelajari kemitraan →" en="Learn about the partnership →" /></span>
          </Link>
        </div>
      </section>
    </>
  );
}
