import { experience } from '@/lib/profile'
import { SectionHeading } from './section-heading'

export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading id="experience-heading" eyebrow="Career" title="Experience" />
      <ol className="flex flex-col gap-10 border-l-2 border-primary pl-6 md:pl-10">
        {experience.map((role) => (
          <li key={`${role.org}-${role.dates}`} className="relative">
            <span
              className="absolute -left-[33px] top-2 size-4 rounded-full border-2 border-primary bg-background md:-left-[49px]"
              aria-hidden="true"
            />
            <article>
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <h3 className="text-xl font-semibold text-ink">{role.title}</h3>
                <p className="text-sm font-medium text-muted-foreground">{role.dates}</p>
              </div>
              <p className="mt-1 font-medium text-primary">
                {role.org}
                <span className="text-muted-foreground">{` · ${role.location}`}</span>
              </p>
              {role.note && <p className="mt-1 text-sm italic text-muted-foreground">{role.note}</p>}
              <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 leading-relaxed text-foreground marker:text-primary">
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}
