# Plan — Hair Loss site

## Sitemap (all URLs end with `/`)

| URL | Page | Primary keyword |
|---|---|---|
| `/` | Home | hair loss treatment London & Glasgow |
| `/hair-loss-in-men/` | Hair loss in men | men's hair loss treatment |
| `/hair-loss-in-women/` | Hair loss in women | female hair loss treatment |
| `/conditions/` | All hair loss conditions | types of hair loss |
| `/conditions/male-pattern-hair-loss/` | Male pattern baldness | male pattern baldness treatment |
| `/conditions/female-pattern-hair-loss/` | Female pattern hair loss | female pattern hair loss |
| `/conditions/receding-hairline/` | Receding hairline | receding hairline treatment |
| `/conditions/crown-thinning/` | Crown thinning | thinning crown |
| `/conditions/diffuse-thinning/` | Diffuse thinning | thinning hair treatment |
| `/conditions/alopecia-areata/` | Alopecia areata | alopecia treatment |
| `/conditions/telogen-effluvium/` | Telogen effluvium (stress, illness, post-COVID) | telogen effluvium |
| `/conditions/postpartum-hair-loss/` | Postpartum hair loss | postpartum hair loss |
| `/conditions/menopause-hair-loss/` | Menopause-related hair loss | menopause hair loss |
| `/conditions/traction-alopecia/` | Traction alopecia | traction alopecia |
| `/conditions/scarring-alopecia/` | Scarring alopecia (diagnosis + referral) | scarring alopecia |
| `/conditions/medical-causes/` | Thyroid, deficiencies and other medical causes | hair loss blood test |
| `/conditions/scalp-conditions/` | Dandruff/seborrhoeic dermatitis, scalp psoriasis, itchy or sore scalp | itchy scalp hair loss |
| `/conditions/hair-loss-after-chemotherapy/` | After chemotherapy (assessment + signposting, `[TBC]` support) | hair loss after chemo |
| `/conditions/beard-and-eyebrow-thinning/` | Beard and eyebrow thinning (assessment, `[TBC]` offered) | eyebrow thinning |
| `/treatments/` | All treatments | hair loss treatments |
| `/treatments/prp-hair-treatment/` | PRP | PRP hair treatment London/Glasgow |
| `/treatments/scalp-microneedling/` | Scalp microneedling | scalp microneedling |
| `/treatments/low-level-laser-therapy/` | Low-level laser therapy | laser hair loss treatment |
| `/treatments/exosome-hair-treatment/` | Exosome-based treatment (evidence developing) | exosome hair treatment |
| `/diagnosis/` | Consultation, scalp assessment, blood tests `[TBC]`, prescription treatments wording | hair loss consultation |
| `/which-treatment/` | Guided quiz | which hair loss treatment |
| `/pricing/` | Pricing (all `[TBC]`) | PRP hair cost |
| `/results/` | Results: honest explanation, placeholder until consented photos | |
| `/faq/` | FAQ | |
| `/about/` | Clinics & team | |
| `/london/`, `/glasgow/` | Location pages | hair loss clinic London / Glasgow |
| `/book/` | Book a consultation: booking calendar, phone, email | |
| `/privacy-policy/`, `/cookie-policy/`, `/terms/`, `/medical-disclaimer/` | Legal | |
| `/sitemap.xml`, `/robots.txt` | SEO | |

Not built until confirmed: trichoscopy page, DNA testing, blood test page, transplant/FUE, SMP, mesotherapy, LED.

## Page wireframes (text)

**Home**
1. Hero: eyebrow "Doctor-led hair loss clinic"; H1 "Hair loss treatment in London & Glasgow"; subcopy (cause first, personal plan); CTAs "Book consultation" / "Which treatment is right for me?"; stat strip (Men & women · Diagnosis first · London & Glasgow · Non-surgical options).
2. "Find your hair loss type": pattern picker cards (receding hairline, crown, widening parting, patches, all-over shedding, scalp itch/flaking) → condition pages.
3. Men / women split cards.
4. Conditions grid (all conditions).
5. Treatments grid (4 treatments + consultation).
6. How diagnosis works: 4-step timeline (consultation → scalp assessment → investigations if needed → personal plan and reviews).
7. Results: honest note + placeholder.
8. Team: placeholder cards `[TBC]`.
9. Pricing teaser `[TBC]`.
10. Reviews: placeholder until verified.
11. FAQ (6).
12. Book CTA band + clinics block with switcher.
13. Medical disclaimer aside.

**Men / Women landing**: hero → common patterns (cards linking to conditions) → what may help (treatments) → why diagnosis matters → FAQ → CTA.

**Condition page (template)**: breadcrumb hero (name, summary) → "What you may notice" (symptoms) → "Common causes" → "How we assess it" → "Options we may discuss" (linked treatment cards; or referral panel for referral-only conditions) → "When to see a doctor urgently" note where relevant → related conditions → FAQ → CTA → disclaimer.

**Treatment page (template)**: hero (name, one-line what it is, CTAs) → key facts strip (sessions / time / downtime / price, mostly `[TBC]`) → how it works → who it may suit / may not suit → what to expect on the day → aftercare `[TBC]` → risks and side effects → conditions it's discussed for (links) → FAQ → CTA → disclaimer.

**Diagnosis**: why the cause matters → consultation → scalp assessment → blood tests `[TBC]` → prescription treatments sentence → referral → CTA.

**Quiz**: 5 questions (who, pattern, how long, sudden/patchy/scarring/unwell red flags, goals) → result card with suggested reading and "book a consultation". No storage, no network.

**Pricing**: table of treatments with `[TBC]` prices, consultation `[TBC]`, finance line `[TBC]`, "price confirmed at consultation".

**Book**: hero → embedded booking calendar + side panel with what happens next, contact details and clinic cards. (Updated 4 Nov 2026: the enquiry form was removed; people book directly in the clinic calendar.)

## Menu behaviour (9 Nov 2026)
The header and mobile menu link to sections of the home page: `#conditions`, `#treatments`, `#diagnosis`, `#treatment-finder`, `#results`, `#pricing`, `#faq`, `#team` (the clinic maps sit directly below the team, so one item covers both). From any other page the link returns to the home page and scrolls there. The standalone pages above remain, reached from the cards, buttons and footer, and still listed in the sitemap. The menu highlights whichever section is in view.

## Components
Layout: `UtilityBar`, `Header` (wordmark → main site, nav, `LocationSwitcher`, phone, CTA, `MobileMenu`), `Footer`, `StickyMobileBar`, `CookieConsent`, `Analytics`, `SkipLink`.
Content: `Button`, `Section`, `SectionHeading`, `PageHero` (+ `Breadcrumbs`), `ConditionCard`, `TreatmentCard`, `PatternPicker`, `StepTimeline`, `CheckList`, `FaqAccordion`, `ReviewsCarousel` (renders placeholder when empty), `ResultsPlaceholder`, `TeamPlaceholder`, `CtaBand`, `ClinicCards`, `ClinicTabs`, `Disclaimer`, `Tbc`, `JsonLd`, `EnquiryForm`, `Quiz`, `FollicleArt` (SVG imagery).
Data: `lib/site.ts` (brand, clinics, nav, env), `lib/conditions.ts`, `lib/treatments.ts`, `lib/faqs.ts`, `lib/seo.ts` (metadata builder), `lib/schema.ts` (JSON-LD builders).

## Content rules
- Plain UK English, calm and reassuring, no hype. "May", "can", "for some people"; never "regrow guaranteed", "clinically proven", "best", "permanent".
- No statistics, prices, names or credentials unless sourced. Use `[TBC]`.
- No POM names. Approved sentence only.
- Every page ends with the disclaimer aside; sudden or patchy loss → medical assessment.
- Nothing aimed at under-18s; treatments are for adults 18+.
