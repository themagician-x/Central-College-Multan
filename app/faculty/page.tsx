import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import {
  leadership,
  teachingFaculty,
  supportStaff,
  type FacultyMember,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Faculty",
  description:
    "The faculty of Central College Multan — leadership, teaching staff, and support staff.",
};

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function FacultyCard({ m, featured = false }: { m: FacultyMember; featured?: boolean }) {
  return (
    <article
      className={`flex h-full items-start gap-4 rounded-2xl border p-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(5,31,66,0.08)] ${
        featured
          ? "border-gold-500/40 bg-paper hover:border-gold-500"
          : "border-mist-deep/70 bg-paper hover:border-gold-500/60"
      }`}
    >
      <span
        aria-hidden="true"
        className={`flex h-12 w-12 flex-none items-center justify-center rounded-full font-display text-sm font-semibold ${
          featured
            ? "bg-navy-900 text-gold-400"
            : "bg-mist text-navy-800"
        }`}
      >
        {initials(m.name)}
      </span>
      <div className="min-w-0">
        <h3 className="font-display text-base font-semibold leading-snug text-navy-900">
          {m.name}
        </h3>
        <p className="mt-0.5 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-gold-700">
          {m.role}
        </p>
        {(m.qualification || m.specialization) && (
          <p className="mt-1.5 text-xs leading-relaxed text-ink-mute">
            {[m.qualification, m.specialization && `Specialization: ${m.specialization}`]
              .filter(Boolean)
              .join(" · ")}
          </p>
        )}
      </div>
    </article>
  );
}

export default function FacultyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our people"
        title="The best tutors in town."
        lede="Teaching shapes the character, caliber, and future of an individual. Meet the people who do it here every day."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        {/* Leadership */}
        <Reveal>
          <p className="eyebrow">Leadership</p>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">
            Administration
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.map((m, i) => (
            <Reveal key={m.name} delay={i * 70}>
              <FacultyCard m={m} featured />
            </Reveal>
          ))}
        </div>

        {/* Teaching */}
        <Reveal>
          <div className="mt-20">
            <p className="eyebrow">Teaching faculty</p>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">
              In the classroom
            </h2>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {teachingFaculty.map((m, i) => (
            <Reveal key={`${m.name}-${i}`} delay={(i % 6) * 60}>
              <FacultyCard m={m} />
            </Reveal>
          ))}
        </div>

        {/* Support */}
        <Reveal>
          <div className="mt-20">
            <p className="eyebrow">Support staff</p>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">
              Behind the scenes
            </h2>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {supportStaff.map((m, i) => (
            <Reveal key={`${m.name}-${i}`} delay={(i % 4) * 60}>
              <FacultyCard m={m} />
            </Reveal>
          ))}
        </div>

        {/* quote */}
        <Reveal>
          <figure className="mx-auto mt-24 max-w-3xl border-l-2 border-gold-500 pl-8">
            <blockquote className="font-display text-xl font-medium leading-relaxed text-navy-900 sm:text-2xl">
              &ldquo;Teaching is a very noble profession that shapes the
              character, caliber, and future of an individual. If people
              remember me as a good teacher, that will be the biggest honour
              for me.&rdquo;
            </blockquote>
            <figcaption className="mt-4 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-mute">
              — The teaching ethos of Central College
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </>
  );
}
