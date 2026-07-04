/* ============================================================
   SAGG+ — Animated Landing
   İçerik data/site.json ve data/projects.json dosyalarından
   yüklenir; admin paneli bu dosyaları günceller.
   ============================================================ */

(function () {
  "use strict";

  document.body.classList.add("is-loading");

  /* ---------- Yardımcılar ---------- */

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.from((root || document).querySelectorAll(sel)); }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function fetchJSON(url) {
    return fetch(url + "?t=" + Date.now()).then(function (r) {
      if (!r.ok) throw new Error(url + " -> " + r.status);
      return r.json();
    });
  }

  /* ---------- Preloader ---------- */

  var preloader = $("#preloader");
  var preCounter = $("#preCounter");
  var preBar = $("#preBar");
  var progress = 0;
  var loadDone = false;

  var tick = setInterval(function () {
    // Yükleme bitene kadar 90'da bekle, bitince 100'e koş.
    var target = loadDone ? 100 : 90;
    progress = Math.min(target, progress + Math.max(1, (target - progress) * 0.12));
    var p = Math.round(progress);
    if (preCounter) preCounter.textContent = p;
    if (preBar) preBar.style.width = p + "%";
    if (p >= 100) {
      clearInterval(tick);
      setTimeout(finishLoading, 250);
    }
  }, 40);

  function finishLoading() {
    if (preloader) preloader.classList.add("done");
    document.body.classList.remove("is-loading");
  }

  // Her ihtimale karşı emniyet kemeri: 6 sn sonra zorla aç.
  setTimeout(function () { loadDone = true; }, 6000);

  /* ---------- İçerik yükleme ---------- */

  var SITE = null;
  var PROJECTS = [];

  Promise.all([
    fetchJSON("data/site.json").catch(function () { return null; }),
    fetchJSON("data/projects.json").catch(function () { return { projects: [] }; })
  ]).then(function (res) {
    SITE = res[0];
    PROJECTS = (res[1] && res[1].projects) || [];
    if (SITE) applySite(SITE);
    renderStats(SITE);
    renderServices(SITE);
    renderProjects(PROJECTS);
    initReveals();
    loadDone = true;
  }).catch(function () {
    initReveals();
    loadDone = true;
  });

  function applySite(site) {
    $all("[data-site]").forEach(function (el) {
      var key = el.getAttribute("data-site");
      if (key === "brandHtml") {
        var b = site.brand || "SAGG+";
        el.innerHTML = esc(b.replace(/\+$/, "")) + (/\+$/.test(b) ? "<em>+</em>" : "");
      } else if (key === "contactEmailLink") {
        el.href = "mailto:" + (site.contactEmail || "info@saggplus.com");
        if (!el.querySelector("[data-site]") && !el.textContent.trim()) {
          el.textContent = site.contactEmail || "";
        }
      } else if (key === "instagramLink") {
        el.href = site.instagram || "#";
      } else if (site[key] != null) {
        el.textContent = site[key];
      }
    });
    document.title = (site.brand || "SAGG+") + " | " + (site.heroKicker || "İnşaat · Mimarlık · Akustik");
  }

  function renderStats(site) {
    var ul = $("#stats");
    if (!ul || !site || !Array.isArray(site.stats)) return;
    ul.innerHTML = site.stats.map(function (s) {
      return "<li><strong>" + esc(s.value) + "</strong><span>" + esc(s.label) + "</span></li>";
    }).join("");
  }

  function renderServices(site) {
    var ul = $("#servicesList");
    if (!ul || !site || !Array.isArray(site.services)) return;
    ul.innerHTML = site.services.map(function (s, i) {
      return (
        '<li class="services__item">' +
          '<div class="services__row hoverable">' +
            '<span class="services__idx">' + String(i + 1).padStart(2, "0") + "</span>" +
            '<h3 class="services__name">' + esc(s.title) + "</h3>" +
            '<p class="services__desc">' + esc(s.text) + "</p>" +
            '<span class="services__arrow" aria-hidden="true">→</span>' +
          "</div>" +
        "</li>"
      );
    }).join("");
  }

  /* ---------- Projeler ---------- */

  function renderProjects(projects) {
    var grid = $("#projectsGrid");
    var filters = $("#filters");
    if (!grid) return;

    if (!projects.length) {
      grid.innerHTML = '<p class="projects__empty">Henüz proje eklenmedi. Admin panelinden ilk projenizi yükleyin.</p>';
      return;
    }

    grid.innerHTML = projects.map(function (p) {
      return (
        '<article class="project-card" data-category="' + esc(p.category) + '">' +
          '<div class="project-card__media hoverable">' +
            '<img src="' + esc(p.image) + '" alt="' + esc(p.title) + '" loading="lazy" />' +
            '<span class="project-card__tag">' + esc(p.category) + "</span>" +
          "</div>" +
          '<div class="project-card__body">' +
            '<h3 class="project-card__title">' + esc(p.title) + "</h3>" +
            '<p class="project-card__meta">' + esc(p.location) + " · " + esc(p.year) + "</p>" +
            '<p class="project-card__desc">' + esc(p.description) + "</p>" +
          "</div>" +
        "</article>"
      );
    }).join("");

    if (filters) {
      var cats = ["Tümü"];
      projects.forEach(function (p) {
        if (p.category && cats.indexOf(p.category) === -1) cats.push(p.category);
      });
      filters.innerHTML = cats.map(function (c, i) {
        return '<button type="button" class="hoverable' + (i === 0 ? " active" : "") + '" data-cat="' + esc(c) + '">' + esc(c) + "</button>";
      }).join("");

      filters.addEventListener("click", function (e) {
        var btn = e.target.closest("button[data-cat]");
        if (!btn) return;
        $all("button", filters).forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        var cat = btn.getAttribute("data-cat");
        $all(".project-card", grid).forEach(function (card) {
          var show = cat === "Tümü" || card.getAttribute("data-category") === cat;
          card.classList.toggle("is-filtered-out", !show);
          if (show) card.classList.add("in-view");
        });
      });
    }
  }

  /* ---------- Scroll reveal ---------- */

  function splitWords(el) {
    // <br> etiketleri boşluğa dönüşsün ki sözcükler birbirine yapışmasın.
    $all("br", el).forEach(function (br) { br.replaceWith(" "); });
    var words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words.map(function (w) {
      return '<span class="word"><span>' + esc(w) + "</span></span>";
    }).join(" ");
  }

  function initReveals() {
    $all(".split-reveal").forEach(splitWords);

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in-view");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });

    $all(".reveal, .reveal-line, .split-reveal, .services__item, .project-card, .about__stats li")
      .forEach(function (el) { io.observe(el); });
  }

  /* ---------- Nav: kaydırınca gizle/göster ---------- */

  var nav = $("#nav");
  var lastY = 0;
  window.addEventListener("scroll", function () {
    var y = window.scrollY;
    if (nav) {
      nav.classList.toggle("is-scrolled", y > 40);
      nav.classList.toggle("is-hidden", y > 300 && y > lastY && !document.body.classList.contains("menu-open"));
    }
    lastY = y;
    parallax(y);
  }, { passive: true });

  /* ---------- Hero paralaks ---------- */

  var heroFigure = $(".hero__figure svg");
  function parallax(y) {
    if (!heroFigure) return;
    if (y < window.innerHeight * 1.2) {
      heroFigure.style.transform = "translateY(" + y * 0.12 + "px) scale(" + (1 + y * 0.00012) + ")";
    }
  }

  /* ---------- Tam ekran menü ---------- */

  var burger = $("#burger");
  var menu = $("#menu");
  if (burger && menu) {
    burger.addEventListener("click", function () {
      var open = document.body.classList.toggle("menu-open");
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Menüyü kapat" : "Menüyü aç");
      menu.setAttribute("aria-hidden", String(!open));
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        document.body.classList.remove("menu-open");
        burger.setAttribute("aria-expanded", "false");
        menu.setAttribute("aria-hidden", "true");
      }
    });
  }

  /* ---------- Marquee: parçayı klonla ---------- */

  var track = $("#marqueeTrack");
  if (track) {
    var chunk = track.innerHTML;
    // Şerit, %50 kaydırma ile kusursuz döngü için en az iki kopya ister.
    track.innerHTML = chunk + chunk + chunk + chunk;
  }

  /* ---------- Özel imleç ---------- */

  var cursor = $("#cursor");
  var ring = $("#cursorRing");
  if (cursor && ring && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    var cx = -100, cy = -100, rx = -100, ry = -100;
    document.addEventListener("mousemove", function (e) {
      cx = e.clientX; cy = e.clientY;
      cursor.style.left = cx + "px";
      cursor.style.top = cy + "px";
    });
    (function loop() {
      rx += (cx - rx) * 0.16;
      ry += (cy - ry) * 0.16;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      requestAnimationFrame(loop);
    })();
    document.addEventListener("mouseover", function (e) {
      ring.classList.toggle("is-hover", !!e.target.closest(".hoverable, a, button"));
    });
  }

  /* ---------- Yıl ---------- */

  var yearEl = $("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
