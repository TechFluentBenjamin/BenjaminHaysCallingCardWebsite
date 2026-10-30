import { Download, FolderGit2, Mail, MapPin, Phone } from 'lucide-react'
import { contact, highlights, summary } from '@/lib/profile'

export function CallingCard() {
  return (
    <section id="top" aria-labelledby="intro-heading" className="bg-muted">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-5 md:py-24">
        <div className="md:col-span-3">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary bg-background px-3 py-1 text-sm font-medium text-accent-foreground">
            <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
            Open to new opportunities
          </p>
          <h1
            id="intro-heading"
            className="mt-6 font-serif text-4xl font-semibold leading-tight text-ink text-balance md:text-6xl"
          >
            {contact.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-primary">
            {contact.credentials.join(' · ')}
          </p>
          <p className="mt-1 text-lg text-foreground">{contact.title}</p>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-muted-foreground text-pretty">
            {summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-medium text-primary-foreground hover:bg-ink"
            >
              <Mail className="size-4" aria-hidden="true" />
              Email me
            </a>
            <a
              href="/benjamin-hays.vcf"
              download
              className="inline-flex items-center gap-2 rounded-md border-2 border-primary bg-background px-5 py-3 font-medium text-primary hover:bg-accent"
            >
              <Download className="size-4" aria-hidden="true" />
              Save contact card
            </a>
          </div>
        </div>

        <aside
          aria-label="Contact details"
          className="on-ink rounded-2xl bg-ink p-8 text-ink-foreground shadow-lg md:col-span-2 md:self-start"
        >
          <p className="font-serif text-2xl font-semibold">{contact.name}</p>
          <p className="mt-1 text-sm text-ink-foreground">
            {contact.credentials.join(', ')}
          </p>
          <div className="my-6 h-px bg-ink-foreground/40" aria-hidden="true" />
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="size-4 shrink-0" aria-hidden="true" />
              <a href={contact.phoneHref} className="underline underline-offset-4 hover:no-underline">
                <span className="sr-only">Phone: </span>
                {contact.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 shrink-0" aria-hidden="true" />
              <a href={`mailto:${contact.email}`} className="break-all underline underline-offset-4 hover:no-underline">
                <span className="sr-only">Email: </span>
                {contact.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FolderGit2 className="size-4 shrink-0" aria-hidden="true" />
              <a href={contact.github} className="break-all underline underline-offset-4 hover:no-underline">
                <span className="sr-only">GitHub: </span>
                {contact.githubLabel}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4 shrink-0" aria-hidden="true" />
              <span>
                <span className="sr-only">Location: </span>
                {contact.location} · Remote ready
              </span>
            </li>
          </ul>
        </aside>

        <dl className="grid grid-cols-2 gap-4 md:col-span-5 md:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.label} className="flex flex-col rounded-xl border bg-background p-5">
              <dt className="text-sm text-muted-foreground">{item.label}</dt>
              <dd className="order-first font-serif text-3xl font-semibold text-primary">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
