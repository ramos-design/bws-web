# BWS RENOVA RAIL — Onepage web

Statický onepage web pro BWS RENOVA RAIL s.r.o. (čištění kanalizace, Frenštát pod Radhoštěm a okolí). Nasazeno na Vercelu — projekt `bws-web`, produkční URL **https://bws-web-delta.vercel.app**.

## Struktura

| Soubor | Účel |
| --- | --- |
| `index.html` | Produkční stránka (indexovaná) |
| `v2.html` | Pracovní verze pro klienta — **noindex** + canonical na root |
| `styles.css`, `script.js` | Styly a chování (header, reveal animace, smooth scroll) |
| `robots.txt` | Povoluje všechny crawlery vč. AI botů, blokuje `/v2.html`, odkazuje sitemapu |
| `sitemap.xml` | Sitemapa (1 URL + obrázky) |
| `llms.txt` | Shrnutí firmy a služeb pro LLM/AI vyhledávače |
| `site.webmanifest` | Web manifest (ikony, theme color) |
| `vercel.json` | Security + cache hlavičky |
| `favicon.svg/.ico`, `apple-touch-icon.png`, `icon-192/512.png` | Ikony (generované z brand marku) |
| `images/og-image.jpg` | OG obrázek 1200×630 pro sdílení |

## SEO — co je nastaveno

- **Meta**: title s klíčovým slovem na začátku, description s CTA, canonical, `robots max-image-preview:large`, geo-meta (CZ-80).
- **Open Graph + Twitter Cards**: kompletní vč. og:image 1200×630.
- **Strukturovaná data** (JSON-LD `@graph`): `LocalBusiness`+`ProfessionalService` (geo, adresa, IČO/DIČ, katalog 9 služeb, oblast působnosti), `WebSite`, `WebPage`, `FAQPage` (7 otázek — texty musí zůstat 1:1 shodné s viditelnou FAQ sekcí!).
- **Výkon**: preload + `fetchpriority=high` na hero obrázku, `width/height` na všech `<img>` (proti CLS), `loading=lazy` mimo viewport, `defer` na skriptu, cache hlavičky.
- **AI/LLM viditelnost**: `llms.txt`, robots.txt vítající AI crawlery, FAQ s přímými odpověďmi, konzistentní NAP (název/adresa/telefon) ve strojově čitelné podobě.

## ⚠️ Při přechodu na vlastní doménu

Až bude vlastní doména (např. `bwsrenova.cz`), je potřeba nahradit `https://bws-web-delta.vercel.app` novou doménou v těchto souborech:

1. `index.html` — canonical, og:url, og:image, twitter:image a všechny URL v JSON-LD
2. `v2.html` — totéž
3. `robots.txt` — řádek `Sitemap:`
4. `sitemap.xml` — `<loc>` + image URL
5. `llms.txt` — odkaz na hlavní stránku

Hromadně: najít a nahradit řetězec `bws-web-delta.vercel.app`. Poté v Google Search Console přidat novou doménu a znovu odeslat sitemapu.

## Údržba

- Nová služba / změna textů → aktualizovat i JSON-LD katalog služeb a případně `llms.txt`.
- Změna FAQ → upravit **oboje**: viditelnou sekci i `FAQPage` v JSON-LD (validátor: https://search.google.com/test/rich-results).
- Po větší změně obsahu aktualizovat `<lastmod>` v `sitemap.xml`.
