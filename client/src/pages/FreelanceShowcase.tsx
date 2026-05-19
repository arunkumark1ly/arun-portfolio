import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowLeft,
  ExternalLink,
  Globe,
  Layers,
  Code2,
  Cloud,
  Smartphone,
  Monitor,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const techStack = [
  { label: "HTML", icon: Code2, color: "text-orange-400" },
  { label: "Tailwind CSS", icon: Layers, color: "text-sky-400" },
  { label: "JavaScript", icon: Code2, color: "text-yellow-400" },
  { label: "Terraform", icon: Cloud, color: "text-violet-400" },
  { label: "AWS S3", icon: Cloud, color: "text-amber-400" },
];

const highlights = [
  { title: "Independent Ownership", desc: "Sole contributor — from first line of code to live deployment with zero handoffs." },
  { title: "Frontend Engineering", desc: "Semantic HTML, utility-first Tailwind CSS, and vanilla JS delivering smooth UX." },
  { title: "Deployment Capability", desc: "Production-grade IaC using Terraform to provision and manage AWS S3 static hosting." },
  { title: "Clean UI Execution", desc: "Responsive, mobile-first layouts with consistent spacing, hierarchy, and polish." },
];

const deliverables = [
  "Responsive multi-device layout (mobile, tablet, desktop)",
  "Modern fashion-forward visual style with Tailwind CSS",
  "Smooth browsing and hover interaction experience",
  "Terraform scripts for reproducible infrastructure",
  "AWS S3 static website bucket with public access policy",
  "Production deployment configuration and handoff",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function FreelanceShowcase() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "The Legacy Apparels — Freelance Case Study | ArunKumar Kandasamy";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky back nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-5xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <Link href="/">
            <button className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors" data-testid="link-back-home">
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Portfolio
            </button>
          </Link>
          <span className="font-mono text-primary font-semibold text-sm">AK</span>
        </div>
      </header>

      <main className="pt-14">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden min-h-[92vh] flex flex-col items-center justify-center px-6 md:px-10">
          {/* Subtle background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background pointer-events-none" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/[0.03] to-transparent pointer-events-none" />

          {/* Decorative corner lines */}
          <div className="absolute top-20 left-10 w-16 h-16 border-l border-t border-primary/20 hidden md:block" />
          <div className="absolute bottom-20 right-10 w-16 h-16 border-r border-b border-primary/20 hidden md:block" />

          <div className="relative max-w-5xl w-full mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              <Badge variant="outline" className="font-mono text-[10px] text-primary border-primary/40 px-3 py-1 tracking-widest uppercase">
                Freelance Case Study
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-none mb-4"
            >
              The Legacy
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-primary leading-none mb-8"
            >
              Apparels
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
            >
              A fashion-forward apparel brand website — independently designed, engineered, and deployed from zero to production.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              <a href="https://thelegacyapparels.com" target="_blank" rel="noreferrer" data-testid="link-live-site">
                <Button size="sm" className="font-mono text-xs gap-2">
                  <Globe className="w-3.5 h-3.5" />
                  Visit Live Site
                  <ArrowUpRight className="w-3 h-3" />
                </Button>
              </a>
              <Link href="/#projects">
                <Button variant="outline" size="sm" className="font-mono text-xs gap-2" data-testid="link-back-projects">
                  <ArrowLeft className="w-3 h-3" />
                  All Projects
                </Button>
              </Link>
            </motion.div>

            {/* Meta chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.65 }}
              className="flex flex-wrap justify-center gap-6 mt-14 text-xs font-mono text-muted-foreground"
            >
              {[
                ["Category", "Fashion / Apparel"],
                ["Role", "Frontend Dev & Deployment"],
                ["Type", "Independent Freelance"],
              ].map(([k, v]) => (
                <div key={k} className="text-center">
                  <div className="text-primary font-semibold mb-0.5">{k}</div>
                  <div>{v}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          >
            <div className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent" />
            <span className="font-mono text-[10px] text-muted-foreground tracking-widest">SCROLL</span>
          </motion.div>
        </section>

        {/* ── Project Story ── */}
        <section className="py-24 px-6 md:px-10 bg-card/30 border-y border-border">
          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="mb-4"
            >
              <span className="font-mono text-[10px] text-primary tracking-widest uppercase">01 — Project Story</span>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
                  A complete freelance engagement — independently executed.
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  The Legacy Apparels needed a modern, elegant web presence to reflect their brand identity in the fashion and apparel space. I was brought on as the sole developer to take this from concept to production.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  I owned the entire delivery chain — translating brand requirements into a polished UI, crafting responsive layouts with Tailwind CSS, and engineering the cloud deployment infrastructure using Terraform and AWS S3.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  No team. No handoffs. Just end-to-end ownership of frontend development and production deployment — the kind of independent execution that demonstrates real full-cycle capability.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} className="space-y-3">
                <h3 className="font-mono text-xs text-foreground mb-4">Deliverables</h3>
                {deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs text-muted-foreground">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Design & Frontend Experience ── */}
        <section className="py-24 px-6 md:px-10">
          <div className="max-w-5xl mx-auto">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="mb-12">
              <span className="font-mono text-[10px] text-primary tracking-widest uppercase">02 — Design & Frontend</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-3 mb-3">Crafted for the fashion aesthetic.</h2>
              <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
                Every pixel was intentional — clean whitespace, elegant typography, and smooth interactions built with utility-first Tailwind CSS to deliver a fashion-grade browsing experience.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  icon: Smartphone,
                  title: "Mobile-First Responsive",
                  desc: "Fluid layouts across all breakpoints — phone, tablet, and desktop — ensuring a seamless brand experience on every device.",
                },
                {
                  icon: Layers,
                  title: "Tailwind CSS Craftsmanship",
                  desc: "Utility-first styling with custom design tokens, consistent spacing rhythm, and fashion-inspired visual hierarchy.",
                },
                {
                  icon: Monitor,
                  title: "Smooth Interactions",
                  desc: "Subtle hover states, smooth transitions, and polished micro-interactions that elevate the premium feel of the brand.",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i + 1}
                  className="group p-6 rounded-lg border border-border bg-card hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_24px_rgba(204,153,102,0.08)]"
                >
                  <card.icon className="w-5 h-5 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-sm font-semibold text-foreground mb-2">{card.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tech Stack ── */}
        <section className="py-24 px-6 md:px-10 bg-card/30 border-y border-border">
          <div className="max-w-5xl mx-auto">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="mb-12">
              <span className="font-mono text-[10px] text-primary tracking-widest uppercase">03 — Tech Stack</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-3">Technologies used.</h2>
            </motion.div>

            <div className="flex flex-wrap gap-4">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="flex items-center gap-3 px-5 py-3 rounded-full border border-border bg-card hover:border-primary/40 transition-colors duration-300 cursor-default"
                >
                  <tech.icon className={`w-4 h-4 ${tech.color}`} />
                  <span className="font-mono text-xs text-foreground">{tech.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Deployment & Infrastructure ── */}
        <section className="py-24 px-6 md:px-10">
          <div className="max-w-5xl mx-auto">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="mb-12">
              <span className="font-mono text-[10px] text-primary tracking-widest uppercase">04 — Deployment & Infrastructure</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-3 mb-3">Production-grade. Infrastructure-as-Code.</h2>
              <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
                Deployment wasn't an afterthought — it was engineered with the same rigor as the frontend. Terraform was used to provision the entire AWS infrastructure reproducibly and reliably.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  step: "01",
                  title: "Terraform Provisioning",
                  desc: "Infrastructure defined as code — S3 bucket creation, public access configuration, bucket policies, and website endpoint setup all version-controlled and reproducible.",
                },
                {
                  step: "02",
                  title: "AWS S3 Static Hosting",
                  desc: "The frontend assets are hosted on an AWS S3 static website bucket — cost-effective, globally available, and highly reliable for a static web presence.",
                },
                {
                  step: "03",
                  title: "Production Deployment",
                  desc: "Complete production configuration with proper MIME type handling, index document routing, and error page configuration for a seamless end-user experience.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i + 1}
                  className="relative p-6 rounded-lg border border-border bg-card hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="font-mono text-4xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors absolute top-4 right-5 select-none">
                    {item.step}
                  </div>
                  <Cloud className="w-5 h-5 text-primary mb-4" />
                  <h3 className="text-sm font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Visual Showcase (Browser Mockups) ── */}
        <section className="py-24 px-6 md:px-10 bg-card/30 border-y border-border overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="mb-12">
              <span className="font-mono text-[10px] text-primary tracking-widest uppercase">05 — Visual Showcase</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-3 mb-3">Experience the interface.</h2>
              <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
                Live website preview — see the responsive design and fashion aesthetic in action.
              </p>
            </motion.div>

            {/* Desktop mockup */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="group relative mb-8"
            >
              {/* Browser chrome */}
              <div className="rounded-t-lg bg-muted/60 border border-border border-b-0 px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                </div>
                <div className="flex-1 mx-3 bg-background/80 border border-border rounded px-3 py-0.5 flex items-center gap-2">
                  <Globe className="w-3 h-3 text-muted-foreground shrink-0" />
                  <span className="font-mono text-[10px] text-muted-foreground truncate">thelegacyapparels.com</span>
                </div>
                <ExternalLink className="w-3 h-3 text-muted-foreground" />
              </div>
              {/* iframe preview */}
              <div className="border border-border border-t-0 rounded-b-lg overflow-hidden bg-background relative h-[480px]">
                <iframe
                  src="https://thelegacyapparels.com"
                  title="The Legacy Apparels - Desktop Preview"
                  className="w-full h-full border-0 group-hover:scale-[1.01] transition-transform duration-500 origin-top"
                  loading="lazy"
                  data-testid="iframe-desktop-preview"
                />
                {/* Overlay with link on hover */}
                <a
                  href="https://thelegacyapparels.com"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-background/0 hover:bg-background/60 transition-all duration-300 opacity-0 hover:opacity-100 group"
                  data-testid="link-preview-overlay"
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

            {/* Mobile mockup */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="flex justify-center"
            >
              <div className="w-64 group">
                {/* Phone chrome */}
                <div className="rounded-t-2xl bg-muted/60 border border-border border-b-0 px-3 py-3 flex flex-col items-center gap-1.5">
                  <div className="w-12 h-1 bg-border rounded-full" />
                  <div className="flex items-center gap-1.5 bg-background/80 border border-border rounded-full px-3 py-0.5 w-full justify-center">
                    <Globe className="w-2.5 h-2.5 text-muted-foreground shrink-0" />
                    <span className="font-mono text-[9px] text-muted-foreground truncate">thelegacyapparels.com</span>
                  </div>
                </div>
                <div className="border border-border border-t-0 rounded-b-2xl overflow-hidden bg-background h-[420px]">
                  <iframe
                    src="https://thelegacyapparels.com"
                    title="The Legacy Apparels - Mobile Preview"
                    className="w-full h-full border-0 group-hover:scale-[1.01] transition-transform duration-500 origin-top"
                    style={{ transform: "scale(0.6)", transformOrigin: "top left", width: "167%", height: "167%" }}
                    loading="lazy"
                    data-testid="iframe-mobile-preview"
                  />
                </div>
                <p className="font-mono text-[10px] text-muted-foreground text-center mt-2 flex items-center justify-center gap-1">
                  <Smartphone className="w-3 h-3" /> Mobile View
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Key Highlights ── */}
        <section className="py-24 px-6 md:px-10">
          <div className="max-w-5xl mx-auto">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="mb-12">
              <span className="font-mono text-[10px] text-primary tracking-widest uppercase">06 — Key Highlights</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-3">What this project demonstrates.</h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-5">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i + 1}
                  className="p-6 rounded-lg border border-border bg-card hover:border-primary/40 hover:shadow-[0_0_24px_rgba(204,153,102,0.06)] transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 px-6 md:px-10 bg-card/30 border-t border-border">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto text-center"
          >
            <p className="font-mono text-[10px] text-primary tracking-widest uppercase mb-4">Interested in working together?</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Let's build something great.</h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
              I'm open to freelance engagements, new opportunities, and interesting technical challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="mailto:k.arun@outlook.com" data-testid="link-cta-email">
                <Button size="sm" className="font-mono text-xs gap-2">
                  Get In Touch
                  <ArrowUpRight className="w-3 h-3" />
                </Button>
              </a>
              <Link href="/">
                <Button variant="outline" size="sm" className="font-mono text-xs gap-2" data-testid="link-cta-portfolio">
                  <ArrowLeft className="w-3 h-3" />
                  Back to Portfolio
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center border-t border-border">
          <p className="font-mono text-xs text-muted-foreground">
            Designed & Built by ArunKumar Kandasamy
          </p>
        </footer>
      </main>
    </div>
  );
}
