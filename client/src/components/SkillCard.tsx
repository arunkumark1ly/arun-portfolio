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
      transition={{ delay: index * 0.03, duration: 0.3 }}
      className="flex items-center gap-2 py-1"
      data-testid={`skill-card-${skill.id}`}
    >
      <IconComponent className="w-3 h-3 text-primary" />
      <span className="font-mono text-xs text-muted-foreground">
        {skill.name}
      </span>
    </motion.div>
  );
}
