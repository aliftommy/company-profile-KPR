import type { Metadata } from "next";
import Image from "next/image";
import T from "@/components/T";
import PilihToko from "@/components/PilihToko";
import ProductCard from "@/components/ProductCard";
import { KATEGORI, PRODUK, SELITER, TAMBAHAN } from "@/data/products";
import { JUDUL_HALAMAN, PESAN_ONLINE } from "@/data/site";

export const metadata: Metadata = {
  title: JUDUL_HALAMAN["/menu"].id,
  description: "[ISI: deskripsi halaman Menu, sekitar 150 karakter]",
};

export default function Menu() {
  return (
    <>
      {/* id dipakai tombol "Pesan Aplikasi" di menu burger */}
      <section className="page-hero" id="pesan-online" aria-labelledby="page-title">
        <div className="container">
          <p className="eyebrow">Menu</p>
          <h1 id="page-title">
            <T id="Pesan Lewat Aplikasi" en="Order Through the Apps" />
          </h1>
          <p className="page-hero__lead">
            <T id="WhatsApp minPadu, mau pesan nih!" en="Message minPadu on WhatsApp to place your order!" />
          </p>

          {/* Semua aplikasi pesan online sebagai tombol besar (data/site.ts → PESAN_ONLINE):
              link → buka tab baru, perToko → pop up pilih toko, href kosong → "Akan datang" */}
          <ul className="order-apps">
            {PESAN_ONLINE.map((p) => (
              <li key={p.nama}>
                {p.perToko ? (
                  <PilihToko className="order-app" nama={p.nama} kunci={p.perToko}>
                    <span className="order-app__nama">{p.nama}</span>
                    <span className="order-app__aksi"><T id="Pilih toko" en="Choose a store" /> →</span>
                  </PilihToko>
                ) : p.href ? (
                  <a className="order-app" href={p.href} target="_blank" rel="noopener">
                    <span className="order-app__nama">{p.nama}</span>
                    <span className="order-app__aksi"><T id="Pesan" en="Order" /> →</span>
                  </a>
                ) : (
                  <span className="order-app order-app--nanti">
                    <span className="order-app__nama">{p.nama}</span>
                    <span className="order-app__aksi"><T id="Akan datang" en="Coming soon" /></span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section menu-daftar" aria-labelledby="daftar-menu-title">
        <div className="container">
          <h2 className="sr-only" id="daftar-menu-title"><T id="Daftar menu" en="Menu list" /></h2>

          {/* Semua kategori tampil berurutan ke bawah, tidak perlu dipencet (dulu tab: components/MenuTabs.tsx,
              disimpan tetapi tidak dipakai). Kategori & kartu diambil dari data/products.ts */}
          {KATEGORI.map((k) => (
            <div className="menu-kategori" key={k.key} id={`menu-${k.key}`}>
              <h3 className="menu-kategori__judul">
                <T id={k.id} en={k.en} />
              </h3>
              <div className="product-grid">
                {PRODUK.filter((p) => p.kategori === k.key).map((p, i) => (
                  <ProductCard key={`${p.nama}-${i}`} produk={p} pita />
                ))}
              </div>
            </div>
          ))}

          {/* Padu+++: tambahan per ukuran minuman (data/products.ts → TAMBAHAN) */}
          <div className="addons">
            <div>
              <h3 className="addons__title">Padu+++</h3>
              <p className="addons__label">
                <T id="Tambahan untuk minuman" en="Drink add-ons" />
              </p>
            </div>
            <table className="addons__table">
              <thead>
                <tr>
                  <th scope="col">
                    <span className="sr-only"><T id="Tambahan" en="Add-on" /></span>
                  </th>
                  <th scope="col"><T id="Normal" en="Regular" /></th>
                  <th scope="col"><T id="Besar" en="Large" /></th>
                </tr>
              </thead>
              <tbody>
                {TAMBAHAN.map((t) => (
                  <tr key={t.nama}>
                    <th scope="row">{t.nama}</th>
                    <td>{t.normal}</td>
                    <td>{t.besar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== SELITER PADU (kemasan 1 liter; data/products.ts → SELITER):
          poster foto-asli/1L.jpeg utuh di kiri tanpa bingkai (tinggi section = tinggi poster), teks & harga di kanan ===== */}
      <section className="seliter section--dark on-dark" aria-labelledby="seliter-title">
        <div className="seliter__foto">
          <Image
            src="/assets/img/produk/web/seliter-padu.webp"
            alt="Poster Seliter Padu: empat botol 1 liter, Padu Coklat, Kopi Padu Rasa, Kopi Padu Krimi, dan Padu Matcha"
            width={1280}
            height={1600}
            sizes="(min-width: 900px) 50vw, 100vw"
          />
        </div>
        <div className="seliter__teks">
          <p className="eyebrow">1 Liter</p>
          <h2 className="seliter__title" id="seliter-title">Seliter Padu</h2>
          <ul className="seliter__list">
            {SELITER.map((s) => (
              <li className="seliter__item" key={s.nama}>
                <span className="seliter__name">{s.nama}</span>
                <span className="seliter__price">{s.harga}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
