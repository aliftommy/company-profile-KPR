import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import T from "@/components/T";
import { VERSI_TAMPILAN } from "@/data/site";

// Nunito diunduh sekali saat build lalu disajikan dari server sendiri (tidak memanggil Google saat dibuka)
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  icons: { icon: "/assets/img/icon-web.png", apple: "/assets/img/icon-web.png" },
  // Untuk gambar preview link (WhatsApp, Instagram, dll.) isi metadataBase dengan domain, mis.:
  // metadataBase: new URL("https://kopipadurasa.com"), openGraph: { images: ["/assets/img/og-image.jpg"] },
};

// Dipasang sebelum halaman tampil: kelas "js", bahasa yang tersimpan, dan versi tampilan dari ?versi=1/2
// (disimpan per tab di sessionStorage untuk membandingkan versi; tanpa itu dipakai VERSI_TAMPILAN). Supaya tidak berkedip.
const skripAwal = `document.documentElement.classList.add("js");try{var q=new URLSearchParams(location.search),l=q.get("lang")||localStorage.getItem("kpr-lang");if(l==="id"||l==="en")document.documentElement.lang=l;var v=q.get("versi")||sessionStorage.getItem("kpr-versi");if(v==="1"||v==="2"){document.documentElement.setAttribute("data-versi",v);sessionStorage.setItem("kpr-versi",v);}}catch(e){}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className={nunito.variable} data-versi={VERSI_TAMPILAN} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: skripAwal }} />
      </head>
      <body>
        <LanguageProvider>
          <a className="skip-link" href="#konten">
            <T id="Langsung ke konten" en="Skip to content" />
          </a>
          <SiteHeader />
          <main id="konten">{children}</main>
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
