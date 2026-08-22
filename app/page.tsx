import Link from "next/link";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import Crest from "@/components/Crest";
import { college, stats, programLevels, events } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="crest-lines relative overflow-hidden bg-navy-950">
        {/* brass halo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(201,162,39,0.5) 0%, transparent 65%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
          <Reveal>
            <p className="eyebrow eyebrow-light">
              Est. {college.established} · Multan, Pakistan
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="fluid-hero mt-6 max-w-4xl font-display font-semibold tracking-tight text-cream">
              Let&rsquo;s study{" "}
              <em className="not-italic text-gold-400">together.</em>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-navy-100/80 sm:text-lg">
              Three decades of quality education at an affordable cost — from
              Intermediate to Masters and Law. Not for profit, and proud of it,
              since {college.established}.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/programs"
                className="rounded-full bg-gold-500 px-7 py-3.5 text-sm font-bold text-navy-950 transition-colors hover:bg-gold-400"
              >
                Explore Programs
              </Link>
              <Link
                href="/campus"
                className="rounded-full border border-navy-100/25 px-7 py-3.5 text-sm font-bold text-cream transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                Visit the Campus
              </Link>
            </div>
          </Reveal>
          </div>

          {/* the college seal fills the half the copy leaves open */}
          <Reveal delay={320} className="hidden justify-center lg:flex">
            <Crest />
          </Reveal>
        </div>

        {/* stat band */}
        <div className="relative border-t border-navy-100/10 bg-navy-900/60 backdrop-blur">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-8 px-4 py-10 sm:px-6 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div className="border-l border-gold-500/40 pl-3 sm:pl-4">
                  <p className="font-display text-3xl font-semibold text-gold-400 sm:text-4xl md:text-[2.6rem]">
                    <CountUp value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-navy-100/65">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid items-start gap-12 md:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <div>
              <p className="eyebrow">About the college</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                First in the region.
                <br />
                Leading it ever since.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-5 text-[0.95rem] leading-relaxed text-ink-soft sm:text-base">
              <p>
                Central College was established in {college.established} in
                Multan as a <strong className="text-navy-900">not-for-profit organization</strong>{" "}
                to give aspiring students high-quality education at an
                affordable cost. At its inception it was the first institute —
                public or private — to offer modern courses like{" "}
                <strong className="text-navy-900">B.Sc. in Computer Science</strong>.
              </p>
              <p>
                Since then, the college has maintained unparalleled standards
                and grown into one of Multan&rsquo;s leading institutions, with a
                broad spectrum of programs taught by qualified faculty — across
                the natural sciences, commerce, economics, law, business, and
                the social sciences.
              </p>
              <Link
                href="/campus"
                className="-my-2 inline-flex items-center gap-2 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-gold-700 transition-colors hover:text-navy-800"
              >
                Read our story
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ PROGRAMS ============ */}
      <section className="border-y border-mist-deep/60 bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow">Academic programs</p>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                  Intermediate to Masters — and the Bar.
                </h2>
              </div>
              <Link
                href="/programs"
                className="rounded-full border border-navy-800 px-5 py-2.5 text-sm font-bold text-navy-800 transition-colors hover:bg-navy-900 hover:text-cream"
              >
                All programs
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {programLevels.map((lvl, i) => (
              <Reveal key={lvl.level} delay={i * 90}>
                <Link
                  href="/programs"
                  className="group flex h-full flex-col rounded-2xl border border-mist-deep/70 bg-cream p-6 transition-all hover:-translate-y-1 hover:border-gold-500/60 hover:shadow-[0_16px_40px_rgba(5,31,66,0.10)]"
                >
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-gold-700">
                    {String(i + 1).padStart(2, "0")} — {lvl.programs.length}{" "}
                    {lvl.programs.length === 1 ? "program" : "programs"}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-semibold text-navy-900">
                    {lvl.level.replace(" — Central Law College", "")}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-mute">
                    {lvl.blurb}
                  </p>
                  <p className="mt-5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-navy-700 transition-colors group-hover:text-gold-700">
                    View <span aria-hidden="true">→</span>
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LAW COLLEGE HIGHLIGHT ============ */}
      <section className="crest-lines bg-navy-900">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 sm:py-24 md:grid-cols-[1.2fr_1fr] md:items-center">
          <Reveal>
            <div>
              <p className="eyebrow eyebrow-light">Central Law College</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
                Legal education with a conscience.
              </h2>
              <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-navy-100/80 sm:text-base">
                Established to promote professional, scientific, and technical
                education in South Punjab — providing quality legal education
                and discouraging commercialization in the field. Our graduates
                sit the Punjab Bar Council examination and go on to practice
                across Pakistan.
              </p>
              <Link
                href="/campus"
                className="mt-8 inline-block rounded-full bg-gold-500 px-6 py-3 text-sm font-bold text-navy-950 transition-colors hover:bg-gold-400"
              >
                About the Law College
              </Link>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="grid gap-4">
              <div className="rounded-2xl border border-navy-100/15 bg-navy-950/50 p-6">
                <p className="font-display text-2xl font-semibold text-gold-400">
                  LL.B. — 5 Year
                </p>
                <p className="mt-1.5 text-sm text-navy-100/70">
                  Integrated dual degree: B.A. + LL.B. in one run. Save a year.
                </p>
              </div>
              <div className="rounded-2xl border border-navy-100/15 bg-navy-950/50 p-6">
                <p className="font-display text-2xl font-semibold text-gold-400">
                  LL.B. — 3 Year
                </p>
                <p className="mt-1.5 text-sm text-navy-100/70">
                  The classic graduate route for degree holders.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ CAMPUS LIFE / EVENTS ============ */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Campus life</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
                More than classrooms.
              </h2>
            </div>
            <Link
              href="/events"
              className="rounded-full border border-navy-800 px-5 py-2.5 text-sm font-bold text-navy-800 transition-colors hover:bg-navy-900 hover:text-cream"
            >
              All events
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {events.slice(0, 3).map((e, i) => (
            <Reveal key={e.name} delay={i * 90}>
              <article className="flex h-full flex-col rounded-2xl border border-mist-deep/70 bg-paper p-6">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-gold-700">
                  {e.season}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-navy-900">
                  {e.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-mute">{e.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="border-t border-mist-deep/60 bg-mist/60">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
          <Reveal>
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
              Your story starts at Khakwani House.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-ink-soft">
              Admissions are open for all programs. Visit us on LMQ Road, call{" "}
              <a href={college.phoneHref} className="font-semibold text-navy-800 underline decoration-gold-500 underline-offset-4">
                {college.phone}
              </a>
              , or send us a message.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-navy-900 px-8 py-3.5 text-sm font-bold text-cream transition-colors hover:bg-navy-800"
            >
              Get in Touch
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
