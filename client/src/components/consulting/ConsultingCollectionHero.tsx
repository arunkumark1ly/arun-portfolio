import { motion } from "framer-motion";
import { ArrowDown, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ConsultingProject } from "@/types/consulting";

interface ConsultingCollectionHeroProps {
  projects: ConsultingProject[];
}

export function ConsultingCollectionHero({ projects }: ConsultingCollectionHeroProps) {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const projectCount = projects.length;
  const featuredAnchor = featured ? `#${featured.slug}` : "#case-studies";

  return (
    <section className="relative overflow-hidden min-h-[78vh] flex flex-col items-center justify-center px-6 md:px-10">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background pointer-events-none" />
      <div className="absolute top-20 left-10 w-16 h-16 border-l border-t border-primary/20 hidden md:block" />
      <div className="absolute bottom-20 right-10 w-16 h-16 border-r border-b border-primary/20 hidden md:block" />

      <div className="relative max-w-5xl w-full mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 flex flex-wrap items-center justify-center gap-2"
        >
          <Badge
            variant="outline"
            className="font-mono text-[10px] text-primary border-primary/40 px-3 py-1 tracking-widest uppercase"
          >
            Independent Consulting
          </Badge>
          <Badge variant="secondary" className="font-mono text-[10px] px-3 py-1">
            {projectCount} {projectCount === 1 ? "Engagement" : "Engagements"}
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-8"
        >
          <span className="text-foreground">Independent Consulting </span>
          <span className="text-primary">Engagements</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Independent technical consulting engagements — from product thinking and UI
          craftsmanship to modern frontend engineering and production deployment. Each
          case study documents a complete client delivery.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a href={featuredAnchor} data-testid="link-explore-case-studies">
            <Button size="sm" className="font-mono text-xs gap-2">
              <Briefcase className="w-3.5 h-3.5" />
              Explore Case Studies
            </Button>
          </a>
          <a href="#engagement-catalog" data-testid="link-engagement-catalog">
            <Button variant="outline" size="sm" className="font-mono text-xs gap-2">
              View All Engagements
              <ArrowDown className="w-3 h-3" />
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {["Technical execution", "UI craftsmanship", "Product thinking", "Production deployment"].map(
            (cap) => (
              <span
                key={cap}
                className="font-mono text-[10px] text-muted-foreground border border-border rounded-full px-3 py-1"
              >
                {cap}
              </span>
            ),
          )}
        </motion.div>

        {featured && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.75 }}
            className="mt-6 font-mono text-[10px] text-muted-foreground"
          >
            Featured engagement:{" "}
            <span className="text-primary">
              {featured.name}
              {featured.nameAccent ? ` ${featured.nameAccent}` : ""}
            </span>
          </motion.p>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <div className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent" />
        <span className="font-mono text-[10px] text-muted-foreground tracking-widest">
          SCROLL
        </span>
      </motion.div>
    </section>
  );
}
