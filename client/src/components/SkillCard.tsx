import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { Skill } from "@shared/schema";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  // Dynamic icon component
  const IconComponent = (Icons as any)[skill.icon] || Icons.Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group relative p-4 rounded-lg bg-card hover:bg-slate-800 transition-colors duration-300 border border-transparent hover:border-primary/20"
    >
      <div className="flex items-center gap-3">
        <div className="p-2 rounded bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
          <IconComponent className="w-6 h-6" />
        </div>
        <span className="font-mono text-slate-300 group-hover:text-primary transition-colors">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
}
