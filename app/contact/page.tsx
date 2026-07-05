import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Select from "@/components/Select";
import { college } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Central College Multan — Khakwani House, LMQ Road, opposite Sports Ground. Phone 061-6221002-3.",
};

const details = [
  { label: "Address", value: college.address },
  { label: "Phone", value: college.phone, href: college.phoneHref },
  { label: "Email", value: college.email, href: `mailto:${college.email}` },
  { label: "Availability", value: college.hours },
];

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
                        <a href={d.href} className="transition-colors hover:text-gold-700">
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

          {/* form (frontend only) */}
          <Reveal delay={120}>
            <form
              className="rounded-3xl border border-mist-deep/70 bg-paper p-7 sm:p-9"
              aria-label="Contact form"
            >
              <p className="eyebrow">Get in touch</p>
              <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-navy-900">
                Send us a message
              </h2>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.1em] text-ink-soft">
                    Full name
                  </span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-mist-deep bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-mute/70 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.1em] text-ink-soft">
                    Phone or email
                  </span>
                  <input
                    type="text"
                    name="contact"
                    autoComplete="email"
                    placeholder="How do we reach you?"
                    className="w-full rounded-xl border border-mist-deep bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-mute/70 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.1em] text-ink-soft">
                    I&rsquo;m interested in
                  </span>
                  <Select
                    name="interest"
                    placeholder="Choose a program…"
                    options={[
                      "Intermediate (F.Sc. / ICS / I.Com.)",
                      "Bachelors (B.Sc. / B.Com.)",
                      "Masters (M.Com. / MBA)",
                      "LL.B. (Central Law College)",
                      "Short courses (E-Learn)",
                      "Something else",
                    ]}
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.1em] text-ink-soft">
                    Message
                  </span>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us what you'd like to know…"
                    className="w-full resize-y rounded-xl border border-mist-deep bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-mute/70 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25"
                  />
                </label>
              </div>

              <button
                type="button"
                title="Demo form — submissions are not wired up yet"
                className="mt-7 w-full rounded-full bg-navy-900 px-7 py-3.5 text-sm font-bold text-cream transition-colors hover:bg-navy-800 sm:w-auto"
              >
                Send Message
              </button>
              <p className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-ink-mute">
                Demo form — not yet connected
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </>
  );
}
