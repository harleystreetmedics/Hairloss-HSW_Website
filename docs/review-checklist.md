# Review checklist

Everything here needs a human check before launch. Run `npm run check` to rebuild and re-run every automated check, and `npm run check:tbc` to list the placeholders still on the site.

## 1. QA results (2 November 2026)

| Check | Result |
|---|---|
| `npm run lint` | 0 errors, 0 warnings |
| `npm run typecheck` | 0 errors |
| `npm run build` | 41 static routes (37 pages + sitemap, robots, 404) |
| `npm run check:links` | All internal links and assets resolve. Phone links: `tel:+442046283165`, `tel:+441414888985`. External: main site, WhatsApp, Google Maps, booking calendar, ico.org.uk |
| `npm run check:compliance` | Pass: no POM names, guarantees, superlatives, time pressure or unsourced statistics |
| Horizontal overflow | None at 360, 390, 768, 820, 1024, 1280, 1360, 1440 and 1920 px on 24 pages |
| Browser tests (`scripts/qa-functional.cjs`) | 17/17 pass: cookie banner, no trackers before consent, consent stored, clinic switcher updates call link and persists, quiz red-flag and standard paths, quiz sends no data, form validation (5 errors), form submission payload, thank-you state, FAQ accordion, client navigation, no console errors |
| Screenshots | `docs/screens/<page>-{mobile,tablet,desktop}.jpg` for 18 pages; brand references in `docs/screens/ref-*.png` |

### Lighthouse (local, compressed server, Lighthouse 12.8)

| Page | Mobile perf / a11y / BP / SEO | Desktop perf / a11y / BP / SEO |
|---|---|---|
| Home | 97 / 100 / 100 / 66* | 100 / 100 / 100 / 66* |
| PRP treatment | 97 / 100 / 100 / 66* | 100 / 100 / 100 / 66* |
| Book | 97 / 100 / 100 / 66* | 100 / 100 / 100 / 66* |
| Quiz | 98 / 100 / 100 / 66* | 100 / 100 / 100 / 66* |
| Female pattern hair loss | 97 / 100 / 100 / 66* | 100 / 100 / 100 / 66* |

\* SEO is 66 only because the preview is deliberately `noindex` and `robots.txt` blocks crawling. With `NEXT_PUBLIC_ALLOW_INDEXING=true` the home, PRP and London pages score **100** for SEO.

### Fixes made during QA
- Header was 32 px too wide at 1280–1440 px: nav labels shortened and the full nav now appears from 1400 px (burger menu below).
- Mobile menu was trapped inside the header (its backdrop blur creates a containing block): now rendered at page level.
- Hero heading reflowed when fonts loaded (CLS 0.16): fonts now load through `next/font/local` with size-matched fallbacks (CLS 0).
- Next 16.4 writes route payloads in nested folders but requests flat file names, which caused 404s in the console: `scripts/flatten-segments.mjs` runs after every build to add the flat copies.

### Sibling comparison
Compared side by side with harleystreetaesthetic.co.uk and the Endolift build: same black/gold palette, Playfair + Montserrat, wordmark, square gradient buttons, pill London/Glasgow switcher, card style, sticky mobile Call / WhatsApp / Book bar, footer layout and cookie banner. Differences on purpose: abstract gold line art instead of photos (no licensed hair imagery yet), and no reviews or before/after section until verified content exists.

## 2. Compliance review (ASA/CAP + POM rules) — please confirm

Automated scan plus a manual read of every page. Things for your compliance lead or prescriber to look at:

1. **Prescription medicines.** No medicine is named anywhere. The only wording is: "Prescription treatments may be discussed at your consultation if clinically appropriate." It appears on treatment, condition, men/women and diagnosis pages. Confirm it's acceptable to show this sentence near treatment content, and that the "Medical treatment" mention in the Facebook posts is aligned.
2. **Exosomes** (`/treatments/exosome-hair-treatment/`). Worded as "a newer approach, evidence is still developing", with an amber evidence notice and no efficacy claims. Exosome products are not licensed medicines in the UK. Please confirm the product, its regulatory status, and whether the page should stay live. **Borderline: highest-risk page.**
3. **PRP, microneedling, LLLT.** Described as "may", "some people", "results vary", with evidence caveats. Check you're comfortable with "Studies have looked mainly at pattern hair loss" (LLLT) and "Research into PRP for hair loss is ongoing" (PRP).
4. **"Doctor-led"** is used in the hero, metadata and location pages. The Facebook bio says "GMC-registered doctors". Confirm that hair consultations are with a doctor; if some are with nurses, change to "clinician-led". **Borderline.**
5. **"Non-surgical"** and "Help thinning hair look fuller" style wording is fine; no "regrow", "cure", "permanent" or time-bound claims are used.
6. **Results page promise:** "No filters, editing or retouching, same lighting and angle; each photo states the treatment and time between photos." Confirm the clinic can meet this before adding photos.
7. **Quiz** never diagnoses. Red-flag answers (sudden, inflamed scalp, unwell, patches) remove treatment suggestions and advise medical assessment / GP / NHS 111.
8. **Under-18s:** treatments stated as 18+ in the disclaimer, footer and form consent; "late teens" appears only in a factual FAQ about pattern hair loss onset.
9. **No time pressure, offers, "was" prices or statistics** anywhere.
10. **Condition content** (15 pages) is general medical information written cautiously. **A clinician should read every condition and treatment page** (`src/lib/conditions.ts`, `src/lib/treatments.ts`), especially "may not suit" lists and side effects, which are general rather than the clinic's own protocols.
11. **Health data:** the form's "main concern" dropdown is health-related. The form tells people not to send detailed medical information; the privacy policy says explicit consent is the basis. Confirm with your DPO.
12. **Privacy policy company details** (Harley Street Medics Ltd, 211B Main Street, Bellshill ML4 1AJ, ICO ZB819731) were copied from the Endolift site's published privacy policy. Confirm they're current.
13. **Opening hours** were taken from the Endolift site (London Tue–Fri 9–7, Sat 9–6; Glasgow Mon–Fri 9–6). Confirm for hair appointments.

## 3. Placeholders to fill (`[TBC]`, amber on the page)

51 unique placeholders. Most will be answered by the Copilot playbooks (see `docs/open-questions.md`).

| Placeholder | Pages |
|---|---|
| appointment length | /treatments/prp-hair-treatment/ |
| blood test price, if offered | /pricing/ |
| clinic aftercare notes for LLLT | /treatments/low-level-laser-therapy/ |
| clinic aftercare sheet for exosome treatment | /treatments/exosome-hair-treatment/ |
| clinic aftercare sheet for PRP | /treatments/prp-hair-treatment/ |
| clinic aftercare sheet for scalp microneedling | /treatments/scalp-microneedling/ |
| confirm every treatment listed is offered at this clinic | /glasgow/, /london/ |
| confirm hair loss appointments are offered at 10 Harley Street | /about/, /book/, /glasgow/ +2 more |
| confirm this calendar is right for hair loss consultations | /book/, /glasgow/, /london/ |
| confirm whether offered (trichoscopy/DNA testing/transplant/SMP) | /diagnosis/, /treatments/ |
| confirm whether offered and the device used (trichoscopy) | /diagnosis/ |
| confirm whether prices are the same at both clinics | /pricing/ |
| confirm who leads hair loss consultations and their registration | / |
| consented before and after photos (pattern hair loss, thinning crown) | /, /results/ |
| consultation fee | /, /pricing/ |
| consultation fee, deposit and cancellation terms for hair loss appointments | /terms/ |
| CQC registration statement (and number) | footer on every page, /london/, /about/ |
| deposit and cancellation policy for hair loss appointments | /pricing/ |
| exosome product name and source | /treatments/exosome-hair-treatment/ |
| exosome treatment price | /pricing/, /treatments/exosome-hair-treatment/ |
| finance provider and terms / FCA status and representative example | /, /pricing/ |
| frequency and course length (LLLT) | /treatments/low-level-laser-therapy/ |
| Healthcare Improvement Scotland registration statement (and number) | footer on every page, /glasgow/, /about/ |
| hosting and form provider | /privacy-policy/ |
| consultation in clinic or online, fee, redeemable? | /diagnosis/, /pricing/ |
| LLLT device (in clinic or home use) | /treatments/low-level-laser-therapy/ |
| LLLT price | /pricing/, /treatments/low-level-laser-therapy/ |
| microneedling device used on the scalp | /treatments/scalp-microneedling/ |
| practitioner names, roles, qualifications, GMC numbers, bios, photo permission | /, /about/ |
| number of sessions (and interval) | PRP, microneedling, exosome pages |
| price per session / course (PRP, microneedling) | /, PRP and microneedling pages, /pricing/ |
| typical downtime | PRP, microneedling, exosome pages |
| verified Google review rating, count and link, plus hair loss testimonials with permission | /, /results/ |
| whether beard and eyebrow treatments are offered | /conditions/beard-and-eyebrow-thinning/ |
| whether post-chemotherapy hair support is offered | /conditions/hair-loss-after-chemotherapy/ |
| which alopecia areata treatments are offered in clinic vs referred | /conditions/alopecia-areata/ |
| which blood tests are offered in clinic, and the price | /diagnosis/, /conditions/medical-causes/ |
| which scalp treatments are offered in clinic | /conditions/scalp-conditions/ |

Where the data lives: prices and facts in `src/lib/treatments.ts` (`facts`, `priceTbc`, `aftercareTbc`), condition notes in `src/lib/conditions.ts` (`offeredTbc`), clinics and contact details in `src/lib/site.ts`, team/reviews/results placeholders in `src/components/sections.tsx`, regulator lines in `src/components/Footer.tsx` and `src/components/LocationPage.tsx`.

## 4. Before launch
- [ ] Fill or remove every `[TBC]` (`npm run check:tbc` must print 0).
- [ ] Clinician sign-off of all condition and treatment copy.
- [ ] Compliance sign-off of items in section 2.
- [ ] Confirm enquiry destination; switch the form from Netlify Forms if needed (`src/components/EnquiryForm.tsx`, TODO comment).
- [ ] Add GA4/GTM/Pixel IDs as environment variables; test that nothing loads before consent.
- [ ] Add real clinic/team photography (WebP/AVIF, with alt text) if wanted.
- [ ] Decide the 301 redirects from the old Harley Street Medics hair pages (`docs/deployment.md`).
- [ ] Set `NEXT_PUBLIC_ALLOW_INDEXING=true` and redeploy only when approved.
