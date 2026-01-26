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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group relative p-2 rounded bg-muted/50 hover:bg-muted transition-colors duration-200"
      data-testid={`skill-card-${skill.id}`}
    >
      <div className="flex items-center gap-2">
        <div className="p-1 rounded bg-primary/10 text-primary">
          <IconComponent className="w-3 h-3" />
        </div>
        <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
}
