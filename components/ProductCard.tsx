import Image from "next/image";
import T from "./T";
import PriceToggle from "./PriceToggle";
import { rupiah, type Produk } from "@/data/products";

/**
 * Kartu menu (pola kartu item "Store Specials" Supercell Store):
 * judul di atas, foto di tengah, harga (bisa ganti ukuran) atau deskripsi di pita bawah.
 */
export default function ProductCard({ produk, pita = false }: { produk: Produk; pita?: boolean }) {
  return (
    <article
      className={[
        "product",
        produk.unggulan && "product--featured",
        produk.harga && "product--ukuran", // seluruh kartu bisa dipencet untuk ganti ukuran (PriceToggle)
      ].filter(Boolean).join(" ")}
    >
      {pita && produk.favorit && (
        <span className="ribbon">
          <T id="★ Favorit" en="★ Favorite" />
        </span>
      )}
      <h3 className="product__name">{produk.nama}</h3>
      <div className="product__img">
        {produk.foto ? (
          <Image
            src={`/assets/img/produk/web/${produk.foto}`}
            alt={produk.alt ?? produk.nama}
            width={600}
            height={900}
            sizes="(min-width: 760px) 300px, 50vw"
          />
        ) : (
          <span className="ph">
            Foto produk<br />PNG/WebP transparan<br />600 × 900 px
          </span>
        )}
      </div>
      {produk.harga ? (
        <PriceToggle normal={rupiah(produk.harga.normal)} besar={rupiah(produk.harga.besar)} />
      ) : (
        produk.deskripsi && (
          <p className="product__desc">
            <T id={produk.deskripsi.id} en={produk.deskripsi.en} />
          </p>
        )
      )}
    </article>
  );
}
