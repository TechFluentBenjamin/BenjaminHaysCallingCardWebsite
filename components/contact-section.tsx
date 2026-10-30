import { FolderGit2, Mail, Phone } from 'lucide-react'
import { contact } from '@/lib/profile'

export function ContactSection() {
  const items = [
    { icon: Mail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: 'Phone', value: contact.phoneDisplay, href: contact.phoneHref },
    { icon: FolderGit2, label: 'GitHub', value: contact.githubLabel, href: contact.github },
  ]

  return (
    <footer id="contact" aria-labelledby="contact-heading" className="on-ink bg-ink text-ink-foreground">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-wider">Get in touch</p>
        <h2 id="contact-heading" className="mt-2 font-serif text-3xl font-semibold text-balance md:text-4xl">
          {"Let's deliver your next project together."}
        </h2>
        <p className="mt-4 max-w-prose leading-relaxed">
          {"I'm available for project management, Scrum Master, and business analyst roles, remote or in the Sacramento region."}
        </p>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {items.map(({ icon: Icon, label, value, href }) => (
            <li key={label}>
              <a
                href={href}
                className="flex h-full flex-col gap-2 rounded-xl border-2 border-ink-foreground/60 p-5 hover:bg-ink-foreground hover:text-ink"
              >
                <span className="flex items-center gap-2 text-sm font-semibold">
                  <Icon className="size-4" aria-hidden="true" />
                  {label}
                </span>
                <span className="break-all">{value}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-16 border-t border-ink-foreground/40 pt-6 text-sm">
          {`© ${new Date().getFullYear()} ${contact.name}, ${contact.credentials.join(', ')}`}
        </p>
      </div>
    </footer>
  )
}
