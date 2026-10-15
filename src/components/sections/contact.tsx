import { CopyEmailButton } from "@/components/interactive/copy-email-button";
import { ExternalLink } from "@/components/ui/external-link";
import { ArrowUpRight, GitHubIcon, LinkedInIcon, Mail } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { profile } from "@/content/profile";

export function Contact() {
  const profileLink =
    "group/link inline-flex h-12 items-center gap-2.5 rounded-full border border-line bg-surface px-5 text-fg transition-colors hover:bg-surface-muted";

  return (
    <Section
      id="contact"
      label="Contact"
      intro="Whether it's a role on your team or a project you need built, email is the best way to reach me."
    >
      <div className="rounded-card border border-line bg-surface p-6 sm:p-8">
        <p className="text-sm text-fg-subtle">Email</p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-1 inline-block py-2 font-mono text-[clamp(1.05rem,3.6vw,1.625rem)] font-medium break-all text-accent underline decoration-accent/40 decoration-2 underline-offset-[6px] transition-colors hover:text-accent-hover hover:decoration-accent"
        >
          {profile.email}
        </a>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-12 items-center gap-2.5 rounded-full bg-btn px-5 text-btn-fg transition-[background-color,translate] hover:-translate-y-px hover:bg-btn-hover active:translate-y-px"
          >
            <Mail size={16} />
            Send an email
          </a>
          <CopyEmailButton />
        </div>

        <div className="mt-8 border-t border-line pt-6">
          <p className="text-sm text-fg-subtle">Elsewhere</p>
          <ul className="mt-3 flex flex-wrap gap-3">
            <li>
              <ExternalLink href={profile.links.github} className={profileLink}>
                <GitHubIcon size={16} />
                GitHub
                <ArrowUpRight size={14} className="text-fg-subtle transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={profile.links.linkedin} className={profileLink}>
                <LinkedInIcon size={16} />
                LinkedIn
                <ArrowUpRight size={14} className="text-fg-subtle transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </ExternalLink>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
