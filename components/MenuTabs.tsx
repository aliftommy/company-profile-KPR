"use client";

import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";

type Tab = { key: string; label: ReactNode; content: ReactNode };

/** Tab kategori di halaman Menu. Panah kiri/kanan berpindah tab. */
export default function MenuTabs({ tabs }: { tabs: Tab[] }) {
  const [aktif, setAktif] = useState(tabs[0]?.key);
  const tombol = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: KeyboardEvent, i: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const n = (i + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
    setAktif(tabs[n].key);
    tombol.current[n]?.focus();
  };

  return (
    <div className="tabs">
      <div className="tabs__list" role="tablist" aria-label="Kategori menu">
        {tabs.map((t, i) => (
          <button
            key={t.key}
            ref={(el) => {
              tombol.current[i] = el;
            }}
            className="tab"
            type="button"
            role="tab"
            id={`tab-${t.key}`}
            aria-controls={`panel-${t.key}`}
            aria-selected={aktif === t.key}
            tabIndex={aktif === t.key ? 0 : -1}
            onClick={() => setAktif(t.key)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tabs.map((t) => (
        <div
          key={t.key}
          className="tab-panel"
          role="tabpanel"
          id={`panel-${t.key}`}
          aria-labelledby={`tab-${t.key}`}
          tabIndex={0}
          hidden={aktif !== t.key}
        >
          {t.content}
        </div>
      ))}
    </div>
  );
}
