"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { college, navLinks } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the drawer on route change
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50">
      {/* utility bar */}
      <div className="bg-navy-950 text-navy-100/80 text-xs">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-1.5 sm:px-6">
          {/* the programs list is the first thing to go on a narrow screen —
              the number beside it is worth more than the detail */}
          <p className="truncate font-mono tracking-wide">
            Admissions open
            <span className="hidden sm:inline">
              {" "}
              — Intermediate, Bachelors, Masters &amp; LL.B.
            </span>
          </p>
          <a
            href={college.phoneHref}
            className="-my-1.5 shrink-0 py-2 font-mono tracking-wide hover:text-gold-400"
          >
            {college.phone}
          </a>
        </div>
      </div>

      {/* main bar */}
      <div
        className={`border-b border-navy-900/10 bg-cream/90 backdrop-blur transition-shadow ${
          scrolled ? "shadow-[0_4px_20px_rgba(5,31,66,0.08)]" : ""
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="group flex items-center gap-2.5">
            <Image
              src="/central-logo-mark.png"
              alt="Central College logo"
              width={44}
              height={44}
              priority
              className="h-11 w-11 object-contain transition-transform group-hover:scale-105"
            />
            <span className="leading-tight">
              <span className="block font-display text-[1.05rem] font-semibold tracking-tight text-navy-900">
                Central College
              </span>
              <span className="block font-mono text-[0.6rem] uppercase tracking-[0.22em] text-ink-mute">
                Multan · Est. {college.established}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {navLinks.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`rounded-full px-3.5 py-2 text-[0.82rem] font-semibold transition-colors ${
                    active
                      ? "bg-navy-900 text-cream"
                      : "text-ink-soft hover:bg-mist hover:text-navy-900"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-3 rounded-full border border-gold-500 bg-gold-500/10 px-4 py-2 text-[0.82rem] font-bold text-gold-700 transition-colors hover:bg-gold-500 hover:text-navy-950"
            >
              Apply Now
            </Link>
          </nav>

          {/* mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full text-navy-900 hover:bg-mist lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        {/* mobile drawer */}
        {open && (
          <nav className="border-t border-navy-900/10 bg-paper px-4 pb-4 pt-2 lg:hidden" aria-label="Mobile">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`block rounded-lg px-3 py-2.5 text-sm font-semibold ${
                  pathname === l.href ? "bg-navy-900 text-cream" : "text-ink-soft hover:bg-mist"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 block rounded-lg bg-gold-500 px-3 py-2.5 text-center text-sm font-bold text-navy-950"
            >
              Apply Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
