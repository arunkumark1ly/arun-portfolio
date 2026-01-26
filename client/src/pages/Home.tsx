import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useSkills, useProjects, useExperience } from "@/hooks/use-portfolio";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillCard } from "@/components/SkillCard";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  const { data: skills, isLoading: skillsLoading } = useSkills();
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: experience, isLoading: experienceLoading } = useExperience();

  const technicalSkills = skills?.filter(s => s.category === "Technical") || [];
  const managementSkills = skills?.filter(s => s.category === "Management") || [];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center container mx-auto px-4 md:px-16 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-primary mb-3 text-xs"
        >
          Hi, my name is
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold text-foreground mb-2 tracking-tight"
        >
          Arunkumar Kandasamy.
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl md:text-4xl font-semibold text-muted-foreground mb-4"
        >
          I build things for the web.
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-lg text-sm text-muted-foreground mb-8 leading-relaxed"
        >
          Lead Technical Consultant with 10+ years of experience in Full-Stack Development (Ruby on Rails, React) and Agile Leadership. Bridging the gap between engineering and product vision.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex gap-3"
        >
          <Link to="projects" smooth={true} duration={500}>
            <Button size="sm" variant="outline" className="border-primary text-primary font-mono text-xs" data-testid="button-view-work">
              View My Work
            </Button>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <Button size="sm" className="font-mono text-xs" data-testid="button-connect">
              Let's Connect
            </Button>
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block animate-bounce"
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 container mx-auto px-4 md:px-16">
        <SectionHeading number="01" title="About Me" />
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-3 text-sm text-muted-foreground">
            <p>
              Hello! My journey started as a <span className="text-primary font-medium">Senior Software Engineer</span> and has evolved into a role where I lead technical strategy and product development.
            </p>
            <p>
              My main focus these days is building accessible, inclusive products and digital experiences. I've had the privilege of working at an advertising agency, a start-up, and large corporations.
            </p>
            <p>
              Technologies I've been working with:
            </p>
            
            <div className="mt-6">
              <h4 className="font-mono text-foreground mb-3 border-b border-border pb-1 inline-block text-xs">Technical Skills</h4>
              {skillsLoading ? (
                <div className="animate-pulse h-16 bg-muted rounded" />
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
                  {technicalSkills.map((skill, idx) => (
                    <SkillCard key={skill.id} skill={skill} index={idx} />
                  ))}
                </div>
              )}
              
              <h4 className="font-mono text-foreground mb-3 border-b border-border pb-1 inline-block text-xs mt-3">Management Skills</h4>
              {skillsLoading ? (
                <div className="animate-pulse h-16 bg-muted rounded" />
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {managementSkills.map((skill, idx) => (
                    <SkillCard key={skill.id} skill={skill} index={idx} />
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="relative group mx-auto md:mx-0 max-w-[200px]">
            <div className="absolute inset-0 border border-primary rounded translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
            <div className="relative rounded overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&q=80" 
                 alt="Arunkumar Kandasamy" 
                 className="w-full h-auto"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 container mx-auto px-4 md:px-16 max-w-3xl">
        <SectionHeading number="02" title="Where I've Worked" />
        {experienceLoading ? (
          <div className="space-y-3">
            <div className="h-24 bg-muted animate-pulse rounded" />
            <div className="h-24 bg-muted animate-pulse rounded" />
          </div>
        ) : (
          <ExperienceTimeline experiences={experience || []} />
        )}
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 container mx-auto px-4 md:px-16">
        <SectionHeading number="03" title="Some Things I've Built" />
        
        {projectsLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map(i => <div key={i} className="h-48 bg-muted animate-pulse rounded" />)}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects?.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 container mx-auto px-4 md:px-16 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-primary mb-2 text-xs">04. What's Next?</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Although I'm not currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <a href="mailto:hello@arunkumar.dev" data-testid="link-contact-email">
            <Button size="lg" variant="outline" className="border-primary text-primary font-mono text-sm">
              <Mail className="w-4 h-4 mr-2" />
              hello@arunkumar.dev
            </Button>
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center font-mono text-xs text-muted-foreground">
        <div className="flex justify-center gap-4 mb-3 md:hidden">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors" data-testid="link-github-mobile">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors" data-testid="link-linkedin-mobile">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="mailto:hello@arunkumar.dev" className="hover:text-primary transition-colors" data-testid="link-email-mobile">
            <Mail className="w-4 h-4" />
          </a>
        </div>
        <p>Designed & Built by Arunkumar Kandasamy</p>
      </footer>
      
      {/* Side Socials - Fixed */}
      <div className="fixed bottom-0 left-4 hidden md:block z-10">
        <ul className="flex flex-col gap-4 items-center after:content-[''] after:w-[1px] after:h-16 after:bg-border after:mt-4">
          <li className="hover:-translate-y-0.5 transition-transform text-muted-foreground hover:text-primary">
            <a href="https://github.com" target="_blank" rel="noreferrer" data-testid="link-github"><Github className="w-4 h-4" /></a>
          </li>
          <li className="hover:-translate-y-0.5 transition-transform text-muted-foreground hover:text-primary">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" data-testid="link-linkedin"><Linkedin className="w-4 h-4" /></a>
          </li>
          <li className="hover:-translate-y-0.5 transition-transform text-muted-foreground hover:text-primary">
            <a href="mailto:hello@arunkumar.dev" data-testid="link-email-sidebar"><Mail className="w-4 h-4" /></a>
          </li>
        </ul>
      </div>

      {/* Side Email - Fixed */}
      <div className="fixed bottom-0 right-4 hidden md:block z-10">
        <div className="flex flex-col gap-4 items-center after:content-[''] after:w-[1px] after:h-16 after:bg-border after:mt-4">
          <a 
            href="mailto:hello@arunkumar.dev" 
            className="font-mono text-[10px] tracking-wider text-muted-foreground hover:text-primary hover:-translate-y-0.5 transition-all [writing-mode:vertical-rl]"
            data-testid="link-email-vertical"
          >
            hello@arunkumar.dev
          </a>
        </div>
      </div>
    </div>
  );
}
