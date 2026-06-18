import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Link as WouterLink } from "wouter";
import { ArrowRight, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HERO_LINES = [
  { text: "Building Scalable Products.", emphasis: false },
  { text: "Leading AI-Augmented Engineering.", emphasis: true },
  { text: "Delivering Predictable Outcomes.", emphasis: false },
] as const;

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

function HeroPortrait({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex justify-center lg:justify-end", className)}>
      <div
        className="pointer-events-none absolute -left-6 top-6 h-[88%] w-[92%] rounded-[2rem] bg-gradient-to-br from-[#F4ECE2] via-[#EDE4D8]/90 to-[#F8F4EF]/40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-4 bottom-0 h-48 w-48 rounded-full bg-[#B77A3D]/15 blur-3xl"
        aria-hidden
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
      >
        <img
          src="/arunkumar-kandasamy.webp"
          alt="ArunKumar Kandasamy — Principal Software Engineer"
          width={320}
          height={400}
          className="h-[280px] w-[224px] rounded-2xl object-cover object-[center_12%] shadow-[0_24px_60px_-12px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.04] sm:h-[350px] sm:w-[280px] lg:h-[400px] lg:w-[320px]"
          fetchPriority="high"
        />
      </motion.div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] items-center py-16 md:py-20 lg:py-24"
      aria-label="Hero section"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[#F4ECE2]/35 to-transparent"
        aria-hidden
      />

      <div className="relative grid w-full items-center gap-10 lg:grid-cols-[55fr_45fr] lg:gap-12 xl:gap-16">
        <div className="flex flex-col gap-8 lg:gap-10 lg:pr-2">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="space-y-4"
          >
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#B77A3D]">
              Principal Software Engineer
            </p>
            <h1 className="text-[2.35rem] font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
              ArunKumar
              <br />
              <span className="text-foreground/90">Kandasamy</span>
            </h1>
          </motion.div>

          <HeroPortrait className="lg:hidden" />

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-6"
          >
            <p className="text-sm font-medium tracking-wide text-muted-foreground sm:text-base">
              Principal Software Engineer{" "}
              <span className="text-[#B77A3D]/70">•</span> ThinkPro Technologies
            </p>

            <div className="space-y-2">
              {HERO_LINES.map((line, index) => (
                <motion.p
                  key={line.text}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.22 + index * 0.08 }}
                  className={cn(
                    "text-xl font-medium leading-snug tracking-tight sm:text-2xl lg:text-[1.65rem] lg:leading-tight",
                    line.emphasis
                      ? "text-[#B77A3D]"
                      : "text-foreground/75",
                  )}
                >
                  {line.text}
                </motion.p>
              ))}
            </div>

            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-[1.05rem] sm:leading-7">
              Principal Software Engineer with 16+ years of experience building scalable
              platforms, cloud-native systems, and AI-augmented engineering practices. I
              combine deep technical expertise with delivery leadership to build predictable,
              high-performing products.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.42 }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link to="projects" smooth duration={500}>
              <Button
                size="lg"
                className="h-11 w-full rounded-full bg-[#B77A3D] px-7 text-sm font-medium text-white shadow-lg shadow-[#B77A3D]/25 transition-all hover:bg-[#A56D35] hover:shadow-xl hover:shadow-[#B77A3D]/30 sm:w-auto"
                data-testid="button-view-work"
              >
                View My Work
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <WouterLink href="/consulting">
              <Button
                variant="outline"
                size="lg"
                className="h-11 w-full rounded-full border-border/80 bg-white/60 px-7 text-sm font-medium backdrop-blur-sm transition-all hover:border-[#B77A3D]/40 hover:bg-[#F4ECE2]/50 sm:w-auto"
                data-testid="button-consulting-case-studies"
              >
                <Briefcase className="h-4 w-4" />
                Consulting Case Studies
              </Button>
            </WouterLink>
          </motion.div>
        </div>

        <HeroPortrait className="hidden translate-y-6 lg:flex lg:translate-y-10" />
      </div>
    </section>
  );
}
