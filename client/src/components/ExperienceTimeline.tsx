import { motion } from "framer-motion";
import type { Experience } from "@shared/schema";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  // Sort by order directly in render to ensure display order
  const sorted = [...experiences].sort((a, b) => a.order - b.order);

  return (
    <div className="relative border-l border-slate-700 ml-3 space-y-12">
      {sorted.map((exp, index) => (
        <motion.div 
          key={exp.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="relative pl-8 md:pl-12"
        >
          {/* Dot indicator */}
          <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
          
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
            <h3 className="text-xl font-bold text-slate-200">
              {exp.role} 
              {exp.company && <span className="text-primary"> @ {exp.company}</span>}
            </h3>
            <span className="font-mono text-sm text-slate-500 mt-1 sm:mt-0">{exp.period}</span>
          </div>
          
          <p className="text-slate-400 leading-relaxed max-w-2xl">
            {exp.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
