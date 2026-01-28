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
import profileImage from "@assets/arunkumar-art_1769490512369.png";
import { updateSEO } from "@/lib/seo";

export default function Home() {
  const { data: skills, isLoading: skillsLoading } = useSkills();
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: experience, isLoading: experienceLoading } = useExperience();
  const [showResume, setShowResume] = useState(false);

  // Initialize SEO on component mount
  useEffect(() => {
    updateSEO({
      title: "ArunKumar Kandasamy | Lead Technical Consultant & Product Manager",
      description: "Forward-focused Solution Architect and Technical Lead with 10+ years driving end-to-end product ownership from discovery to UAT. Expert in Ruby on Rails, React.js, and scalable system design.",
      keywords: "Lead Technical Consultant, Technical Product Manager, Ruby on Rails Expert, React.js Developer, Solution Architect, Agile Leadership, Full-Stack Development, SaaS Product Management, Technical Delivery, Cloud Architecture",
      url: window.location.origin,
      image: "/arunkumar-art_1769490512369.png"
    });
  }, []);

  const technicalSkills = skills?.filter(s => s.category === "Technical") || [];
  const managementSkills = skills?.filter(s => s.category === "Management") || [];

  const areasOfImpact = [
    "Solution architecture (HLD/LLD), API design (REST/GraphQL), and domain modeling",
    "Performance engineering (profiling, caching, query/index optimization, scalability practices)",
    "Asynchronous & event-driven systems (Sidekiq, queues, messaging, retries, idempotency)",
    "Cloud & DevOps (Docker, CI/CD, release automation, environment strategy, production readiness)",
    "Modernization programs (Rails upgrades, refactoring, zero-downtime migrations, test coverage)",
    "Technical delivery leadership (planning, execution tracking, dependency management, incident triage, stakeholder updates)"
  ];

  const strategicWins = [
    "Delivered customer-facing releases and production fixes under tight timelines by aligning stakeholders, managing dependencies, and driving release readiness across multiple teams.",
    "Led modernization and performance initiatives across Rails platforms through profiling, refactoring, and database tuning, reducing p95 latency by 32% and lowering slow queries by 45%.",
    "Built and stabilized CI/CD and deployment practices to improve repeatability and reduce manual steps, improving deployment frequency from 1-2/month to 2/week and cutting build time by 35%."
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header>
        <Navbar />
      </header>

      <main className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center py-20" aria-label="Hero section">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 w-full">
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
                Solution Architect & Tech Lead.
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="max-w-lg text-sm text-muted-foreground mt-6 leading-relaxed"
              >
                Forward-focused Solution Architect with 16+ years of experience designing and delivering web platforms and enterprise products across Agile and Hybrid delivery models. I blend hands-on architecture and engineering leadership with end-to-end technical delivery ownership to ship predictable outcomes.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex gap-3 mt-8"
              >
                <Link to="projects" smooth={true} duration={500}>
                  <Button variant="default" size="sm" className="font-mono text-xs gap-2" data-testid="button-view-work">
                    View My Work
                    <ArrowRight className="w-3 h-3" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="font-mono text-xs gap-2" 
                  onClick={() => setShowResume(true)}
                  data-testid="button-download-resume"
                >
                  <Download className="w-3 h-3" />
                  Resume
                </Button>
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
        <section id="about" className="py-20" aria-label="About section">
          <SectionHeading number="01" title="About" />
          
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Hello! I'm a <span className="text-foreground font-medium">Solution Architect</span> and <span className="text-foreground font-medium">Tech Lead</span> with deep expertise in Ruby on Rails, cloud infrastructure, and distributed systems.
            </p>
            
            <div className="space-y-2 text-xs">
              <p className="font-medium text-foreground">Value Proposition:</p>
              <ul className="list-disc pl-4 space-y-1">
                <li>Own end-to-end delivery from discovery to production, bridging product intent to technical execution through clear plans, estimates, milestones, and release readiness.</li>
                <li>Architect scalable Rails-based platforms with pragmatic patterns (API design, background processing, caching, observability) and modern frontend delivery.</li>
                <li>Improve reliability and performance through query optimization, async architecture, caching strategies, and production troubleshooting.</li>
                <li>Lead cross-functional execution with strong stakeholder communication, risk/issue management, and continuous improvement.</li>
              </ul>
            </div>
            
            <p className="text-primary font-medium text-xs border-l-2 border-primary pl-3">
              Currently evolving to adopt AI Development — actively learning Machine Learning to integrate intelligent capabilities into modern platforms.
            </p>
            
            <div className="pt-4">
              <h4 className="font-mono text-foreground text-xs mb-3">Technical Skills:</h4>
              {skillsLoading ? (
                <div className="animate-pulse h-20 bg-muted rounded" />
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-0.5">
                  {technicalSkills.map((skill, idx) => (
                    <SkillCard key={skill.id} skill={skill} index={idx} />
                  ))}
                </div>
              )}
              
              <h4 className="font-mono text-foreground text-xs mb-3 mt-4">Leadership & Management:</h4>
              {skillsLoading ? (
                <div className="animate-pulse h-12 bg-muted rounded" />
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-0.5">
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
        <section id="impact" className="py-20">
          <div className="grid md:grid-cols-2 gap-8">
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
        <section id="experience" className="py-20" aria-label="Experience section">
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

        {/* Skills Section */}
        <section id="skills" className="py-20" aria-label="Skills section">
          <SectionHeading number="02" title="Skills" />
          
          {projectsLoading ? (
            <div className="grid md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map(i => <div key={i} className="h-40 bg-muted animate-pulse rounded" />)}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              {projects?.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20" aria-label="Projects section">
          <SectionHeading number="04" title="Projects" />
          
          {projectsLoading ? (
            <div className="grid md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map(i => <div key={i} className="h-40 bg-muted animate-pulse rounded" />)}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              {projects?.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20" aria-label="Contact section">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-lg mx-auto"
          >
            <p className="font-mono text-primary text-xs mb-2">05. What's Next?</p>
            <h2 className="text-2xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and architecture. Feel free to reach out!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a href="mailto:k.arun@outlook.com" data-testid="link-contact-email">
                <Button variant="outline" size="sm" className="font-mono text-xs gap-2">
                  <Mail className="w-3 h-3" />
                  k.arun@outlook.com
                </Button>
              </a>
              <a href="tel:+919003457395" data-testid="link-contact-phone">
                <Button variant="outline" size="sm" className="font-mono text-xs gap-2">
                  <Phone className="w-3 h-3" />
                  +91 9003457395 (India)
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
        <p className="font-mono text-xs text-muted-foreground mt-2">
          Built with React, TypeScript & Tailwind CSS
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
