import type { Metadata } from "next";
import T from "@/components/T";
import { JUDUL_HALAMAN } from "@/data/site";
import { JUMLAH_TOKO } from "@/data/outlets";

export const metadata: Metadata = {
  title: JUDUL_HALAMAN["/tentang"].id,
  description: "[ISI: deskripsi halaman Tentang, sekitar 150 karakter]",
};

const perjalanan = [
  { tahun: <>[20XX]</>, judul: <T id="Toko pertama" en="Our first store" />, isi: <T id="[Cerita awal berdiri]" en="[How it all began]" /> },
  { tahun: <>[20XX]</>, judul: <T id="[Momen penting]" en="[Milestone]" />, isi: <T id="[Keterangan singkat]" en="[Short description]" /> },
  { tahun: <>[20XX]</>, judul: <T id="[Momen penting]" en="[Milestone]" />, isi: <T id="[Keterangan singkat]" en="[Short description]" /> },
  { tahun: <T id="Hari ini" en="Today" />, judul: <T id={`${JUMLAH_TOKO} toko`} en={`${JUMLAH_TOKO} stores`} />, isi: <T id="[Tersebar di kota mana saja]" en="[Which cities we serve]" /> },
];

const nilai = [
  { judul: <T id="[Nilai 1]" en="[Value 1]" />, isi: <T id="[Penjelasan singkat]" en="[Short explanation]" /> },
  { judul: <T id="[Nilai 2]" en="[Value 2]" />, isi: <T id="[Penjelasan singkat]" en="[Short explanation]" /> },
  { judul: <T id="[Nilai 3]" en="[Value 3]" />, isi: <T id="[Penjelasan singkat]" en="[Short explanation]" /> },
];

export default function Tentang() {
  return (
    <>
      <section className="page-hero" aria-labelledby="page-title">
        <div className="container">
          <p className="eyebrow"><T id="Tentang Kami" en="About Us" /></p>
          <h1 id="page-title"><T id="[Kenapa Kopi Padu Rasa ada]" en="[Why Kopi Padu Rasa exists]" /></h1>
          <p className="page-hero__lead">
            <T id="[Satu kalimat misi atau keyakinan brand.]" en="[One sentence on the brand's mission or belief.]" />
          </p>
        </div>
      </section>

      {/* ===== CERITA ===== */}
      <section className="section" aria-labelledby="cerita-title">
        <div className="container split">
          <div>
            <h2 id="cerita-title"><T id="Cerita kami" en="Our story" /></h2>
            <p>
              <T
                id="[Siapa pendirinya, kapan dan di mana mulai, masalah apa yang ingin diselesaikan.]"
                en="[Who founded it, when and where it started, what problem it set out to solve.]"
              />
            </p>
            <p>
              <T
                id="[Prinsip yang dipegang, mis. soal biji kopi, rasa, dan kecepatan penyajian.]"
                en="[Principles, e.g. about beans, taste and speed of service.]"
              />
            </p>
          </div>
          <div className="media media--portrait">
            <span className="ph">Foto tim / barista / toko pertama<br />1200 × 1500 px</span>
          </div>
        </div>
      </section>

      {/* ===== PERJALANAN (pola timeline Supercell) ===== */}
      <section className="section" aria-labelledby="perjalanan-title">
        <div className="container">
          <h2 className="section__title" id="perjalanan-title"><T id="Perjalanan kami" en="Our journey" /></h2>
          <ol className="timeline">
            {perjalanan.map((item, i) => (
              <li className="timeline__item" key={i}>
                <div className="media media--wide"><span className="ph">Foto</span></div>
                <p className="timeline__year">{item.tahun}</p>
                <h3>{item.judul}</h3>
                <p>{item.isi}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== NILAI ===== */}
      <section className="section" aria-labelledby="nilai-title">
        <div className="container">
          <h2 className="section__title" id="nilai-title"><T id="Yang kami pegang" en="What we stand for" /></h2>
          <div className="card-grid">
            {nilai.map((item, i) => (
              <article className="card" key={i}>
                <h3>{item.judul}</h3>
                <p>{item.isi}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
