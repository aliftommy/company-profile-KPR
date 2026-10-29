import type { Metadata } from "next";
import T from "@/components/T";
import { JUDUL_HALAMAN, SOSMED, WHATSAPP, waLink } from "@/data/site";

export const metadata: Metadata = {
  title: JUDUL_HALAMAN["/kontak"].id,
  description: "[ISI: deskripsi halaman Kontak, sekitar 150 karakter]",
};

export default function Kontak() {
  return (
    <>
      <section className="page-hero" aria-labelledby="page-title">
        <div className="container">
          <p className="eyebrow"><T id="Kontak" en="Contact" /></p>
          <h1 id="page-title"><T id="Ngobrol dengan kami" en="Talk to us" /></h1>
          <p className="page-hero__lead">
            <T id="[Untuk pertanyaan umum, kerja sama, atau masukan.]" en="[For general questions, collaborations or feedback.]" />
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="kanal-title">
        <div className="container">
          <h2 className="sr-only" id="kanal-title"><T id="Kanal kontak" en="Contact channels" /></h2>
          <div className="contact-grid">
            <a className="contact-card" href={waLink()} target="_blank" rel="noopener">
              <span className="contact-card__label">WhatsApp</span>
              <span className="contact-card__value">{WHATSAPP.tampil}</span>
            </a>
            <a className="contact-card" href="mailto:email@domain.com">
              <span className="contact-card__label">Email</span>
              <span className="contact-card__value">[email@domain.com]</span>
            </a>
            <a className="contact-card" href={SOSMED.instagram} target="_blank" rel="noopener">
              <span className="contact-card__label">Instagram</span>
              <span className="contact-card__value">@kopipadurasa</span>
            </a>
            <div className="contact-card">
              <span className="contact-card__label"><T id="Kantor pusat" en="Head office" /></span>
              <span className="contact-card__value contact-card__value--small">[Alamat kantor pusat]</span>
            </div>
          </div>

          <div className="media media--map contact__map">
            {/* Tempel embed Google Maps kantor pusat:
                <iframe src="..." loading="lazy" title="Peta kantor pusat Kopi Padu Rasa"></iframe> */}
            <span className="ph">Peta kantor pusat (embed Google Maps)</span>
          </div>
        </div>
      </section>
    </>
  );
}
