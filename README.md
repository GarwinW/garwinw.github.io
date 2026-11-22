# Portfolio-Prototyp

Persönliche Portfolio-Seite mit Vanilla JS und GSAP, dunkles Design mit Lila→Magenta-Verlauf.

## Dateien

```
portfolio/
├── index.html   Inhalt und Struktur
├── style.css    Farben (oben als Variablen), Layout, Hover-Effekte
├── main.js      alle GSAP-Animationen + Projekt-Inhalte (PROJECTS)
├── assets/
│   └── projects/<id>/   Bilder für Kacheln und Detailansicht
└── README.md
```

## Starten

1. Ordner entpacken.
2. `index.html` per Doppelklick im Browser öffnen.

GSAP, ScrollTrigger und die Schriften (Syne, Manrope) werden per CDN geladen,
dafür ist eine Internetverbindung nötig.

Komfortabler mit automatischem Neuladen: in VS Code die Erweiterung
"Live Server" installieren, Rechtsklick auf `index.html` und "Open with Live Server".

## Platzhalter ersetzen

- `index.html`: "Dein Name", `hallo@example.de`, Texte in Hero und "Über mich"
- Die Projektkacheln stehen nicht mehr in `index.html`, sondern werden von
  `main.js` aus `PROJECTS` gerendert. Jedes Projekt mit `featured: true`
  erscheint als Kachel; ohne dieses Flag bleibt es nur über den Direktlink
  erreichbar.
- Lebenslauf-Button: `href="#"` durch den Pfad zur PDF ersetzen
- `style.css`: Farben stehen ganz oben in `:root`
- Vorschaubilder: liegen unter `assets/projects/<id>/` und werden in `main.js`
  im `PROJECTS`-Array eingetragen (siehe unten)

## Projekt-Detailansicht

Ein Klick auf eine Kachel lässt das Overlay aus der Kachel herauswachsen und
beim Schließen wieder dorthin zurückschrumpfen. Schließen mit X, Esc, Klick auf
den Hintergrund oder Browser-Zurück. Die Links im Overlay sind magnetisch wie
die Buttons auf der Startseite. Jedes Projekt ist direkt verlinkbar:
`index.html#projekt-cocktail`. Ändert sich der Hash, während das Overlay offen
ist, wechselt der Inhalt ohne Schließen.

Alle Inhalte stehen in `main.js` im Array `PROJECTS` (am Anfang der Datei).
Daraus werden sowohl die Kacheln im Projekte-Bereich als auch das Overlay
gebaut. Nur `id` und `title` sind Pflicht – alles andere ist optional und wird
nur gerendert, wenn es gefüllt ist:

| Feld | Bedeutung |
|---|---|
| `id` | Anker für `#projekt-<id>` und `data-project` an der Kachel |
| `featured` | `true` – das Projekt erscheint als Kachel im Projekte-Bereich |
| `title` | Überschrift im Overlay und auf der Kachel |
| `theme` | `"a"`, `"b"` oder `"c"` – Verlaufs-Fallback aus `style.css`; fehlt der Wert, wird automatisch durchgewechselt |
| `tags` | Array, wird mit `·` verbunden |
| `hero` | `{ src, alt }` für das große Bild oben und das Kachelbild |
| `year`, `role`, `duration` | Faktenliste rechts |
| `short` | Kurztext auf der Kachel und im Overlay, wenn keine `description` da ist |
| `description` | Array von Absätzen |
| `gallery` | Array aus `{ src, alt }`, `src` optional (dann Verlauf) |
| `links` | Array aus `{ label, href }` – der erste Link wird hervorgehoben |

**Bilder ersetzen:** einfach die SVGs in `assets/projects/<id>/` durch eigene
Dateien ersetzen (gleicher Name) oder den Pfad im `PROJECTS`-Array anpassen.
Die Kacheln übernehmen automatisch dasselbe `hero`-Bild.

Die Kacheln werden direkt beim Laden der Seite gerendert, noch bevor GSAP
geprüft wird. Sie sind deshalb auch ohne Animationen sichtbar. Scroll-Reveal,
3D-Tilt und Cursor-Hover greifen automatisch auf die generierten Kacheln zu.

Das Overlay ist maximal 90 % der Fensterhöhe hoch und scrollt intern; auf dem
Handy wird alles einspaltig.

## Animationen anpassen (main.js)

| Abschnitt | Was |
|---|---|
| 1. Hero-Intro | Zeilen-Reveal, wandernder Verlauf in der Headline |
| 2. Hintergrund-Blobs | Drift-Bewegung und Maus-Parallax |
| 3. Navigation | Pill-Markierung, aktive Sektion |
| 5. Mobiles Menü | Burger und Vollbild-Overlay |
| 6. Scroll-Animationen | Ein- und Ausblenden (`start` / `end` steuern das Timing) |
| 7. Karten | 3D-Tilt und Lichtfleck |
| 8. Magnetische Buttons | Buttons ziehen zur Maus |
| 9. Custom Cursor | Kreis mit Punkt, normaler Zeiger wird ausgeblendet |
| 10. Projekt-Details | Panel wächst aus der Kachel / schrumpft zurück, Galerie, Fokus-Falle, magnetische Links |

Bei aktivierter Systemeinstellung "Bewegung reduzieren" laufen die Animationen nicht.
Cursor, Tilt und Magnet-Effekt gibt es nur auf Geräten mit Maus.
