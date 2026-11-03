# Open questions

_Also checked harleystreetaesthetic.co.uk on 2 Nov 2026 (see research.md §9). Main-site footer links to Privacy Policy and Terms are broken (`#`), worth fixing there._

Updated 2 November 2026 after reading the company Copilot. Everything still open is shown on the site as an amber `[TBC: …]` placeholder, or left out. Run `npm run check:tbc` for the live list.

## Biggest gap
1. **There's no hair loss playbook in the Harley Street Aesthetics Copilot workspace.** The only one is "Non-Surgical Hair Rejuvenation" in the **Harley Street Medics** workspace (sources dated Mar and Jul 2026). Per your brief I've treated that as outdated. Its treatment list matches your current Facebook posts, so I used the list and protocol facts but **not its prices**. Please create or move a hair loss playbook into the HSA workspace and confirm the points below.

## Brand and ownership
2. **Brand:** hair prices live on the **Harley Street Medical Wellness** site, and the Facebook page is Wellness-branded, but this site is built as Harley Street Aesthetics (per the brief). Should the hair site be Wellness-branded instead (logo, domain, phone 020 4628 3137, consultation £295 vs HSA £195)? Previously: the Facebook hair page is called **"Hair Loss Treatment - Harley Street Medical Wellness"**, but its posts say "Harley Street Aesthetics". Which brand is correct?
3. Final subdomain (assumed `hairloss.harleystreetaesthetic.co.uk`).
4. Endolift source code: `Downloads\endolift-site` doesn't exist. If it lives elsewhere, I can align the two codebases.

## Treatments
5. ✅ **Prices now from the Wellness website** (PRP £399 / £1,099; Virtue PRP £599 / £1,599; Autologous Exosomes £599 / £1,599; Virtue Exosomes £799 / £1,899; same in London and Glasgow). Still open: microneedling and LLLT prices. _Previous note:_ Are the Medics playbook prices still right for HSA? (Conditioned Media £399 / £1,099 for 3; Virtue Conditioned Media £499 / £1,299; Exosomes £599 / £1,599; Virtue Exosomes £699 / £1,899.) What do **PRP**, **microneedling** and **low-level laser** cost? None are priced in the playbook.
6. What do the **"Virtue"** versions involve (Virtue PRP / Virtue Exosomes) (Virtue RF microneedling on the scalp?), and which exosome / conditioned media **products** are used, with their UK regulatory status?
7. Microneedling device for the scalp; LLLT device (in clinic or home use) and session frequency.
8. Side effects and aftercare sheets for each treatment (not in the playbook). The site uses general, cautious wording for clinical sign-off.
9. **Hair Rejuvenation IV Drip (£295)** is in the playbook but not on the site, because your own Facebook posts say vitamin drips aren't a proven general treatment for hair loss. Confirm it should stay off.
10. Do we offer trichoscopy, blood tests, DNA testing, mesotherapy for hair, scalp micropigmentation, or prescription treatments? None are documented. Transplants are not offered.
11. Which conditions do we refer (scarring alopecia, alopecia areata, post-chemotherapy, beard/eyebrow), and to whom?
12. ✅ Resolved from the main site: a free 15-minute online video consultation, or £195 for 30 minutes in clinic (redeemable). Confirm both apply to hair loss.

## Booking, enquiries and tracking
13. Booking calendar for hair (the Endolift calendar `link.harleystreetaesthetic.co.uk/widget/bookings/aesthetic-consultant-1` is shown as a fallback, flagged TBC).
14. Enquiry form destination (CRM / webhook / email). Currently Netlify Forms with a TODO.
15. GA4, GTM and Meta Pixel IDs.
16. ✅ Resolved from the main site: a £50 deposit secures all appointments. It is redeemable, and refundable with 48 hours' notice. Confirm this applies to hair.
17. Finance: the FCA credit-broker statement and any representative example needed for Ideal4Finance.

## People, proof and regulation
18. The main site's team (Al-Nakib, Soltanzadeh, Ku, Mohammed, Khan) is now on the hair site. Still open: which of them see hair loss patients, GMC numbers, photo permission, and who "Dr Ahmad" (Facebook hair video) is. He isn't on the main site team page.
19. CQC (London) and Healthcare Improvement Scotland (Glasgow) wording and numbers. Not documented in Copilot.
20. Before/after photos: the playbook says "clinic before/after photos exist for exosome hair regrowth". Do we have written consent for web use?
21. Google rating, review count and link; hair loss testimonials with permission.
22. Opening hours (not in Copilot; the site uses the Endolift site's hours).
23. Company and ICO details in the privacy policy were copied from the Endolift site. Confirm they're still current.
