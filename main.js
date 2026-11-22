/* ==========================================================
   Portfolio – Animationen & Interaktion (Vanilla JS + GSAP)
   ========================================================== */
(() => {
  "use strict";

  /* ==========================================================
     Projekt-Daten
     Inhalte der Detailansicht und der Kacheln. Pflicht sind nur id und title –
     alles andere ist optional und wird nur gerendert, wenn es gefüllt ist.
     featured: true -> das Projekt erscheint als Kachel im Projekte-Bereich.
     Bilder liegen unter assets/projects/<id>/ und lassen sich 1:1 ersetzen.
     ========================================================== */
  const PROJECTS = [
    {
      id: "boss-fighter",
      featured: true,
      title: "Boss Fighter Companion",
      tags: ["React", "Vite", "TypeScript", "Capacitor", "Android"],
      hero: {
        src: "assets/projects/boss-fighter/main.jpg",
        alt: "Startseite der Boss Fighters Companion App",
      },
      year: "2026",
      role: "App-Entwicklung",
      short: "Companion-App zum Brettspiel: Gruppen, Helden und Karten per QR-Code tracken.",
      description: [
        "Boss Fighters QR ist ein Brettspiel mit App-Unterstützung. Man kämpft im Team gegen verschiedene Bosse, mit unterschiedlichen Helden und Klassen. Auf der Rückseite der Karten befindet sich ein QR-Code, der in der App auslöst, was die Karte bewirkt.",
        "In meiner Companion-App zum Brettspiel ist es möglich, Gruppen und Spieler anzulegen und den aktuellen Boss zu tracken. Held und Klasse samt Stufen sowie Beutekarten und aus dem Spiel entfernte Karten werden gespeichert. Das funktioniert per QR-Scan.",
        "Besonders stolz bin ich auf die Regelprüfung: Beim Eintragen von Beutekarten, Klassen und Heldenkarten prüft die App alle Regeln, lässt den Spielern aber trotzdem die Möglichkeit, Regeln zu brechen. So können Spieler das Spiel nach eigenen Vorstellungen anpassen.",
        //"Gebaut habe ich sie mit React, Vite und TypeScript. Mit Capacitor läuft sie als Android-App. Den Großteil habe ich zusammen mit KI geschrieben. Gerade gehe ich den Code Schritt für Schritt durch, damit ich jede Stelle verstehe, und baue die App danach sauber weiter aus. Fertig ist sie noch nicht, sie funktioniert aber.",
      ],
      gallery: [
        { src: "assets/projects/boss-fighter/main.jpg", alt: "Startseite der App" },
        { src: "assets/projects/boss-fighter/group.jpg", alt: "Gruppenübersicht der App" },
        { src: "assets/projects/boss-fighter/warning.jpg", alt: "Warnung beim verlassen einer Gruppe" },
      ],
    },
    {
      id: "pimcore",
      featured: true,
      title: "Pimcore-Website",
      tags: ["Pimcore", "PHP", "JavaScript"],
      hero: {
        src: "assets/projects/pimcore/header.png",
        alt: "Header der Medieninformatik Website",
      },
      year: "2025-2026",
      duration: "1 Semester",
      role: "Dozentenverwaltung & Kontaktseite",
      short: "Hochschul-Website mit Pimcore: Dozenten-Accordion und Kontaktseite mit E-Mail-Versand.",
      description: [
        "Im Modul Content Management Systeme haben wir zu dritt mit Pimcore eine Informationswebsite zum Studiengang Medieninformatik an der THM Friedberg Ptogrammiert. Sie war als reines Hochschulprojekt gedacht.",
        "Ich war für die Dozentenverwaltung zuständig. Für jeden Dozenten gibt es ein Objekt mit Bild, Name, Schwerpunkt, E-Mail und Website. Auf der Startseite zeigt ein Accordion die Schwerpunkte als Kategorien, in denen die Dozenten mit allen Infos aufgeführt sind. Redakteure legen neue Dozenten an, die dann automatisch im Accordion erscheinen.",
        "Außerdem habe ich die Kontaktseite entwickelt. Man wählt in einem Dropdown den Dozenten mit Namen und Bild aus und gibt die eigenen Daten sowie den Text ein. Beim Absenden geht eine E-Mail an die beim Dozenten hinterlegte Adresse. Auf diese kann man direkt antworten, und sie ist so formatiert, dass auf den ersten Blick erkennbar ist, von wem sie kommt und worum es geht. Eine Prüfung stellt sicher, dass alle Felder ausgefüllt sind.",
        "Da Pimcore als CMS auf PHP basiert, ist der Großteil des Projekts in PHP umgesetzt. JavaScript kommt bei der Formularprüfung und beim Dropdown mit Bildern zum Einsatz.",
      ],
      gallery: [
        { src: "assets/projects/pimcore/contact.png", alt: "Kontaktformular für Studenten" },
      ],
    },
    {
      id: "codeeditor",
      featured: true,
      title: "Code-Editor mit KI-Hilfe",
      tags: ["JavaScript", "Express", "OpenAI API"],
      year: "2025-2026",
      duration: "1 Semester",
      role: "Einzelprojekt, komplette Umsetzung",
      short: "Online-Code-Editor, der passende Aufgaben stellt und mit abgestuften Hinweisen hilft.",
      description: [
        "Im Rahmen eines Moduls zum Erstellen von Lernwebsites habe ich einen Online-Code-Editor mit KI-Unterstützung Entwickelt. Zum Start fragt ein Onboarding-Chat das Level und die gewünschte Programmiersprache ab. Daraus erstellt die KI eine passende Aufgabe.",
        "Wer nicht weiterkommt, kann in einem Hilfe-Chat nach Prinzipien und Konzepten fragen. Lösungen verrät der Chat nicht. Zusätzlich gibt es vier Hinweise, die immer konkreter werden. Erst der vierte Hinweis liefert die Lösung.",
        "Alles habe ich allein umgesetzt, in JavaScript mit der OpenAI-API. Als einziges Framework kommt Express für das Routing zum Einsatz.",
      ],
    },
    {
      id: "modulhandbuch",
      featured: true,
      title: "Mobiles Modulhandbuch",
      tags: ["Vanilla JS", "Tailwind CSS", "Scrum"],
      hero: {
        src: "assets/projects/modulhandbuch/main.png",
        alt: "Hauptseite des Studienplaners",
      },
      year: "2025",
      duration: "1 Semester",
      role: "Scrum Master & Entwicklung",
      short: "Studienplaner für Medieninformatik an der THM mit drehbaren 3D-Würfeln pro Semester.",
      description: [
        "Das mobile Modulhandbuch ist ein Hochschulprojekt für Interessenten am Studiengang Medieninformatik an der THM. Man gibt ein, mit wie viel Prozent Geschwindigkeit man studieren möchte und welchen Schwerpunkt man wählt. Daraus wird ein Studienverlauf bestimmt und angezeigt. Die Seite ist nach dem Mobile-First-Prinzip entwickelt, also vor allem für Smartphones optimiert, passt sich aber auch großen Bildschirmen an.",
        "Jedes Semester ist ein drehbarer 3D-Würfel. Auf den Seiten stehen die Module. Ein Klick vergrößert sie und öffnet die Detailansicht.",
        "Wir waren zu fünft und haben mit Vanilla JS und Tailwind gearbeitet. Ich war Scrum Master: Ich habe die Retros und Sprintziele geleitet und alles Organisatorische geklärt. Weil das Projekt nicht in Vollzeit lief, hatten wir nur zweimal pro Woche ein Daily, ansonsten lief es wie im normalen Scrum. Dazu habe ich kleinere Programmieraufgaben übernommen.",
        //"Das Projekt war sehr erfolgreich, wir haben alle Ziele erreicht.",
      ],
      gallery: [
        { src: "assets/projects/modulhandbuch/mobile.png", alt: "Die Hauptseite in der Mobilen Ansicht" },
        { src: "assets/projects/modulhandbuch/details.png", alt: "Deteilseite für ein Modul" },
        { src: "assets/projects/modulhandbuch/module.png", alt: "Digitales Modulhandbuch mit Filterfunktionen" },
      ],
    },
    {
      id: "cocktail",
      featured: false,
      theme: "a",
      title: "Cocktail-Datenbank",
      tags: ["React", "Supabase", "CSS"],
      hero: {
        src: "assets/projects/cocktail/hero.svg",
        alt: "Startseite der Cocktail-Datenbank mit Suchfeld und Rezeptkarten",
      },
      year: "2025",
      role: "Frontend & Datenmodell",
      duration: "6 Wochen",
      short: "Eine durchsuchbare Cocktail-Sammlung mit Filtern und Sortierung.",
      description: [
        "Die Cocktail-Datenbank ist eine kleine Web-App, in der sich Rezepte nach Zutaten, Glas und Schwierigkeit filtern lassen. Die Daten liegen in Supabase, die Oberfläche ist mit React gebaut.",
        "Besonders wichtig war mir die Suche: Sie reagiert sofort auf jede Eingabe, filtert mehrere Kriterien gleichzeitig und lässt sich komplett mit der Tastatur bedienen. Die Ergebnisliste aktualisiert sich ohne Neuladen.",
        "Nebenbei habe ich gelernt, wie viel Arbeit in guten Leerzuständen steckt – also in dem, was passiert, wenn ein Filter keine Treffer liefert.",
      ],
      gallery: [
        { src: "assets/projects/cocktail/02.svg", alt: "Filter nach Zutaten, Glas und Schwierigkeit" },
        { src: "assets/projects/cocktail/03.svg", alt: "Detailansicht eines Rezepts mit Zutatenliste" },
      ],
      links: [
        { label: "Live-Demo", href: "https://example.com" },
        { label: "GitHub", href: "https://example.com" },
      ],
    },
  ];

  /* ---------- 0. Kacheln aus PROJECTS rendern ---------- */
  // Läuft bewusst vor dem GSAP-Check: die Projekte bleiben auch ohne GSAP sichtbar.
  // Die Scroll- und Hover-Animationen greifen später automatisch auf die Kacheln zu.
  const THEMES = ["a", "b", "c"];
  const cardsContainer = document.querySelector(".cards");

  if (cardsContainer) {
    PROJECTS.forEach((project, index) => {
      // Fehlenden Verlauf einmalig festlegen, damit Kachel und Overlay gleich aussehen.
      project.theme = project.theme || THEMES[index % THEMES.length];
      if (!project.featured) return;

      const card = document.createElement("article");
      card.className = "card";
      card.dataset.project = project.id;

      const media = document.createElement("div");
      media.className = "card__media card__media--" + project.theme;
      media.setAttribute("aria-hidden", "true");
      if (project.hero && project.hero.src) {
        media.style.backgroundImage = 'url("' + project.hero.src + '")';
      }

      const body = document.createElement("div");
      body.className = "card__body";

      // Immer rendern, damit die Tag-Zeile bei allen Karten gleich bleibt (Subgrid).
      const tagsEl = document.createElement("p");
      tagsEl.className = "card__tags";
      tagsEl.textContent = (project.tags || []).join(" · ");
      body.appendChild(tagsEl);

      const titleEl = document.createElement("h3");
      titleEl.textContent = project.title || "";

      const textEl = document.createElement("p");
      textEl.textContent = project.short || "";

      const link = document.createElement("a");
      link.className = "card__link";
      link.href = "#projekt-" + project.id;
      link.setAttribute("aria-haspopup", "dialog");
      link.appendChild(document.createTextNode("Mehr erfahren "));
      const arrow = document.createElement("span");
      arrow.setAttribute("aria-hidden", "true");
      arrow.textContent = "→";
      link.appendChild(arrow);

      body.append(titleEl, textEl, link);
      card.append(media, body);
      cardsContainer.appendChild(card);
    });
  }

  if (!window.gsap) {
    console.warn("GSAP konnte nicht geladen werden – die Seite bleibt statisch nutzbar.");
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  // Nutzer:innen mit "weniger Bewegung" bekommen eine ruhige Version
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // Mausgeräte (kein Touch) für Cursor, Tilt und Magnet-Effekt
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  // Dauer-Helfer: bei reduzierter Bewegung wird alles sofort gesetzt
  const dur = (seconds) => (reduceMotion ? 0 : seconds);

  /* Ein Element folgt der Maus relativ zu seiner Mitte und federt beim
     Verlassen zurück. strength = 0.35 bedeutet 35 % des Mausabstands.
     Wird für Buttons, Chips und die Links im Projekt-Overlay genutzt. */
  const magnetize = (el, strength = 0.35) => {
    const moveX = gsap.quickTo(el, "x", { duration: 0.6, ease: "elastic.out(1, 0.5)" });
    const moveY = gsap.quickTo(el, "y", { duration: 0.6, ease: "elastic.out(1, 0.5)" });

    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      moveX((e.clientX - (r.left + r.width / 2)) * strength);
      moveY((e.clientY - (r.top + r.height / 2)) * strength);
    });
    el.addEventListener("pointerleave", () => {
      moveX(0);
      moveY(0);
    });
  };

  /* ---------- 1. Hero-Intro ---------- */
  if (!reduceMotion) {
    gsap.timeline({ defaults: { ease: "power4.out" } })
      .from(".hero .eyebrow", { y: 20, autoAlpha: 0, duration: 0.7 })
      .from(".hero__title .line > span", { yPercent: 110, duration: 1.1, stagger: 0.12 }, "-=0.4")
      .from(".hero__lead", { y: 24, autoAlpha: 0, duration: 0.8 }, "-=0.6")
      .from(".hero__cta .btn", { y: 20, autoAlpha: 0, duration: 0.7, stagger: 0.1 }, "-=0.5")
      .from(".nav-wrap", { y: -40, autoAlpha: 0, duration: 0.8 }, "-=1.1");

    // Der Verlauf in der Headline wandert endlos von links nach rechts
    gsap.to(".gradient-text", {
      backgroundPosition: "200% 50%",
      duration: 6,
      ease: "none",
      repeat: -1,
    });
  }

  /* ---------- 2. Hintergrund-Blobs ---------- */
  if (!reduceMotion) {
    gsap.utils.toArray(".blob").forEach((blob) => {
      gsap.to(blob, {
        // Funktionen werden bei jedem Durchlauf neu ausgewertet (repeatRefresh),
        // dadurch wandert jeder Blob immer auf eine neue Zufallsposition
        x: () => gsap.utils.random(-260, 260),
        y: () => gsap.utils.random(-180, 180),
        scale: () => gsap.utils.random(0.8, 1.35),
        duration: gsap.utils.random(5, 9),
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        repeatRefresh: true,
      });
    });

    // Der ganze Hintergrund reagiert minimal auf die Maus (Parallax)
    if (finePointer) {
      const bgX = gsap.quickTo(".bg__inner", "x", { duration: 1.2, ease: "power3" });
      const bgY = gsap.quickTo(".bg__inner", "y", { duration: 1.2, ease: "power3" });
      window.addEventListener("pointermove", (e) => {
        bgX((e.clientX / window.innerWidth - 0.5) * -60);
        bgY((e.clientY / window.innerHeight - 0.5) * -60);
      });
    }
  }

  /* ---------- 3. Navigation ---------- */
  const nav = document.querySelector(".nav");
  const navLinks = Array.from(nav.querySelectorAll(".nav__link"));
  const indicator = nav.querySelector(".nav__indicator");
  let activeId = "start";

  // Die Pill-Markierung gleitet unter den aktiven Link
  function moveIndicator(animate = true) {
    const link = navLinks.find((l) => l.dataset.target === activeId);
    if (!link) return;
    gsap.to(indicator, {
      x: link.offsetLeft,
      width: link.offsetWidth,
      duration: animate ? dur(0.5) : 0,
      ease: "power3.out",
    });
  }

  function setActive(id) {
    activeId = id;
    navLinks.forEach((l) => l.classList.toggle("is-active", l.dataset.target === id));
    moveIndicator();
  }

  // Welche Sektion ist gerade im Bild? ScrollTrigger meldet es uns.
  document.querySelectorAll("main section[id]").forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top 55%",
      end: "bottom 55%",
      onToggle: (self) => self.isActive && setActive(section.id),
    });
  });

  moveIndicator(false);
  window.addEventListener("load", () => moveIndicator(false));
  window.addEventListener("resize", () => moveIndicator(false));
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => moveIndicator(false));
  }

  /* ---------- 4. Sanftes Scrollen zu Sektionen ---------- */
  function goTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }

  /* ---------- 5. Mobiles Vollbild-Menü ---------- */
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const menuLinks = gsap.utils.toArray(".menu__link");

  const menuTl = gsap.timeline({
    paused: true,
    onReverseComplete: () => gsap.set(menu, { autoAlpha: 0 }),
  });
  menuTl
    .set(menu, { autoAlpha: 1 })
    .fromTo(
      menu,
      { clipPath: "inset(0% 0% 100% 0%)" },
      { clipPath: "inset(0% 0% 0% 0%)", duration: dur(0.8), ease: "power3.inOut" }
    )
    .from(
      menuLinks,
      { yPercent: 60, autoAlpha: 0, duration: dur(0.5), stagger: dur(0.07), ease: "power3.out" },
      "-=0.35"
    );

  function setMenu(open) {
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
    menu.setAttribute("aria-hidden", String(!open));
    document.documentElement.classList.toggle("no-scroll", open);
    open ? menuTl.play() : menuTl.reverse();
  }

  burger.addEventListener("click", () => setMenu(!burger.classList.contains("is-open")));
  // Klick auf den Menü-Hintergrund (alles, was kein Link ist) schließt das Menü.
  // Das Menü bedeckt den ganzen Viewport, deshalb reicht der Listener darauf.
  menu.addEventListener("click", (e) => {
    if (e.target.closest(".menu__link")) return;
    setMenu(false);
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && burger.classList.contains("is-open")) setMenu(false);
  });

  /* Alle Links mit data-target: sanft scrollen, Menü ggf. schließen */
  document.querySelectorAll("[data-target]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      if (burger.classList.contains("is-open")) setMenu(false);
      goTo(link.dataset.target);
    });
  });

  /* ---------- 6. Scroll-Animationen ---------- */
  if (!reduceMotion) {
    /* Reveal-Animationen laufen pro Element, nicht als eine Animation für alle.
       Grund: ScrollTrigger.batch übergibt die Kacheln in wechselnder Reihenfolge.
       Bei einer gemeinsamen Animation mit stagger + overwrite:"auto" startet die
       Teil-Animation jeder Kachel zeitversetzt. Startete dabei ein Ausblenden erst
       nach dem Einblenden derselben Kachel, überschrieb es das Einblenden – die
       Kachel blieb dann unsichtbar, während die anderen schon zu sehen waren.
       Deshalb merken wir uns die letzte Reveal-Animation je Element und beenden
       sie, bevor die nächste startet. So gewinnt immer der zuletzt gemeldete
       Zustand, unabhängig von der Reihenfolge im Batch. */
    const revealTweens = new WeakMap();

    const animateReveal = (targets, vars, stagger, duration, ease) => {
      gsap.utils.toArray(targets).forEach((el, i) => {
        const prev = revealTweens.get(el);
        if (prev) prev.kill();
        revealTweens.set(el, gsap.to(el, {
          ...vars,
          duration,
          ease,
          delay: i * stagger, // Stagger wirkt jetzt pro Element
        }));
      });
    };

    // Einblenden: von der Startposition an den Platz fahren.
    // yProp legt fest, ob in Pixeln (y) oder in Prozent der eigenen Höhe (yPercent)
    // bewegt wird – die Chips nutzen yPercent, damit der Magnet-Effekt (x/y)
    // nicht mit der Reveal-Animation kollidiert.
    const showEl = (targets, stagger = 0, yProp = "y") =>
      animateReveal(targets, { autoAlpha: 1, [yProp]: 0, scale: 1 }, stagger, 0.8, "power3.out");

    // Ausblenden: y = -40 heißt nach oben weg (beim Hinausscrollen nach oben),
    // y = 40 heißt nach unten weg (beim Zurückscrollen)
    const hideEl = (targets, y, scale = 1, stagger = 0, yProp = "y") =>
      animateReveal(targets, { autoAlpha: 0, [yProp]: y, scale }, stagger, 0.5, "power2.in");

    // Ein Trigger-Element steuert ein oder mehrere Ziele
    function scrollReveal(trigger, targets = trigger, { stagger = 0, scale = 1, yProp = "y", offset = 40 } = {}) {
      gsap.set(targets, { autoAlpha: 0, [yProp]: offset, scale });
      ScrollTrigger.create({
        trigger,
        start: "top 88%",     // Oberkante erreicht 88 % der Fensterhöhe -> einblenden
        end: "bottom 20%",    // Unterkante verlässt die oberen 12 % -> ausblenden
        onEnter: () => showEl(targets, stagger, yProp),
        onEnterBack: () => showEl(targets, stagger, yProp),
        onLeave: () => hideEl(targets, -offset, scale, stagger, yProp),
        onLeaveBack: () => hideEl(targets, offset, scale, stagger, yProp),
      });
    }

    // Überschriften, Texte, Buttons: alles mit data-reveal
    gsap.utils.toArray("[data-reveal]").forEach((el) => scrollReveal(el));

    // Skill-Chips poppen leicht versetzt auf.
    // yPercent statt y, damit der Magnet-Effekt die Chips unabhängig bewegen kann.
    scrollReveal(".chips", ".chips li", { stagger: 0.07, scale: 0.8, yProp: "yPercent", offset: 100 });

    // Projektkarten: ScrollTrigger.batch sammelt Karten, die gleichzeitig kommen
    gsap.set(".card", { autoAlpha: 0, y: 50 });
    ScrollTrigger.batch(".card", {
      start: "top 88%",
      end: "bottom 20%",
      onEnter: (batch) => showEl(batch, 0.12),
      onEnterBack: (batch) => showEl(batch, 0.12),
      onLeave: (batch) => hideEl(batch, -40, 1, 0.08),
      onLeaveBack: (batch) => hideEl(batch, 50, 1, 0.08),
    });

    // Hero: beim Wegscrollen wandert der Inhalt nach oben und blendet aus.
    // "scrub" koppelt die Animation direkt an die Scrollposition, sie läuft also auch rückwärts.
    gsap.to(".hero .wrap", {
      y: -80,
      autoAlpha: 0,
      ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom 25%", scrub: true },
    });
  }

  /* ---------- 7. Karten: leichter 3D-Tilt + Lichtfleck ---------- */
  if (finePointer && !reduceMotion) {
    document.querySelectorAll(".card").forEach((card) => {
      gsap.set(card, { transformPerspective: 900 });
      const rotX = gsap.quickTo(card, "rotationX", { duration: 0.5, ease: "power3" });
      const rotY = gsap.quickTo(card, "rotationY", { duration: 0.5, ease: "power3" });

      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;   // 0 … 1
        const py = (e.clientY - r.top) / r.height;   // 0 … 1
        rotY((px - 0.5) * 10);
        rotX(-(py - 0.5) * 10);
        card.style.setProperty("--mx", px * 100 + "%");
        card.style.setProperty("--my", py * 100 + "%");
      });
      card.addEventListener("pointerleave", () => {
        rotX(0);
        rotY(0);
      });
    });
  }

  /* ---------- 8. Magnetische Buttons & Skill-Chips ---------- */
  if (finePointer && !reduceMotion) {
    document.querySelectorAll(".magnetic").forEach((el) => magnetize(el));
    // Die Chips sind kleiner, deshalb etwas zurückhaltender
    document.querySelectorAll(".chips li").forEach((el) => magnetize(el, 0.3));
  }

  /* ---------- 9. Custom Cursor ---------- */
  // Wird von der Projekt-Ansicht aufgerufen, wenn sich der Inhalt unter dem
  // Zeiger ändert (Overlay öffnen/schließen/wechseln). Ohne Mausbewegung
  // gäbe es sonst kein pointerout und der Kreis bliebe groß.
  let refreshCursorHover = () => { };

  if (finePointer && !reduceMotion) {
    const cursor = document.querySelector(".cursor");
    // Diese Klasse versteckt den normalen Mauszeiger (siehe style.css).
    // Sie wird nur gesetzt, wenn dieser Code wirklich läuft, ohne JS bleibt der normale Cursor.
    document.documentElement.classList.add("has-custom-cursor");

    // Kurze Dauer, damit der Kreis nicht hinterherhinkt, jetzt wo er der einzige Cursor ist
    const curX = gsap.quickTo(cursor, "x", { duration: 0.12, ease: "power3" });
    const curY = gsap.quickTo(cursor, "y", { duration: 0.12, ease: "power3" });

    let pointerX = -1;
    let pointerY = -1;

    // Nächstes interaktives Element – die Kachel zählt als Ganzes, damit der
    // Kreis auch über dem Text oder zwischen den Zeilen groß bleibt.
    const hoverTarget = (el) =>
      el && el.closest
        ? el.closest("a, button, .card, .project-modal__shot img, [data-lightbox-close]")
        : null;
    const setHover = (target) => cursor.classList.toggle("is-hover", !!target);

    window.addEventListener("pointermove", (e) => {
      pointerX = e.clientX;
      pointerY = e.clientY;
      curX(pointerX);
      curY(pointerY);
      cursor.classList.add("is-on");
      // Bei jeder Bewegung neu bestimmen: das ist robuster als pointerover/
      // pointerout, weil beim Wechsel zwischen Kachel und Link beide Elemente
      // interaktiv sind und sich die Reihenfolge der Events unterscheiden kann.
      setHover(hoverTarget(e.target));
    });
    document.documentElement.addEventListener("mouseleave", () => cursor.classList.remove("is-on"));
    document.documentElement.addEventListener("mouseenter", () => cursor.classList.add("is-on"));

    refreshCursorHover = () => {
      if (pointerX < 0) return;
      setHover(hoverTarget(document.elementFromPoint(pointerX, pointerY)));
    };
  }

  const projectLayer = document.querySelector(".project-layer");
  if (projectLayer) {
    const modal = projectLayer.querySelector(".project-modal");
    const backdrop = projectLayer.querySelector(".project-layer__backdrop");
    const scrollArea = projectLayer.querySelector(".project-modal__scroll");
    const heroMedia = projectLayer.querySelector(".project-modal__hero-media");
    const tagsEl = projectLayer.querySelector(".project-modal__tags");
    const titleEl = projectLayer.querySelector(".project-modal__title");
    const textEl = projectLayer.querySelector(".project-modal__text");
    const metaEl = projectLayer.querySelector(".project-modal__meta");
    const linksEl = projectLayer.querySelector(".project-modal__links");
    const sideEl = projectLayer.querySelector(".project-modal__side");
    const galleryWrap = projectLayer.querySelector(".project-modal__gallery-wrap");
    const galleryEl = projectLayer.querySelector(".project-modal__gallery");

    // Alles, was während des Overlays nicht bedienbar sein soll
    const inertRegions = [
      document.querySelector("main"),
      document.querySelector(".nav-wrap"),
      document.querySelector(".footer"),
      burger,
    ].filter(Boolean);

    let currentId = null;
    let isOpen = false;
    let lastFocused = null;
    let closeTl = null;        // laufende Schließen-Animation (für Reopen-Abbruch)

    /* Baut das Overlay aus einem Projekt und liefert alle Elemente,
       die beim Öffnen gestaffelt eingeblendet werden. */
    function renderProject(project) {
      const targets = [];

      heroMedia.className = "project-modal__hero-media card__media--" + (project.theme || "a");
      heroMedia.style.backgroundImage = "";
      if (project.hero && project.hero.src) {
        heroMedia.style.backgroundImage = 'url("' + project.hero.src + '")';
      }
      if (project.hero && project.hero.alt) {
        heroMedia.setAttribute("role", "img");
        heroMedia.setAttribute("aria-label", project.hero.alt);
      } else {
        heroMedia.removeAttribute("role");
        heroMedia.removeAttribute("aria-label");
      }

      const tags = project.tags || [];
      tagsEl.textContent = tags.join(" · ");
      tagsEl.hidden = tags.length === 0;
      if (tags.length) targets.push(tagsEl);

      titleEl.textContent = project.title || "";
      targets.push(titleEl);

      const paragraphs = (project.description && project.description.length
        ? project.description
        : [project.short]
      ).filter(Boolean);
      textEl.textContent = "";
      paragraphs.forEach((text) => {
        const node = document.createElement("p");
        node.textContent = text;
        textEl.appendChild(node);
        targets.push(node);
      });

      const facts = [
        ["Jahr", project.year],
        ["Rolle", project.role],
        ["Dauer", project.duration],
      ].filter((fact) => fact[1]);

      metaEl.textContent = "";
      facts.forEach(([label, value]) => {
        const dt = document.createElement("dt");
        dt.textContent = label;
        const dd = document.createElement("dd");
        dd.textContent = value;
        metaEl.append(dt, dd);
        targets.push(dt, dd);
      });
      metaEl.hidden = facts.length === 0;

      const links = project.links || [];
      linksEl.textContent = "";
      links.forEach((link) => {
        const a = document.createElement("a");
        a.className = "project-modal__link";
        a.href = link.href;
        a.textContent = link.label;
        if (/^https?:/i.test(link.href)) {
          a.target = "_blank";
          a.rel = "noopener noreferrer";
          a.insertAdjacentHTML("beforeend", ' <span aria-hidden="true">↗</span>');
        }
        linksEl.appendChild(a);
        targets.push(a);
      });
      linksEl.hidden = links.length === 0;
      sideEl.hidden = facts.length === 0 && links.length === 0;

      const gallery = project.gallery || [];
      galleryEl.textContent = "";
      gallery.forEach((item) => {
        const figure = document.createElement("figure");
        figure.className = "project-modal__shot";
        if (item.src) {
          const img = document.createElement("img");
          img.src = item.src;
          img.alt = item.alt || "";
          img.loading = "lazy";
          img.decoding = "async";
          figure.appendChild(img);
        } else {
          const placeholder = document.createElement("div");
          placeholder.className = "project-modal__shot-ph card__media--" + (project.theme || "a");
          figure.appendChild(placeholder);
        }
        if (item.alt) {
          const caption = document.createElement("figcaption");
          caption.textContent = item.alt;
          figure.appendChild(caption);
        }
        galleryEl.appendChild(figure);
        targets.push(figure);
      });
      galleryWrap.hidden = gallery.length === 0;

      return targets;
    }

    /* Layout-Rect ohne Transform: das Panel kann beim Schließen mitten in
       der Aufwach-Animation stecken, getBoundingClientRect wäre dann skaliert. */
    function layoutRect(el) {
      const parentRect = el.offsetParent.getBoundingClientRect();
      return {
        left: parentRect.left + el.offsetLeft,
        top: parentRect.top + el.offsetTop,
        width: el.offsetWidth,
        height: el.offsetHeight,
      };
    }

    /* Transform, der ein Element exakt auf ein anderes Rect legt */
    function rectTransform(fromRect, toRect) {
      return {
        x: fromRect.left + fromRect.width / 2 - (toRect.left + toRect.width / 2),
        y: fromRect.top + fromRect.height / 2 - (toRect.top + toRect.height / 2),
        scaleX: fromRect.width / toRect.width,
        scaleY: fromRect.height / toRect.height,
      };
    }

    /* Links im Overlay magnetisch machen (nur Maus, nicht bei reduzierter Bewegung) */
    function magnetizeLinks(links) {
      if (!finePointer || reduceMotion) return;
      // Gleiche Stärke wie die Buttons auf der Startseite
      links.forEach((el) => magnetize(el));
    }

    function openProject(id, { pushHistory = true, animate = true, keyboard = false } = {}) {
      const project = PROJECTS.find((item) => item.id === id);
      if (!project || isOpen) return;

      const card = document.querySelector('.card[data-project="' + id + '"]');
      // Fokus nur zurückgeben, wenn per Tastatur geöffnet wurde. Nach einem
      // Mausklick würde der Fokusring sonst ungewollt aufblitzen.
      lastFocused = keyboard ? document.activeElement : null;

      const targets = renderProject(project);
      const magnetLinks = Array.from(linksEl.querySelectorAll(".project-modal__link"));
      currentId = id;
      isOpen = true;

      // Falls noch eine Schließen-Animation läuft: abbrechen, damit sie das
      // frisch geöffnete Overlay nicht wieder ausblendet.
      if (closeTl) {
        closeTl.kill();
        closeTl = null;
      }

      // Startzustand, bevor das Overlay sichtbar wird (kein Aufblitzen)
      gsap.set(targets, { autoAlpha: 0, y: 16 });
      gsap.set(modal, { clearProps: "transform,opacity,visibility" });
      gsap.set(scrollArea, { clearProps: "opacity,visibility" });
      // Wrapper, die beim Schließen ausgeblendet wurden, wieder zurücksetzen
      gsap.set([tagsEl, titleEl, textEl, sideEl, galleryWrap], { clearProps: "opacity,visibility" });

      const cardRect = animate && !reduceMotion && card ? card.getBoundingClientRect() : null;

      projectLayer.hidden = false;
      scrollArea.scrollTop = 0;
      document.documentElement.classList.add("no-scroll");
      inertRegions.forEach((region) => region.setAttribute("inert", ""));

      // Das komplette Panel wächst aus der angeklickten Kachel heraus
      let growing = false;
      if (cardRect) {
        const modalRect = layoutRect(modal);
        if (modalRect.width && modalRect.height) {
          growing = true;
          gsap.fromTo(
            modal,
            Object.assign(rectTransform(cardRect, modalRect), { opacity: 0 }),
            {
              x: 0,
              y: 0,
              scaleX: 1,
              scaleY: 1,
              opacity: 1,
              duration: dur(0.7),
              ease: "power3.inOut",
              overwrite: "auto",
            }
          );
        }
      }
      // opacity statt autoAlpha: sonst wäre das Panel kurz visibility:hidden
      // und modal.focus() würde ins Leere laufen.
      if (!growing) {
        gsap.fromTo(modal, { opacity: 0 }, { opacity: 1, duration: dur(0.28), ease: "power2.out" });
      }

      gsap.fromTo(backdrop, { autoAlpha: 0 }, { autoAlpha: 1, duration: dur(0.4), ease: "power2.out" });

      // Links werden erst magnetisch, wenn die Einblendung durch ist –
      // sonst kämpfen Reveal- und Magnet-Animation um dieselbe y-Achse.
      if (reduceMotion) {
        gsap.set(targets, { autoAlpha: 1, y: 0 });
        magnetizeLinks(magnetLinks);
      } else {
        gsap.to(targets, {
          autoAlpha: 1,
          y: 0,
          duration: dur(0.5),
          ease: "power3.out",
          stagger: dur(0.05),
          delay: dur(growing ? 0.32 : 0.1),
          overwrite: "auto",
          onComplete: () => magnetizeLinks(magnetLinks),
        });
      }

      if (pushHistory) {
        history.pushState({ project: id }, "", "#projekt-" + id);
      }

      modal.focus({ preventScroll: true });
      refreshCursorHover();
    }

    function closeProject({ fromHistory = false } = {}) {
      if (!isOpen) return;
      isOpen = false;

      const closedId = currentId;
      const card = document.querySelector('.card[data-project="' + closedId + '"]');

      // URL aufräumen: selbst geöffnet -> History-Eintrag zurück,
      // per Direktlink / externem Hash geöffnet -> Hash entfernen
      if (!fromHistory) {
        if (history.state && history.state.project) {
          history.back();
        } else {
          history.replaceState(null, "", location.pathname + location.search);
        }
      }

      gsap.killTweensOf([modal, backdrop, scrollArea]);
      gsap.killTweensOf(textEl.children);

      const finish = () => {
        closeTl = null;
        projectLayer.hidden = true;
        gsap.set(modal, { clearProps: "transform,opacity,visibility" });
        gsap.set(backdrop, { clearProps: "opacity,visibility" });
        gsap.set(scrollArea, { clearProps: "opacity,visibility" });
        currentId = null;
        inertRegions.forEach((region) => region.removeAttribute("inert"));
        if (!burger.classList.contains("is-open")) {
          document.documentElement.classList.remove("no-scroll");
        }

        // Fokus nur zurückgeben, wenn per Tastatur geöffnet wurde –
        // nach einem Mausklick soll kein Fokusring aufblitzen.
        const target = lastFocused && lastFocused !== document.body && document.contains(lastFocused)
          ? lastFocused
          : null;
        if (target) target.focus({ preventScroll: true });
        lastFocused = null;

        // Der Zeiger steht jetzt über der Seite statt über dem Overlay
        refreshCursorHover();
      };

      // Ohne Kachel oder bei reduzierter Bewegung: einfach ausblenden
      if (reduceMotion || !card) {
        closeTl = gsap.timeline({ onComplete: finish });
        closeTl.to(backdrop, { autoAlpha: 0, duration: dur(0.2) }, 0);
        closeTl.to(modal, { opacity: 0, duration: dur(0.2) }, 0);
        return;
      }

      // Das Panel schrumpft wieder in die Kachel hinein
      const target = rectTransform(card.getBoundingClientRect(), layoutRect(modal));

      const tl = gsap.timeline({ onComplete: finish });
      closeTl = tl;
      // Text zuerst ausblenden, damit beim Schrumpfen nichts verzerrt aussieht
      tl.to(
        [tagsEl, titleEl, textEl, sideEl, galleryWrap],
        { autoAlpha: 0, duration: 0.16, ease: "power1.out" },
        0
      );
      tl.to(backdrop, { autoAlpha: 0, duration: 0.5, ease: "power2.in" }, 0);
      tl.to(
        modal,
        {
          x: target.x,
          y: target.y,
          scaleX: target.scaleX,
          scaleY: target.scaleY,
          duration: 0.5,
          ease: "power3.inOut",
        },
        0
      );
      // Erst am Ende ausblenden, damit die Kachel sauber darunter auftaucht
      tl.to(modal, { opacity: 0, duration: 0.22, ease: "power1.in" }, 0.3);
    }

    /* Inhalt wechseln, ohne das Overlay zu schließen (z. B. per Deep-Link) */
    function swapProject(project) {
      gsap.killTweensOf([tagsEl, titleEl, textEl, sideEl, galleryWrap]);
      gsap.set([tagsEl, titleEl, textEl, sideEl, galleryWrap], { clearProps: "opacity,visibility" });

      const targets = renderProject(project);
      gsap.set(targets, { autoAlpha: 1, y: 0 });

      currentId = project.id;
      scrollArea.scrollTop = 0;
      magnetizeLinks(Array.from(linksEl.querySelectorAll(".project-modal__link")));
      modal.focus({ preventScroll: true });
      refreshCursorHover();
    }

    /* Hash <-> Overlay: #projekt-cocktail öffnet direkt, Zurück schließt */
    function syncFromHash({ animate = true } = {}) {
      const match = location.hash.match(/^#projekt-(.+)$/);
      const project = match && PROJECTS.find((item) => item.id === match[1]);
      if (project) {
        if (!isOpen) {
          openProject(project.id, { pushHistory: false, animate });
        } else if (currentId !== project.id) {
          swapProject(project);
        }
      } else if (isOpen) {
        closeProject({ fromHistory: true });
      }
    }

    /* ---------- Lightbox: Galeriebilder vergrößern ---------- */
    const lightbox = document.querySelector(".lightbox");
    const lbImg = lightbox.querySelector(".lightbox__img");
    const lbCaption = lightbox.querySelector(".lightbox__caption");
    const lbClose = lightbox.querySelector(".lightbox__close");   // NEU
    const lbFigure = lightbox.querySelector(".lightbox__figure");
    const lbBackdrop = lightbox.querySelector(".lightbox__backdrop");
    let lbOpen = false;
    let lbLastFocused = null;
    let lbSource = null;   // NEU: das angeklickte Thumbnail
    let lbTl = null;       // NEU: die Öffnen-Timeline (wird rückwärts zum Schließen genutzt)

    /* Berechnet, wie das große Bild aussehen muss, damit es genau auf dem
       Thumbnail liegt: verschieben, gleichmäßig skalieren, zuschneiden. */
    function lightboxFromState(thumbRect, largeRect) {
      // Skalierung wie object-fit: cover, damit nichts verzerrt wird
      const s = Math.max(
        thumbRect.width / largeRect.width,
        thumbRect.height / largeRect.height
      );
      // Was vom skalierten Bild überstehen würde, wird abgeschnitten.
      // clip-path arbeitet in den lokalen (noch unskalierten) Pixeln des Bildes.
      const insetX = (largeRect.width - thumbRect.width / s) / 2;
      const insetY = (largeRect.height - thumbRect.height / s) / 2;
      // Die Ecken des Thumbnails (14px) sollen mitwandern, auch sie werden skaliert
      const radius = 14 / s;

      return {
        x: thumbRect.left + thumbRect.width / 2 - (largeRect.left + largeRect.width / 2),
        y: thumbRect.top + thumbRect.height / 2 - (largeRect.top + largeRect.height / 2),
        scale: s,
        clipPath: "inset(" + insetY + "px " + insetX + "px round " + radius + "px)",
      };
    }

    function openLightbox(img) {
      // Falls gerade noch eine Animation läuft (z. B. schnelles Doppelklicken)
      if (lbTl) { lbTl.kill(); lbTl = null; }
      if (lbSource) lbSource.style.visibility = "";

      lbLastFocused = document.activeElement;
      lbSource = img;

      lbImg.src = img.currentSrc || img.src;
      lbImg.alt = img.alt || "";
      const caption = img.closest("figure")?.querySelector("figcaption");
      lbCaption.textContent = caption ? caption.textContent : "";
      lbCaption.hidden = !caption;

      // Alte Animationswerte entfernen, damit wir die echte Endposition messen
      gsap.set(lbImg, { clearProps: "transform,clipPath" });
      // Bis die Animation startet unsichtbar, sonst blitzt das große Bild kurz auf
      gsap.set([lbFigure, lbBackdrop], { autoAlpha: 0 });

      lightbox.hidden = false;
      lbOpen = true;
      lbFigure.focus({ preventScroll: true });

      const start = () => {
        if (!lbOpen) return; // wurde in der Zwischenzeit schon wieder geschlossen

        if (reduceMotion) {
          gsap.set([lbFigure, lbBackdrop, lbCaption, lbClose], { autoAlpha: 1 });
          refreshCursorHover();
          return;
        }

        const thumbRect = img.getBoundingClientRect();
        const largeRect = lbImg.getBoundingClientRect(); // Endposition (kein Transform aktiv)
        const from = lightboxFromState(thumbRect, largeRect);

        // Startzustand sofort setzen, dann erst sichtbar machen
        gsap.set(lbImg, from);
        gsap.set(lbFigure, { autoAlpha: 1 });
        // Das Original verschwindet, das große Bild "ist" jetzt das Thumbnail
        img.style.visibility = "hidden";

        lbTl = gsap.timeline({ onReverseComplete: finishLightbox });
        lbTl
          .to(lbBackdrop, { autoAlpha: 1, duration: 0.45, ease: "power2.out" }, 0)
          .to(lbImg, {
            x: 0,
            y: 0,
            scale: 1,
            clipPath: "inset(0px 0px round 16px)",
            duration: 0.6,
            ease: "power3.inOut",
          }, 0)
          // Beschriftung und Schließen-Button erst, wenn das Bild fast angekommen ist
          .fromTo([lbCaption, lbClose], { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25 }, 0.4);

        refreshCursorHover();
      };

      // Erst messen, wenn das Bild dekodiert ist, sonst stimmt die Größe nicht
      lbImg.decode().then(start, start);
    }

    /* Wird am Ende der Schließen-Animation aufgerufen */
    function finishLightbox() {
      lbTl = null;
      lightbox.hidden = true;
      lbImg.removeAttribute("src");
      gsap.set([lbFigure, lbBackdrop, lbCaption, lbClose, lbImg], { clearProps: "all" });

      if (lbSource) {
        lbSource.style.visibility = ""; // Thumbnail wieder einblenden
        lbSource = null;
      }
      if (lbLastFocused && document.contains(lbLastFocused)) {
        lbLastFocused.focus({ preventScroll: true });
      }
      refreshCursorHover();
    }

    function closeLightbox() {
      if (!lbOpen) return;
      lbOpen = false;

      // Ohne Timeline (noch nicht gestartet) oder bei reduzierter Bewegung: sofort zu
      if (!lbTl || reduceMotion) {
        if (lbTl) lbTl.kill();
        finishLightbox();
        return;
      }

      // Die Öffnen-Animation einfach rückwärts abspielen: das Bild schrumpft
      // zurück ins Thumbnail. Das klappt auch mitten in der Öffnen-Animation.
      lbTl.timeScale(1.2).reverse();
    }

    // Event-Delegation: die Bilder werden bei jedem Öffnen neu gerendert
    galleryEl.addEventListener("click", (e) => {
      const img = e.target.closest("img");
      if (img) openLightbox(img);
    });

    lightbox.querySelectorAll("[data-lightbox-close]").forEach((el) => {
      el.addEventListener("click", closeLightbox);
    });

    // Escape: zuerst nur die Lightbox schließen, nicht das ganze Overlay
    window.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Escape" && lbOpen) {
          e.preventDefault();
          e.stopImmediatePropagation();
          closeLightbox();
        }
      },
      true // Capture-Phase, damit dieser Handler vor dem des Projekt-Overlays läuft
    );

    /* Kacheln öffnen das Overlay, die Links darin bleiben normal nutzbar */
    document.querySelectorAll(".card[data-project]").forEach((card) => {
      card.addEventListener("click", (event) => {
        if (!event.target.closest) return;
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
        event.preventDefault();
        // detail === 0 bedeutet: per Tastatur ausgelöst (Enter/Leertaste)
        openProject(card.dataset.project, { keyboard: event.detail === 0 });
      });
    });

    projectLayer.querySelectorAll("[data-close]").forEach((el) => {
      el.addEventListener("click", () => closeProject());
    });

    document.addEventListener("keydown", (event) => {
      if (!isOpen || lbOpen) return;

      if (event.key === "Escape") {
        event.preventDefault();
        closeProject();
        return;
      }
      if (event.key !== "Tab") return;

      // Fokus im Overlay halten
      const focusables = Array.from(
        modal.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
      ).filter((node) => node.offsetWidth > 0 || node.offsetHeight > 0);

      if (!focusables.length) {
        event.preventDefault();
        modal.focus();
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (event.shiftKey) {
        if (active === first || active === modal) {
          event.preventDefault();
          last.focus();
        }
      } else if (active === last || active === modal) {
        event.preventDefault();
        first.focus();
      }
    });

    window.addEventListener("popstate", () => syncFromHash());
    // Auch direkte Hash-Änderungen (z. B. Klick auf einen Anker) abfangen
    window.addEventListener("hashchange", () => syncFromHash());

    // Direktaufruf mit #projekt-… ohne Aufwach-Animation (Layout ist noch frisch)
    if (location.hash.indexOf("#projekt-") === 0) {
      syncFromHash({ animate: false });
    }
  }

})();
