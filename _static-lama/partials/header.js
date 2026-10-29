/* =========================================================
   HEADER: dipakai di semua halaman.
   Ubah HTML di antara dua tanda backtick (`) di bawah ini,
   semua halaman otomatis ikut berubah.

   Menu burger (☰) berbentuk laci dari kanan, mengikuti store.supercell.com.
   Urutan menu = urutan <li> di dalam .drawer__list.
   ========================================================= */
(function () {
  const chevron = `<svg class="drawer__chev" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>`;

  const html = `
  <header class="site-header">
    <div class="container header__inner">
      <a class="logo" href="index.html">
        <span class="logo__mark"><img src="assets/img/icon-web.png" alt="" width="34" height="34"></span>
        <span class="logo__text">Kopi Padu rasa</span>
      </a>

      <div class="header__actions">
        <!-- Dropdown bahasa -->
        <div class="lang" data-lang-menu>
          <button class="lang__toggle" type="button" aria-expanded="false" aria-controls="lang-list">
            <svg class="lang__icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9M12 3c-2.5 2.5-3.8 5.5-3.8 9s1.3 6.5 3.8 9"/></svg>
            <span class="sr-only">Bahasa / Language:</span>
            <span class="lang__current">ID</span>
            <svg class="lang__chevron" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <ul class="lang__list" id="lang-list" hidden>
            <li><button type="button" data-set-lang="id" aria-pressed="true"><span class="lang__code">ID</span> Bahasa Indonesia</button></li>
            <li><button type="button" data-set-lang="en" aria-pressed="false"><span class="lang__code">EN</span> English</button></li>
          </ul>
        </div>

        <button class="nav-toggle" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="site-nav">
          <span class="nav-toggle__icon" aria-hidden="true"></span>
          <span class="sr-only"><span lang="id">Buka menu</span><span lang="en">Open menu</span></span>
        </button>
      </div>
    </div>

    <!-- ===== Laci menu (burger) ===== -->
    <dialog class="drawer" id="site-nav" aria-label="Menu">
      <div class="drawer__panel">
        <div class="drawer__top">
          <a class="logo" href="index.html" aria-label="Kopi Padu Rasa, beranda">
            <span class="logo__mark"><img src="assets/img/icon-web.png" alt="" width="34" height="34"></span>
          </a>
          <button class="drawer__close" type="button" data-close-nav autofocus>
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>
            <span class="sr-only"><span lang="id">Tutup menu</span><span lang="en">Close menu</span></span>
          </button>
        </div>

        <div class="drawer__body">
          <!-- Tombol utama (posisi "LOG IN" di referensi) -->
          <a class="drawer__cta" href="menu.html#pesan-online"><span lang="id">Pesan Online</span><span lang="en">Order Online</span></a>

          <nav aria-label="Utama">
            <ul class="drawer__list">
              <li><a class="drawer__item" href="index.html">
                <span class="drawer__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9.5h13V10"/><path d="M10 19.5v-5h4v5"/></svg></span>
                <span><span lang="id">Beranda</span><span lang="en">Home</span></span>${chevron}
              </a></li>
              <li><a class="drawer__item" href="menu.html">
                <span class="drawer__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 8h14"/><path d="M8 8l.6-3h6.8l.6 3"/><path d="M6.2 8l1.2 11.2a2 2 0 0 0 2 1.8h5.2a2 2 0 0 0 2-1.8L17.8 8"/></svg></span>
                <span>Menu</span>${chevron}
              </a></li>
              <li><a class="drawer__item" href="kemitraan.html">
                <span class="drawer__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9.5 5.5 4h13L20 9.5"/><path d="M4 9.5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0"/><path d="M5.5 12v8h13v-8"/><path d="M10 20v-4.5h4V20"/></svg></span>
                <span><span lang="id">Kemitraan</span><span lang="en">Partnership</span></span>${chevron}
              </a></li>
              <li><a class="drawer__item" href="kontak.html">
                <span class="drawer__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5.5h16v10H9.5L5 19v-3.5H4z"/></svg></span>
                <span><span lang="id">Kontak</span><span lang="en">Contact</span></span>${chevron}
              </a></li>
              <li><a class="drawer__item" href="tentang.html">
                <span class="drawer__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5.5"/><path d="M12 7.6v.2"/></svg></span>
                <span><span lang="id">Tentang</span><span lang="en">About</span></span>${chevron}
              </a></li>
              <li><a class="drawer__item" href="lokasi.html">
                <span class="drawer__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-6.5-6.2-6.5-11a6.5 6.5 0 0 1 13 0c0 4.8-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/></svg></span>
                <span><span lang="id">Lokasi</span><span lang="en">Locations</span></span>${chevron}
              </a></li>
            </ul>
          </nav>

          <div class="drawer__foot">
            <a class="drawer__small" href="https://www.instagram.com/kopipadurasa/" target="_blank" rel="noopener"><span lang="id">Ikuti kami di Instagram ›</span><span lang="en">Follow us on Instagram ›</span></a>
            <div class="drawer__bottom">
              <div class="lang lang--drawer" data-lang-menu>
                <button class="lang__toggle" type="button" aria-expanded="false" aria-controls="lang-list-drawer">
                  <svg class="lang__icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9M12 3c-2.5 2.5-3.8 5.5-3.8 9s1.3 6.5 3.8 9"/></svg>
                  <span class="sr-only">Bahasa / Language:</span>
                  <span class="lang__current" data-format="name">Bahasa Indonesia</span>
                  <svg class="lang__chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
                </button>
                <ul class="lang__list" id="lang-list-drawer" hidden>
                  <li><button type="button" data-set-lang="id" aria-pressed="true"><span class="lang__code">ID</span> Bahasa Indonesia</button></li>
                  <li><button type="button" data-set-lang="en" aria-pressed="false"><span class="lang__code">EN</span> English</button></li>
                </ul>
              </div>
              <a class="drawer__region" href="lokasi.html">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
                Indonesia
              </a>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  </header>
`;

  document.currentScript.insertAdjacentHTML("beforebegin", html);

  // Tandai menu halaman yang sedang dibuka (ikon oranye)
  const here = (location.pathname.split("/").pop() || "index.html").replace(/\.html$/, "");
  document.querySelectorAll(".site-header .drawer__item").forEach((a) => {
    if (a.getAttribute("href").replace(/\.html$/, "") === here) a.setAttribute("aria-current", "page");
  });
})();
