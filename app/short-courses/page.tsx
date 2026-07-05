import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { shortCourses } from "@/lib/data";

export const metadata: Metadata = {
  title: "Short Courses",
  description:
    "Professional short courses at Central College Multan — web development, Android, programming, graphic design, languages, and more.",
};

export default function ShortCoursesPage() {
  return (
    <>
      <PageHeader
        eyebrow="E-Learn"
        title="Skills you can use on Monday."
        lede="Short, practical courses in computing, design, marketing, and languages — open to students and the public alike."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shortCourses.map((c, i) => (
            <Reveal key={c.name} delay={(i % 3) * 80}>
              <article className="flex h-full flex-col rounded-2xl border border-mist-deep/70 bg-paper p-6 transition-all hover:-translate-y-1 hover:border-gold-500/60 hover:shadow-[0_16px_40px_rgba(5,31,66,0.10)]">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-display text-xl font-semibold text-navy-900">
                    {c.name}
                  </h2>
                  <span className="flex-none rounded-full bg-mist px-3 py-1 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-navy-800">
                    {c.duration}
                  </span>
                </div>
                <ul className="mt-5 flex-1 space-y-2">
                  {c.topics.map((t) => (
                    <li
                      key={t}
                      className="flex items-baseline gap-2.5 text-sm text-ink-soft"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 flex-none translate-y-[-1px] rounded-full bg-gold-500"
                      />
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 rounded-3xl bg-navy-900 px-8 py-12 text-center crest-lines sm:px-12">
            <h2 className="font-display text-2xl font-semibold text-cream sm:text-3xl">
              New batches start every month.
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-navy-100/75 sm:text-base">
              Class sizes are small and seats fill quickly — reserve yours at
              the front office or drop us a message.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-block rounded-full bg-gold-500 px-7 py-3 text-sm font-bold text-navy-950 transition-colors hover:bg-gold-400"
            >
              Reserve a Seat
            </Link>
          </div>
        </Reveal>
      </div>
    </>
  );
}
