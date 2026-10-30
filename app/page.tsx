import { CallingCard } from '@/components/calling-card'
import { ContactSection } from '@/components/contact-section'
import { CredentialsSection } from '@/components/credentials-section'
import { ExperienceSection } from '@/components/experience-section'
import { SiteHeader } from '@/components/site-header'
import { SkillsSection } from '@/components/skills-section'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <CallingCard />
        <ExperienceSection />
        <CredentialsSection />
        <SkillsSection />
      </main>
      <ContactSection />
    </>
  )
}
