# Open questions

> **3 Nov 2026:** you asked for unknown items to be left off the site instead of shown as placeholders. Everything below is now **optional**. The site is complete without it, and each item can be added later if you supply it.

_Also checked harleystreetaesthetic.co.uk on 2 Nov 2026 (see research.md §9). Main-site footer links to Privacy Policy and Terms are broken (`#`), worth fixing there._

Updated 2 November 2026 after reading the company Copilot. Everything still open is shown on the site as an amber `[TBC: …]` placeholder, or left out. Run `npm run check:tbc` for the live list.

## Biggest gap
1. **There's no hair loss playbook in the Harley Street Aesthetics Copilot workspace.** The only one is "Non-Surgical Hair Rejuvenation" in the **Harley Street Medics** workspace (sources dated Mar and Jul 2026). Per your brief I've treated that as outdated. Its treatment list matches your current Facebook posts, so I used the list and protocol facts but **not its prices**. Please create or move a hair loss playbook into the HSA workspace and confirm the points below.

## Brand and ownership
2. ✅ **Brand:** you confirmed on 3 Nov that hair loss is a **Harley Street Medical Wellness** service, and the site has been rebranded.
3. Final subdomain (now assumed `hairloss.harleystreetmedicalwellness.co.uk`).
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

## Wellness details still needed (after the rebrand)
24. Is there a **free online consultation** for hair loss? The Wellness site only lists a £295 in-clinic consultation, and says every treatment includes a consultation.
25. **Deposit and cancellation** terms for Wellness (the £50 deposit was a Harley Street Aesthetics rule).
26. **Finance** for Wellness: are Klarna, Clearpay or Ideal4Finance available? Do you need an FCA statement?
27. **WhatsApp:** the Wellness site lists none, so it's hidden on the hair site. Is there a Wellness WhatsApp number?
28. **Company and ICO details** for Harley Street Medical Wellness (privacy policy and footer).
29. The Wellness site's Privacy Policy, Terms and Cookie Policy links go to `#`, and `/privacy-policy` returns a 404. Worth fixing there.

## Booking, enquiries and tracking
13. Booking: the Wellness site has no public calendar, so "Book" uses the enquiry form plus a link to the Wellness contact page. Is there a booking calendar for Wellness?
14. Enquiry form destination (CRM / webhook / email). Currently Netlify Forms with a TODO.
15. GA4, GTM and Meta Pixel IDs.
16. ✅ Resolved from the main site: a £50 deposit secures all appointments. It is redeemable, and refundable with 48 hours' notice. Confirm this applies to hair.
17. Finance: the FCA credit-broker statement and any representative example needed for Ideal4Finance.

## People, proof and regulation
18. The Wellness team (Dr Ahmad, Medical Director; Dr Ayda Soltanzadeh and Dr Mazhar Khan, Wellness Consultants) is now on the hair site, with their photos from the Wellness website. Still open: which of them see hair loss patients, GMC numbers, photo permission, and Dr Ahmad's full name for the profile.
19. CQC (London) and Healthcare Improvement Scotland (Glasgow) wording and numbers. Not documented in Copilot.
20. Before/after photos: the playbook says "clinic before/after photos exist for exosome hair regrowth". Do we have written consent for web use?
21. Google rating, review count and link; hair loss testimonials with permission.
22. ✅ Opening hours now from the Wellness site: Mon–Fri 9am–6pm, Sat 10am–4pm, both clinics.
23. See 28.
