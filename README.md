# BWS RENOVA RAIL — Onepage web

Statický jednostránkový web pro firmu **BWS RENOVA RAIL s.r.o.** (čištění a údržba — Frenštát pod Radhoštěm a okolí).

## Spuštění lokálně

Stačí otevřít `index.html` v prohlížeči, nebo:

```bash
python3 -m http.server 8000
# pak: http://localhost:8000
```

## Struktura

- `index.html` — obsah a struktura stránky (sekce: hero, služby, proč my, oblast, kontakt)
- `styles.css` — vlastní CSS, mobile-first, brand barvy navy + akcent
- `script.js` — sticky header, smooth scroll, reveal-on-scroll, rok v patičce

## Klíčové konverzní prvky

- Telefonní číslo **731 514 647** ve sticky headeru, hero kartě, sekci kontakt, patičce a plovoucím tlačítku na mobilu
- Všechny tel. odkazy jsou `tel:+420…` (click-to-call)
- Schema.org `LocalBusiness` pro SEO/rich snippety
- Open Graph metadata
- Plovoucí "Zavolat" tlačítko na mobilu

## Obsah

Vychází kompletně z přiloženého letáku — 9 služeb, 11 obcí v okolí, kontaktní číslo.
