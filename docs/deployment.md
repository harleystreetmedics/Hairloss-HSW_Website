# Deployment

> **Nothing has been deployed and no DNS has been changed.** Do these steps only after you approve the site and confirm the final subdomain.

The Endolift project's own `docs/deployment.md` wasn't available (its source folder isn't on this PC), so these steps follow the same pattern: a static export served from a host, plus one CNAME record for the subdomain. Note that the Endolift build is currently on a Hostinger preview (`lightyellow-ferret-251293.hostingersite.com`); Hostinger steps are included below in case you want both sites on the same host.

## DNS facts (looked up read-only, 2 Nov 2026)
- The site is now branded **Harley Street Medical Wellness** (3 Nov 2026), so the suggested subdomain is `hairloss.harleystreetmedicalwellness.co.uk`.
- `harleystreetmedicalwellness.co.uk` nameservers: `dns1.registrar-servers.com`, `dns2.registrar-servers.com`, i.e. **Namecheap** DNS (same as harleystreetaesthetic.co.uk). The root currently points to `159.65.80.228` (DigitalOcean). Records are edited in Namecheap → Domain List → `harleystreetmedicalwellness.co.uk` → Manage → Advanced DNS.
- `hairloss.harleystreetmedicalwellness.co.uk` doesn't exist yet.

## Option A: Netlify (recommended)

1. **Repository.** Already on GitHub: **https://github.com/harleystreetmedics/Hairloss-HSW_Website** (branch `main`). Push later changes with:
   ```bash
   git push -u origin main
   ```
2. **Create the site.** Netlify → Add new site → Import an existing project → GitHub → pick the repo. Build settings come from `netlify.toml` (`npm run build`, publish `out`, Node 22).
3. **Environment variables** (Site configuration → Environment variables):
   - `NEXT_PUBLIC_SITE_URL` = `https://hairloss.harleystreetmedicalwellness.co.uk` (already in `netlify.toml`)
   - `NEXT_PUBLIC_ALLOW_INDEXING` = `false` until launch, then `true` and redeploy
   - `NEXT_PUBLIC_GTM_ID` / `NEXT_PUBLIC_GA4_ID` / `NEXT_PUBLIC_META_PIXEL_ID` when confirmed
5. **Deploy.** Netlify builds automatically. Check the `*.netlify.app` URL before adding the domain.
6. **Custom domain.** Domain management → Add a domain → `hairloss.harleystreetmedicalwellness.co.uk` → choose "Add domain" (external DNS). Netlify shows the target, which will be your site's `<site-name>.netlify.app`.
7. **DNS record at Namecheap** (Advanced DNS → Add new record):

   | Type | Host | Value | TTL |
   |---|---|---|---|
   | CNAME Record | `hairloss` | `<site-name>.netlify.app.` | Automatic |

   Only add this one record. Don't change the root domain, `www` or any MX/TXT records.
8. **SSL/HTTPS.** Netlify provisions a Let's Encrypt certificate automatically once DNS resolves (usually minutes, up to 24 h). Domain management → HTTPS → "Verify DNS configuration" then "Provision certificate" if it hasn't started. Turn on "Force HTTPS".
9. **Confirm:**
   ```bash
   nslookup hairloss.harleystreetmedicalwellness.co.uk
   ```
   ```bash
   curl -I https://hairloss.harleystreetmedicalwellness.co.uk/
   ```
   Expect the CNAME to point at the Netlify site, `HTTP/2 200`, and the padlock in the browser with a certificate for `hairloss.harleystreetmedicalwellness.co.uk`. Check `https://hairloss.harleystreetmedicalwellness.co.uk/robots.txt` says `Disallow: /` until launch.
10. **Launch.** Set `NEXT_PUBLIC_ALLOW_INDEXING=true`, redeploy, check robots.txt now allows crawling, then submit `https://hairloss.harleystreetmedicalwellness.co.uk/sitemap.xml` in Google Search Console (add the subdomain as a property, verified by DNS TXT record).

## Option B: Vercel
1. Import the repo at vercel.com/new. `vercel.json` sets `npm run build` and output `out`. Framework preset: "Other" (it's a static export).
2. Add the same environment variables.
4. Domains → add `hairloss.harleystreetmedicalwellness.co.uk`. Vercel shows a CNAME target (`cname.vercel-dns.com`). Add at Namecheap: CNAME, host `hairloss`, value `cname.vercel-dns.com.`
5. SSL is automatic. Confirm with the same `nslookup` / `curl -I` checks.

## Option C: Hostinger (same host as the Endolift preview)
1. `npm run build`, then upload the contents of `out/` to the site's `public_html` (File Manager or FTP).
2. Hostinger serves `index.html` in each folder, which matches the trailing-slash URLs.
4. Add the subdomain in hPanel, then at Namecheap add the record hPanel gives you (usually a CNAME for `hairloss` to the Hostinger hostname, or an A record to the server IP).
5. Enable the free SSL in hPanel → Security → SSL, then run the same checks.

## Local preview
```bash
npm install
```
```bash
npm run dev
```
Then open http://localhost:3000. For the production build: `npm run build` then `npx serve out`.

## 301 redirect candidates (old Harley Street Medics hair pages) — your decision
These pages on `harleystreetmedics.clinic` (WordPress/Yoast) still describe hair loss treatment under the old brand, with outdated phone numbers, prices and claims. Suggested targets if you decide to redirect them (set up on the Medics WordPress site, e.g. with the Redirection plugin or the server config; not on this site):

| Old URL | Suggested new URL |
|---|---|
| https://harleystreetmedics.clinic/non-surgical-hair-rejuvenation-london/ | https://hairloss.harleystreetmedicalwellness.co.uk/london/ |
| https://harleystreetmedics.clinic/non-surgical-hair-rejuvenation-glasgow/ | https://hairloss.harleystreetmedicalwellness.co.uk/glasgow/ |
| https://harleystreetmedics.clinic/hair-loss-glasgow/ | https://hairloss.harleystreetmedicalwellness.co.uk/glasgow/ |
| https://harleystreetmedics.clinic/hair-loss-solution/ | https://hairloss.harleystreetmedicalwellness.co.uk/ |
| https://harleystreetmedics.clinic/lp-exosome-therapy-for-alopecia/ | https://hairloss.harleystreetmedicalwellness.co.uk/treatments/exosome-hair-treatment/ |
| https://harleystreetmedics.clinic/patient-journey-hair-loss/ | https://hairloss.harleystreetmedicalwellness.co.uk/results/ |
| https://harleystreetmedics.clinic/hair-loss-glasgow-thank-you/ | https://hairloss.harleystreetmedicalwellness.co.uk/book/ |
| https://harleystreetmedics.clinic/lp-exosome-therapy-for-alopecia-london-thank-you/ | https://hairloss.harleystreetmedicalwellness.co.uk/book/ |

Also check the Medics menu link "Non-Surgical Hair Rejuvenation" and any Google Ads or social links pointing at these URLs. The Medics site recently had injected casino spam, so review it before redirecting.
