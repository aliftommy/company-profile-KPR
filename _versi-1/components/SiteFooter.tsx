import Image from "next/image";
import Link from "next/link";
import LangMenu from "./LangMenu";
import PilihToko from "./PilihToko";
import T from "./T";
import { FacebookIcon, InstagramIcon, PinIcon, ThreadsIcon, TikTokIcon, WhatsAppIcon } from "./Icons";
import { NAV, PESAN_ONLINE, SOSMED, waLink } from "@/data/site";

/**
 * Footer: logo + pesan online, lalu kolom Jelajahi / Kantor pusat / Ikuti kami,
 * dan bilah bawah berisi © serta pilihan bahasa & wilayah.
 */
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link className="logo footer__logo" href="/">
              <span className="logo__mark">
                <Image src="/assets/img/icon-web.png" alt="" width={46} height={46} />
              </span>
              <span className="logo__text">Kopi Padu Rasa</span>
            </Link>
            <h2 className="footer__label">
              <T id="Pesan online" en="Order online" />
            </h2>
            {/* Link dari data/site.ts → PESAN_ONLINE; yang belum punya link tampil tanpa link, perToko → pop up pilih toko */}
            <ul className="footer__order">
              {PESAN_ONLINE.map((p) => (
                <li key={p.nama}>
                  {p.perToko ? (
                    <PilihToko className="order-chip" nama={p.nama} kunci={p.perToko} />
                  ) : p.href ? (
                    <a className="order-chip" href={p.href} target="_blank" rel="noopener">{p.nama}</a>
                  ) : (
                    <span className="order-chip">{p.nama}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <nav className="footer__nav" aria-labelledby="footer-jelajahi">
            <h2 className="footer__label" id="footer-jelajahi">
              <T id="Jelajahi" en="Explore" />
            </h2>
            <ul>
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}><T id={item.id} en={item.en} /></Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="footer__label">
              <T id="Kantor pusat" en="Head office" />
            </h2>
            <address className="footer__address">
              PT. Sinergi Rasa Nusantara<br />
              Jl Urip Sumoharjo<br />
              <T id="Makassar, Sulawesi Selatan" en="Makassar, South Sulawesi" /><br />
              Indonesia
            </address>
          </div>

          <div>
            <h2 className="footer__label">
              <T id="Ikuti kami" en="Follow us" />
            </h2>
            <ul className="footer__social">
              <li>
                <a href={SOSMED.instagram} target="_blank" rel="noopener" aria-label="Instagram"><InstagramIcon /></a>
              </li>
              <li>
                <a href={SOSMED.tiktok} target="_blank" rel="noopener" aria-label="TikTok"><TikTokIcon /></a>
              </li>
              <li>
                <a href={SOSMED.facebook} target="_blank" rel="noopener" aria-label="Facebook"><FacebookIcon /></a>
              </li>
              <li>
                <a href={SOSMED.threads} target="_blank" rel="noopener" aria-label="Threads"><ThreadsIcon /></a>
              </li>
              <li>
                <a href={waLink()} target="_blank" rel="noopener" aria-label="WhatsApp"><WhatsAppIcon /></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">© {new Date().getFullYear()} Kopi Padu Rasa</p>
          <div className="footer__prefs">
            <LangMenu listId="lang-list-footer" variant="footer" format="name" />
            <Link className="footer__region" href="/lokasi">
              <PinIcon size={18} />
              Indonesia
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
