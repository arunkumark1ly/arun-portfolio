import { motion } from "framer-motion";
import {
  CheckCircle2,
  Cloud,
  ExternalLink,
  Globe,
  Monitor,
  Smartphone,
} from "lucide-react";
import type { FreelanceProject } from "@/types/freelance";
import { fadeUp } from "./animations";
import { getFeatureIcon, getTechIcon } from "./icon-map";

export function sectionLabel(caseIndex: number, section: number, title: string) {
  const prefix = String(caseIndex + 1).padStart(2, "0");
  const sec = String(section).padStart(2, "0");
  return `${prefix}.${sec} — ${title}`;
}

interface SectionProps {
  project: FreelanceProject;
  caseIndex: number;
}

export function CaseStudyStory({ project, caseIndex }: SectionProps) {
  return (
    <section className="py-24 px-6 md:px-10 bg-card/30 border-b border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="mb-4">
          <span className="font-mono text-[10px] text-primary tracking-widest uppercase">
            {sectionLabel(caseIndex, 1, "Project Story")}
          </span>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">{project.story.headline}</h3>
            {project.story.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-4 last:mb-0">{p}</p>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} className="space-y-3">
            <h4 className="font-mono text-xs text-foreground mb-4">Deliverables</h4>
            {project.story.deliverables.map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-xs text-muted-foreground">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function CaseStudyDesign({ project, caseIndex }: SectionProps) {
  return (
    <section className="py-24 px-6 md:px-10 border-b border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="mb-12">
          <span className="font-mono text-[10px] text-primary tracking-widest uppercase">
            {sectionLabel(caseIndex, 2, "Design & Frontend")}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-3 mb-3">{project.design.title}</h3>
          <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">{project.design.description}</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-5">
          {project.design.features.map((card, i) => {
            const Icon = getFeatureIcon(card.icon);
            return (
              <motion.div
                key={card.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
                className="group p-6 rounded-lg border border-border bg-card hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_24px_rgba(204,153,102,0.08)]"
              >
                <Icon className="w-5 h-5 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-sm font-semibold text-foreground mb-2">{card.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CaseStudyTechStack({ project, caseIndex }: SectionProps) {
  return (
    <section className="py-24 px-6 md:px-10 bg-card/30 border-b border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="mb-12">
          <span className="font-mono text-[10px] text-primary tracking-widest uppercase">
            {sectionLabel(caseIndex, 3, "Tech Stack")}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-3">Technologies used.</h3>
        </motion.div>
        <div className="flex flex-wrap gap-4">
          {project.techStack.map((tech, i) => {
            const Icon = getTechIcon(tech.icon);
            return (
              <motion.div
                key={tech.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="flex items-center gap-3 px-5 py-3 rounded-full border border-border bg-card hover:border-primary/40 transition-colors duration-300"
              >
                <Icon className={`w-4 h-4 ${tech.color}`} />
                <span className="font-mono text-xs text-foreground">{tech.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CaseStudyDeployment({ project, caseIndex }: SectionProps) {
  return (
    <section className="py-24 px-6 md:px-10 border-b border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="mb-12">
          <span className="font-mono text-[10px] text-primary tracking-widest uppercase">
            {sectionLabel(caseIndex, 4, "Deployment & Infrastructure")}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-3 mb-3">{project.deployment.title}</h3>
          <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">{project.deployment.description}</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-5">
          {project.deployment.steps.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 1}
              className="relative p-6 rounded-lg border border-border bg-card hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="font-mono text-4xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors absolute top-4 right-5 select-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <Cloud className="w-5 h-5 text-primary mb-4" />
              <h4 className="text-sm font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


export function CaseStudyPreview({ project, caseIndex }: SectionProps) {
  if (!project.preview.enableIframe) return null;
  const url = project.preview.iframeUrl;

  return (
    <section className="py-24 px-6 md:px-10 bg-card/30 border-b border-border overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="mb-12">
          <span className="font-mono text-[10px] text-primary tracking-widest uppercase">
            {sectionLabel(caseIndex, 5, "Visual Showcase")}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-3 mb-3">Experience the interface.</h3>
          <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
            Live website preview — see the responsive design in action.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="group relative mb-8">
          <div className="rounded-t-lg bg-muted/60 border border-border border-b-0 px-4 py-2.5 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
            </div>
            <div className="flex-1 mx-3 bg-background/80 border border-border rounded px-3 py-0.5 flex items-center gap-2">
              <Globe className="w-3 h-3 text-muted-foreground shrink-0" />
              <span className="font-mono text-[10px] text-muted-foreground truncate">{project.websiteDisplay}</span>
            </div>
            <ExternalLink className="w-3 h-3 text-muted-foreground" />
          </div>
          <div className="border border-border border-t-0 rounded-b-lg overflow-hidden bg-background relative h-[480px]">
            <iframe
              src={url}
              title={`${project.name} - Desktop Preview`}
              className="w-full h-full border-0 group-hover:scale-[1.01] transition-transform duration-500 origin-top"
              loading="lazy"
              data-testid={`iframe-desktop-${project.slug}`}
            />
            <a
              href={project.website}
              target="_blank"
              rel="noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-background/0 hover:bg-background/60 transition-all duration-300 opacity-0 hover:opacity-100"
              data-testid={`link-preview-overlay-${project.slug}`}
            >
              <span className="flex items-center gap-2 font-mono text-xs text-foreground bg-card border border-border px-4 py-2 rounded-full shadow-lg">
                <ExternalLink className="w-3 h-3 text-primary" />
                Open Live Site
              </span>
            </a>
          </div>
          <p className="font-mono text-[10px] text-muted-foreground text-center mt-2 flex items-center justify-center gap-1">
            <Monitor className="w-3 h-3" /> Desktop View
          </p>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} className="flex justify-center">
          <div className="w-64 group">
            <div className="rounded-t-2xl bg-muted/60 border border-border border-b-0 px-3 py-3 flex flex-col items-center gap-1.5">
              <div className="w-12 h-1 bg-border rounded-full" />
              <div className="flex items-center gap-1.5 bg-background/80 border border-border rounded-full px-3 py-0.5 w-full justify-center">
                <Globe className="w-2.5 h-2.5 text-muted-foreground shrink-0" />
                <span className="font-mono text-[9px] text-muted-foreground truncate">{project.websiteDisplay}</span>
              </div>
            </div>
            <div className="border border-border border-t-0 rounded-b-2xl overflow-hidden bg-background h-[420px]">
              <iframe
                src={url}
                title={`${project.name} - Mobile Preview`}
                className="w-full h-full border-0"
                style={{ transform: "scale(0.6)", transformOrigin: "top left", width: "167%", height: "167%" }}
                loading="lazy"
                data-testid={`iframe-mobile-${project.slug}`}
              />
            </div>
            <p className="font-mono text-[10px] text-muted-foreground text-center mt-2 flex items-center justify-center gap-1">
              <Smartphone className="w-3 h-3" /> Mobile View
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function CaseStudyHighlights({ project, caseIndex }: SectionProps) {
  return (
    <section className="py-24 px-6 md:px-10 border-b border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="mb-12">
          <span className="font-mono text-[10px] text-primary tracking-widest uppercase">
            {sectionLabel(caseIndex, 6, "Key Highlights")}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-3">What this project demonstrates.</h3>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-5">
          {project.highlights.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 1}
              className="p-6 rounded-lg border border-border bg-card hover:border-primary/40 hover:shadow-[0_0_24px_rgba(204,153,102,0.06)] transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
