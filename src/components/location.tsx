"use client";

import Link from "next/link";
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { BRAND, CLINIC_LIST, CLINICS, type ClinicId } from "@/lib/site";
import { Icon } from "./Icon";

// Remembers the visitor's clinic choice.
const KEY = "hsw-location";

type Ctx = { location: ClinicId; setLocation: (id: ClinicId) => void };
const LocationContext = createContext<Ctx>({ location: "london", setLocation: () => {} });

export function LocationProvider({ children }: { children: ReactNode }) {
  const [location, setLoc] = useState<ClinicId>("london");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(KEY);
      // Syncing from storage after hydration keeps the static HTML identical for every visitor.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (saved === "london" || saved === "glasgow") setLoc(saved);
    } catch {}
  }, []);

  const setLocation = useCallback((id: ClinicId) => {
    setLoc(id);
    try {
      window.localStorage.setItem(KEY, id);
    } catch {}
  }, []);

  return <LocationContext.Provider value={{ location, setLocation }}>{children}</LocationContext.Provider>;
}

export const useLocation = () => useContext(LocationContext);

export function LocationSwitcher({ className = "" }: { className?: string }) {
  const { location, setLocation } = useLocation();
  return (
    <div role="group" aria-label="Choose your clinic" className={`inline-flex rounded-full border border-white/15 bg-white/5 p-1 ${className}`}>
      {CLINIC_LIST.map((c) => {
        const active = c.id === location;
        return (
          <button
            key={c.id}
            type="button"
            aria-pressed={active}
            onClick={() => setLocation(c.id)}
            className={`min-h-9 rounded-full px-3.5 text-xs font-semibold tracking-[0.14em] uppercase transition-colors ${active ? "bg-gold text-on-gold" : "text-white/80 hover:text-white"}`}
          >
            {c.city}
          </button>
        );
      })}
    </div>
  );
}

export function HeaderPhone() {
  const c = CLINICS[useLocation().location];
  return (
    <a href={c.phone.href} className="hidden items-center gap-2 text-sm text-white/85 hover:text-gold 2xl:flex">
      <Icon name="phone" className="h-4 w-4 text-gold" />
      {c.phone.display}
      <span className="sr-only"> ({c.city} clinic)</span>
    </a>
  );
}

export function StickyMobileBar() {
  const c = CLINICS[useLocation().location];
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-ink/95 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-lg items-center gap-2">
        <a
          href={c.phone.href}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-white/25 text-sm font-semibold text-white"
          aria-label={`Call our ${c.city} clinic on ${c.phone.display}`}
        >
          <Icon name="phone" className="h-4 w-4 text-gold" /> Call
        </a>
        {BRAND.whatsapp.enabled && (
          <a
            href={BRAND.whatsapp.href}
            target="_blank"
            rel="noopener"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 text-white"
            aria-label="Message us on WhatsApp (opens in a new tab)"
          >
            <Icon name="whatsapp" className="h-5 w-5 text-gold" />
          </a>
        )}
        <Link
          href="/book/"
          className="gold-gradient flex h-12 flex-[1.6] items-center justify-center text-xs font-semibold tracking-[0.15em] text-on-gold uppercase"
        >
          Book consultation
        </Link>
      </div>
    </div>
  );
}

/** Both clinics side by side, each in a gold-bordered card with its own map,
 *  in the same style as the Harley Street Medics contact page. */
export function ClinicMaps() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {CLINIC_LIST.map((c) => (
        <div key={c.id} className="flex flex-col rounded-2xl border border-gold/40 bg-card p-5 shadow-card sm:p-7">
          <h3 className="font-serif text-2xl text-cream sm:text-3xl">{c.city} location</h3>
          <iframe
            title={`Map of our ${c.city} clinic`}
            src={c.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mt-5 block h-[22rem] w-full rounded-xl border-0"
          />
          <address className="mt-6 space-y-3 text-sm not-italic text-stone">
            {c.addresses.map((a) => (
              <p key={a.line1} className="flex gap-3">
                <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span>
                  {a.line1}
                  {a.line2 && `, ${a.line2}`}
                  <br />
                  {a.locality} {a.postcode}
                </span>
              </p>
            ))}
            <p className="flex gap-3">
              <Icon name="clock" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <span>{c.hours}</span>
            </p>
          </address>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={c.phone.href} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-gold px-5 text-sm font-semibold text-gold hover:bg-gold hover:text-on-gold">
              <Icon name="phone" className="h-4 w-4" /> {c.phone.display}
            </a>
            <a
              href={c.mapsUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-cream/20 px-5 text-sm font-semibold text-cream hover:border-gold hover:text-gold"
            >
              Get directions <Icon name="external" className="h-4 w-4" />
              <span className="sr-only">to our {c.city} clinic (opens Google Maps in a new tab)</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
