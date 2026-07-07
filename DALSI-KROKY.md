# Další kroky — BWS RENOVA RAIL web

> Stav k 7. 7. 2026: Kompletní SEO hotové a nasazené na https://bws-web-delta.vercel.app
> (meta tagy, strukturovaná data, FAQ sekce, robots.txt, sitemap.xml, llms.txt, favicony, OG obrázek, cache/security hlavičky).
> Tento soubor je checklist toho, co zbývá. Postup výměny domény je v [README.md](README.md).

## 1. Google Search Console (GSC) — priorita ⭐

- [ ] Na https://search.google.com/search-console přidat majetek typu **URL prefix**: `https://bws-web-delta.vercel.app/`
- [ ] Zvolit ověření přes **HTML tag** → zkopírovat hodnotu `content` z ověřovací meta značky a **poslat Claudovi** (vloží ji do obou HTML souborů)
- [ ] Po ověření odeslat sitemapu: `https://bws-web-delta.vercel.app/sitemap.xml`
- [ ] Požádat o indexaci hlavní stránky (Kontrola URL → Požádat o indexaci)

## 2. Google Analytics 4 (GA4) — priorita ⭐

- [ ] Na https://analytics.google.com založit účet + službu „BWS RENOVA RAIL", datový tok pro web
- [ ] Zkopírovat **Measurement ID** (formát `G-XXXXXXXXXX`) a **poslat Claudovi**
- [ ] Claude vloží gtag snippet vč. **měření kliknutí na telefon** (hlavní konverze webu) a událostí pro FAQ/scroll
- [ ] Propojit GA4 ↔ GSC (Správce → Propojení služeb → Search Console)

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

- [ ] **Provozní doba** (např. Po–Ne 7:00–18:00?) → doplní se `openingHoursSpecification` do strukturovaných dat
- [ ] **E-mail firmy** — web tvrdí „telefonem, SMS nebo e-mailem", ale e-mail nikde není → doplní se do patičky, schématu i llms.txt
- [ ] **Odkazy na sociální sítě / profily** (Facebook, IG, …), pokud existují → do `sameAs`

## 7. Jednorázová kontrola (klikací, 5 minut)

- [ ] https://search.google.com/test/rich-results — vložit URL webu, mělo by projít bez chyb
- [ ] https://validator.schema.org — totéž
- [ ] https://pagespeed.web.dev — orientační kontrola výkonu (mobil)
- [ ] Sdílení na Facebooku/WhatsApp — zkontrolovat, že se ukazuje nový OG obrázek (případně obnovit cache: https://developers.facebook.com/tools/debug/)

## 8. Rozhodnutí klienta

- [ ] **index.html vs. v2.html** — rozhodnout, která verze je finální. Pokud v2, Claude ji povýší na hlavní (převezme obsah, ale zachová SEO hlavičku s indexací; v2 URL zůstane noindex)

## 9. Výhled (nice-to-have, až po bodech 1–5)

- Samostatné landing pages pro nejsilnější kombinace služba+město („Čištění kanalizace Kopřivnice", „Vývoz septiku Rožnov…") — teprve až bude vlastní doména
- Reálné fotky z zakázek (před/po) — silné pro Google profil i web
- Zobrazení recenzí z Google profilu na webu (`aggregateRating` ve schématu — až budou skutečné recenze)

---

## Údržba (průběžně)

- Změna FAQ → upravit **oboje**: viditelnou sekci i `FAQPage` v JSON-LD (musí být 1:1)
- Nová služba → doplnit i do JSON-LD katalogu a `llms.txt`
- Větší změna obsahu → aktualizovat `<lastmod>` v `sitemap.xml`
