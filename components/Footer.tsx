import Link from "next/link";
import Image from "next/image";
import { college, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="crest-lines bg-navy-950 text-navy-100/75">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* identity */}
          <div>
            <div className="flex items-center gap-3.5">
              <span className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-cream p-2 shadow-sm">
                <Image
                  src="/central-logo-mark.png"
                  alt="Central College logo"
                  width={44}
                  height={44}
                  className="h-full w-full object-contain"
                />
              </span>
              <div className="leading-tight">
                <p className="font-display text-lg font-semibold text-cream">
                  {college.name}
                </p>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-navy-100/60">
                  Est. {college.established} · Not for profit
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Quality education at an affordable cost — from Intermediate to
              Masters and Law, taught by qualified faculty in the heart of
              Multan since {college.established}.
            </p>
          </div>

          {/* explore */}
          <nav aria-label="Footer">
            <p className="eyebrow eyebrow-light mb-4">Explore</p>
            <ul className="space-y-2.5 text-sm">
              {navLinks.slice(1).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-gold-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* visit */}
          <div>
            <p className="eyebrow eyebrow-light mb-4">Visit us</p>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li>{college.address}</li>
              <li>
                <a href={college.phoneHref} className="transition-colors hover:text-gold-400">
                  {college.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${college.email}`} className="transition-colors hover:text-gold-400">
                  {college.email}
                </a>
              </li>
              <li className="text-navy-100/55">{college.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-navy-100/10 pt-6 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-navy-100/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {college.name}. All rights reserved.</p>
          <p>Knowledge · Discipline · Character</p>
        </div>
      </div>
    </footer>
  );
}
