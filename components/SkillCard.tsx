import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { Skill } from "@shared/schema";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const IconComponent = (Icons as any)[skill.icon] || Icons.Code;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.02, duration: 0.2 }}
      className="flex items-center gap-1.5 py-0.5"
      data-testid={`skill-card-${skill.id}`}
    >
      <IconComponent className="w-2.5 h-2.5 text-primary shrink-0" />
      <span className="font-mono text-[11px] text-muted-foreground leading-tight">
        {skill.name}
      </span>
    </motion.div>
  );
}
