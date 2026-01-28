'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useSkills, useProjects, useExperience } from './hooks/use-portfolio';
import { Navbar } from './Navbar';
import { SectionHeading } from './SectionHeading';
import { SkillCard } from './SkillCard';
import { ProjectCard } from './ProjectCard';
import { ExperienceTimeline } from './ExperienceTimeline';
import { ResumeModal } from './ResumeModal';
import { Button } from './ui/button';
import { ArrowRight, Github, Linkedin, Mail, PenLine, Phone, Download, MessageCircle } from 'lucide-react';
import { SiStackoverflow } from 'react-icons/si';
const profileImage = '/arunkumar-art_1769490512369.png';
import type { Skill, Experience, Project } from '@shared/schema';

export default function HomePage() {
  const { data: skills, isLoading: skillsLoading } = useSkills();
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: experience, isLoading: experienceLoading } = useExperience();
  const [showResume, setShowResume] = useState(false);

  const technicalSkills = skills?.filter((s: Skill) => s.category === "Technical") || [];
  const managementSkills = skills?.filter((s: Skill) => s.category === "Management") || [];

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
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 w-full">
            <div className="flex-1">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-primary font-medium mb-4"
              >
                Solution Architect & Tech Lead
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
              >
                ArunKumar Kandasamy
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
              >
                Forward-focused Solution Architect with 16+ years of experience designing and delivering web platforms and enterprise products. I blend hands-on architecture and engineering leadership with end-to-end technical delivery ownership to ship predictable outcomes.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <Button
                  onClick={() => setShowResume(true)}
                  size="lg"
                  className="gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
                
                <Link to="contact" smooth={true} duration={500}>
                  <Button variant="outline" size="lg" className="gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Get In Touch
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex gap-4"
              >
                <a
                  href="https://linkedin.com/in/arun1ly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/arunkumark1ly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="mailto:k.arun@outlook.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="tel:+919003457395"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Phone"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl"></div>
                <img
                  src={profileImage}
                  alt="ArunKumar Kandasamy"
                  className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <SectionHeading number="01" title="About Me" />
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Areas of Impact</h3>
              <ul className="space-y-3">
                {areasOfImpact.map((impact, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{impact}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Strategic Wins</h3>
              <ul className="space-y-3">
                {strategicWins.map((win, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{win}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <SectionHeading number="02" title="Skills & Expertise" />
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {technicalSkills.map((skill, index) => (
                  <SkillCard key={skill.id} skill={skill} index={index} />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Leadership & Management</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {managementSkills.map((skill, index) => (
                  <SkillCard key={skill.id} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <SectionHeading number="03" title="Professional Experience" />
          
          <ExperienceTimeline experiences={(experience as Experience[]) || []} />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <SectionHeading number="04" title="Key Projects" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects?.map((project: Project, index: number) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <SectionHeading number="05" title="Get In Touch" />
          
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-muted-foreground mb-8">
              I'm always interested in discussing new opportunities, challenging projects, or sharing insights about technology and architecture.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:k.arun@outlook.com">
                <Button variant="outline" size="lg" className="gap-2">
                  <Mail className="w-4 h-4" />
                  k.arun@outlook.com
                </Button>
              </a>
              
              <a href="tel:+919003457395">
                <Button variant="outline" size="lg" className="gap-2">
                  <Phone className="w-4 h-4" />
                  +91 9003457395
                </Button>
              </a>
              
              <a href="https://linkedin.com/in/arun1ly" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="gap-2">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Resume Modal */}
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
