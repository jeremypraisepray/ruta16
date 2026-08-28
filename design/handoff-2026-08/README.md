# Handoff: Ruta 16 Website — "Parada Nocturna"

## Overview
Full marketing site for Mariscos Ruta 16 y Más (Sinaloa-style seafood, 2726 Spencer Hwy, Pasadena, TX 77504). Four pages: Home, Menú (interactive), Nosotros, Visítanos. Menu content matches the printed dine-in menu v2 (14 pages, 8 paradas) — source PDF included at assets/menu-v2-source.pdf. Direction: "Parada Nocturna" — dark navy, faithful to the printed menu's road-trip design language (paradas = stops). Target: static site hosted on Vercel.

## About the Design Files
The .dc.html files in this bundle are **design references created in HTML** — prototypes showing intended look and behavior, NOT production code. Recreate them in your chosen framework (Next.js/React recommended for Vercel). Ignore the proprietary scaffolding (`support.js`, `<x-dc>`, `<sc-for>`/`<sc-if>` loops, `{{ }}` holes, `<script data-dc-script>` logic classes) — the markup, inline styles, and data arrays inside are the spec. `sc-for` = map over the array found in the logic class at the bottom of each file.

## Fidelity
**High-fidelity.** Colors, type, spacing, and copy are final. Recreate pixel-perfectly at desktop; responsive behavior below ~1100px is NOT designed — implement sensible stacking (see Responsive notes).

## Design Tokens
- Background navy: #141722 · deeper panel: #0e1119 · sticky nav bg: rgba(20,23,34,.93) + backdrop-blur 8px
- Red (primary accent / CTAs): #e2493b · Blue: #2f6fb5 · Light blue (labels/links): #2f8fd5
- Text: #fff headings · rgba(255,255,255,.6-.8) body · #e8e9ee nav links · hairlines rgba(255,255,255,.08)
- Fonts (Google): 'Barlow Condensed' 500-800 (all headings, nav, prices, labels — always with letter-spacing 1-8px, often uppercase), 'Barlow' 400-700 (body)
- Signature motifs: 6px top+bottom bar split 50/50 red/blue · dashed-ring circles (2px dashed red or blue, alternating) · 2px dotted leader lines rgba(255,255,255,.25) between item name and price · giant ghost numerals (font-size 340-420px, color rgba(255,255,255,.04-.06)) · dot-grid texture overlay on hero (radial-gradient 1px dots, 22px grid, opacity .35) · vertical rail text (writing-mode:vertical-rl, rotated 180°)
- Buttons: square (no radius), Barlow Condensed 700, letter-spacing 2px; filled #e2493b or 2px solid rgba(255,255,255,.7) outline
- Link hover color: #e2493b

## Screens

### 1. Home (Ruta16 Home.dc.html)
- Sticky nav: logo (ruta16.com brand PNG, 58px), center links MENÚ/NOSOTROS/VISÍTANOS (19px, ls 3px), red ORDER ONLINE button → Toast URL.
- Hero: 82vh video (uploads/IMG_6545.mp4, autoplay muted loop playsinline), navy gradient overlay (.55 → .25 → .92 top-to-bottom), dot-grid overlay, vertical rail "PARADA 01 · BIENVENIDOS A LA RUTA" left, ghost "16" bottom-right. Content bottom-left (left:120px): red eyebrow "MARISCOS · SINALOA STYLE · Y MÁS" (20px, ls 8px), headline "LA RUTA / DEL SABOR" (104px, .92 line-height, weight 800), body copy, buttons VER MENÚ (filled) + ORDER ONLINE (outline).
- Parada rail: 8 stops in one row (each flex:1): dashed-ring numbered circle 36px + name 16px + dotted line filler. Links to menu page.
- Top Sellers: eyebrow "PARADA 02 · ZONA CULICHI" (blue), title 56px; 4-col grid of circular photos (aspect-ratio 1, dashed ring alternating red/blue, 10px padding), name + dotted leader + red price row, small desc. Link below: "VER EL MENÚ COMPLETO — 8 PARADAS →".
- Specials strip: 3 equal panels — red MARTES ¡DESTACADO!, blue MIÉRCOLES ¡JALEDAY!, near-black HAPPY HOUR (30px titles).
- Patio: 46% photo left / text right: eyebrow, "LA RUTA DEL SABOR, AL AIRE LIBRE" 48px, address+phone, two hour columns (blue labels DOM–MAR / MIÉ–SÁB), outline button CÓMO LLEGAR → Visítanos.
- Reviews: centered "DICEN EN LA RUTA" 44px, 3 bordered cards (red ★★★★★, quote, blue attribution). Quotes are real customer reviews — keep verbatim.
- Footer: "GRACIAS POR VIAJAR LA RUTA DEL SABOR" + social links (IG r16_pasadena, FB, TikTok @mariscosr16), red/blue bar.

### 2. Menú (Ruta16 Menu.dc.html) — interactive
- Header: eyebrow, "EL MENÚ" 88px, subtitle.
- Sticky tab bar (below nav, top:82px): 9 chips — "★ LA RUTA COMPLETA" + PARADA 01-08. Chip = 26px dashed-ring number + name; active state: border #e2493b, bg rgba(226,73,59,.18); inactive border rgba(255,255,255,.15). Clicking filters to that parada and scrolls to top.
- Section (per parada): ghost numeral top-right; accent eyebrow "PARADA NN · TAG"; name 60px; italic Spanish tagline; groups in 2-col grid (56/72px gaps). Group: title 26px + small note, 2px solid accent underline (alternating red/blue); items = name 20px + dotted leader + red price + optional 14.5px desc.
- When a single parada is active, an "ON THE ROAD AHEAD → PARADA NN · NAME" bordered button navigates to the next parada.
- Footer note: "15% gratuity added after a $100 purchase · $MP = market price · precios sujetos a cambio".
- **All menu data (8 paradas, every group/item/price/desc) is in the `data()` method of the logic class in Ruta16 Menu.dc.html — treat it as the content source of truth.** State: `active: 'all' | '01'..'08'`.

### 3. Nosotros (Ruta16 Nosotros.dc.html)
- 56vh video hero (second video), title "DE CULIACÁN / A SPENCER HWY" 76px.
- Story 2-col: text left (2 paragraphs, Spanish), photo right with offset dashed red frame (border 2px dashed rgba(226,73,59,.5), shifted -14px top/left).
- 3 pillar columns: numeral 60px (red/blue/red), title 26px, text — ZONA CULICHI / FUEGO ABIERTO / EL PATIO.
- "POSTALES DE LA RUTA" photo grid: 4 cols × 2 rows, 280px cells, @R16_PASADENA link.
- CTA: "VEN A RECORRER LA RUTA" + VER MENÚ / VISÍTANOS buttons.

### 4. Visítanos (Ruta16 Visita.dc.html)
- Title "VISÍTANOS" 88px with eyebrow "ÚLTIMA PARADA · PASADENA, TX".
- 2-col: patio photo (with caption card) / info panel: DIRECCIÓN (34px, links to Google Maps), CONTACTO (tel: link), HORARIO (7 rows: day 19px + dotted leader + time; Sun 11-10, Mon 11-12a, Tue 11-10, Wed-Fri 11-12a, Sat 11-2a).
- Specials strip (same 3 panels as Home).
- "SERVIMOS TODA LA ZONA": bordered chips (Pasadena, South Houston, Deer Park, Galena Park, Pearland, La Porte, Clear Lake City, Channelview) + ORDER ONLINE / CÓMO LLEGAR buttons.
- Footer as Home.

## Interactions & Behavior
- Menu tabs: filter sections client-side, scroll to top on change (window.scrollTo, NOT scrollIntoView). "Next parada" button advances the filter.
- Hover: links → #e2493b; menu chips → border rgba(255,255,255,.5).
- Videos: autoplay muted loop playsinline; poster frame recommended for mobile data saver.
- External links (Toast ordering, Google Maps, socials) open in new tab.
- Order Online → https://www.toasttab.com/local/order/mariscos-ruta-16-y-mas-12810-suit-b-gulf-fwy

## Responsive (not designed — implement)
Below ~1100px: nav collapses to hamburger; hero headline ~56px; parada rail horizontal-scrolls; top sellers 2-col; specials stack; 2-col layouts stack; menu groups 1-col; postales 2-col.

## State Management
Menu page only: single `active` string. No fetching — menu data is static (consider a menu.json).

## Menu content — 8 paradas
01 Appetizers (Tranqui · Rapidín · Cócteles · Pa' los Compas) · 02 Zona Culichi (Top Sellers · Ceviches y Tostadas · Aguachiles · Gran Culichi $80) · 03 Ruta Caliente (Caldos · Arroz) · 04 Mariscos (Zarandeados · Salmones · Al Gusto · Empanizados) · 05 Parrilladas (Parrilladas · Especialidades · Molcajetes Calientes) · 06 Y Más (Tacos · Sandwiches · Pastas · Del Grill) · 07 Morritos & Dessert (Morritos · Dessert · Sin Alcohol · Refrescos) · 08 Cheves (De Aquí · De Allá · Buckets · Draft · Extras).

Known deviations from the printed PDF, applied on purpose:
- **Topo Chico $4** (PDF prints $3 — owner confirmed $4).
Everything else matches menu-v2 verbatim.

## Assets (in assets/ folder of this bundle)
- Videos: IMG_6545.mp4 (home hero), v15044gf0000d9vtscnog65sq6ti7o2g.MP4 (nosotros hero)
- Photos (webp): (22) seafood tower, (23) michelada, (24) lobster, (25) pescado zarandeado, (26) patio/parrillada wood-wall, (27) grilled oysters, (29) parrillada boat, (30) fried shrimp, (31) molcajete aguachile, (32) micheladas+piña colada
- Dish cut-outs (transparent PNG, assets/dishes/): aguachile, arroz-mixto, caldo-mariscos, camarones-diabla, coctel-ceviche, empanizados, mar-y-tierra, mar-y-tierra-v, mojarra, nachos, ostiones, parrillada-barco, pasta-alfredo, poboy, salmon, tacos, tostadas-ceviche
- Drink cut-outs (transparent PNG, assets/drinks/): blue-lagoon, carajillo, hurricane-verde, margarita-fresa, michelada, mojito, pina-colada, ponche, semaforo
- Cut-outs are never framed in boxes: place them over a radial glow "plato" (red rgba(226,73,59,.28) or blue rgba(47,143,213,.28) → transparent at 66%), with drop-shadow(0 24px 40px rgba(0,0,0,.55)) and a translateY lift on hover.
- assets/menu-v2-source.pdf — the printed dine-in menu this content came from.
- Logo: hotlinked from https://ruta16.com/pluto-images/brand-logos/3b541599-75f4-485a-85d0-23b15a895e42.png — download and self-host in production.
- Compress videos for web (the originals are phone-quality; target <5MB each, or use a poster + lazy load).

## Files
- Ruta16 Home.dc.html · Ruta16 Menu.dc.html · Ruta16 Nosotros.dc.html · Ruta16 Visita.dc.html (design references)
- assets/notes.md — original research: full menu transcription, brand notes, site facts (hours, socials, reviews)


## Taking this to Claude Code / GitHub / Vercel
The deployed site lives in your repo; this bundle is the updated design spec. Suggested flow:

1. Put this whole folder inside the repo as `design/handoff-2026-08/` (or drop it anywhere Claude Code can read) and commit it on a branch: `git checkout -b menu-v2-update`.
2. Prompt Claude Code with something like:
   > Read design/handoff-2026-08/README.md and "Ruta16 Menu.dc.html". The menu data in that file's `data()` method is the new source of truth — 8 paradas. Update our menu page's data file to match it exactly (names, prices, descriptions, group order, section order), and update the Home page top-sellers/paradas rail and any dish imagery references. Do not change the visual design. Show me a diff of only the content files first.
3. Ask it to extract the menu into a single `data/menu.json` (or `lib/menu.ts`) if it isn't already — future price changes then become a one-file edit.
4. Copy `assets/dishes/` and `assets/drinks/` into `public/images/dishes|drinks/` and point the components at those paths.
5. Push the branch — Vercel builds a preview URL. Review it, then merge to main to promote to production.

Fastest path if you only want the price/content sync: hand Claude Code just `Ruta16 Menu.dc.html` and step 2's prompt.
