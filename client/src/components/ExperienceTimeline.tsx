import { motion } from "framer-motion";
import type { Experience } from "@shared/schema";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  const sorted = [...experiences].sort((a, b) => a.order - b.order);

  return (
    <div className="space-y-6">
      {sorted.map((exp, index) => (
        <motion.div 
          key={exp.id}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          className="relative pl-4 border-l-2 border-border hover:border-primary transition-colors"
          data-testid={`experience-item-${exp.id}`}
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
            <h3 className="text-sm font-medium text-foreground">
              {exp.role}
              {exp.company && <span className="text-primary"> @ {exp.company}</span>}
            </h3>
            <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
          </div>
          
          <p className="text-xs text-muted-foreground leading-relaxed">
            {exp.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
