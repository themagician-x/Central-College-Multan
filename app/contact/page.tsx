import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { college } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Central College Multan — Khakwani House, LMQ Road, opposite Sports Ground. Phone 061-6221002-3.",
};

/**
 * Reference detail only. Phone, email and directions live in the card beside
 * this as actions you can actually tap, so repeating them here would just be
 * the same information twice.
 */
const details = [
  { label: "Address", value: college.address, href: undefined },
  { label: "Availability", value: college.hours, href: undefined },
];

function Action({
  href,
  label,
  value,
  icon,
  external,
  primary,
}: {
  href: string;
  label: string;
  value: string;
  icon: React.ReactNode;
  external?: boolean;
  primary?: boolean;
}) {
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        className={`group flex items-center gap-4 rounded-2xl border px-5 py-4 transition-colors ${
          primary
            ? "border-navy-900 bg-navy-900 text-cream hover:bg-navy-800"
            : "border-mist-deep bg-cream hover:border-navy-600"
        }`}
      >
        <span
          className={`flex h-10 w-10 flex-none items-center justify-center rounded-xl ${
            primary ? "bg-cream/15 text-gold-400" : "bg-navy-100/60 text-navy-800"
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {icon}
          </svg>
        </span>
        <span className="min-w-0 flex-1">
          <span className={`block text-xs font-bold uppercase tracking-[0.1em] ${primary ? "text-navy-100/70" : "text-ink-mute"}`}>
            {label}
          </span>
          <span className={`block truncate text-[0.95rem] font-semibold ${primary ? "text-cream" : "text-navy-900"}`}>
            {value}
          </span>
        </span>
        <span aria-hidden="true" className={`flex-none transition-transform group-hover:translate-x-0.5 ${primary ? "text-gold-400" : "text-ink-mute"}`}>
          →
        </span>
      </a>
    </li>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Come say salaam."
        lede="The front office is open six days a week — walk in, call, or write to us."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* details */}
          <Reveal>
            <div>
              <p className="eyebrow">Contact info</p>
              <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">
                Khakwani House, LMQ Road
              </h2>
              <dl className="mt-8 space-y-6">
                {details.map((d) => (
                  <div key={d.label} className="border-l-2 border-gold-500/60 pl-5">
                    <dt className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-mute">
                      {d.label}
                    </dt>
                    <dd className="mt-1 text-[0.95rem] font-semibold text-navy-900">
                      {d.href ? (
                        <a
                          href={d.href}
                          className="-my-1.5 inline-block break-words py-2 transition-colors hover:text-gold-700"
                        >
                          {d.value}
                        </a>
                      ) : (
                        d.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10 rounded-2xl bg-mist/70 p-5 text-sm leading-relaxed text-ink-soft">
                <strong className="text-navy-900">Finding us:</strong>{" "}
                we&rsquo;re directly opposite the Sports Ground on LMQ Road —
                every rickshaw driver in Multan knows the spot.
              </div>
            </div>
          </Reveal>

          {/* direct ways to reach the office — every one of these works */}
          <Reveal delay={120}>
            <div className="rounded-3xl border border-mist-deep/70 bg-paper p-7 sm:p-9">
              <p className="eyebrow">Get in touch</p>
              <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-navy-900">
                Reach us directly
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                The quickest answer comes from the front office. Call during
                opening hours and someone will pick up.
              </p>

              <ul className="mt-8 space-y-3">
                <Action
                  href={college.phoneHref}
                  label="Call the office"
                  value={college.phone}
                  icon={
                    <path d="M6.6 3h2.3l1.4 3.6-1.8 1.3a11 11 0 0 0 5.6 5.6l1.3-1.8L19 13.1v2.3a2 2 0 0 1-2.2 2A15.6 15.6 0 0 1 4.7 5.2 2 2 0 0 1 6.6 3Z" />
                  }
                  primary
                />
                <Action
                  href={`mailto:${college.email}`}
                  label="Send an email"
                  value={college.email}
                  icon={
                    <>
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3.5 7 8.5 6 8.5-6" />
                    </>
                  }
                />
                <Action
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `Central College Multan, ${college.address}`
                  )}`}
                  label="Get directions"
                  value="Khakwani House, LMQ Road"
                  external
                  icon={
                    <>
                      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
                      <circle cx="12" cy="10" r="2.6" />
                    </>
                  }
                />
              </ul>

              <div className="mt-8 rounded-2xl bg-mist/70 p-5 text-sm leading-relaxed text-ink-soft">
                <strong className="text-navy-900">Or just walk in.</strong> No
                appointment needed — bring your documents and someone at the
                front office will take you through admissions.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
