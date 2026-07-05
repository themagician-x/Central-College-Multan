import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { events } from "@/lib/data";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Life at Central College Multan — Milad, the Sports Gala, annual trips, concerts, and prize distributions.",
};

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Campus life"
        title="A year at Central College."
        lede="The academic calendar is only half the story — here's the other half."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e, i) => (
            <Reveal key={e.name} delay={(i % 3) * 80}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-mist-deep/70 bg-paper p-7 transition-all hover:-translate-y-1 hover:border-gold-500/60 hover:shadow-[0_16px_40px_rgba(5,31,66,0.10)]">
                {/* oversized index numeral */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-3 -top-6 font-display text-[6rem] font-semibold leading-none text-mist/80 transition-colors group-hover:text-gold-100"
                >
                  {i + 1}
                </span>
                <p className="relative font-mono text-[0.65rem] uppercase tracking-[0.18em] text-gold-700">
                  {e.season}
                </p>
                <h2 className="relative mt-3 font-display text-2xl font-semibold text-navy-900">
                  {e.name}
                </h2>
                <p className="relative mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                  {e.note}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
