import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";
import type { Project } from "@shared/schema";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
      <Card className="h-full bg-card hover:-translate-y-2 transition-transform duration-300 border-none shadow-lg group">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <Folder className="w-10 h-10 text-primary" />
          <div className="flex gap-4">
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-400 hover:text-primary transition-colors"
                aria-label={`Visit ${project.title}`}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <CardTitle className="text-xl text-slate-200 group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
          <div className="text-sm font-mono text-primary/80 mb-2">{project.role}</div>
          <p className="text-slate-400 leading-relaxed text-sm">
            {project.description}
          </p>
        </CardContent>
        <CardFooter className="pt-auto">
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.techStack.map((tech) => (
              <span 
                key={tech} 
                className="text-xs font-mono text-slate-500 mr-2 mb-1"
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
