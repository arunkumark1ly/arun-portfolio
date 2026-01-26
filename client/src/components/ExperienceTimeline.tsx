import { motion } from "framer-motion";
import type { Experience } from "@shared/schema";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  const sorted = [...experiences].sort((a, b) => a.order - b.order);

  return (
    <div className="relative border-l border-border ml-2 space-y-6">
      {sorted.map((exp, index) => (
        <motion.div 
          key={exp.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="relative pl-6"
          data-testid={`experience-item-${exp.id}`}
        >
          <div className="absolute -left-[4px] top-1.5 w-2 h-2 rounded-full bg-primary ring-2 ring-background" />
          
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
            <h3 className="text-sm font-semibold text-foreground">
              {exp.role} 
              {exp.company && <span className="text-primary"> @ {exp.company}</span>}
            </h3>
            <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
          </div>
          
          <p className="text-xs text-muted-foreground leading-relaxed max-w-xl">
            {exp.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
