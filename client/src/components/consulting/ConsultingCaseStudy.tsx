import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ConsultingProject } from "@/types/consulting";
import { fadeUp } from "./animations";
import {
  CaseStudyDeployment,
  CaseStudyDesign,
  CaseStudyHighlights,
  CaseStudyPreview,
  CaseStudyStory,
  CaseStudyTechStack,
} from "./case-study-sections";

interface ConsultingCaseStudyProps {
  project: ConsultingProject;
  caseIndex: number;
}

export function ConsultingCaseStudy({ project, caseIndex }: ConsultingCaseStudyProps) {
  return (
    <article id={project.slug} className="scroll-mt-20">
      <section className="relative py-24 px-6 md:px-10 overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.04] to-transparent pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="mb-6 flex flex-wrap items-center gap-2"
          >
            <Badge
              variant="outline"
              className="font-mono text-[10px] text-primary border-primary/40 px-3 py-1 tracking-widest uppercase"
            >
              Consulting Engagement
            </Badge>
            {project.featured && (
              <Badge variant="secondary" className="font-mono text-[10px] px-3 py-1">
                Featured Engagement
              </Badge>
            )}
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-2"
            data-testid={`case-study-title-${project.slug}`}
          >
            {project.name}
          </motion.h2>
          {project.nameAccent && (
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="text-3xl md:text-5xl font-bold text-primary leading-tight mb-6"
            >
              {project.nameAccent}
            </motion.h2>
          )}

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            className="text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed mb-8"
          >
            {project.tagline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            className="flex flex-wrap items-center gap-3 mb-10"
          >
            <a
              href={project.website}
              target="_blank"
              rel="noreferrer"
              data-testid={`link-live-site-${project.slug}`}
            >
              <Button size="sm" className="font-mono text-xs gap-2">
                <Globe className="w-3.5 h-3.5" />
                Visit Live Site
                <ArrowUpRight className="w-3 h-3" />
              </Button>
            </a>
            <Link href="/#projects">
              <Button variant="outline" size="sm" className="font-mono text-xs gap-2">
                All Portfolio Projects
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={5}
            className="flex flex-wrap gap-6 text-xs font-mono text-muted-foreground"
          >
            {[
              ["Category", project.category],
              ["Role", project.role],
              ["Type", project.engagementType],
            ].map(([k, v]) => (
              <div key={k} className="text-left">
                <div className="text-primary font-semibold mb-0.5">{k}</div>
                <div>{v}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <CaseStudyStory project={project} caseIndex={caseIndex} />
      <CaseStudyDesign project={project} caseIndex={caseIndex} />
      <CaseStudyTechStack project={project} caseIndex={caseIndex} />
      <CaseStudyDeployment project={project} caseIndex={caseIndex} />
      <CaseStudyPreview project={project} caseIndex={caseIndex} />
      <CaseStudyHighlights project={project} caseIndex={caseIndex} />
    </article>
  );
}
