// Kopi Padu Rasa: dropdown bahasa, menu mobile, tab kategori menu, pencarian outlet.

(function () {
  const root = document.documentElement;

  /* ---------- Bahasa (ID / EN): dropdown di header dan footer ---------- */
  const langMenus = Array.from(document.querySelectorAll("[data-lang-menu]"));
  const langButtons = document.querySelectorAll("[data-set-lang]");
  const langNames = { id: "Bahasa Indonesia", en: "English" };
  const titleEl = document.querySelector("title");

  function setLang(lang) {
    root.lang = lang;
    if (titleEl && titleEl.dataset[lang]) document.title = titleEl.dataset[lang];

    // Header menampilkan kode (ID/EN), footer menampilkan nama lengkap (data-format="name")
    document.querySelectorAll(".lang__current").forEach((el) => {
      el.textContent = el.dataset.format === "name" ? langNames[lang] : lang.toUpperCase();
    });

    langButtons.forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.setLang === lang));
    });

    // Atribut placeholder tidak bisa dipasangkan dengan <span lang>, jadi diatur di sini.
    document.querySelectorAll("[data-placeholder-" + lang + "]").forEach((el) => {
      el.placeholder = el.getAttribute("data-placeholder-" + lang);
    });

    try {
      localStorage.setItem("kpr-lang", lang);
    } catch (e) {}
  }

  function setLangMenu(menu, open) {
    menu.querySelector(".lang__toggle").setAttribute("aria-expanded", String(open));
    menu.querySelector(".lang__list").hidden = !open;
  }

  function closeLangMenus() {
    langMenus.forEach((menu) => setLangMenu(menu, false));
  }

  langMenus.forEach((menu) => {
    const toggle = menu.querySelector(".lang__toggle");
    const list = menu.querySelector(".lang__list");

    toggle.addEventListener("click", () => {
      const open = list.hidden;
      closeLangMenus();
      // Dropdown di luar laci menutup laci; dropdown di dalam laci tidak
      if (open && !menu.closest("dialog")) setNav(false);
      setLangMenu(menu, open);
    });
    menu.querySelectorAll("[data-set-lang]").forEach((btn) => {
      btn.addEventListener("click", () => {
        setLang(btn.dataset.setLang);
        setLangMenu(menu, false);
        toggle.focus();
      });
    });
  });

  document.addEventListener("click", (e) => {
    langMenus.forEach((menu) => {
      if (!menu.contains(e.target)) setLangMenu(menu, false);
    });
  });
  setLang(root.lang === "en" ? "en" : "id");

  /* ---------- Laci menu burger (<dialog> modal) ---------- */
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");

  function setNav(open) {
    if (!navToggle || !nav || typeof nav.showModal !== "function") return;
    if (open && !nav.open) nav.showModal();
    if (!open && nav.open) nav.close();
    navToggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("nav-open", open);
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      closeLangMenus();
      setNav(true);
    });
    // Tutup lewat tombol ✕, klik area gelap di luar panel, atau saat link dipilih
    nav.addEventListener("click", (e) => {
      if (e.target === nav || e.target.closest("[data-close-nav]") || e.target.closest("a")) setNav(false);
    });
    // Esc: kalau dropdown bahasa di dalam laci sedang terbuka, tutup itu dulu
    nav.addEventListener("cancel", (e) => {
      const openMenu = langMenus.find((m) => nav.contains(m) && !m.querySelector(".lang__list").hidden);
      if (openMenu) {
        e.preventDefault();
        setLangMenu(openMenu, false);
        openMenu.querySelector(".lang__toggle").focus();
      }
    });
    // Samakan status tombol ☰ bila laci tertutup lewat Esc
    nav.addEventListener("close", () => {
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
      closeLangMenus();
    });
  }

  /* ---------- Beranda: header baru muncul setelah halaman di-scroll ---------- */
  if (document.body.classList.contains("page-home")) {
    const onScroll = () => {
      const scrolled = window.scrollY > 80;
      document.body.classList.toggle("is-scrolled", scrolled);
      if (!scrolled) closeLangMenus(); // header naik lagi, jangan tinggalkan dropdown terbuka
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Esc untuk dropdown bahasa di header/footer (Esc di dalam laci ditangani dialog sendiri)
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape" || (nav && nav.open)) return;
    const openMenu = langMenus.find((menu) => !menu.querySelector(".lang__list").hidden);
    if (openMenu) {
      setLangMenu(openMenu, false);
      openMenu.querySelector(".lang__toggle").focus();
    }
  });

  /* ---------- Tab kategori menu ---------- */
  document.querySelectorAll("[data-tabs]").forEach((tabs) => {
    const buttons = Array.from(tabs.querySelectorAll('[role="tab"]'));
    const panels = tabs.querySelectorAll('[role="tabpanel"]');
    if (!buttons.length) return;

    function select(btn, focus) {
      buttons.forEach((b) => {
        const on = b === btn;
        b.setAttribute("aria-selected", String(on));
        b.tabIndex = on ? 0 : -1;
      });
      panels.forEach((p) => {
        p.hidden = p.id !== btn.getAttribute("aria-controls");
      });
      if (focus) btn.focus();
    }

    buttons.forEach((btn, i) => {
      btn.addEventListener("click", () => select(btn));
      btn.addEventListener("keydown", (e) => {
        if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
        const step = e.key === "ArrowRight" ? 1 : -1;
        select(buttons[(i + step + buttons.length) % buttons.length], true);
      });
    });

    select(buttons.find((b) => b.getAttribute("aria-selected") === "true") || buttons[0]);
  });

  /* ---------- Pencarian outlet ---------- */
  const search = document.getElementById("outlet-search");
  if (search) {
    const outlets = document.querySelectorAll("#outlet-list .outlet");
    const empty = document.getElementById("outlet-empty");

    search.addEventListener("input", () => {
      const q = search.value.trim().toLowerCase();
      let shown = 0;
      outlets.forEach((o) => {
        const match = o.textContent.toLowerCase().includes(q);
        o.hidden = !match;
        if (match) shown++;
      });
      if (empty) empty.hidden = shown > 0;
    });
  }
})();
