import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { college, lawFaqs, lawFaculty } from "@/lib/data";

export const metadata: Metadata = {
  title: "Campus",
  description:
    "The Central College campus at Khakwani House, LMQ Road, Multan — home to Central College and Central Law College since 1992.",
};

const timeline = [
  {
    year: "1992",
    text: "Central College founded in Multan as a not-for-profit — the first institute in the region, public or private, to offer B.Sc. Computer Science.",
  },
  {
    year: "1992",
    text: "Central Law College established alongside it, to promote professional legal education in South Punjab and discourage commercialization in the field.",
  },
  {
    year: "2000s",
    text: "Programs expand across natural sciences, commerce, economics, business, and the social sciences — Intermediate through Masters.",
  },
  {
    year: "Today",
    text: "One of Multan's leading institutions: 4,000+ success stories, 30+ dedicated faculty, and 35 courses on offer.",
  },
];

export default function CampusPage() {
  return (
    <>
      <PageHeader
        eyebrow="The campus"
        title="Khakwani House, LMQ Road."
        lede="One campus, two institutions — Central College and Central Law College, side by side in the heart of Multan since 1992."
      />

      {/* story / timeline */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div>
              <p className="eyebrow">Our story</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                Three decades of quiet consistency.
              </h2>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-soft">
                The important aim of education is the adjustment of an
                individual to their environment. Everything we&rsquo;ve built
                since {college.established} follows from that idea — quality
                education, affordable cost, no commercialization.
              </p>
            </div>
          </Reveal>

          <div className="space-y-0">
            {timeline.map((t, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="relative flex gap-6 pb-10 last:pb-0">
                  {/* rail */}
                  {i < timeline.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-[2.35rem] top-8 h-full w-px bg-mist-deep"
                    />
                  )}
                  <span className="z-10 flex h-[4.7rem] w-[4.7rem] flex-none items-center justify-center rounded-full border border-gold-500/50 bg-paper font-mono text-xs font-semibold text-gold-700">
                    {t.year}
                  </span>
                  <p className="pt-5 text-sm leading-relaxed text-ink-soft">
                    {t.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* law college */}
      <section className="crest-lines bg-navy-900">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <Reveal>
            <p className="eyebrow eyebrow-light">Central Law College</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
              A first-rate institution for the law.
            </h2>
            <p className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-navy-100/80">
              Everybody should know the law — to understand their society, the
              behavior of its people, and the citizen–government relationship.
              Central Law College was established to serve exactly that end,
              and has been going strong since 1992. Our graduates enjoy
              excellent job placement and consistently perform well in
              competitive examinations.
            </p>
          </Reveal>

          {/* law faculty strip */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {lawFaculty.map((f, i) => (
              <Reveal key={f.name} delay={i * 70}>
                <div className="rounded-2xl border border-navy-100/15 bg-navy-950/50 p-5">
                  <p className="font-display text-lg font-semibold text-cream">
                    {f.name}
                  </p>
                  <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-gold-400">
                    {f.role}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
        <Reveal>
          <p className="eyebrow">Law admissions</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy-900">
            Frequently asked questions
          </h2>
        </Reveal>

        <div className="mt-10 space-y-4">
          {lawFaqs.map((f, i) => (
            <Reveal key={i} delay={i * 60}>
              <details className="group rounded-2xl border border-mist-deep/70 bg-paper open:border-gold-500/50">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-semibold text-navy-900 [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 flex-none items-center justify-center rounded-full border border-mist-deep text-gold-700 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="px-6 pb-6 text-sm leading-relaxed text-ink-soft">
                  {f.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
