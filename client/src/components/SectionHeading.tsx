import { motion } from "framer-motion";

interface SectionHeadingProps {
  number: string;
  title: string;
  className?: string;
}

export function SectionHeading({ number, title, className = "" }: SectionHeadingProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex items-center gap-3 mb-8 ${className}`}
    >
      <span className="font-mono text-primary text-xs">{number}.</span>
      <h2 className="text-lg font-semibold text-foreground whitespace-nowrap">{title}</h2>
      <div className="h-[1px] bg-border flex-grow ml-3" />
    </motion.div>
  );
}
