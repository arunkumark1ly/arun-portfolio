import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import type { Project } from "@shared/schema";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Card className="h-full hover:-translate-y-1 transition-transform duration-200 group" data-testid={`project-card-${project.id}`}>
        <CardHeader className="flex flex-row items-center justify-between gap-2 pb-2">
          <Folder className="w-6 h-6 text-primary" />
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={`Visit ${project.title}`}
              data-testid={`link-project-${project.id}`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </CardHeader>
        <CardContent className="space-y-2">
          <CardTitle className="text-sm text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
          <div className="text-xs font-mono text-primary/80">{project.role}</div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </CardContent>
        <CardFooter className="pt-2">
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
        </CardFooter>
      </Card>
    </motion.div>
  );
}
