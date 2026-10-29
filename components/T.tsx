import type { ReactNode } from "react";

/**
 * Teks dua bahasa: <T id="Lokasi" en="Locations" />
 * Hanya bahasa aktif yang tampil; diatur CSS lewat atribut lang di <html>.
 */
export default function T({ id, en }: { id: ReactNode; en: ReactNode }) {
  return (
    <>
      <span lang="id">{id}</span>
      <span lang="en">{en}</span>
    </>
  );
}
