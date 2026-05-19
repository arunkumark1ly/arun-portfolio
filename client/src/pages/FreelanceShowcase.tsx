import { useEffect } from "react";
import { getFreelanceProjects } from "@/data/freelance-projects";
import { FreelanceCaseStudy } from "@/components/freelance/FreelanceCaseStudy";
import { FreelanceCollectionHero } from "@/components/freelance/FreelanceCollectionHero";
import { FreelanceProjectCatalog } from "@/components/freelance/FreelanceProjectCatalog";
import { FreelanceShowcaseCTA } from "@/components/freelance/FreelanceShowcaseCTA";
import { FreelanceShowcaseNav } from "@/components/freelance/FreelanceShowcaseNav";

export default function FreelanceShowcase() {
  const projects = getFreelanceProjects();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      "Freelance Projects Showcase | ArunKumar Kandasamy";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <FreelanceShowcaseNav />

      <main className="pt-14">
        <FreelanceCollectionHero projects={projects} />
        <FreelanceProjectCatalog projects={projects} />

        <section id="case-studies" className="border-t border-border">
          {projects.map((project, index) => (
            <FreelanceCaseStudy
              key={project.slug}
              project={project}
              caseIndex={index}
            />
          ))}
        </section>

        <FreelanceShowcaseCTA />

        <footer className="py-8 text-center border-t border-border">
          <p className="font-mono text-xs text-muted-foreground">
            Designed & Built by ArunKumar Kandasamy
          </p>
        </footer>
      </main>
    </div>
  );
}
