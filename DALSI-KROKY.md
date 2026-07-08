# Další kroky — BWS RENOVA RAIL web

> **Stav k 8. 7. 2026** — web běží na vlastní doméně **https://www.bwsrenova.cz**, GA4 měření je aktivní.
> Kompletní SEO nasazené (meta tagy, strukturovaná data, FAQ, robots.txt, sitemap.xml, llms.txt, favicony, OG obrázek, cache/security hlavičky).

---

## 📌 Kde jsme skončili / co řešit příště (rychlý přehled)

**Hotové z naší strany (kód):** doména vyměněná, GA4 vložené, redirecty nastavené, SEO kompletní.

**➡️ Další na řadě — ruční kroky v Google účtech (nevyžadují Clauda):**
1. **GSC — přidat nový majetek pro `bwsrenova.cz`** + odeslat sitemapu + požádat o indexaci (bod 1) ⭐
2. **GA4 — označit `phone_call_click` jako klíčovou událost** + propojit s GSC (bod 2)
3. **Jednorázová klikací kontrola** — rich-results test, schema validátor, PageSpeed (bod 7)

**Později (větší úkoly, potřeba i Claude):**
- Google Business Profile na Mapách → poslat Claudovi URL do `sameAs` (bod 3)
- Firmy.cz + Seznam Webmaster (bod 4)

---

## ✅ HOTOVO

### Vlastní doména — bwsrenova.cz (nasazeno 8. 7. 2026)
- [x] Doména koupena a přidána ve Vercelu — `www.bwsrenova.cz` servíruje web
- [x] Kanonický tvar je **s www**; `bwsrenova.cz` (bez www) → 308 na www
- [x] Výměna všech URL v kódu (`bws-web-delta.vercel.app` → `www.bwsrenova.cz`) — 46 výskytů
- [x] 301/308 přesměrování staré vercelové URL → nová doména (`vercel.json`, vč. zvlášť pravidla pro root `/`) proti duplicitnímu obsahu
- [x] `<lastmod>` v sitemapě aktualizován na 8. 7. 2026

### Google Analytics 4 — kód (bod 2)
- [x] Účet + služba „BWS RENOVA RAIL", Measurement ID `G-NM4WW646PM`
- [x] gtag vložen do **index.html** (ne do v2 — noindex náhled), ověřeno že běží na produkci
- [x] Události: `phone_call_click` (hlavní konverze — kliknutí na telefon kdekoli), `faq_open` (rozkliknutí FAQ), `view_contact` (scroll do kontaktu)

### Google Search Console — částečně (bod 1)
- [x] Majetek pro vercelovou URL přidán + ověřen přes Google Analytics

### Rozhodnutí klienta (bod 8)
- [x] **Finální je index.html** (titulek „Tlakové čištění a údržba kanalizací" — silnější na SEO). v2.html zůstává `noindex` pracovní náhled.

### Chybějící data (bod 6)
- [x] Provozní doba / e-mail / sociální sítě — **firma nemá, neřešíme.** Web zůstává u „telefonem / SMS".

---

## ⏳ ZBÝVÁ

### 1. Google Search Console — nová doména ⭐ (priorita)
- [ ] **Přidat NOVÝ majetek pro `bwsrenova.cz`** — doporučeno typ **Doména** (ověření přes DNS TXT záznam u registrátora); pokryje www i non-www naráz. (Alternativa: URL-prefix `https://www.bwsrenova.cz/`.)
- [ ] Odeslat sitemapu: `https://www.bwsrenova.cz/sitemap.xml` (Sitemapy → vložit `sitemap.xml` → Odeslat)
- [ ] Požádat o indexaci: Kontrola URL → `https://www.bwsrenova.cz/` → Požádat o indexaci
- [ ] Starou vercelovou property lze nechat být — díky 301 redirectu Google váhu přesune sám

### 2. Google Analytics 4 — dokončení (bod 2)
- [ ] Označit `phone_call_click` jako **klíčovou událost** (Správce → Události). Pozn.: událost se v seznamu objeví až poté, co přes ni jednou proteče reálný provoz.
- [ ] Propojit GA4 ↔ GSC — samostatný **„Odkaz na Search Console"** (Správce → Propojení služeb → Odkazy na Search Console → Propojit s novým majetkem). Teprve tímto tečou data z vyhledávání do GA4.

### 3. Google Business Profile (firma na Mapách) — velký dopad na lokální SEO
- [ ] Založit profil na https://business.google.com (kategorie např. „Čištění kanalizace")
- [ ] Vyplnit: telefon 731 514 647, oblast působnosti (Frenštát p. R. a okolí), služby, fotky techniky
- [ ] Po zveřejnění **poslat Claudovi URL profilu** → přidá do `sameAs` ve strukturovaných datech
- [ ] Začít sbírat recenze (odkaz na recenzi posílat SMS po zakázce)

### 4. Seznam — v ČR významný zdroj poptávek
- [ ] Registrace na https://www.firmy.cz (zdarma) — stejné údaje jako Google profil
- [ ] Přidat web do Seznam Webmaster: https://reporter.seznam.cz

### 7. Jednorázová kontrola (klikací, 5 minut)
- [ ] https://search.google.com/test/rich-results — vložit `https://www.bwsrenova.cz/`, mělo by projít bez chyb
- [ ] https://validator.schema.org — totéž
- [ ] https://pagespeed.web.dev — orientační kontrola výkonu (mobil)
- [ ] Sdílení na Facebooku/WhatsApp — zkontrolovat nový OG obrázek (případně obnovit cache: https://developers.facebook.com/tools/debug/)

---

## 9. Výhled (nice-to-have, až po bodech 1–4)

- Samostatné landing pages pro nejsilnější kombinace služba+město („Čištění kanalizace Kopřivnice", „Vývoz septiku Rožnov…")
- Reálné fotky ze zakázek (před/po) — silné pro Google profil i web
- Zobrazení recenzí z Google profilu na webu (`aggregateRating` ve schématu — až budou skutečné recenze)

---

## Údržba (průběžně)

- Změna FAQ → upravit **oboje**: viditelnou sekci i `FAQPage` v JSON-LD (musí být 1:1)
- Nová služba → doplnit i do JSON-LD katalogu a `llms.txt`
- Větší změna obsahu → aktualizovat `<lastmod>` v `sitemap.xml`
- Změna domény → viz postup v [README.md](README.md)
