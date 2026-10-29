/* =========================================================
   FOOTER: dipakai di semua halaman (layout ala store.supercell.com).
   Ubah HTML di antara dua tanda backtick (`) di bawah ini,
   semua halaman otomatis ikut berubah.
   Tahun copyright terisi otomatis.
   ========================================================= */
(function () {
  const html = `
  <footer class="site-footer">
    <div class="container">

      <!-- Baris 1: bahasa (kiri) · lokasi (kanan) -->
      <div class="footer__row footer__row--top">
        <div class="lang lang--footer" data-lang-menu>
          <button class="lang__toggle" type="button" aria-expanded="false" aria-controls="lang-list-footer">
            <svg class="lang__icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9M12 3c-2.5 2.5-3.8 5.5-3.8 9s1.3 6.5 3.8 9"/></svg>
            <span class="sr-only">Bahasa / Language:</span>
            <span class="lang__current" data-format="name">Bahasa Indonesia</span>
            <svg class="lang__chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <ul class="lang__list" id="lang-list-footer" hidden>
            <li><button type="button" data-set-lang="id" aria-pressed="true"><span class="lang__code">ID</span> Bahasa Indonesia</button></li>
            <li><button type="button" data-set-lang="en" aria-pressed="false"><span class="lang__code">EN</span> English</button></li>
          </ul>
        </div>

        <a class="footer__region" href="lokasi.html">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
          Indonesia
        </a>
      </div>

      <!-- Baris 2: sosial media (kiri) · pesan online (kanan) -->
      <div class="footer__row footer__row--split">
        <div class="footer__group">
          <h2 class="footer__label"><span lang="id">Ikuti kami di</span><span lang="en">Follow us on</span></h2>
          <ul class="footer__social">
            <li><a href="https://www.instagram.com/kopipadurasa/" target="_blank" rel="noopener" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>
            </a></li>
            <li><a href="https://www.tiktok.com/@kopipadurasa" target="_blank" rel="noopener" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"/></svg>
            </a></li>
            <!-- ISI: ganti dengan link halaman Facebook Kopi Padu Rasa -->
            <li><a href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 8h3V4h-3c-2.76 0-4.5 1.79-4.5 4.5V11H7v4h2.5v7h4v-7H17l.5-4h-4V8.6c0-.35.25-.6.5-.6z"/></svg>
            </a></li>
            <!-- Threads memakai nama akun Instagram yang sama -->
            <li><a href="https://www.threads.com/@kopipadurasa" target="_blank" rel="noopener" aria-label="Threads">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M18.6 9.2C17.7 5.8 15.2 4 12 4 7.5 4 4.6 7.3 4.6 12s2.9 8 7.4 8c3.6 0 6.3-2.1 6.3-5.2 0-2.6-2-4.3-5.2-4.3-2.4 0-4 1.2-4 2.9 0 1.6 1.3 2.6 3.1 2.6 2.7 0 4.1-2 4.1-5.6"/></svg>
            </a></li>
            <li><a href="https://wa.me/628218717165" target="_blank" rel="noopener" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M4 20l1.3-3.9A8.3 8.3 0 1 1 8.4 19z"/><path d="M9.3 8.5c.3-.4.7-.4 1-.1l.9 1.5c.2.3.1.6-.1.8l-.5.5c.5 1.1 1.3 1.9 2.4 2.4l.5-.5c.2-.2.5-.3.8-.1l1.5.9c.3.3.3.7-.1 1-1.4 1.1-3.2.4-4.8-1.2s-2.4-3.5-1.6-5.2z" fill="currentColor" stroke="none"/></svg>
            </a></li>
          </ul>
        </div>

        <div class="footer__group">
          <!-- Label ini hanya tampil di HP, seperti referensi -->
          <h2 class="footer__label footer__label--mobile"><span lang="id">Pesan online lewat</span><span lang="en">Order online via</span></h2>
          <!-- Hanya penanda (tanpa link) -->
          <ul class="footer__badges">
            <li><span class="store-badge">
              <span class="store-badge__small"><span lang="id">Pesan di</span><span lang="en">Order on</span></span>
              <span class="store-badge__name">GoFood</span>
            </span></li>
            <li><span class="store-badge">
              <span class="store-badge__small"><span lang="id">Pesan di</span><span lang="en">Order on</span></span>
              <span class="store-badge__name">GrabFood</span>
            </span></li>
            <li><span class="store-badge">
              <span class="store-badge__small"><span lang="id">Pesan di</span><span lang="en">Order on</span></span>
              <span class="store-badge__name">ShopeeFood</span>
            </span></li>
            <!-- WhatsApp bisa diklik: membuka chat dengan pesan pembuka yang sudah terisi -->
            <li><a class="store-badge" href="https://wa.me/628218717165?text=Halo%20Kopi%20Padu%20Rasa%2C%20saya%20mau%20pesan." target="_blank" rel="noopener">
              <span class="store-badge__small"><span lang="id">Pesan di</span><span lang="en">Order on</span></span>
              <span class="store-badge__name">WhatsApp</span>
            </a></li>
          </ul>
        </div>
      </div>

      <!-- Baris 3: link halaman -->
      <nav class="footer__links" aria-label="Footer">
        <ul>
          <li><a href="index.html"><span lang="id">Beranda</span><span lang="en">Home</span></a></li>
          <li><a href="menu.html">Menu</a></li>
          <li><a href="kemitraan.html"><span lang="id">Kemitraan</span><span lang="en">Partnership</span></a></li>
          <li><a href="kontak.html"><span lang="id">Kontak</span><span lang="en">Contact</span></a></li>
          <li><a href="tentang.html"><span lang="id">Tentang</span><span lang="en">About</span></a></li>
          <li><a href="lokasi.html"><span lang="id">Lokasi</span><span lang="en">Locations</span></a></li>
        </ul>
      </nav>

      <!-- Baris 4: data perusahaan (kiri) · logo (kanan) -->
      <div class="footer__row footer__row--bottom">
        <div class="footer__company">
          <p>
            [Nama badan usaha, mis. PT/CV …]<br>
            [Alamat kantor pusat]<br>
            [Kota, kode pos]<br>
            Indonesia
          </p>
          <p class="footer__copy">© ${new Date().getFullYear()} Kopi Padu Rasa</p>
        </div>

        <a class="logo footer__logo" href="index.html">
          <span class="logo__mark"><img src="assets/img/icon-web.png" alt="" width="46" height="46"></span>
          <span class="logo__text">Kopi Padu Rasa</span>
        </a>
      </div>
    </div>
  </footer>
`;

  document.currentScript.insertAdjacentHTML("beforebegin", html);
})();
