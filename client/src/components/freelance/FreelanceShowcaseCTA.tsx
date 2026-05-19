import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FreelanceShowcaseCTA() {
  return (
    <section className="py-24 px-6 md:px-10 bg-card/30 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto text-center"
      >
        <p className="font-mono text-[10px] text-primary tracking-widest uppercase mb-4">
          Interested in working together?
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Let&apos;s build something great.
        </h2>
        <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
          I&apos;m open to freelance engagements, new opportunities, and interesting
          technical challenges.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="mailto:k.arun@outlook.com" data-testid="link-cta-email">
            <Button size="sm" className="font-mono text-xs gap-2">
              Get In Touch
              <ArrowUpRight className="w-3 h-3" />
            </Button>
          </a>
          <Link href="/">
            <Button
              variant="outline"
              size="sm"
              className="font-mono text-xs gap-2"
              data-testid="link-cta-portfolio"
            >
              <ArrowLeft className="w-3 h-3" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
