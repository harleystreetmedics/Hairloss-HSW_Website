# Open questions

Everything here is shown on the site as an amber `[TBC: …]` placeholder or left out until answered. Most need the company Copilot, which needed a sign-in when I tried on 2 Nov 2026.

## Access
1. **Copilot sign-in.** Please sign in to https://copilot-hsm.strategyguys.agency in the Chrome profile Claude is connected to (the one logged in to Meta Business Suite). Then I can fill the items below from the playbooks.
2. **Endolift source code.** `C:\Users\Welcome\Downloads\endolift-site` doesn't exist. I rebuilt the shared components from the built site in `Downloads\endolift-out`. If the source lives elsewhere (another folder, GitHub, Hostinger), tell me and I'll align the two codebases.

## Brand and ownership
3. Hair loss is meant to sit under **Harley Street Aesthetics**, but the Facebook hair page is called **"Hair Loss Treatment - Harley Street Medical Wellness"** (posts say "Harley Street Aesthetics"). Which brand is correct for the page, and should the page be renamed?
4. If Copilot still lists hair loss under Harley Street Medics, that's outdated (per your brief). To check once signed in.
5. Final subdomain (assumed `hairloss.harleystreetaesthetic.co.uk`).

## Treatments (confirm which we actually offer)
6. PRP: kit/system used, sessions, interval, maintenance, numbing, downtime, side effects, aftercare.
7. Scalp microneedling: device (Virtue RF on the scalp, as the old Glasgow page suggested?), sessions, downtime.
8. Low-level laser therapy: in-clinic device or home device? Brand, sessions.
9. Exosomes: product name, source, and its UK regulatory status. The site says "evidence is still developing", as the Facebook posts do. Should it stay on the site at all?
10. Do we offer: trichoscopy (dermatoscope scalp exam), blood tests (which panel, in-house or referred), DNA/genetic hair testing, mesotherapy for hair, LED, hair transplant/FUE, scalp micropigmentation, support after chemotherapy, beard/eyebrow treatments? None are built yet.
11. Which conditions do we treat and which do we refer (e.g. scarring alopecia, hair loss after chemotherapy, suspected thyroid disease)? Where do we refer to (GP, NHS dermatology, named consultant)?

## Prices and booking
12. Consultation: free or paid? Online or in clinic? Fee, and whether it's redeemable.
13. Price per session and course for each treatment; packages; whether London and Glasgow prices match.
14. Finance: provider(s), FCA status, representative example (the main site mentions Klarna, Clearpay and medical loans).
15. Deposit and cancellation terms (main site mentions a £50 deposit; check for hair).
16. Booking: should hair use the same calendar as Endolift (`link.harleystreetaesthetic.co.uk/widget/bookings/aesthetic-consultant-1`) or a hair-specific calendar?
17. Enquiry form destination (GoHighLevel webhook, email or CRM). Currently set up for Netlify Forms with a TODO.
18. Is WhatsApp 07700 106236 the right number for hair enquiries?
19. Is 10 Harley Street open for appointments yet? (The Endolift notes said it was under construction in Oct 2026.)

## People and proof
20. Who treats hair loss? Names, roles, qualifications, GMC numbers, bios, photo permission. ("Dr Ahmad" appears in the Facebook video.)
21. CQC registration (London) and Healthcare Improvement Scotland registration (Glasgow): exact wording and numbers. The Endolift footer wording is ready to reuse once confirmed.
22. Reviews: Google rating, review count and link; any hair loss testimonials with permission.
23. Before/after photos for hair, with written patient consent for web use.
24. Company legal name, registered office, company number, ICO registration number (for privacy policy and footer).

## Tracking
25. GA4, GTM and Meta Pixel IDs (the site reads them from environment variables and loads them only after cookie consent).
