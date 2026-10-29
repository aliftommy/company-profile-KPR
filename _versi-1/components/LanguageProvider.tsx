"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { JUDUL_HALAMAN } from "@/data/site";

export type Lang = "id" | "en";

const LanguageContext = createContext<{ lang: Lang; setLang: (lang: Lang) => void }>({
  lang: "id",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("id");
  const pathname = usePathname();

  // Bahasa awal sudah dipasang skrip kecil di <head> (app/layout.tsx) sebelum halaman tampil.
  useEffect(() => {
    setLangState(document.documentElement.lang === "en" ? "en" : "id");
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    document.documentElement.lang = next;
    try {
      localStorage.setItem("kpr-lang", next);
    } catch {}
  }, []);

  // Judul tab browser ikut bahasa aktif. Next.js bisa memasang <title> dari metadata (bahasa Indonesia)
  // setelah efek ini berjalan, jadi perubahan <title> diawasi dan judul bahasa aktif dipasang lagi.
  useEffect(() => {
    const judul = JUDUL_HALAMAN[pathname];
    if (!judul) return;
    const pasang = () => {
      if (document.title !== judul[lang]) document.title = judul[lang];
    };
    pasang();
    const pengamat = new MutationObserver(pasang);
    pengamat.observe(document.head, { subtree: true, childList: true, characterData: true });
    return () => pengamat.disconnect();
  }, [lang, pathname]);

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

export const useLang = () => useContext(LanguageContext);
