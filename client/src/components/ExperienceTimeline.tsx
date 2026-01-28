import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { Experience } from "@shared/schema";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

function parseDescriptionToBullets(description: string): string[] {
  const sentences = description.split(/(?<=[.!?])\s+(?=[A-Z])/);
  return sentences.filter(s => s.trim().length > 0);
}

function ExperienceItem({ exp, index }: { exp: Experience; index: number }) {
  const [expanded, setExpanded] = useState(index === 0);
  const bullets = parseDescriptionToBullets(exp.description);
  const displayedBullets = expanded ? bullets : bullets.slice(0, 2);
  const hasMore = bullets.length > 2;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="relative pl-4 border-l-2 border-border hover:border-primary transition-colors"
      data-testid={`experience-item-${exp.id}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
        <h3 className="text-sm font-medium text-foreground">
          {exp.role}
          {exp.company && <span className="text-primary"> @ {exp.company}</span>}
        </h3>
        <span className="font-mono text-xs text-muted-foreground shrink-0">{exp.period}</span>
      </div>
      
      <ul className="space-y-1">
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
          className="flex items-center gap-1 text-xs text-primary mt-2 hover:underline"
          data-testid={`button-expand-${exp.id}`}
        >
          {expanded ? "Show less" : `Show ${bullets.length - 2} more`}
          <ChevronDown className={`w-3 h-3 transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      )}
    </motion.div>
  );
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  const sorted = [...experiences].sort((a, b) => a.order - b.order);

  return (
    <div className="space-y-6">
      {sorted.map((exp, index) => (
        <ExperienceItem key={exp.id} exp={exp} index={index} />
      ))}
    </div>
  );
}
