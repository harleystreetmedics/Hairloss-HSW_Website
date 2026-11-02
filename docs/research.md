# Research — Hair Loss Website (Harley Street Aesthetics)

Researched 2 November 2026, read-only. Source tags used below:

- **[HSA]** harleystreetaesthetic.co.uk (public site, fetched 2 Nov 2026)
- **[END]** The Endolift sibling site. The source folder `C:\Users\Welcome\Downloads\endolift-site` does **not exist** on this PC. I used its built static output in `C:\Users\Welcome\Downloads\endolift-out` (also live on the Hostinger preview `lightyellow-ferret-251293.hostingersite.com`) and the research notes in `C:\Users\Welcome\Desktop\Endolift_Website\endolift-research-findings.md`. Both read-only.
- **[FB]** Meta Business Suite, business portfolio "Harley Street Medics" (id 297402053429019), read-only.
- **[HSM-old]** Old hair pages on harleystreetmedics.clinic. Background only; outdated; nothing copied (no design, phone numbers, prices, branding or external links).
- **[PB]** Company Copilot playbooks: **not yet read**. The Copilot showed its sign-in page in the Chrome profile Claude is connected to. Every item that needs Copilot is marked `[TBC]`.

---

## 1. Brand design study [HSA] [END]

Reference screenshots: `docs/screens/ref-hsa-*.png` and `docs/screens/ref-endolift-preview-*.png`.

| Item | Finding |
|---|---|
| Theme | Dark luxury. Near-black backgrounds (#050505 / #0a0a0a), cards #111, cream text #fdfcfb, muted grey #9ca3af |
| Brand gold | #D4AF37, gradient `#d4af37 → #e5c558 → #aa8c2c` on primary buttons; darker gold #aa8c2c |
| Fonts | Headings: Playfair Display (serif, tight tracking). Body/UI: Montserrat. Eyebrows: 12px, semibold, uppercase, 0.22em tracking |
| Buttons | Square-cornered, uppercase, 0.2em tracking, min height 48px. Primary = gold gradient with gold glow shadow; secondary = 1px gold outline |
| Cards | 16px radius, 1px cream/10 border, gold hairline shadow, lift on hover with gold border |
| Header | Sticky, black 95% with blur. Main site: "HSA" mark + location pill + nav + "Book now". Endolift: "HARLEY STREET / — AESTHETICS" wordmark linking to the main site, top utility bar (back to main site, all treatments, email), London/Glasgow pill switcher, phone, gold "Book consultation" |
| Location switcher | Pill toggle London / Glasgow (gold fill on the active city). Main site uses /london and /glasgow paths and a splash "select your nearest clinic" page |
| Footer | Black, 4 columns: brand blurb + "All treatments" link, treatments, explore, both clinics with address and phone, email, WhatsApp; legal row + "Cookie settings" |
| Mobile | Sticky bottom bar: Call, WhatsApp, gold "Book consultation" |
| Image style | Moody clinic interiors and close-up treatment photography, dark overlays |
| Tone of voice | Premium, reassuring, medical-led ("GMC registered", "consultation", "personalised"). The Endolift site toned this down to compliant, plain English |
| Booking flow | Main site: call-back form (name, phone, email, treatment) and contact form. Endolift: embedded booking calendar `https://link.harleystreetaesthetic.co.uk/widget/bookings/aesthetic-consultant-1` plus phone/WhatsApp |
| Logo | `https://images-strategyguys.netlify.app/harleystreemedics-image-source-main/hsa%20logo.png` (used in Endolift schema). Endolift header uses a typographic wordmark instead of the image |
| Finance | Main site: Klarna (pay in 3), Clearpay (pay in 4), medical loans; finance page `https://harleystreetaesthetic.co.uk/london/finance`. Endolift: "0% finance may be available, subject to status" |

**Hair-related pages on the main site: none.** The sitemap (42 URLs) has no hair loss, PRP or scalp pages. "Peel + Mesotherapy" is a skin treatment, not hair. The main site's enquiry dropdowns don't list hair loss.

> ⚠ The main site shows a "Trusted by patients" block with five named reviews (e.g. "Sarah Jenkins, 2 days ago") and "5000+ patients, 4.9/5". These can't be verified, so I didn't reuse any of them.

### Clinics (verified on [HSA] home, contact and footer, 2 Nov 2026)
- **London:** 2 Grosvenor Gardens, London SW1W 0DH and 10 Harley Street, London W1G 9PF. Tel 020 4628 3165. ✅ matches the brief.
- **Glasgow:** 5th Floor, Ingram House, 227 Ingram Street, Glasgow G1 1DA. Tel 0141 488 8985. ✅ matches the brief.
- WhatsApp helpline 07700 106236; email hello@harleystreetaesthetic.co.uk. [HSA]
- Opening hours (from [END] config): London Tue–Fri 9am–7pm, Sat 9am–6pm; Glasgow Mon–Fri 9am–6pm.
- The Endolift notes say not to send patients to 10 Harley Street because it was under construction (Oct 2026) [END/PB]. The new site leads with Grosvenor Gardens and lists Harley Street as a second address flagged `[TBC]`.

### Team on the main site [HSA]
London team page lists Mr Khalil Al-Nakib FRCSEd (Consultant Plastic Surgeon), Dr Ayda Soltanzadeh (Consultant Dermatologist), Dr Nina Ku (Dermatologist), Dr Mazhar Khan (GP), Dr Afraa Mohammed (Dermatologist). **None is described as doing hair loss work, and no GMC numbers are shown.** A "Dr Ahmad" presents the hair loss video on Facebook [FB]. I haven't named any practitioner on the hair site until the clinic confirms who treats hair loss.

---

## 2. Endolift build: what was reused [END]
Stack: Next.js App Router + TypeScript + Tailwind v4, static export with trailing slashes. Design tokens (above). Components: utility bar + header with wordmark, London/Glasgow switcher stored in localStorage, sticky mobile bar, section + heading pattern, cards, FAQ accordion with `<details>`, recovery timeline, before/after slider, booking iframe card, clinic tabs with Google Map, footer, legal pages (`prose-legal`), medical-disclaimer aside, cookie consent (`hsa-cookie-consent` in localStorage; Essential / Analytics / Marketing; GTM/GA4/Meta Pixel load only after consent; IDs from `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_GA4_ID`, `NEXT_PUBLIC_META_PIXEL_ID`). SEO: per-page metadata, canonical, OG/Twitter image 1200×630, sitemap.xml, robots.txt, JSON-LD Organization, WebSite, MedicalClinic+MedicalBusiness per clinic, MedicalProcedure, FAQPage, BreadcrumbList. Preview builds are `noindex, nofollow`.

Footer regulator lines on the Endolift build: "Our London clinic operates from CQC-registered premises, where our doctors hold practising privileges" and "Glasgow: Registered with Healthcare Improvement Scotland as an independent clinic (Harley Street Medics Ltd)". The brief says only state CQC/GMC if Copilot confirms, so the hair site shows these as `[TBC]` until confirmed.

---

## 3. Facebook Business Suite [FB]
- The asset in the brief (1586861314502628) is the **"Endolift - Harley Street Aesthetics"** page, not a hair page.
- The same portfolio has a **"Hair Loss Treatment - Harley Street Medical Wellness"** page (Instagram `hswhairloss01`, public page id 61595334825453). Category: Medical & health. Bio: "Help thinning hair look fuller, without surgery. London & Glasgow | GMC-registered doctors". Cover: "Non-surgical Hair Rejuvenation · Harley Street Medical Wellness · London · Glasgow". 0 followers.
  - ⚠ The page is branded **Medical Wellness**, but its posts say "At Harley Street Aesthetics" and link to the HSA site. Logged in open-questions.
- **Posts (21 Oct–2 Nov 2026):** two reels and a photo. Key wording, which looks compliance-reviewed:
  - "Hair loss needs an individual plan. A changing hairline or increased shedding can have different causes."
  - Options named: **medical treatment, PRP, scalp microneedling and low-level laser therapy**; "We also discuss **exosome-based approaches, where evidence is developing**, and **nutritional support when clinically indicated**. **Vitamin drips are not a proven general treatment for hair loss.**"
  - "Dr Ahmad explains the role of scalp assessment."
  - CTA: "Book your London hair-loss consultation" → https://harleystreetaesthetic.co.uk/london/contact
  - Sign-offs: "Treatment depends on diagnosis. Suitability and results vary." / "Individual assessment required."
- **Ads:** none. **Reviews:** none visible. **Comments:** one comment on the 31 Oct post (not opened in the inbox; content not recorded). No customer questions to analyse yet.
- Imagery: dark and gold typographic cover matching the HSA style. No patient images were opened or downloaded.

---

## 4. Old Harley Street Medics hair pages [HSM-old] (background only)
Pages found in the sitemap: `/non-surgical-hair-rejuvenation-london/`, `/non-surgical-hair-rejuvenation-glasgow/`, `/hair-loss-solution/`, `/hair-loss-glasgow/`, `/lp-exosome-therapy-for-alopecia/`, `/patient-journey-hair-loss/`, plus thank-you pages. Listed in `docs/deployment.md` as 301 candidates.
- Treatments described: PRP, microneedling, low-level laser, exosome therapy (incl. with Virtue RF microneedling in Glasgow), IV drips.
- **Not reused**, because of compliance risk: "Regrow your hair in weeks", "Clinically proven", "UK's leading hair loss experts", "10,000+ successful treatments", "from £399", IV drips for hair, references to medications. These show what to avoid.

---

## 5. Treatments the new site covers
Only treatments named in current HSA-branded hair content [FB]; all need confirmation in Copilot `[TBC]`:

| Treatment | Evidence it's offered | Site status |
|---|---|---|
| Hair loss consultation and scalp assessment | [FB] "scalp assessment", "Book your hair-loss consultation" | Built (Diagnosis page) |
| PRP (platelet-rich plasma) | [FB] | Built |
| Scalp microneedling | [FB] | Built |
| Low-level laser therapy (LLLT) | [FB] | Built |
| Exosome-based scalp treatment | [FB] "where evidence is developing" | Built with cautious wording; flagged in review checklist |
| Prescription treatments | [FB] "medical treatment" | Mentioned only as "may be discussed at your consultation if clinically appropriate". No product names |
| Nutritional support / blood tests | [FB] "when clinically indicated" | Mentioned on Diagnosis page as `[TBC]` |
| Trichoscopy, DNA testing, mesotherapy for hair, LED, FUE/transplant, scalp micropigmentation | No evidence | Not built; listed in open-questions |

## 6. Keywords (to validate with Search Console / Ads data)
Primary: hair loss treatment London, hair loss treatment Glasgow, PRP hair treatment London/Glasgow, female hair loss treatment, alopecia treatment, thinning hair treatment, receding hairline treatment. Secondary (one page each): male pattern baldness treatment, female pattern hair loss, alopecia areata treatment, telogen effluvium, postpartum hair loss, menopause hair loss, traction alopecia, scalp microneedling, low-level laser therapy hair, exosome hair treatment, hair loss consultation. I couldn't access search volume tools, so these are unvalidated.

## 7. Not available yet (see open-questions.md)
Everything from Copilot: confirmed treatment list, devices/products, sessions, prices, consultation fee, packages, finance, practitioners and GMC numbers, CQC/HIS numbers, testimonials, before/after photos and consent, booking link for hair, enquiry destination, GA4/GTM/Pixel IDs, brand voice notes, competitors.
