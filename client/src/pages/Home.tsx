import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useSkills, useProjects, useExperience } from "@/hooks/use-portfolio";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillCard } from "@/components/SkillCard";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  const { data: skills, isLoading: skillsLoading } = useSkills();
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: experience, isLoading: experienceLoading } = useExperience();

  const technicalSkills = skills?.filter(s => s.category === "Technical") || [];
  const managementSkills = skills?.filter(s => s.category === "Management") || [];

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
            Arunkumar Kandasamy.
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-2xl md:text-3xl font-medium text-muted-foreground mt-2"
          >
            I build things for the web.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="max-w-md text-sm text-muted-foreground mt-6 leading-relaxed"
          >
            Lead Technical Consultant with 10+ years of experience in Full-Stack Development and Agile Leadership. Bridging the gap between engineering and product vision.
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
                Hello! My journey started as a <span className="text-foreground font-medium">Senior Software Engineer</span> and has evolved into a role where I lead technical strategy and product development.
              </p>
              <p>
                My focus is building accessible, inclusive products and digital experiences. I've worked at advertising agencies, start-ups, and large corporations.
              </p>
              
              <div className="pt-4">
                <h4 className="font-mono text-foreground text-xs mb-3">Technologies I work with:</h4>
                {skillsLoading ? (
                  <div className="animate-pulse h-20 bg-muted rounded" />
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                    {technicalSkills.slice(0, 9).map((skill, idx) => (
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
                  alt="Arunkumar Kandasamy" 
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
              I'm not currently looking for new opportunities, but my inbox is always open. Whether you have a question or just want to say hi, I'll get back to you!
            </p>
            
            <a href="mailto:hello@arunkumar.dev" data-testid="link-contact-email">
              <Button variant="outline" className="font-mono text-xs gap-2">
                <Mail className="w-3 h-3" />
                hello@arunkumar.dev
              </Button>
            </a>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-border">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-github">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-linkedin">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="mailto:hello@arunkumar.dev" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-email">
            <Mail className="w-4 h-4" />
          </a>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          Designed & Built by Arunkumar Kandasamy
        </p>
      </footer>
    </div>
  );
}
