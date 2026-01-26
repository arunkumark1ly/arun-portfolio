import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Project } from "@shared/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <Card className="h-full hover-elevate" data-testid={`project-card-${project.id}`}>
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
          <p className="text-xs text-muted-foreground leading-relaxed mb-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1">
            {project.techStack.map((tech) => (
              <span 
                key={tech} 
                className="text-[10px] font-mono text-muted-foreground bg-muted px-1.5 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
