import { Award, BookOpen, GraduationCap, Users } from 'lucide-react'
import { certifications, currentStudies, education, membership, publication } from '@/lib/profile'
import { SectionHeading } from './section-heading'

export function CredentialsSection() {
  return (
    <section id="credentials" aria-labelledby="credentials-heading" className="bg-muted">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading id="credentials-heading" eyebrow="Qualifications" title="Credentials" />

        <h3 className="flex items-center gap-2 text-lg font-semibold text-ink">
          <Award className="size-5 text-primary" aria-hidden="true" />
          Certifications
        </h3>
        <ul className="mt-4 grid gap-4 md:grid-cols-3">
          {certifications.map((cert) => (
            <li key={cert.code} className="rounded-xl border bg-background p-6">
              <p className="font-serif text-2xl font-semibold text-primary">{cert.code}</p>
              <p className="mt-1 font-medium text-foreground">{cert.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-ink">
              <GraduationCap className="size-5 text-primary" aria-hidden="true" />
              Education
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {education.map((item) => (
                <li key={item.degree} className="rounded-xl border bg-background p-5">
                  <p className="font-medium text-foreground">{item.degree}</p>
                  <p className="text-sm text-muted-foreground">{item.school}</p>
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded-xl border border-dashed border-primary bg-background p-5">
              <p className="text-sm font-semibold text-primary">Currently studying</p>
              <p className="mt-1 text-sm text-muted-foreground">{currentStudies.school}</p>
              <ul className="mt-2 list-disc pl-5 text-foreground marker:text-primary">
                {currentStudies.courses.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-ink">
                <BookOpen className="size-5 text-primary" aria-hidden="true" />
                Publication
              </h3>
              <article className="mt-4 rounded-xl border bg-background p-6">
                <p className="font-serif text-xl font-semibold leading-snug text-ink text-pretty">
                  {publication.title}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {`${publication.publisher} · ${publication.year} · ASIN ${publication.asin}`}
                </p>
                <p className="mt-3 leading-relaxed text-foreground">{publication.description}</p>
                <a
                  href={publication.url}
                  className="mt-4 inline-block font-medium text-primary underline underline-offset-4 hover:text-ink"
                >
                  View on Amazon
                  <span className="sr-only">{` (${publication.title})`}</span>
                </a>
              </article>
            </div>
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-ink">
                <Users className="size-5 text-primary" aria-hidden="true" />
                Membership
              </h3>
              <p className="mt-4 rounded-xl border bg-background p-5 text-foreground">{membership}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
