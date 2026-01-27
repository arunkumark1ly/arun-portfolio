import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useSkills, useProjects, useExperience } from "@/hooks/use-portfolio";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillCard } from "@/components/SkillCard";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, PenLine } from "lucide-react";
import { SiStackoverflow } from "react-icons/si";

export default function Home() {
  const { data: skills, isLoading: skillsLoading } = useSkills();
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: experience, isLoading: experienceLoading } = useExperience();

  const technicalSkills = skills?.filter(s => s.category === "Technical") || [];

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
            16+ years of experience designing and delivering web platforms and enterprise products. I blend hands-on architecture and engineering leadership with end-to-end technical delivery ownership to ship predictable outcomes.
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
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <SectionHeading number="01" title="About" />
          
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-3 space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm a <span className="text-foreground font-medium">Solution Architect</span> and <span className="text-foreground font-medium">Tech Lead</span> with deep expertise in Ruby on Rails, cloud infrastructure, and distributed systems. My journey started as a software developer and evolved into leading technical strategy and product development.
              </p>
              <p>
                I focus on building scalable, accessible platforms with pragmatic patterns — from API design and background processing to caching and observability. I've worked across startups, consulting firms, and enterprise organizations.
              </p>
              <p className="text-primary font-medium">
                Currently evolving to adopt AI Development — actively learning Machine Learning to integrate intelligent capabilities into modern platforms.
              </p>
              
              <div className="pt-4">
                <h4 className="font-mono text-foreground text-xs mb-3">Technologies I work with:</h4>
                {skillsLoading ? (
                  <div className="animate-pulse h-20 bg-muted rounded" />
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                    {technicalSkills.map((skill, idx) => (
                      <SkillCard key={skill.id} skill={skill} index={idx} />
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            <div className="md:col-span-2 flex justify-center md:justify-end">
              <div className="relative w-40 h-40">
                <div className="absolute inset-0 border border-primary/30 rounded translate-x-2 translate-y-2" />
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80" 
                  alt="ArunKumar Kandasamy" 
                  className="relative w-full h-full object-cover rounded"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <SectionHeading number="02" title="Experience" />
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
          <SectionHeading number="03" title="Projects" />
          
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
            className="text-center max-w-md mx-auto"
          >
            <p className="font-mono text-primary text-xs mb-2">04. What's Next?</p>
            <h2 className="text-2xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and architecture. Feel free to reach out!
            </p>
            
            <a href="mailto:k.arun@outlook.com" data-testid="link-contact-email">
              <Button variant="outline" className="font-mono text-xs gap-2">
                <Mail className="w-3 h-3" />
                k.arun@outlook.com
              </Button>
            </a>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-border">
        <div className="flex justify-center gap-6 mb-4">
          <a 
            href="https://github.com/arunkumark1ly" 
            target="_blank" 
            rel="noreferrer" 
            className="text-muted-foreground hover:text-primary transition-colors" 
            data-testid="link-github"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a 
            href="https://www.linkedin.com/in/arun1ly/" 
            target="_blank" 
            rel="noreferrer" 
            className="text-muted-foreground hover:text-primary transition-colors" 
            data-testid="link-linkedin"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a 
            href="https://stackoverflow.com/users/3089625/arunkumar-kandasamy" 
            target="_blank" 
            rel="noreferrer" 
            className="text-muted-foreground hover:text-primary transition-colors" 
            data-testid="link-stackoverflow"
            title="Stack Overflow"
          >
            <SiStackoverflow className="w-4 h-4" />
          </a>
          <a 
            href="https://voicehunt.news/authors/arun1ly" 
            target="_blank" 
            rel="noreferrer" 
            className="text-muted-foreground hover:text-primary transition-colors" 
            data-testid="link-blog"
            title="Blog"
          >
            <PenLine className="w-4 h-4" />
          </a>
          <a 
            href="mailto:k.arun@outlook.com" 
            className="text-muted-foreground hover:text-primary transition-colors" 
            data-testid="link-email"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          Designed & Built by ArunKumar Kandasamy
        </p>
      </footer>
    </div>
  );
}
