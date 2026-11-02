"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BRAND, NAV } from "@/lib/site";
import { Icon } from "./Icon";
import { LocationSwitcher } from "./location";

const isActive = (path: string, href: string) => path === href || (href !== "/" && path.startsWith(href));

export function NavLinks() {
  const path = usePathname() ?? "/";
  return (
    <ul className="flex items-center gap-6 text-[0.82rem] font-medium tracking-wide whitespace-nowrap">
      {NAV.map((n) => {
        const active = isActive(path, n.href);
        return (
          <li key={n.href}>
            <Link href={n.href} aria-current={active ? "page" : undefined} className={`hover:text-gold ${active ? "text-gold" : "text-white/85"}`}>
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
  const path = usePathname() ?? "/";
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

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 xl:hidden"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <Icon name={open ? "x" : "menu"} />
      </button>
      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 top-[4.5rem] bottom-0 z-50 overflow-y-auto border-t border-white/10 bg-ink xl:hidden">
          <nav aria-label="Mobile" className="container-x py-6">
            <LocationSwitcher className="md:hidden" />
            <ul className="mt-6 divide-y divide-white/10">
              {[{ href: "/", label: "Home" }, ...NAV, { href: "/book/", label: "Book a consultation" }].map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    onClick={() => setOpen(false)}
                    aria-current={path === n.href ? "page" : undefined}
                    className={`flex min-h-14 items-center justify-between font-serif text-xl ${path === n.href ? "text-gold" : "text-white"}`}
                  >
                    {n.label}
                    <Icon name="chevronRight" className="h-4 w-4 text-gold" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-3 text-sm text-white/75">
              <a href={BRAND.mainSite} className="block hover:text-gold">
                ← Harley Street Aesthetics main site
              </a>
              <a href={BRAND.allTreatments} className="block hover:text-gold">
                All treatments
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
