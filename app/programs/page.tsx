import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { programLevels } from "@/lib/data";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Academic programs at Central College Multan — Intermediate, Bachelors, Masters, and LL.B. through Central Law College.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Academic programs"
        title="Choose your path."
        lede="From F.Sc. and ICS through B.Sc., Commerce, MBA, and the Bar — every program taught by qualified faculty at an affordable cost."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="space-y-20">
          {programLevels.map((lvl, li) => (
            <section key={lvl.level} id={lvl.level.toLowerCase().split(" ")[0]}>
              <Reveal>
                <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 border-b border-mist-deep pb-5">
                  <span className="font-mono text-sm text-gold-700">
                    {String(li + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">
                    {lvl.level}
                  </h2>
                  <p className="text-sm text-ink-mute">{lvl.blurb}</p>
                </div>
              </Reveal>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {lvl.programs.map((p, pi) => (
                  <Reveal key={`${lvl.level}-${p.name}-${pi}`} delay={pi * 60}>
                    <article className="flex h-full flex-col rounded-2xl border border-mist-deep/70 bg-paper p-6 transition-all hover:-translate-y-0.5 hover:border-gold-500/60 hover:shadow-[0_12px_32px_rgba(5,31,66,0.08)]">
                      <h3 className="font-display text-lg font-semibold text-navy-900">
                        {p.name}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                        {p.detail}
                      </p>
                      {p.eligibility && (
                        <p className="mt-4 rounded-lg bg-mist/70 px-3 py-2 font-mono text-[0.68rem] leading-relaxed text-navy-800">
                          Eligibility — {p.eligibility}
                        </p>
                      )}
                    </article>
                  </Reveal>
                ))}
              </div>
            </section>
          ))}
        </div>

        <Reveal>
          <div className="mt-24 rounded-3xl bg-navy-900 px-8 py-12 text-center crest-lines sm:px-12">
            <h2 className="font-display text-2xl font-semibold text-cream sm:text-3xl">
              Not sure which program fits?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-navy-100/75 sm:text-base">
              Come talk to us — our coordinators will walk you through
              eligibility, subjects, and career paths for every program.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-block rounded-full bg-gold-500 px-7 py-3 text-sm font-bold text-navy-950 transition-colors hover:bg-gold-400"
            >
              Talk to Admissions
            </Link>
          </div>
        </Reveal>
      </div>
    </>
  );
}
