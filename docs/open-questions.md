# Open questions

Updated 2 November 2026 after reading the company Copilot. Everything still open is shown on the site as an amber `[TBC: …]` placeholder, or left out. Run `npm run check:tbc` for the live list.

## Biggest gap
1. **There's no hair loss playbook in the Harley Street Aesthetics Copilot workspace.** The only one is "Non-Surgical Hair Rejuvenation" in the **Harley Street Medics** workspace (sources dated Mar and Jul 2026). Per your brief I've treated that as outdated. Its treatment list matches your current Facebook posts, so I used the list and protocol facts but **not its prices**. Please create or move a hair loss playbook into the HSA workspace and confirm the points below.

## Brand and ownership
2. The Facebook hair page is called **"Hair Loss Treatment - Harley Street Medical Wellness"**, but its posts say "Harley Street Aesthetics". Which brand is correct?
3. Final subdomain (assumed `hairloss.harleystreetaesthetic.co.uk`).
4. Endolift source code: `Downloads\endolift-site` doesn't exist. If it lives elsewhere, I can align the two codebases.

## Treatments
5. **Prices for HSA.** Are the Medics playbook prices still right for HSA? (Conditioned Media £399 / £1,099 for 3; Virtue Conditioned Media £499 / £1,299; Exosomes £599 / £1,599; Virtue Exosomes £699 / £1,899.) What do **PRP**, **microneedling** and **low-level laser** cost? None are priced in the playbook.
6. What do the **"Virtue"** versions involve (Virtue RF microneedling on the scalp?), and which exosome / conditioned media **products** are used, with their UK regulatory status?
7. Microneedling device for the scalp; LLLT device (in clinic or home use) and session frequency.
8. Side effects and aftercare sheets for each treatment (not in the playbook). The site uses general, cautious wording for clinical sign-off.
9. **Hair Rejuvenation IV Drip (£295)** is in the playbook but not on the site, because your own Facebook posts say vitamin drips aren't a proven general treatment for hair loss. Confirm it should stay off.
10. Do we offer trichoscopy, blood tests, DNA testing, mesotherapy for hair, scalp micropigmentation, or prescription treatments? None are documented. Transplants are not offered.
11. Which conditions do we refer (scarring alopecia, alopecia areata, post-chemotherapy, beard/eyebrow), and to whom?
12. The consultation is free and online. How is the **scalp assessment** done: by video/photos, or in clinic afterwards?

## Booking, enquiries and tracking
13. Booking calendar for hair (the Endolift calendar `link.harleystreetaesthetic.co.uk/widget/bookings/aesthetic-consultant-1` is shown as a fallback, flagged TBC).
14. Enquiry form destination (CRM / webhook / email). Currently Netlify Forms with a TODO.
15. GA4, GTM and Meta Pixel IDs.
16. Deposit amount and cancellation notice period for hair appointments (only the eye funnel documents a £50 deposit).
17. Finance: the FCA credit-broker statement and any representative example needed for Ideal4Finance.

## People, proof and regulation
18. Who does hair loss consultations and treatments? Names, roles, GMC/NMC numbers, bios, photo permission. ("Dr Ahmad" appears in the Facebook hair video, but Copilot only documents him for pigmentation.)
19. CQC (London) and Healthcare Improvement Scotland (Glasgow) wording and numbers. Not documented in Copilot.
20. Before/after photos: the playbook says "clinic before/after photos exist for exosome hair regrowth". Do we have written consent for web use?
21. Google rating, review count and link; hair loss testimonials with permission.
22. Opening hours (not in Copilot; the site uses the Endolift site's hours).
23. Company and ICO details in the privacy policy were copied from the Endolift site. Confirm they're still current.
