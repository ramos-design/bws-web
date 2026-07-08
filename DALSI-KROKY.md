# Další kroky — BWS RENOVA RAIL web

> Stav k 8. 7. 2026: Kompletní SEO hotové a nasazené na **https://www.bwsrenova.cz** (vlastní doména; stará vercelová URL se 301 přesměrovává sem). GA4 měření aktivní.
> (meta tagy, strukturovaná data, FAQ sekce, robots.txt, sitemap.xml, llms.txt, favicony, OG obrázek, cache/security hlavičky).
> Tento soubor je checklist toho, co zbývá. Postup výměny domény je v [README.md](README.md).

## 1. Google Search Console (GSC) — priorita ⭐

- [x] Majetek přidán do GSC (vercelová URL) + **ověřeno přes Google Analytics** (ne HTML tagem) — díky GA4 tagu na webu.
- [ ] ⭐ **Web přešel na vlastní doménu → v GSC přidat NOVÝ majetek pro `bwsrenova.cz`.** Doporučeno typ **Doména** (`bwsrenova.cz`, ověření přes DNS TXT záznam) — pokryje www i non-www i http/https naráz. Alternativně URL-prefix `https://www.bwsrenova.cz/`.
- [ ] Odeslat sitemapu v novém majetku: `https://www.bwsrenova.cz/sitemap.xml` (Sitemapy → vložit `sitemap.xml` → Odeslat). Sitemapa je živá (HTTP 200).
- [ ] Požádat o indexaci hlavní stránky (Kontrola URL → vložit `https://www.bwsrenova.cz/` → Požádat o indexaci)

## 2. Google Analytics 4 (GA4) — priorita ⭐

- [x] Na https://analytics.google.com založit účet + službu „BWS RENOVA RAIL", datový tok pro web
- [x] Measurement ID `G-NM4WW646PM` dodáno
- [x] gtag snippet vložen do **index.html** (ne do v2 — noindex náhled). Události: `phone_call_click` (hlavní konverze — kliknutí na telefon kdekoli na webu), `faq_open` (rozkliknutí FAQ), `view_contact` (scroll do kontaktu)
- [ ] V GA4 označit `phone_call_click` jako **klíčovou událost** (Správce → Události → přepnout „Označit jako klíčovou událost")
- [ ] Propojit GA4 ↔ GSC — POZOR, jde o samostatný „Odkaz na Search Console" (Správce → Propojení služeb → Odkazy na Search Console → Propojit). Ověření vlastnictví přes GA4 tohle NEudělá; teprve tímto tečou data z vyhledávání do GA4.

## 3. Google Business Profile (firma na Mapách) — velký dopad na lokální SEO

- [ ] Založit profil na https://business.google.com (kategorie např. „Čištění kanalizace")
- [ ] Vyplnit: telefon 731 514 647, oblast působnosti (Frenštát p. R. a okolí), služby, fotky techniky
- [ ] Po zveřejnění **poslat Claudovi URL profilu** → přidá ho do `sameAs` ve strukturovaných datech
- [ ] Začít sbírat recenze zákazníků (odkaz na recenzi posílat SMS po zakázce)

## 4. Seznam — v ČR stále významný zdroj poptávek

- [ ] Registrace na https://www.firmy.cz (zdarma) — stejné údaje jako Google profil
- [ ] Přidat web do Seznam Webmaster: https://reporter.seznam.cz

## 5. Vlastní doména — bwsrenova.cz ✅ nasazeno 8. 7. 2026

- [x] Doména koupena a přidána ve Vercelu (www.bwsrenova.cz servíruje web, non-www → www 308)
- [x] Výměna všech URL v kódu (`bws-web-delta.vercel.app` → `www.bwsrenova.cz`) — 46 výskytů v index/v2/sitemap/robots/llms
- [x] 301 přesměrování staré vercelové URL → nová doména (v `vercel.json`) proti duplicitnímu obsahu
- [ ] V GSC přidat nový majetek pro `bwsrenova.cz` + odeslat sitemapu — viz bod 1
- [ ] Aktualizovat URL v Google Business Profilu a na Firmy.cz (až budou založené — bod 3/4)

## 6. Chybějící data — dodat Claudovi, doplní je do webu

> Rozhodnuto 8. 7. 2026: firma tyto údaje nemá / neřešíme. Nic se nedoplňuje.
- [x] ~~Provozní doba~~ — neřešíme
- [x] ~~E-mail firmy~~ — neexistuje, web zůstává u „telefonem / SMS"
- [x] ~~Sociální sítě~~ — neexistují

## 7. Jednorázová kontrola (klikací, 5 minut)

- [ ] https://search.google.com/test/rich-results — vložit URL webu, mělo by projít bez chyb
- [ ] https://validator.schema.org — totéž
- [ ] https://pagespeed.web.dev — orientační kontrola výkonu (mobil)
- [ ] Sdílení na Facebooku/WhatsApp — zkontrolovat, že se ukazuje nový OG obrázek (případně obnovit cache: https://developers.facebook.com/tools/debug/)

## 8. Rozhodnutí klienta

- [x] **index.html vs. v2.html** — rozhodnuto 8. 7. 2026: **finální je index.html** (titulek „Tlakové čištění a údržba kanalizací" — silnější na SEO). v2.html zůstává jako `noindex` pracovní náhled; jediný rozdíl byl hero titulek.

## 9. Výhled (nice-to-have, až po bodech 1–5)

- Samostatné landing pages pro nejsilnější kombinace služba+město („Čištění kanalizace Kopřivnice", „Vývoz septiku Rožnov…") — teprve až bude vlastní doména
- Reálné fotky z zakázek (před/po) — silné pro Google profil i web
- Zobrazení recenzí z Google profilu na webu (`aggregateRating` ve schématu — až budou skutečné recenze)

---

## Údržba (průběžně)

- Změna FAQ → upravit **oboje**: viditelnou sekci i `FAQPage` v JSON-LD (musí být 1:1)
- Nová služba → doplnit i do JSON-LD katalogu a `llms.txt`
- Větší změna obsahu → aktualizovat `<lastmod>` v `sitemap.xml`
