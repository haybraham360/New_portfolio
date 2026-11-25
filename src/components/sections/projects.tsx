import { Section } from "@/components/ui/section";
import { projects } from "@/content/projects";
import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <Section
      id="projects"
      label="Selected projects"
      count={projects.length}
      intro="My own AI and developer products, plus websites I've built for businesses in the US and Lithuania."
    >
      <div className="grid gap-7 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} featured={i === 0} />
        ))}
      </div>
    </Section>
  );
}
