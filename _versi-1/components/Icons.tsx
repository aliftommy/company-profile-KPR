import type { Ikon } from "@/data/site";

// Ikon SVG kecil yang dipakai di header, laci menu, dan footer.

export function GlobeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg className="lang__icon" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9M12 3c-2.5 2.5-3.8 5.5-3.8 9s1.3 6.5 3.8 9" />
    </svg>
  );
}

export function ChevronDownIcon({ size = 14, stroke = 3 }: { size?: number; stroke?: number }) {
  return (
    <svg className="lang__chevron" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ChevronRightIcon() {
  return (
    <svg className="drawer__chev" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

export function PinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

/** Ikon menu di laci burger */
export function NavIcon({ name }: { name: Ikon }) {
  const p = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  switch (name) {
    case "home":
      return <svg {...p}><path d="M3 11.5 12 4l9 7.5" /><path d="M5.5 10v9.5h13V10" /><path d="M10 19.5v-5h4v5" /></svg>;
    case "cup":
      return <svg {...p}><path d="M5 8h14" /><path d="M8 8l.6-3h6.8l.6 3" /><path d="M6.2 8l1.2 11.2a2 2 0 0 0 2 1.8h5.2a2 2 0 0 0 2-1.8L17.8 8" /></svg>;
    case "store":
      return <svg {...p}><path d="M4 9.5 5.5 4h13L20 9.5" /><path d="M4 9.5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0" /><path d="M5.5 12v8h13v-8" /><path d="M10 20v-4.5h4V20" /></svg>;
    case "chat":
      return <svg {...p}><path d="M4 5.5h16v10H9.5L5 19v-3.5H4z" /></svg>;
    case "info":
      return <svg {...p}><circle cx="12" cy="12" r="9" /><path d="M12 11v5.5" /><path d="M12 7.6v.2" /></svg>;
    case "pin":
      return <svg {...p}><path d="M12 21s-6.5-6.2-6.5-11a6.5 6.5 0 0 1 13 0c0 4.8-6.5 11-6.5 11z" /><circle cx="12" cy="10" r="2.3" /></svg>;
  }
}

// ---- Sosial media (footer) ----

export function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
    </svg>
  );
}

export function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 8h3V4h-3c-2.76 0-4.5 1.79-4.5 4.5V11H7v4h2.5v7h4v-7H17l.5-4h-4V8.6c0-.35.25-.6.5-.6z" />
    </svg>
  );
}

export function ThreadsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M18.6 9.2C17.7 5.8 15.2 4 12 4 7.5 4 4.6 7.3 4.6 12s2.9 8 7.4 8c3.6 0 6.3-2.1 6.3-5.2 0-2.6-2-4.3-5.2-4.3-2.4 0-4 1.2-4 2.9 0 1.6 1.3 2.6 3.1 2.6 2.7 0 4.1-2 4.1-5.6" />
    </svg>
  );
}

export function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 20l1.3-3.9A8.3 8.3 0 1 1 8.4 19z" />
      <path d="M9.3 8.5c.3-.4.7-.4 1-.1l.9 1.5c.2.3.1.6-.1.8l-.5.5c.5 1.1 1.3 1.9 2.4 2.4l.5-.5c.2-.2.5-.3.8-.1l1.5.9c.3.3.3.7-.1 1-1.4 1.1-3.2.4-4.8-1.2s-2.4-3.5-1.6-5.2z" fill="currentColor" stroke="none" />
    </svg>
  );
}
