# Review checklist

_9 Nov 2026: the menu now scrolls to sections of the home page instead of opening separate pages, and the treatment finder quiz is on the home page too. `scripts/qa-anchors.cjs` checks all seven menu items land on the right section; it passes, as do the 17 existing browser tests._

_Lighthouse note (4 Nov): with the booking calendar embedded, Lighthouse reports NO_LCP on the home page, so it shows no performance score. **The live Endolift home page behaves exactly the same way**, so this comes from the booking widget, not from this site. Other pages are unaffected: /book/ scores 98 for performance, and accessibility is 100 throughout. The /book/ best-practices score is 79 only because the embedded calendar sets third-party cookies. If you'd rather have a clean score, the home-page calendar could load on click instead; say the word._

_4 Nov 2026 (latest): free online consultation wording added, and the patient reviews from the Wellness website are now on the home and results pages. **Please check:** those reviews are about IV therapy, metabolic health and general wellness, not hair loss. Each card names the service, and the section says they come from the main website, but hair-specific reviews would be better when available._

_4 Nov 2026: the Harley Street Medical Wellness booking calendar is now embedded on the booking page and home page (Endolift approach). Checks re-run: lint, types, build, links, compliance and 17 browser tests all pass. **Please confirm this calendar is the right one for hair loss consultations.**_

_3 Nov 2026 (later): all placeholders filled from Copilot/websites or removed, as you asked. Checks re-run: lint, types, build, links, compliance (pass), 17 browser tests (pass)._

_3 Nov 2026: **rebranded to Harley Street Medical Wellness** and added PCOS and hair breakage pages. Re-ran lint, typecheck, build, links, compliance scan (pass), 17 browser tests (pass) and Lighthouse (home 96, about 97 mobile performance; 100 accessibility and best practices). Placeholders 36: some HSA facts (free online consultation, deposit, finance, company details) are now TBC for Wellness. Note: the Wellness site's own pages show unverified stats ("10K+ happy clients", "98% satisfaction") and testimonials; none were reused._

_Updated 2 Nov 2026 after the Copilot research: re-ran build, lint, typecheck, links, compliance scan, 17 browser tests and Lighthouse (home 97, PRP 95, pricing 98 mobile performance; 100 accessibility and best practices). Placeholders reduced from 51 to 41; 10 Harley Street removed (not seeing patients). Then, from the main website: medical team, consultation prices (free online / £195 in clinic) and £50 deposit added; placeholders now 35. On 3 Nov, hair prices were added from the Harley Street Medical Wellness pricing page (PRP from £399, autologous exosomes from £599, Virtue options); placeholders now 32._

**Check:** the team, consultation prices and deposit come from the general main-site pages, not hair-specific sources. Confirm they apply to hair loss, and which team members see hair patients.

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
2. **Exosomes and cell-conditioned media** (`/treatments/exosome-hair-treatment/`). Both are in the Medics hair playbook. Worded as "evidence is still developing", with an amber evidence notice and no efficacy claims. Exosome products are not licensed medicines in the UK. Please confirm the product, its regulatory status, and whether the page should stay live. **Borderline: highest-risk page.**
3. **PRP, microneedling, LLLT.** Described as "may", "some people", "results vary", with evidence caveats. Check you're comfortable with "Studies have looked mainly at pattern hair loss" (LLLT) and "Research into PRP for hair loss is ongoing" (PRP).
4. **"Clinician-led"** replaced "doctor-led" everywhere (2 Nov), because Copilot doesn't document who does hair consultations and the hair playbook says not to describe the free online consultation as a doctor appointment. Switch back to "doctor-led" only if every hair consultation is with a GMC-registered doctor.
5. **"Non-surgical"** and "Help thinning hair look fuller" style wording is fine; no "regrow", "cure", "permanent" or time-bound claims are used.
6. **Results page promise:** "No filters, editing or retouching, same lighting and angle; each photo states the treatment and time between photos." Confirm the clinic can meet this before adding photos.
7. **Quiz** never diagnoses. Red-flag answers (sudden, inflamed scalp, unwell, patches) remove treatment suggestions and advise medical assessment / GP / NHS 111.
8. **Under-18s:** treatments stated as 18+ in the disclaimer, footer and form consent; "late teens" appears only in a factual FAQ about pattern hair loss onset.
9. **No time pressure, offers, "was" prices or statistics** anywhere.
10. **Condition content** (15 pages) is general medical information written cautiously. **A clinician should read every condition and treatment page** (`src/lib/conditions.ts`, `src/lib/treatments.ts`), especially "may not suit" lists and side effects, which are general rather than the clinic's own protocols.
11. **Health data:** the form's "main concern" dropdown is health-related. The form tells people not to send detailed medical information; the privacy policy says explicit consent is the basis. Confirm with your DPO.
12. **Privacy policy company details** (Harley Street Medics Ltd, 211B Main Street, Bellshill ML4 1AJ, ICO ZB819731) were copied from the Endolift site's published privacy policy. Confirm they're current.
14. **Copilot "never say" rules** (hair playbook) are now in the compliance scan: no "reverse baldness", "works for advanced hair loss", "regrow hair in every case", or "free doctor appointment / free treatment". "Advanced hair loss" is listed under "may not suit" on every treatment page.
15. **Protocol facts shown on treatment pages** come from the Medics hair playbook (outdated brand, current content): 30–60 minute sessions, usually 3–6 sessions 4–6 weeks apart, maintenance every few months, no downtime, numbing cream before PRP, results over 3–6 months. Confirm they apply at HSA.
16. **IV drip** for hair is in the playbook but left off the site (your Facebook posts say vitamin drips aren't a proven general treatment).
17. **14-day cancellation** wording in the terms comes from the HSA compliance rules in Copilot; the deposit is still TBC.
13. **Opening hours** were taken from the Endolift site (London Tue–Fri 9–7, Sat 9–6; Glasgow Mon–Fri 9–6). Confirm for hair appointments.

## 3. Placeholders: none left (3 Nov 2026)

You asked for every placeholder to be filled from the Copilot or your websites, and removed if neither has it. The Wellness Copilot workspace only documents blood testing, so this was added: comprehensive blood test **£295**, 50+ biomarkers, reviewed by a doctor, results in 24–48 hours (`kb/hsw/blood-testing.md`, 11 Oct 2026). `npm run check:tbc` now reports **0**.

**Removed from the site because neither source has them.** You can add any of these back later by giving me the details:
- CQC (London) and Healthcare Improvement Scotland (Glasgow) registration lines. The footer now says "All treatments are administered by GMC-registered doctors", taken from the Wellness website. The Copilot says not to write "We are CQC registered".
- GMC numbers, and which doctors see hair patients.
- Reviews section (no verified hair reviews) and the before/after gallery (no consented hair photos). The results page keeps the honest explanation.
- Prices for scalp microneedling and low-level laser. Their pages stay, without a price.
- Device names, LLLT session frequency, and the clinic's own aftercare sheets. General aftercare wording stays.
- Description of the "Virtue" options. The prices stay.
- Free online consultation, deposit and cancellation terms, finance, WhatsApp.
- Company name, registered office and ICO number in the privacy policy.
- Trichoscopy, DNA testing, transplant/SMP mentions, and the "offered or referred?" notes on condition pages.

Where the data lives: prices and facts in `src/lib/treatments.ts` (`facts`, `priceTbc`, `aftercareTbc`), condition notes in `src/lib/conditions.ts` (`offeredTbc`), clinics and contact details in `src/lib/site.ts`, team/reviews/results placeholders in `src/components/sections.tsx`, regulator lines in `src/components/Footer.tsx` and `src/components/LocationPage.tsx`.

## 4. Before launch
- [x] Every `[TBC]` filled or removed (`npm run check:tbc` prints 0).
- [ ] Clinician sign-off of all condition and treatment copy.
- [ ] Compliance sign-off of items in section 2.
- [ ] Add GA4/GTM/Pixel IDs as environment variables; test that nothing loads before consent.
- [ ] Add real clinic/team photography (WebP/AVIF, with alt text) if wanted.
- [ ] Decide the 301 redirects from the old Harley Street Medics hair pages (`docs/deployment.md`).
- [ ] Set `NEXT_PUBLIC_ALLOW_INDEXING=true` and redeploy only when approved.
