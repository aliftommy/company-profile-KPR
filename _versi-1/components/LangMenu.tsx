"use client";

import { useEffect, useRef, useState } from "react";
import { useLang, type Lang } from "./LanguageProvider";
import { ChevronDownIcon, GlobeIcon } from "./Icons";

const NAMA: Record<Lang, string> = { id: "Bahasa Indonesia", en: "English" };

type Props = {
  listId: string;
  /** header: tombol bulat; drawer: tanpa bingkai, membuka ke atas; footer: kotak, membuka ke atas */
  variant?: "header" | "drawer" | "footer";
  /** code = "ID"/"EN" (header), name = nama lengkap bahasa (laci & footer) */
  format?: "code" | "name";
  /** Tutup paksa dropdown (dipakai header beranda saat header naik lagi) */
  forceClose?: boolean;
};

/** Dropdown pilihan bahasa. Ada tiga: di header, di laci menu, dan di footer; semuanya sinkron. */
export default function LangMenu({ listId, variant = "header", format = "code", forceClose = false }: Props) {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (forceClose) setOpen(false);
  }, [forceClose]);

  // Klik di luar dropdown menutupnya
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [open]);

  const pilih = (next: Lang) => {
    setLang(next);
    setOpen(false);
    toggleRef.current?.focus();
  };

  const kecil = variant === "header";

  return (
    <div
      ref={rootRef}
      className={variant === "header" ? "lang" : `lang lang--${variant}`}
      onKeyDown={(e) => {
        // Esc menutup dropdown dulu, tanpa ikut menutup laci menu
        if (e.key === "Escape" && open) {
          e.preventDefault();
          e.stopPropagation();
          setOpen(false);
          toggleRef.current?.focus();
        }
      }}
    >
      <button
        ref={toggleRef}
        className="lang__toggle"
        type="button"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((o) => !o)}
      >
        <GlobeIcon size={kecil ? 18 : 20} />
        <span className="sr-only">Bahasa / Language:</span>
        <span className="lang__current">{format === "name" ? NAMA[lang] : lang.toUpperCase()}</span>
        <ChevronDownIcon size={kecil ? 14 : 16} stroke={kecil ? 3 : 2.5} />
      </button>
      <ul className="lang__list" id={listId} hidden={!open}>
        {(["id", "en"] as Lang[]).map((l) => (
          <li key={l}>
            <button type="button" aria-pressed={lang === l} onClick={() => pilih(l)}>
              <span className="lang__code">{l.toUpperCase()}</span> {NAMA[l]}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
