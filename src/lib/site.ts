// Brand, clinic and tracking config. Sources are in docs/research.md.

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://hairloss.harleystreetaesthetic.co.uk").replace(/\/$/, "");

/** Indexing stays off until the site is approved for launch (docs/decisions.md #13). */
export const ALLOW_INDEXING = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

export const BRAND = {
  name: "Harley Street Aesthetics",
  siteName: "Hair Loss Clinic | Harley Street Aesthetics",
  mainSite: "https://harleystreetaesthetic.co.uk",
  allTreatments: "https://harleystreetaesthetic.co.uk/london/treatments",
  finance: "https://harleystreetaesthetic.co.uk/london/finance",
  logo: "https://images-strategyguys.netlify.app/harleystreemedics-image-source-main/hsa%20logo.png",
  email: "hello@harleystreetaesthetic.co.uk",
  // Same calendar as the Endolift site. Whether hair loss uses it is unconfirmed (open-questions #16).
  bookingUrl: "https://link.harleystreetaesthetic.co.uk/widget/bookings/aesthetic-consultant-1",
  whatsapp: { display: "07700 106236", href: "https://wa.me/447700106236", enabled: true },
} as const;

export type ClinicId = "london" | "glasgow";

export type Clinic = {
  id: ClinicId;
  city: string;
  name: string;
  addresses: { line1: string; line2?: string; locality: string; postcode: string; tbc?: string }[];
  phone: { display: string; href: string; e164: string };
  mapsUrl: string;
  mapEmbed: string;
  hours: string;
  geo: { lat: number; lng: number };
};

export const CLINICS: Record<ClinicId, Clinic> = {
  london: {
    id: "london",
    city: "London",
    name: "Harley Street Aesthetics London",
    addresses: [
      { line1: "2 Grosvenor Gardens", line2: "Belgravia", locality: "London", postcode: "SW1W 0DH" },
      {
        line1: "10 Harley Street",
        locality: "London",
        postcode: "W1G 9PF",
        tbc: "confirm hair loss appointments are offered at 10 Harley Street",
      },
    ],
    phone: { display: "020 4628 3165", href: "tel:+442046283165", e164: "+442046283165" },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=2+Grosvenor+Gardens+London+SW1W+0DH",
    mapEmbed: "https://www.google.com/maps?q=2%20Grosvenor%20Gardens%2C%20Belgravia%2C%20London%2C%20SW1W%200DH&output=embed",
    hours: "Tuesday to Friday 9am–7pm, Saturday 9am–6pm",
    geo: { lat: 51.4973, lng: -0.1449 },
  },
  glasgow: {
    id: "glasgow",
    city: "Glasgow",
    name: "Harley Street Aesthetics Glasgow",
    addresses: [{ line1: "5th Floor, Ingram House", line2: "227 Ingram Street", locality: "Glasgow", postcode: "G1 1DA" }],
    phone: { display: "0141 488 8985", href: "tel:+441414888985", e164: "+441414888985" },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ingram+House+227+Ingram+Street+Glasgow+G1+1DA",
    mapEmbed: "https://www.google.com/maps?q=Ingram%20House%2C%20227%20Ingram%20Street%2C%20Glasgow%20G1%201DA&output=embed",
    hours: "Monday to Friday 9am–6pm",
    geo: { lat: 55.8597, lng: -4.2465 },
  },
};

export const CLINIC_LIST = [CLINICS.london, CLINICS.glasgow];

export const TRACKING = {
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID ?? "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
};

export const NAV = [
  { href: "/conditions/", label: "Conditions" },
  { href: "/treatments/", label: "Treatments" },
  { href: "/diagnosis/", label: "Diagnosis" },
  { href: "/which-treatment/", label: "Find your treatment" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/faq/", label: "FAQ" },
  { href: "/about/", label: "Clinics & team" },
] as const;
