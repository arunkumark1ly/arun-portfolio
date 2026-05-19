import { motion } from "framer-motion";
import type { ConsultingProject } from "@/types/consulting";
import { fadeUp } from "./animations";
import { ConsultingEngagementCard } from "./ConsultingEngagementCard";

interface ConsultingEngagementCatalogProps {
  projects: ConsultingProject[];
  activeSlug?: string;
}

export function ConsultingEngagementCatalog({
  projects,
  activeSlug,
}: ConsultingEngagementCatalogProps) {
  return (
    <section
      id="engagement-catalog"
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
            Featured Engagements
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-3 mb-3">
            Independent consulting engagements
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
            Select an engagement to jump to its full case study. New consulting
            engagements are added here as they deliver — same layout, same
            storytelling format.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <ConsultingEngagementCard
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
