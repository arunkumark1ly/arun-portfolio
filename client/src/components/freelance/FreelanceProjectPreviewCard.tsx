import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { FreelanceProject } from "@/types/freelance";
import { fadeUp } from "./animations";

interface FreelanceProjectPreviewCardProps {
  project: FreelanceProject;
  index: number;
  isActive?: boolean;
}

export function FreelanceProjectPreviewCard({
  project,
  index,
  isActive = false,
}: FreelanceProjectPreviewCardProps) {
  const displayName = project.nameAccent
    ? `${project.name} ${project.nameAccent}`
    : project.name;

  return (
    <motion.a
      href={`#${project.slug}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      className={`group block p-6 rounded-lg border bg-card transition-all duration-300 hover:shadow-[0_0_24px_rgba(204,153,102,0.08)] ${
        isActive
          ? "border-primary/50 ring-1 ring-primary/20"
          : "border-border hover:border-primary/40"
      }`}
      data-testid={`freelance-card-${project.slug}`}
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-[10px] text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          {project.featured && (
            <Badge
              variant="outline"
              className="font-mono text-[9px] border-primary/40 text-primary gap-1 px-2 py-0"
            >
              <Star className="w-2.5 h-2.5 fill-primary" />
              Featured
            </Badge>
          )}
        </div>
        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>

      <h3 className="text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
        {displayName}
      </h3>
      <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2">
        {project.tagline}
      </p>

      <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono text-muted-foreground">
        <span>{project.category}</span>
        <span className="text-border">·</span>
        <span className="flex items-center gap-1">
          <Globe className="w-2.5 h-2.5" />
          {project.websiteDisplay}
        </span>
      </div>
    </motion.a>
  );
}
