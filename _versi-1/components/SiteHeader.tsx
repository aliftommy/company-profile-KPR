"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import LangMenu from "./LangMenu";
import T from "./T";
import { ChevronRightIcon, CloseIcon, NavIcon, PinIcon } from "./Icons";
import { NAV, SOSMED } from "@/data/site";

/**
 * Header ringkas (pola creators.supercell.com): logo di kiri, bahasa + tombol ☰ di kanan.
 * Tombol ☰ membuka laci menu dari kanan (pola store.supercell.com), dibuat dengan <dialog> modal.
 * Selalu tampil di atas (sticky) di semua halaman, termasuk beranda.
 */
export default function SiteHeader() {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Buka/tutup laci + kunci scroll halaman selama laci terbuka
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (navOpen && !dialog.open) {
      dialog.showModal();
      closeRef.current?.focus();
    }
    if (!navOpen && dialog.open) dialog.close();
    document.body.classList.toggle("nav-open", navOpen);
  }, [navOpen]);

  // Tutup laci setiap pindah halaman
  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  const tutup = () => setNavOpen(false);

  return (
    <header className="site-header">
      <div className="container header__inner">
        <Link className="logo" href="/">
          <span className="logo__mark">
            <Image src="/assets/img/icon-web.png" alt="" width={34} height={34} priority />
          </span>
          <span className="logo__text">Kopi Padu rasa</span>
        </Link>

        <div className="header__actions">
          <LangMenu listId="lang-list" />

          <button
            className="nav-toggle"
            type="button"
            aria-haspopup="dialog"
            aria-expanded={navOpen}
            aria-controls="site-nav"
            onClick={() => setNavOpen(true)}
          >
            <span className="nav-toggle__icon" aria-hidden="true" />
            <span className="sr-only">
              <T id="Buka menu" en="Open menu" />
            </span>
          </button>
        </div>
      </div>

      {/* ===== Laci menu (burger) ===== */}
      <dialog
        ref={dialogRef}
        className="drawer"
        id="site-nav"
        aria-label="Menu"
        onClose={tutup}
        onClick={(e) => {
          // Klik area gelap di luar panel menutup laci
          if (e.target === e.currentTarget) tutup();
        }}
      >
        <div className="drawer__panel">
          <div className="drawer__top">
            <Link className="logo" href="/" aria-label="Kopi Padu Rasa, beranda" onClick={tutup}>
              <span className="logo__mark">
                <Image src="/assets/img/icon-web.png" alt="" width={34} height={34} />
              </span>
            </Link>
            <button ref={closeRef} className="drawer__close" type="button" onClick={tutup}>
              <CloseIcon />
              <span className="sr-only">
                <T id="Tutup menu" en="Close menu" />
              </span>
            </button>
          </div>

          <div className="drawer__body">
            {/* Tombol utama (posisi "LOG IN" di referensi) */}
            <Link className="drawer__cta" href="/menu#pesan-online" onClick={tutup}>
              <T id="Pesan Aplikasi" en="Order Online" />
            </Link>

            <nav aria-label="Utama">
              <ul className="drawer__list">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      className="drawer__item"
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      onClick={tutup}
                    >
                      <span className="drawer__icon">
                        <NavIcon name={item.ikon} />
                      </span>
                      <span>
                        <T id={item.id} en={item.en} />
                      </span>
                      <ChevronRightIcon />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="drawer__foot">
              <a className="drawer__small" href={SOSMED.instagram} target="_blank" rel="noopener">
                <T id="Ikuti kami di Instagram ›" en="Follow us on Instagram ›" />
              </a>
              <div className="drawer__bottom">
                <LangMenu listId="lang-list-drawer" variant="drawer" format="name" forceClose={!navOpen} />
                <Link className="drawer__region" href="/lokasi" onClick={tutup}>
                  <PinIcon size={18} />
                  Indonesia
                </Link>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </header>
  );
}
