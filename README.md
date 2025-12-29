## Built with Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.



# Accessibility-Konventionen (GIM Website)

Dieses Dokument sammelt die wichtigsten Regeln, die wir für Barrierefreiheit (A11y) in der GIM-Website einhalten wollen.  
Ziel: Inhalte sollen für alle nutzbar sein – unabhängig von Gerät, Fähigkeiten oder Hilfstechnologien.

---

## 1. Struktur & Überschriften

- Pro Seite gibt es **genau ein** `<h1>`.
- Reusable Komponenten **dürfen kein `h1`** rendern, sondern:
  - Blocktitel: `h2`
  - Untertitel innerhalb eines Blocks: `h3` oder `h4`
- Sections bekommen, wo sinnvoll, eine Struktur wie:

  ```vue
  <section aria-labelledby="section-id">
    <h2 id="section-id">Titel des Abschnitts</h2>
    ...
  </section>
````

* Überschriften dürfen nicht nur fürs Styling missbraucht werden.
  Styling passiert über Tailwind-Klassen, nicht über das Heading-Level.

---

## 2. Landmarks & Layout

* Das globale Layout hat genau ein `<main>`:

  ```vue
  <main id="main-content" role="main">
    <slot />
  </main>
  ```

* Komponenten sollen **kein eigenes `<main>`** enthalten.

* Wichtige Bereiche werden, wenn sinnvoll, mit `section`, `nav`, `header`, `footer` versehen.

* Skip-Link im Layout nicht entfernen:

  ```vue
  <a
    href="#main-content"
    class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-secondary focus:shadow-md rounded"
  >
    Zum Inhalt springen
  </a>
  ```

---

## 3. Links, Buttons & Interaktionen

* **Regel**:

  * Navigation → `<NuxtLink>` / `<a>`
  * Aktionen (z. B. Modal öffnen, Tabs wechseln) → `<button>`

* Nie nur per CSS „Button-Optik“ auf einem Link herstellen, wenn es eine Aktion ist.

* Buttons:

  ```vue
  <button type="button">Aktion</button>
  ```

* Deaktivierte Links nicht mit `disabled` (gibt es auf `<a>` nicht), sondern:

  * Entweder gar nicht rendern
  * Oder `aria-disabled="true"` + `tabindex="-1"` + Click verhindern

* Externe Links mit `target="_blank"` bekommen:

  * `rel="noopener noreferrer"`
  * optional ein `aria-label` oder `sr-only` Hinweis, z. B. „(öffnet in neuem Tab)“.

---

## 4. Bilder & Icons

* Inhaltliche Bilder:

  * sinnvoller `alt`-Text, der beschreibt, was relevant ist.
  * `loading="lazy"` bei nicht kritisch sichtbaren Bildern.
* Dekorative Bilder:

  * `alt=""` + ggf. `aria-hidden="true"`:

    ```vue
    <img src="..." alt="" aria-hidden="true" />
    ```
* Icons:

  * sind in der Regel dekorativ, wenn direkt daneben Text steht.
  * dann: `aria-hidden="true"` und kein `title`.

---

## 5. Farbe & Kontrast

* Keine wichtigen Texte in sehr hellen Farben auf Weiß.
* Brand-Primary (`primary`) wird:

  * bevorzugt als **Textfarbe auf Weiß**, oder
  * als **Hintergrund** mit dunkler Textfarbe.
* Buttons:

  * Text mit ausreichend Kontrast (z. B. `text-primary` auf `bg-white` + `border-primary`).
* Keine Infos ausschließlich über Farbe vermitteln:

  * statt „grün = aktiv“ besser: Text, Icon, oder zusätzlicher Hinweis.

---

## 6. Tastaturbedienbarkeit

* Alle interaktiven Elemente müssen mit `Tab` erreichbar sein.
* Kein `tabindex` > 0 verwenden.
* Keine `div`/`span` mit `@click` ohne `role="button"` und `tabindex="0"` (besser gleich `<button>`).
* Modale/Overlays:

  * Fokus beim Öffnen in das Modal setzen.
  * ESC schließt das Modal.
  * Beim Schließen Fokus zurück auf das Element setzen, das geöffnet hat.

---

## 7. Bewegung, Slider & Animation

* Respektiere `prefers-reduced-motion`:

  ```ts
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  if (!prefersReducedMotion.matches) {
    // Animation / Auto-Slide starten
  }
  ```

* Auto-Slides (Carousel):

  * pausieren bei Fokus oder Hover.
  * Navigation über Buttons („Vorherige / Nächste Folie“).
  * Pager-Dots mit `aria-label="Folie X von Y"`.

---

## 8. Formulare & Fehlermeldungen

* Jedes Eingabefeld braucht ein sichtbares `<label>` oder ein `aria-label`.
* Fehlermeldungen:

  * in Textform, nicht nur farbig markiert.
  * mit `aria-live="assertive"` für dynamische Fehler, wenn möglich.
* Pflichtfelder klar kennzeichnen, z. B. `*` plus Erklärung „* Pflichtfeld“.

---

## 9. Statusmeldungen & Loading

* Loading-Zustände:

  ```vue
  <div role="status" aria-live="polite">
    Inhalte werden geladen …
  </div>
  ```

* Fehler:

  ```vue
  <div role="status" aria-live="assertive">
    Beim Laden der Inhalte ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.
  </div>
  ```

---

## 10. Content & Sprache

* Seiten-Sprache ist in Nuxt global auf `lang="de"` gesetzt.
* Texte möglichst klar und verständlich formulieren.
* Keine Blindtexte („Lorem ipsum“) in produktiven Seiten.

---

Diese Konventionen sind ein lebendes Dokument.
Wenn du neue Komponenten baust, kannst du einmal kurz checken:

1. Hat der Inhalt die richtige **Überschriften-Hierarchie**?
2. Gibt es ein sinnvolles **Landmark** (section, main, nav, footer)?
3. Sind alle interaktiven Elemente mit Tastatur bedienbar?
4. Haben Bilder, Links, Buttons sinnvolle Labels / `alt`-Texte?

Wenn du magst, können wir als nächsten Schritt mal gezielt ein Tool wie Axe / Lighthouse / WAVE virtuell „simulieren“ und auf Basis deiner Strukturen eine kleine Liste von „Low hanging fruits“ für BFSG-Niveau zusammenstellen 🍇
