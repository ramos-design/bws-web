# Další kroky — BWS RENOVA RAIL web

> Stav k 7. 7. 2026: Kompletní SEO hotové a nasazené na https://bws-web-delta.vercel.app
> (meta tagy, strukturovaná data, FAQ sekce, robots.txt, sitemap.xml, llms.txt, favicony, OG obrázek, cache/security hlavičky).
> Tento soubor je checklist toho, co zbývá. Postup výměny domény je v [README.md](README.md).

## 1. Google Search Console (GSC) — priorita ⭐

- [x] Majetek přidán do GSC
- [x] **Ověřeno přes Google Analytics** (ne HTML tagem) — díky GA4 tagu na webu. Do HTML se tedy nic vkládat nemusí.
- [ ] Odeslat sitemapu v GSC: `https://bws-web-delta.vercel.app/sitemap.xml` (Sitemapy → vložit `sitemap.xml` → Odeslat). Sitemapa je živá (HTTP 200).
- [ ] Požádat o indexaci hlavní stránky (Kontrola URL → vložit `https://bws-web-delta.vercel.app/` → Požádat o indexaci)

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

## 5. Vlastní doména (např. bwsrenova.cz)

- [ ] Koupit doménu (Wedos, Forpsi, …)
- [ ] Přidat ji ve Vercelu: projekt `bws-web` → Settings → Domains
- [ ] Provést výměnu URL v kódu podle checklistu v [README.md](README.md) (hromadně nahradit `bws-web-delta.vercel.app`)
- [ ] V GSC přidat nový majetek pro novou doménu + znovu odeslat sitemapu
- [ ] Aktualizovat URL v Google Business Profilu a na Firmy.cz

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
