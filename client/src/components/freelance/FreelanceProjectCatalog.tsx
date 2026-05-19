import { motion } from "framer-motion";
import type { FreelanceProject } from "@/types/freelance";
import { fadeUp } from "./animations";
import { FreelanceProjectPreviewCard } from "./FreelanceProjectPreviewCard";

interface FreelanceProjectCatalogProps {
  projects: FreelanceProject[];
  activeSlug?: string;
}

export function FreelanceProjectCatalog({
  projects,
  activeSlug,
}: FreelanceProjectCatalogProps) {
  return (
    <section
      id="project-catalog"
      className="py-20 px-6 md:px-10 border-y border-border bg-card/20"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="mb-10"
        >
          <span className="font-mono text-[10px] text-primary tracking-widest uppercase">
            Project Catalog
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-3 mb-3">
            Independent freelance work
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
            Select a project to jump to its full case study. New engagements are
            added here as they ship — same layout, same storytelling format.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <FreelanceProjectPreviewCard
              key={project.slug}
              project={project}
              index={index}
              isActive={activeSlug === project.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
