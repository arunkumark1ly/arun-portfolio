import { useState } from "react";
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
import { ArrowRight, Github, Linkedin, Mail, PenLine, ChevronDown, Phone, Download } from "lucide-react";
import { SiStackoverflow } from "react-icons/si";
import profileImage from "@assets/arunkumar-art_1769490512369.png";

export default function Home() {
  const { data: skills, isLoading: skillsLoading } = useSkills();
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: experience, isLoading: experienceLoading } = useExperience();
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const technicalSkills = skills?.filter(s => s.category === "Technical") || [];
  const managementSkills = skills?.filter(s => s.category === "Management") || [];

  const displayedTechSkills = showAllSkills ? technicalSkills : technicalSkills.slice(0, 9);
  const displayedMgmtSkills = showAllSkills ? managementSkills : managementSkills.slice(0, 4);

  const areasOfImpact = [
    "Solution architecture (HLD/LLD), API design (REST/GraphQL), and domain modeling",
    "Performance engineering (profiling, caching, query/index optimization, scalability practices)",
    "Asynchronous & event-driven systems (Sidekiq, queues, messaging, retries, idempotency)",
    "Cloud & DevOps (Docker, CI/CD, release automation, environment strategy, production readiness)",
    "Modernization programs (Rails upgrades, refactoring, zero-downtime migrations, test coverage)",
    "Technical delivery leadership (planning, execution tracking, dependency management, incident triage, stakeholder updates)"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex flex-col justify-center py-20">
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
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <SectionHeading number="01" title="About" />
          
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-3 space-y-4 text-sm text-muted-foreground leading-relaxed">
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
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-0.5">
                    {displayedTechSkills.map((skill, idx) => (
                      <SkillCard key={skill.id} skill={skill} index={idx} />
                    ))}
                  </div>
                )}
                
                <h4 className="font-mono text-foreground text-xs mb-3 mt-4">Leadership & Management:</h4>
                {skillsLoading ? (
                  <div className="animate-pulse h-12 bg-muted rounded" />
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-0.5">
                    {displayedMgmtSkills.map((skill, idx) => (
                      <SkillCard key={skill.id} skill={skill} index={idx} />
                    ))}
                  </div>
                )}
                
                {(technicalSkills.length > 9 || managementSkills.length > 4) && (
                  <button
                    onClick={() => setShowAllSkills(!showAllSkills)}
                    className="flex items-center gap-1 text-xs text-primary mt-3 hover:underline"
                    data-testid="button-toggle-skills"
                  >
                    {showAllSkills ? "Show less" : `Show all ${technicalSkills.length + managementSkills.length} skills`}
                    <ChevronDown className={`w-3 h-3 transition-transform ${showAllSkills ? "rotate-180" : ""}`} />
                  </button>
                )}
              </div>
            </div>
            
            <div className="md:col-span-2 flex justify-center md:justify-end">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 border border-primary/30 rounded translate-x-3 translate-y-3" />
                <img 
                  src={profileImage} 
                  alt="ArunKumar Kandasamy" 
                  className="relative w-full h-full object-cover rounded bg-card"
                />
              </div>
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

        {/* Areas of Impact Section */}
        <section id="impact" className="py-20">
          <SectionHeading number="02" title="Areas of Impact" />
          
          <ul className="space-y-3">
            {areasOfImpact.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <span className="text-primary mt-1">-</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
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
        <section id="projects" className="py-20">
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
        <section id="contact" className="py-20">
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
          Designed & Built by ArunKumar Kandasamy
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
