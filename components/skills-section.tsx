import { skillGroups, softSkills } from '@/lib/profile'
import { SectionHeading } from './section-heading'

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading id="skills-heading" eyebrow="Toolkit" title="Skills" />
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.name} className="rounded-xl border p-6">
            <h3 className="font-semibold text-ink">{group.name}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-xl border p-6">
        <h3 className="font-semibold text-ink">Professional Strengths</h3>
        <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
          {softSkills.map((skill) => (
            <li key={skill} className="flex items-start gap-2 text-foreground">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
