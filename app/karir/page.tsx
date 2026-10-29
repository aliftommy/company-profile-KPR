import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import T from "@/components/T";
import { PinIcon, WhatsAppIcon } from "@/components/Icons";
import { JUDUL_HALAMAN, WHATSAPP_KARIR, waLink } from "@/data/site";

export const metadata: Metadata = {
  title: JUDUL_HALAMAN["/karir"].id,
  description:
    "Karir di Kopi Padu Rasa: kesempatan bertumbuh bagi siapa pun yang mau belajar dan berkembang, termasuk yang baru memulai perjalanan karier.",
};

// Teks dari pengguna (27 Okt 2026); "outlet" ditulis "toko" sesuai aturan teks situs.

/** Tiga hal yang dicari di perjalanan karier: titik di jalan hero dan kartu bernomor di section gelap. */
const TAHAP = [
  {
    label: <T id="Belajar" en="Learn" />,
    judul: <T id="Tidak semua orang memulai perjalanan karier dengan pengalaman." en="Not everyone starts their career with experience." />,
    isi: [
      <T
        key="1"
        id="Di Kopi Padu Rasa, kamu akan memiliki kesempatan untuk mempelajari hal baru, memahami proses kerja, mengembangkan kemampuan, serta mendapatkan pengalaman secara langsung melalui pekerjaan sehari-hari."
        en="At Kopi Padu Rasa, you'll have the chance to learn new things, understand how the work gets done, develop your skills, and gain hands-on experience through everyday work."
      />,
      <T
        key="2"
        id="Kami ingin setiap anggota tim dapat terus meningkatkan kemampuan dan mengambil tanggung jawab yang lebih besar seiring dengan perkembangan mereka."
        en="We want every team member to keep improving their skills and take on greater responsibility as they grow."
      />,
      <T
        key="3"
        id="Setiap proses, tantangan, dan pengalaman menjadi bagian dari perjalanan untuk menjadi lebih baik."
        en="Every process, challenge, and experience is part of the journey to becoming better."
      />,
    ],
  },
  {
    label: <T id="Bersama" en="Together" />,
    judul: <T id="Kami percaya bahwa hasil terbaik lahir dari kerja sama." en="We believe the best results come from working together." />,
    isi: [
      <T
        key="1"
        id="Di sini, setiap orang memiliki peran untuk saling membantu, bertukar gagasan, belajar dari satu sama lain, dan bergerak menuju tujuan yang sama."
        en="Here, everyone has a role in helping one another, exchanging ideas, learning from each other, and moving toward the same goal."
      />,
    ],
  },
  {
    label: <T id="Berdampak" en="Impact" />,
    judul: <T id="Setiap pekerjaan memiliki dampak." en="Every job makes an impact." />,
    isi: [
      <T
        key="1"
        id="Baik kamu bekerja di toko, kantor, operasional, kreatif, pemasaran, maupun bagian lainnya, kontribusimu menjadi bagian dari pengalaman yang diterima oleh setiap Kawan Padu."
        en="Whether you work in our stores, the office, operations, creative, marketing, or any other team, your contribution becomes part of the experience every Kawan Padu receives."
      />,
    ],
  },
];

/*
 * Jalan berkelok di hero (koordinat SVG 400 × 400): titik awal kiri bawah → tiga baris bolak-balik dengan belokan
 * setengah lingkaran (seperti jalan Alur Kemitraan) → koin logo di kanan atas.
 * TITIK = letak titik awal, tiga tahap, dan logo di jalan itu (persen dari kotak peta, dihitung dari koordinat SVG);
 * tunda = kapan titik muncul, mengikuti ujung jalan yang sedang tergambar (globals.css .karir-jalan).
 */
const JALAN = "M 64 318 H 290 A 55 55 0 0 0 290 208 H 110 A 55 55 0 0 1 110 98 H 266";
const titik = (x: number, y: number, tunda: string) =>
  ({ "--x": `${(x / 400) * 100}%`, "--y": `${(y / 400) * 100}%`, "--tunda": tunda }) as CSSProperties;
const TITIK = {
  awal: titik(64, 318, ".1s"),
  tahap: [titik(200, 318, ".75s"), titik(200, 208, "1.05s"), titik(188, 98, "1.35s")],
  logo: titik(322, 98, "1.65s"),
};

/** Tombol lamaran (hero & penutup): WhatsApp karir (data/site.ts → WHATSAPP_KARIR), pesan pembuka sudah terisi */
function TombolLamar() {
  return (
    <div className="actions">
      <a
        className="btn btn--primary"
        href={waLink("Halo Kopi Padu Rasa, saya ingin melamar pekerjaan.", WHATSAPP_KARIR.nomor)}
        target="_blank"
        rel="noopener"
      >
        <WhatsAppIcon />
        <span>
          WhatsApp <span className="btn__nomor">{WHATSAPP_KARIR.tampil}</span>
        </span>
      </a>
    </div>
  );
}

export default function Karir() {
  return (
    <>
      {/* ===== HERO: bingkai stiker dua panel, teks + jalan menuju logo ===== */}
      <section className="karir-hero" aria-labelledby="page-title">
        <div className="container">
          <div className="karir-hero__frame">
            <div className="karir-hero__teks">
              <p className="eyebrow"><T id="Karir" en="Careers" /></p>
              <h1 id="page-title">
                <T id="Setiap perjalanan memiliki titik awal." en="Every journey has a starting point." />
              </h1>
              <p className="karir-lead">
                <T
                  id="Di Kopi Padu Rasa, kami percaya bahwa kemampuan tidak hanya dibentuk dari pengalaman, tetapi juga dari kemauan untuk belajar, berkembang, dan memberikan yang terbaik."
                  en="At Kopi Padu Rasa, we believe ability is shaped not only by experience, but also by the willingness to learn, grow, and give your best."
                />
              </p>
              <p className="karir-hero__teks-kecil">
                <T
                  id="Kami membuka kesempatan bagi siapa pun yang ingin bertumbuh bersama kami. Baik kamu sedang memulai perjalanan karier, mencari pengalaman pertama, maupun ingin melanjutkan pengalaman yang telah dimiliki, selalu ada ruang untuk belajar dan berkembang di Kopi Padu Rasa."
                  en="We open opportunities for anyone who wants to grow with us. Whether you're just starting your career, looking for your first experience, or ready to build on the experience you already have, there's always room to learn and grow at Kopi Padu Rasa."
                />
              </p>
              <TombolLamar />
            </div>

            {/* Gambar hiasan: jalan dari titik awal, lewat Belajar, Bersama, Berdampak, sampai logo */}
            <div className="karir-jalan" aria-hidden="true">
              <div className="karir-jalan__peta">
                <svg viewBox="0 0 400 400">
                  <defs>
                    <mask id="karir-jalan-ungkap" maskUnits="userSpaceOnUse">
                      <path className="karir-jalan__ungkap" d={JALAN} pathLength={1} />
                    </mask>
                  </defs>
                  <g mask="url(#karir-jalan-ungkap)">
                    <path className="karir-jalan__alas" d={JALAN} />
                    <path className="karir-jalan__garis" d={JALAN} />
                  </g>
                </svg>

                <span className="karir-jalan__titik karir-jalan__awal" style={TITIK.awal}>
                  <span className="karir-pin"><PinIcon size={18} /></span>
                  <span className="karir-jalan__label"><T id="Titik awal" en="Starting point" /></span>
                </span>
                {TAHAP.map((t, i) => (
                  <span className="karir-jalan__titik" style={TITIK.tahap[i]} key={i}>
                    <span className="karir-jalan__label">{t.label}</span>
                    <span className="karir-koin">{i + 1}</span>
                  </span>
                ))}
                <span className="karir-jalan__titik karir-jalan__logo" style={TITIK.logo}>
                  <Image src="/assets/img/icon-web.png" alt="" width={734} height={734} sizes="(min-width: 900px) 120px, 80px" priority />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BERTUMBUH BERSAMA ===== */}
      <section className="section" aria-labelledby="tumbuh-title">
        <div className="container">
          <div className="split split--top">
            <h2 className="karir-tumbuh__judul" id="tumbuh-title">
              <T id="Bertumbuh Bersama, Memberikan Dampak Bersama" en="Growing Together, Making an Impact Together" />
            </h2>
            <div className="karir-tumbuh__isi">
              <p className="karir-lead">
                <T
                  id="Kopi Padu Rasa terus berkembang bersama orang-orang yang ada di dalamnya."
                  en="Kopi Padu Rasa keeps growing together with the people in it."
                />
              </p>
              <p>
                <T
                  id="Kami percaya bahwa setiap individu memiliki potensi yang dapat berkembang ketika diberikan kesempatan, lingkungan yang mendukung, serta ruang untuk mencoba dan belajar."
                  en="We believe every individual has potential that can grow when given the opportunity, a supportive environment, and room to try and learn."
                />
              </p>
              <p>
                <T
                  id="Karena itu, kami tidak hanya mencari seseorang yang sudah memiliki pengalaman panjang. Kami juga mencari individu yang memiliki rasa ingin tahu, semangat belajar, tanggung jawab, dan kemauan untuk terus berkembang."
                  en="That's why we're not only looking for people with long experience. We're also looking for individuals with curiosity, eagerness to learn, responsibility, and the will to keep growing."
                />
              </p>
            </div>
          </div>
          <blockquote className="karir-kutip">
            <p>
              <T
                id="Bagi kami, perjalanan karier bukan hanya tentang apa yang sudah kamu kuasai hari ini, tetapi juga tentang sejauh mana kamu ingin berkembang ke depannya."
                en="For us, a career journey isn't only about what you've mastered today, but also about how far you want to grow from here."
              />
            </p>
          </blockquote>
        </div>
      </section>

      {/* ===== BELAJAR · BERSAMA · BERDAMPAK (kartu bernomor, sama dengan titik di jalan hero) ===== */}
      <section className="section section--dark on-dark" aria-labelledby="tahap-title">
        <div className="container">
          <h2 className="sr-only" id="tahap-title"><T id="Bekerja di Kopi Padu Rasa" en="Working at Kopi Padu Rasa" /></h2>
          <ul className="karir-tahap">
            {TAHAP.map((t, i) => (
              <li className="karir-tahap__kartu" key={i}>
                <p className="karir-tahap__label">
                  <span className="karir-koin" aria-hidden="true">{i + 1}</span>
                  {t.label}
                </p>
                <h3 className="karir-tahap__judul">{t.judul}</h3>
                {t.isi.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== PENUTUP: kembali ke titik awal ===== */}
      <section className="section" aria-labelledby="mulai-title">
        <div className="container karir-mulai">
          <span className="karir-pin karir-pin--besar" aria-hidden="true"><PinIcon size={26} /></span>
          <h2 id="mulai-title"><T id="Setiap orang pernah berada di titik awal." en="Everyone has been at the starting point." /></h2>
          <p>
            <T
              id="Untuk beberapa posisi, pengalaman kerja bukan menjadi syarat utama. Kami lebih menghargai kemauan untuk belajar, kedisiplinan, tanggung jawab, kemampuan bekerja sama, dan komitmen untuk berkembang."
              en="For some positions, work experience isn't the main requirement. We value the willingness to learn, discipline, responsibility, teamwork, and a commitment to growth."
            />
          </p>
          <p>
            <T
              id="Jika kamu belum memiliki pengalaman tetapi memiliki semangat untuk belajar dan siap menjalani proses, kami tetap ingin mengenalmu."
              en="If you don't have experience yet but you're eager to learn and ready for the process, we'd still love to get to know you."
            />
          </p>
          <p>
            <T
              id="Karena pengalaman dapat dibangun, dan kemampuan dapat terus dikembangkan."
              en="Because experience can be built, and skills can keep growing."
            />
          </p>
          <p className="karir-mulai__akhir">
            <T id="Yang terpenting adalah kemauan untuk memulai." en="What matters most is the willingness to start." />
          </p>
          <TombolLamar />
        </div>
      </section>
    </>
  );
}
