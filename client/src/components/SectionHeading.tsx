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
      className={`flex items-center gap-4 mb-12 ${className}`}
    >
      <span className="font-mono text-primary text-xl md:text-2xl">{number}.</span>
      <h2 className="text-2xl md:text-4xl font-bold text-slate-200">{title}</h2>
      <div className="h-[1px] bg-slate-700 w-32 md:w-64 ml-4" />
    </motion.div>
  );
}
