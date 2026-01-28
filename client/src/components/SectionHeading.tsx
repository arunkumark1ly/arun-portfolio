import { motion } from "framer-motion";

interface SectionHeadingProps {
  number: string;
  title: string;
  className?: string;
}

export function SectionHeading({ number, title, className = "" }: SectionHeadingProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`flex items-center gap-2 mb-8 ${className}`}
    >
      {number && <span className="font-mono text-primary text-xs">{number}.</span>}
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      <div className="h-px bg-border flex-1 ml-4 max-w-[200px]" />
    </motion.div>
  );
}
