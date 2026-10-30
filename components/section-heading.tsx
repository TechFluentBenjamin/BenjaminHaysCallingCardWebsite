export function SectionHeading({
  id,
  eyebrow,
  title,
}: {
  id: string
  eyebrow: string
  title: string
}) {
  return (
    <div className="mb-10">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>
      <h2 id={id} className="mt-2 font-serif text-3xl font-semibold text-ink md:text-4xl">
        {title}
      </h2>
    </div>
  )
}
