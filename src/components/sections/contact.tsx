import { CopyEmailButton } from "@/components/interactive/copy-email-button";
import { ExternalLink } from "@/components/ui/external-link";
import { ArrowUpRight, Download, FileText, GitHubIcon, LinkedInIcon, Mail } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { profile } from "@/content/profile";

export function Contact() {
  const profileLink =
    "brut-sm brut-press group/link inline-flex h-12 items-center gap-2.5 bg-surface px-5 font-bold text-fg";

  return (
    <Section
      id="contact"
      label="Contact"
      intro="Whether it's a role on your team or a project you need built, email is the best way to reach me."
    >
      <div className="brut bg-card-yellow p-6 sm:p-10">
        <p className="font-display text-sm tracking-wider text-fg uppercase">Email</p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-1 inline-block py-2 font-display text-[clamp(1.1rem,4vw,2.25rem)] break-all text-fg underline decoration-[var(--swoosh)] decoration-4 underline-offset-[8px] transition-colors hover:text-accent"
        >
          {profile.email}
        </a>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="brut-sm brut-press inline-flex h-12 items-center gap-2.5 bg-btn px-5 font-bold text-btn-fg"
          >
            <Mail size={16} />
            Send an email
          </a>
          <CopyEmailButton />
        </div>

        <div className="mt-8 border-t-2 border-dashed border-ink/40 pt-6">
          <p className="font-display text-sm tracking-wider text-fg uppercase">Résumé</p>
          <ul className="mt-3 flex flex-wrap gap-4">
            <li>
              <a href={profile.resume} target="_blank" rel="noopener" className={profileLink}>
                <FileText size={16} />
                View résumé
                <span className="sr-only"> (PDF, opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={profile.resume} download className={profileLink}>
                <Download size={16} />
                Download PDF
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-8 border-t-2 border-dashed border-ink/40 pt-6">
          <p className="font-display text-sm tracking-wider text-fg uppercase">Elsewhere</p>
          <ul className="mt-3 flex flex-wrap gap-4">
            <li>
              <ExternalLink href={profile.links.github} className={profileLink}>
                <GitHubIcon size={16} />
                GitHub
                <ArrowUpRight size={14} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={profile.links.linkedin} className={profileLink}>
                <LinkedInIcon size={16} />
                LinkedIn
                <ArrowUpRight size={14} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </ExternalLink>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
