import { Section } from "@/components/ui/section";
import { projects } from "@/content/projects";
import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <Section
      id="projects"
      label="Selected projects"
      intro="My own product, plus websites I've worked on for businesses in the US and Lithuania."
    >
      <div className="grid gap-4 md:grid-cols-2 md:gap-5">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} featured={i === 0} />
        ))}
      </div>
    </Section>
  );
}
