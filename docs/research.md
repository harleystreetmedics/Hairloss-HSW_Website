# Research — Hair Loss Website (Harley Street Aesthetics)

Researched 2 November 2026, read-only. Source tags used below:

- **[HSA]** harleystreetaesthetic.co.uk (public site, fetched 2 Nov 2026)
- **[END]** The Endolift sibling site. The source folder `C:\Users\Welcome\Downloads\endolift-site` does **not exist** on this PC. I used its built static output in `C:\Users\Welcome\Downloads\endolift-out` (also live on the Hostinger preview `lightyellow-ferret-251293.hostingersite.com`) and the research notes in `C:\Users\Welcome\Desktop\Endolift_Website\endolift-research-findings.md`. Both read-only.
- **[FB]** Meta Business Suite, business portfolio "Harley Street Medics" (id 297402053429019), read-only.
- **[HSM-old]** Old hair pages on harleystreetmedics.clinic. Background only; outdated; nothing copied (no design, phone numbers, prices, branding or external links).
- **[PB]** Company Copilot (copilot-hsm.strategyguys.agency), read 2 November 2026 after you signed in. See §8. Tags: **[PB-HSA]** Harley Street Aesthetics workspace playbooks, **[PB-HSM]** the Harley Street Medics workspace playbook "Non-Surgical Hair Rejuvenation".

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

## 8. Company Copilot findings (2 Nov 2026, read-only chat questions)

I asked the Copilot chat in all three workspaces (Aesthetics, Wellness, Medics), marked as internal questions, not about patients. Then I switched the workspace selector back to Harley Street Aesthetics.

### Where hair loss sits
- **Harley Street Aesthetics workspace:** 15 treatment playbooks (anti-wrinkle, CO2, dark circles, fillers, Endolift, eye rejuvenation, aesthetic analysis app, facials and peels, Nu Sculpt, pigmentation, skin boosters, stretch marks, thread lift, Veluria, Virtue RF). **None covers hair loss.** Virtue RF (with or without exosomes) and the pigmentation protocol are face/neck only. [PB-HSA]
- **Harley Street Wellness workspace:** no hair loss playbook (IV/wellness, blood testing, metabolic, membership, EBOO, etc.).
- **Harley Street Medics workspace:** playbook **"Non-Surgical Hair Rejuvenation"** (`hair-rejuvenation`), sources `hair-restoration.md` (Jul 2026) and `hair-rejuvenation.mdx` (reviewed 10 Mar 2026). ⚠ Per your brief, hair loss listed under Medics is **outdated**; logged in open-questions. I've used its *treatment list and protocol facts*, which match the clinic's current Facebook posts, but **not its prices**.

### From "Non-Surgical Hair Rejuvenation" [PB-HSM]
- **Treatments:** PRP, microneedling, low-level laser therapy, and "regenerative options (cell-conditioned media and exosomes)". "Virtue" versions of conditioned media and exosomes are listed but not defined. Hair Rejuvenation IV Drip (£295) is also listed. **Not included on the website**, because the Facebook posts say "Vitamin drips are not a proven general treatment for hair loss".
- **Audience:** men and women with mild to moderate thinning or early-stage hair loss; people who want a non-surgical option before considering a transplant. Transplants aren't offered.
- **Protocol:** sessions 30–60 minutes; numbing cream before PRP injections; no downtime; typically 3–6 sessions 4–6 weeks apart, with maintenance every few months; full results develop over 3–6 months.
- **Never say:** that treatment will "reverse" baldness or regrow hair in every case; that it works for advanced hair loss; doctors' names from older pages (name only the current team); that the free online consultation is a free doctor appointment or free treatment.
- **Prices (Medics, not used on the site):** Conditioned Media Cell Therapy £399 / £1,099 (3); Virtue Cell Conditioned Media £499 / £1,299; Exosomes Therapy £599 / £1,599; Virtue Exosomes Therapy £699 / £1,899; IV drip £295. No separate PRP, microneedling or LLLT price.
- **Finance:** Klarna, Clearpay and Ideal4Finance, subject to status (18+, UK residents).
- **Before/after:** "Clinic before/after photos exist for exosome hair regrowth". Consent status not stated.
- **Not in the playbook:** devices, side effects, aftercare, consultation fee, clinic locations, practitioners/GMC numbers, referral criteria, CQC/HIS.

### General HSA facts [PB-HSA]
- **Consultation:** free, no-obligation, **online** with the medical team (Endolift, Eye Rejuvenation, Pigmentation, Veluria and other playbooks).
- **10 Harley Street:** under construction and **seeing no patients**. Don't direct appointments there. Removed from the site.
- **Finance:** Klarna (pay in 3), Clearpay (pay in 4), Ideal4Finance (interest-free up to 12 months over £1,000), subject to status. No FCA statement or representative example is documented.
- **Deposit:** only the eye funnel documents £50 (redeemable). Nothing for hair.
- **Cancellation rule:** remote bookings get the statutory 14-day cancellation notice in writing; treatment refunded if the clinician finds the patient unsuitable.
- **Dr Ahmad** fronts the pigmentation adverts. No GMC number, profile or hair loss role documented.
- **Not documented anywhere:** CQC/HIS wording and numbers, practitioner directory and GMC/NMC numbers, booking URL, enquiry destination, GA4/GTM/Pixel IDs, Google rating, opening hours.

## 9. Main site follow-up (2 Nov 2026, at your request)
From harleystreetaesthetic.co.uk, rendered in a headless browser:
- **Consultations** (London pricing → Consultations tab): Online Consultation **Free**, 15 minutes (video assessment, medical history review, preliminary advice, no obligation). In-Clinic Consultation **£195**, 30 minutes (full assessment, bespoke plan, redeemable against treatment). 3D Skin Analysis £50 (not relevant to hair).
- **Deposit:** "A deposit of £50 is required to secure all appointments, which is fully redeemable against your treatment cost." The pricing FAQ says it's refundable if you don't proceed after consultation, provided 48 hours' notice is given.
- **Finance:** Klarna (pay in 3), Clearpay (pay in 4), interest-free finance up to 12 months for purchases over £1,000.
- **Team** (/london/team, /glasgow/team): Mr Khalil Al-Nakib FRCSEd (Consultant Plastic Surgeon, London and Glasgow), Dr Ayda Soltanzadeh (Consultant Dermatologist, London and Glasgow), Dr Nina Ku (Dermatologist), Dr Afraa Mohammed MBBS MD (Dermatologist), Dr Mazhar Khan MBBS MRCGP DRCOG DFFP (Medical Doctor). Described as GMC-registered; no GMC numbers; no hair loss role stated. Bios on the hair site are shortened from these pages.
- **Not on the main site:** hair loss treatments or prices, CQC/HIS wording, GMC numbers, tracking IDs (no GA4, GTM or Meta Pixel requests seen when the page loaded). The footer "Privacy Policy" and "Terms of Service" links point to `#` (broken), and `/privacy-policy` returns 404. Worth fixing on the main site.

## 7. Not available yet (see open-questions.md)
Everything from Copilot: confirmed treatment list, devices/products, sessions, prices, consultation fee, packages, finance, practitioners and GMC numbers, CQC/HIS numbers, testimonials, before/after photos and consent, booking link for hair, enquiry destination, GA4/GTM/Pixel IDs, brand voice notes, competitors.
