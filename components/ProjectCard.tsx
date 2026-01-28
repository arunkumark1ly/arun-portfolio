import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronDown } from "lucide-react";
import type { Project } from "@shared/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function parseDescriptionToBullets(description: string): string[] {
  const sentences = description.split(/(?<=[.!?])\s+(?=[A-Z])/);
  return sentences.filter(s => s.trim().length > 0);
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const bullets = parseDescriptionToBullets(project.description);
  const displayedBullets = expanded ? bullets : bullets.slice(0, 2);
  const hasMore = bullets.length > 2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <Card className="h-full" data-testid={`project-card-${project.id}`}>
        <CardHeader className="pb-2 flex flex-row items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-sm font-medium text-foreground leading-tight">
              {project.title}
            </CardTitle>
            <p className="text-xs font-mono text-primary mt-1">{project.role}</p>
          </div>
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors shrink-0"
              aria-label={`Visit ${project.title}`}
              data-testid={`link-project-${project.id}`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </CardHeader>
        <CardContent className="pt-0">
          <ul className="space-y-1 mb-2">
            {displayedBullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                <span className="text-primary mt-0.5 shrink-0">-</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          
          {hasMore && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 text-xs text-primary mb-3 hover:underline"
              data-testid={`button-expand-project-${project.id}`}
            >
              {expanded ? "Show less" : `Show ${bullets.length - 2} more`}
              <ChevronDown className={`w-3 h-3 transition-transform ${expanded ? "rotate-180" : ""}`} />
            </button>
          )}
          
          <div className="flex flex-wrap gap-1">
            {project.techStack.slice(0, expanded ? undefined : 5).map((tech) => (
              <span 
                key={tech} 
                className="text-[10px] font-mono text-muted-foreground bg-muted px-1.5 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
            {!expanded && project.techStack.length > 5 && (
              <span className="text-[10px] font-mono text-primary">
                +{project.techStack.length - 5} more
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
