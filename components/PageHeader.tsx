/** Dark navy page banner used on every inner page. */
export default function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="crest-lines bg-navy-950">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h1 className="fluid-title mt-4 max-w-3xl font-display font-semibold tracking-tight text-cream">
          {title}
        </h1>
        {lede && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-100/75 sm:text-lg">
            {lede}
          </p>
        )}
      </div>
    </section>
  );
}
