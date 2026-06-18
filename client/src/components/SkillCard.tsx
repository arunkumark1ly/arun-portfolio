import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import * as Icons from "lucide-react";
import type { Skill } from "@shared/schema";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2, margin: "0px 0px -40px 0px" });
  const IconComponent = (Icons as any)[skill.icon] || Icons.Code;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -10 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
      transition={{ delay: index * 0.02, duration: 0.3 }}
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
