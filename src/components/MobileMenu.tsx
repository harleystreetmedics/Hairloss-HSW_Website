"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { BRAND, NAV } from "@/lib/site";
import { Icon } from "./Icon";
import { LocationSwitcher } from "./location";

/** Highlights the menu item for the section currently in view on the home page. */
function useCurrentSection() {
  const path = usePathname() ?? "/";
  const [current, setCurrent] = useState<string | null>(null);

  useEffect(() => {
    // Only the home page has these sections; elsewhere the value is ignored (see `active` below).
    if (path !== "/") return;
    const sections = NAV.map((n) => document.getElementById(n.section)).filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;
    const seen = new Map<string, boolean>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) seen.set(entry.target.id, entry.isIntersecting);
        const first = NAV.map((n) => n.section).find((id) => seen.get(id));
        setCurrent(first ?? null);
      },
      // Counts a section as current once its top passes under the header.
      { rootMargin: "-120px 0px -55% 0px" },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [path]);

  return { path, current };
}

export function NavLinks() {
  const { path, current } = useCurrentSection();
  return (
    <ul className="flex items-center gap-5 text-[0.8rem] font-medium tracking-wide whitespace-nowrap 2xl:gap-6">
      {NAV.map((n) => {
        const active = path === "/" && current === n.section;
        return (
          <li key={n.href}>
            <Link href={n.href} aria-current={active ? "true" : undefined} className={`hover:text-gold ${active ? "text-gold" : "text-white/85"}`}>
              {n.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { path, current } = useCurrentSection();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const items = [
    { href: "/", section: "", label: "Home" },
    ...NAV.map((n) => ({ href: n.href, section: n.section as string, label: n.label })),
    { href: "/book/", section: "", label: "Book a consultation" },
  ];

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 min-[1400px]:hidden"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <Icon name={open ? "x" : "menu"} />
      </button>
      {/* Portalled to <body>: the header's backdrop-filter would otherwise trap this fixed panel inside the header box. */}
      {open && createPortal(
        <div id="mobile-menu" className="fixed inset-x-0 top-[4.5rem] bottom-0 lg:top-[6.75rem] z-50 overflow-y-auto border-t border-white/10 bg-ink min-[1400px]:hidden">
          <nav aria-label="Mobile" className="container-x py-6">
            <LocationSwitcher className="md:hidden" />
            <ul className="mt-6 divide-y divide-white/10">
              {items.map((n) => {
                const active = n.section ? path === "/" && current === n.section : path === n.href;
                return (
                  <li key={n.href}>
                    <Link
                      href={n.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "true" : undefined}
                      className={`flex min-h-14 items-center justify-between font-serif text-xl ${active ? "text-gold" : "text-white"}`}
                    >
                      {n.label}
                      <Icon name="chevronRight" className="h-4 w-4 text-gold" />
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-8 space-y-3 text-sm text-white/75">
              <a href={BRAND.mainSite} className="block hover:text-gold">
                ← Harley Street Medical Wellness main site
              </a>
              <a href={BRAND.allTreatments} className="block hover:text-gold">
                All services
              </a>
            </div>
          </nav>
        </div>,
        document.body,
      )}
    </>
  );
}
