import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useSkills, useProjects, useExperience } from "@/hooks/use-portfolio";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillCard } from "@/components/SkillCard";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ResumeModal } from "@/components/ResumeModal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, PenLine, Phone, Download, MessageCircle } from "lucide-react";
import { SiStackoverflow } from "react-icons/si";
import profileImage from "@assets/arunkumar-k.png";
import { updateSEO } from "@/lib/seo";

export default function Home() {
  const { data: skills, isLoading: skillsLoading } = useSkills();
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: experience, isLoading: experienceLoading } = useExperience();
  const [showResume, setShowResume] = useState(false);

  // Initialize SEO on component mount
  useEffect(() => {
    updateSEO({
      title: "ArunKumar Kandasamy | Solutions Architect & Product Manager",
      description: "Forward-focused Solutions Architect / Tech Lead with 16+ years of experience designing and delivering web platforms and enterprise products across Agile and Hybrid delivery models. Blend hands-on architecture and engineering leadership (Ruby on Rails, cloud, performance, distributed systems) with end-to-end technical delivery ownership (scope, planning, risk management, release governance) to ship predictable outcomes.",
      keywords: "Lead Technical Consultant, Technical Product Manager, Ruby on Rails Expert, React.js Developer, Solutions Architect, Agile Leadership, Full-Stack Development, SaaS Product Management, Technical Delivery, Cloud Architecture",
      url: window.location.origin,
      image: "/arunkumar-art_1769490512369.png"
    });
  }, []);

  const technicalSkills = skills?.filter(s => s.category === "Technical") || [];
  const managementSkills = skills?.filter(s => s.category === "Management") || [];

  const areasOfImpact = [
  "Ruby on Rails (v3 → v7.2), REST & GraphQL APIs, RBAC",
  "React / Next.js / Angular, Tailwind CSS",
  "PostgreSQL, MySQL, MongoDB, Redis",
  "Sidekiq, Kafka, ActiveMQ",
  "AWS, Heroku, Linode",
  "Docker, GitHub Actions, Jenkins, CircleCI"
];

  const strategicWins = [
  "Cut p95 latency by ~32% and reduced slow queries by 45% across enterprise platforms",
  "Rebuilt CI/CD pipelines to shrink build times by 35% and double deployment frequency",
  "Ran multi-version Rails upgrades for large teams without a single rollback",
  "Modernised a legacy HR platform, doubling deploy speed and trimming cloud spend by 20%",
  "Built hybrid data sync (on-prem Tally → cloud) processing millions of financial rows daily",
  "VoiceHunt.news: Rails + Next.js platform with 91% cache hits and 52% lower TTFB"
];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header>
        <Navbar />
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center py-12 md:py-20" aria-label="Hero section">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-10 w-full">
            <div className="flex-1">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="font-mono text-primary text-xs mb-4"
              >
                Hi, my name is
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight"
              >
                ArunKumar Kandasamy.
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-2xl md:text-3xl font-medium text-muted-foreground mt-2"
              >
                <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2 text-2xl md:text-3xl font-medium text-muted-foreground">
                <span>Technical Lead & Solution Architect</span>
                <span className="text-primary">|</span>
                <span>Engineering Leadership</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-lg md:text-xl font-medium text-muted-foreground">
                <span>Scalable Backends</span>
                <span className="text-primary/60">—</span>
                <span className="font-mono text-sm bg-muted px-2 py-1 rounded">RoR, React & Next.js, AWS</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-lg md:text-xl font-medium text-muted-foreground">
                <span>Driving Predictable SDLC Outcomes</span>
                <span className="text-primary/60">—</span>
                <span className="text-primary font-semibold">Co-founder @ ThinkPro Technologies</span>
              </div>
            </div>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="max-w-none md:max-w-lg text-sm text-muted-foreground mt-6 leading-relaxed"
              >
                Forward-focused Solutions Architect / Tech Lead with 16+ years of experience designing and delivering web platforms and enterprise products across Agile and Hybrid delivery models. Blend hands-on architecture and engineering leadership (Ruby on Rails, cloud, performance, distributed systems) with end-to-end technical delivery ownership (scope, planning, risk management, release governance) to ship predictable outcomes.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3 mt-8"
              >
                <Link to="projects" smooth={true} duration={500}>
                  <Button variant="default" size="sm" className="font-mono text-xs gap-2" data-testid="button-view-work">
                    View My Work
                    <ArrowRight className="w-3 h-3" />
                  </Button>
                </Link>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center md:justify-end shrink-0"
            >
              <div className="relative w-48 h-48 md:w-56 md:h-56">
                <div className="absolute inset-0 border border-primary/30 rounded translate-x-3 translate-y-3" />
                <img 
                  src={profileImage} 
                  alt="ArunKumar Kandasamy" 
                  className="relative w-full h-full object-cover rounded bg-card"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-20" aria-label="About section">
          <SectionHeading number="01" title="About" />
          
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Hello! I'm <span className="text-foreground font-medium">Arun</span>, a Chennai-based Solution Architect, ex-founder, and long-time Rails tinkerer with deep expertise in building scalable web platforms.
            </p>
            
              <p className="font-medium text-foreground">My Philosophy:</p>
              <p className="italic text-muted-foreground">
                "Good architecture, to me, is a promise kept to the future. That shows up in how I work: design first, APIs and domains that age well, and delivery systems that work just as reliably on Mondays as they do on release day."
              </p>
              
              <p className="font-medium text-foreground mt-4">What defines my work:</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-primary">🚀</span>
                  <span><span className="font-medium text-foreground">Performance as a feature</span> — profiling, indexing, smart caching, and DB tuning that regularly deliver 30%+ latency improvements</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary">🔍</span>
                  <span><span className="font-medium text-foreground">Operational truth</span> — APM dashboards, clean logs, and alerts that actually help at 2 a.m.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary">🤝</span>
                  <span><span className="font-medium text-foreground">Clarity over chaos</span> — short written decision records and sprint plans that align product, QA, and engineering</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary">🔄</span>
                  <span><span className="font-medium text-foreground">Change without drama</span> — zero-downtime Rails & Postgres upgrades, legacy modernisation, monolith split-outs, and container moves</span>
                </div>
              </div>
            
            <p className="text-primary font-medium text-xs border-l-2 border-primary pl-3">
              Currently evolving to adopt AI Development — actively learning Machine Learning to integrate intelligent capabilities into modern platforms.
            </p>
            
            <div className="pt-4">
              <h4 className="font-mono text-foreground text-xs mb-3">Technical Skills:</h4>
              {skillsLoading ? (
                <div className="animate-pulse h-20 bg-muted rounded" />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-0.5">
                  {technicalSkills.map((skill, idx) => (
                    <SkillCard key={skill.id} skill={skill} index={idx} />
                  ))}
                </div>
              )}
              
              <h4 className="font-mono text-foreground text-xs mb-3 mt-4">Leadership & Management:</h4>
              {skillsLoading ? (
                <div className="animate-pulse h-12 bg-muted rounded" />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-0.5">
                  {managementSkills.map((skill, idx) => (
                    <SkillCard key={skill.id} skill={skill} index={idx} />
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border">
            <h4 className="font-mono text-foreground text-xs mb-3">Education:</h4>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">B.Tech, Electrical and Electronics Engineering</span>
              <br />
              <span className="text-xs">Bharath University, Chennai (2005-2009)</span>
            </p>
          </div>
        </section>

        {/* Areas of Impact & Strategic Wins Section */}
        <section id="impact" className="py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <SectionHeading number="02" title="Areas of Impact" />
              <ul className="space-y-2">
                {areasOfImpact.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed"
                  >
                    <span className="text-primary mt-0.5 shrink-0">-</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div>
              <SectionHeading number="" title="Strategic Wins" />
              <ul className="space-y-3">
                {strategicWins.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed"
                  >
                    <span className="text-primary mt-0.5 shrink-0">-</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 md:py-20" aria-label="Experience section">
          <SectionHeading number="03" title="Experience" />
          {experienceLoading ? (
            <div className="space-y-4">
              <div className="h-16 bg-muted animate-pulse rounded" />
              <div className="h-16 bg-muted animate-pulse rounded" />
            </div>
          ) : (
            <ExperienceTimeline experiences={experience || []} />
          )}
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-20" aria-label="Projects section">
          <SectionHeading number="04" title="Projects" />
          
          {projectsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map(i => <div key={i} className="h-40 bg-muted animate-pulse rounded" />)}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects?.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-20" aria-label="Contact section">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-lg mx-auto"
          >
            <p className="font-mono text-primary text-xs mb-2">05. What's Next?</p>
            <h2 className="text-2xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              👋 Have a puzzle, a performance headache, or a system that needs to stay fast and boring in production? Let's connect and explore options.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a href="mailto:k.arun@outlook.com" data-testid="link-contact-email">
                <Button variant="outline" size="sm" className="font-mono text-xs gap-2">
                  <Mail className="w-3 h-3" />
                  k.arun@outlook.com
                </Button>
              </a>
              <a href="tel:+919360740047" data-testid="link-contact-phone">
                <Button variant="outline" size="sm" className="font-mono text-xs gap-2">
                  <Phone className="w-3 h-3" />
                  +91 9360740047 (India)
                </Button>
              </a>
            </div>
            
            <p className="text-xs text-muted-foreground mb-4 flex items-center justify-center gap-1">
              <MessageCircle className="w-3 h-3 text-primary" />
              Also available on WhatsApp
            </p>
            
            <div className="flex justify-center gap-6">
              <a 
                href="https://github.com/arunkumark1ly" 
                target="_blank" 
                rel="noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors" 
                data-testid="link-github"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/arun1ly/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors" 
                data-testid="link-linkedin"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://stackoverflow.com/users/3089625/arunkumar-kandasamy" 
                target="_blank" 
                rel="noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors" 
                data-testid="link-stackoverflow"
                title="Stack Overflow"
              >
                <SiStackoverflow className="w-5 h-5" />
              </a>
              <a 
                href="https://voicehunt.news/authors/arun1ly" 
                target="_blank" 
                rel="noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors" 
                data-testid="link-blog"
                title="Blog"
              >
                <PenLine className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-border">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} ArunKumar Kandasamy. All rights reserved.
        </p>
      </footer>

      <ResumeModal 
        open={showResume} 
        onOpenChange={setShowResume}
        skills={skills || []}
        experience={experience || []}
        projects={projects || []}
      />
    </div>
  );
}
