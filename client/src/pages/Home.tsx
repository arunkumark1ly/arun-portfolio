import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSkills, useProjects, useExperience } from "@/hooks/use-portfolio";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillCard } from "@/components/SkillCard";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ResumeModal } from "@/components/ResumeModal";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { Button } from "@/components/ui/button";
import { Link as WouterLink } from "wouter";
import { Github, Linkedin, Mail, PenLine, Phone, MessageCircle } from "lucide-react";
import { SiStackoverflow } from "react-icons/si";
import { FaqSection } from "@/components/FaqSection";
import { absoluteUrl } from "@/lib/site-config";
import { HOME_FAQS, updateSEO } from "@/lib/seo";

export default function Home() {
  const { data: skills, isLoading: skillsLoading } = useSkills();
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: experience, isLoading: experienceLoading } = useExperience();
  const [showResume, setShowResume] = useState(false);

  // Initialize SEO on component mount
  useEffect(() => {
    updateSEO({
      title: "ArunKumar Kandasamy - Principal Software Engineer",
      description:
        "With 16+ years of experience designing and delivering web platforms and enterprise products across Agile and Hybrid delivery models. Blend hands-on architecture and engineering leadership (Ruby on Rails, cloud, performance, distributed systems) with end-to-end technical delivery ownership (scope, planning, risk management, release governance) to ship predictable outcomes.",
      keywords:
        "Lead Technical Consultant, Technical Product Manager, Ruby on Rails Expert, React.js Developer, Solutions Architect, Agile Leadership, Full-Stack Development, SaaS Product Management, Technical Delivery, Cloud Architecture",
      url: absoluteUrl("/"),
      path: "/",
      structuredData: {
        includeProfilePage: true,
        faqs: [...HOME_FAQS],
      },
    });
  }, []);

  const technicalSkills = skills?.filter(s => s.category === "Technical") || [];
  const aiAutomationSkills = skills?.filter(s => s.category === "AI & Automation") || [];
  const managementSkills = skills?.filter(s => s.category === "Management") || [];

  const aiEngineeringPractices = [
    {
      lead: "AI-assisted software engineering",
      body: "Implemented practices across Ruby on Rails application development and DevOps workflows by leveraging Claude, Cursor IDE, and LLM-based coding assistants for architecture design, code generation, refactoring, test automation, and technical documentation.",
    },
    {
      lead: "Dockerized CI/CD automation",
      body: "Integrated AI capabilities into Dockerized environments and GitHub Actions to optimize CI/CD pipelines, automate code quality checks, security scanning, release validations, and deployment processes — significantly improving development velocity, deployment reliability, and operational efficiency.",
    },
    {
      lead: "Prompt engineering & AI code review",
      body: "Established prompt-engineering and AI code-review guidelines to maintain consistency, security, and quality standards across AI-assisted contributions to production Rails services.",
    },
  ];

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

      <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <HeroSection />

        {/* About Section */}
        <section id="about" className="py-12 md:py-20" aria-label="About section">
          <SectionHeading number="01" title="About" />
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p className="text-sm text-foreground font-medium leading-relaxed border-l-2 border-primary pl-3">
              Professional summary: Chennai-based Principal Software Engineer and independent technical consultant with 16+ years delivering Ruby on Rails, React, and cloud platforms — from architecture and hands-on engineering to predictable release governance.
            </p>
            
              <p className="font-medium text-foreground">My Philosophy:</p>
              <p className="italic text-muted-foreground">
                "Good architecture, to me, is a promise kept to the future. That shows up in how I work: design first, APIs and domains that age well, and delivery systems that work just as reliably on Mondays as they do on release day."
              </p>
              
                            <p className="font-medium text-foreground mt-4">What defines my work:</p>
              <ul className="space-y-2 list-disc pl-5">
                <li><span className="font-medium text-foreground">Performance as a feature</span> — profiling, indexing, smart caching, and DB tuning that regularly deliver 30%+ latency improvements</li>
                <li><span className="font-medium text-foreground">Operational truth</span> — APM dashboards, clean logs, and alerts that actually help at 2 a.m.</li>
                <li><span className="font-medium text-foreground">Clarity over chaos</span> — short written decision records and sprint plans that align product, QA, and engineering</li>
                <li><span className="font-medium text-foreground">Change without drama</span> — zero-downtime Rails & Postgres upgrades, legacy modernisation, monolith split-outs, and container moves</li>
              </ul>

            <div className="mt-6 rounded-xl border border-primary/25 bg-primary/5 p-5 sm:p-6">
              <h4 className="font-mono text-primary text-xs uppercase tracking-[0.2em] mb-4">
                AI-Augmented Engineering Practices
              </h4>
              <ul className="space-y-4">
                {aiEngineeringPractices.map((item, index) => (
                  <motion.li
                    key={item.lead}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06, duration: 0.3 }}
                    className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                  >
                    <span className="text-primary mt-1 shrink-0 text-base leading-none">•</span>
                    <span>
                      <span className="font-semibold text-foreground">{item.lead}:</span>{" "}
                      {item.body}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
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
              
              <h4 className="font-mono text-foreground text-xs mb-3 mt-4">AI & Automation Tools:</h4>
              {skillsLoading ? (
                <div className="animate-pulse h-8 bg-muted rounded" />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-0.5">
                  {aiAutomationSkills.map((skill, idx) => (
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
        <section id="impact" className="py-12 md:py-20" aria-label="Areas of impact and strategic wins">
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
          <p className="mt-6 text-sm text-muted-foreground">
            Independent consulting case studies with full delivery narratives are on the{" "}
            <WouterLink href="/consulting" className="text-primary hover:underline font-medium">
              consulting engagements page
            </WouterLink>
            .
          </p>
        </section>

        {/* Book a Conversation Section */}
        <section
          id="book-conversation"
          className="py-12 md:py-16"
          aria-label="Book a conversation section"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
          >
            <div className="grid lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className="border-b border-border p-6 sm:p-8 lg:border-b-0 lg:border-r">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">
                  05. Book a Conversation
                </p>
                <h2 className="mt-3 text-2xl font-bold text-foreground">
                  Reserve a time to talk through your next build.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  If you want to discuss architecture, Rails modernization, delivery strategy, or performance work, you can book a slot directly here without interrupting the existing contact options below.
                </p>
              </div>

              <div className="bg-background/40 p-3 sm:p-4">
                <CalendlyEmbed />
              </div>
            </div>
          </motion.div>
        </section>

        <FaqSection faqs={HOME_FAQS} sectionNumber="06" />

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-20" aria-label="Contact section">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-lg mx-auto"
          >
            <p className="font-mono text-primary text-xs mb-2">07. What's Next?</p>
            <h2 className="text-2xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              👋 Have a puzzle, a performance headache, or a system that needs to stay fast and boring in production? Let's connect and explore options.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a href="mailto:kandasamy1ly@gmail.com" data-testid="link-contact-email">
                <Button variant="outline" size="sm" className="font-mono text-xs gap-2">
                  <Mail className="w-3 h-3" />
                  kandasamy1ly@gmail.com
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
                aria-label="GitHub profile"
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
                aria-label="LinkedIn profile"
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
                aria-label="Stack Overflow profile"
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
                aria-label="VoiceHunt blog"
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
