import type { Metadata, Viewport } from "next";
import { Analytics } from "@/components/Analytics";
import { CookieConsent } from "@/components/CookieConsent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LocationProvider, StickyMobileBar } from "@/components/location";
import { JsonLd } from "@/components/ui";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { robotsMeta } from "@/lib/seo";
import { BRAND, SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Hair Loss Treatment London & Glasgow | Harley Street Aesthetics", template: "%s | Harley Street Aesthetics" },
  applicationName: BRAND.siteName,
  robots: robotsMeta,
  formatDetection: { telephone: false },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = { themeColor: "#050505" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB">
      <body>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-gold px-5 py-3 font-semibold text-on-gold focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <LocationProvider>
          <Header />
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
          <StickyMobileBar />
        </LocationProvider>
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
