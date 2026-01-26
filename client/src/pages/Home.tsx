import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useSkills, useProjects, useExperience } from "@/hooks/use-portfolio";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillCard } from "@/components/SkillCard";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  const { data: skills, isLoading: skillsLoading } = useSkills();
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: experience, isLoading: experienceLoading } = useExperience();

  // Categorize skills
  const technicalSkills = skills?.filter(s => s.category === "Technical") || [];
  const managementSkills = skills?.filter(s => s.category === "Management") || [];

  return (
    <div className="min-h-screen bg-background text-slate-400 selection:bg-primary/20 selection:text-primary">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center container mx-auto px-6 md:px-24 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-primary mb-5 ml-1"
        >
          Hi, my name is
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-7xl font-bold text-slate-200 mb-4 tracking-tight"
        >
          Arunkumar Kandasamy.
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-3xl md:text-6xl font-bold text-slate-400 mb-8"
        >
          I build things for the web.
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-xl text-lg mb-12 leading-relaxed"
        >
          I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on bridging the gap between engineering and product vision.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex gap-4"
        >
          <Link to="projects" smooth={true} duration={500}>
            <Button size="lg" className="bg-transparent border border-primary text-primary hover:bg-primary/10 h-14 px-8 font-mono text-base">
              Check out my work!
            </Button>
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-slate-500" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 container mx-auto px-6 md:px-24">
        <SectionHeading number="01" title="About Me" />
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4 text-lg">
            <p>
              Hello! My journey started as a <span className="text-primary">Senior Software Engineer</span> and has evolved into a role where I lead technical strategy and product development. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
            </p>
            <p>
              My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients. I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            
            {/* Skills Grid */}
            <div className="mt-8">
              <h4 className="font-mono text-slate-200 mb-4 border-b border-slate-700 pb-2 inline-block">Technical Skills</h4>
              {skillsLoading ? (
                <div className="animate-pulse h-20 bg-card rounded" />
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                  {technicalSkills.map((skill, idx) => (
                    <SkillCard key={skill.id} skill={skill} index={idx} />
                  ))}
                </div>
              )}
              
              <h4 className="font-mono text-slate-200 mb-4 border-b border-slate-700 pb-2 inline-block mt-4">Management & Soft Skills</h4>
              {skillsLoading ? (
                <div className="animate-pulse h-20 bg-card rounded" />
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {managementSkills.map((skill, idx) => (
                    <SkillCard key={skill.id} skill={skill} index={idx} />
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="relative group mx-auto md:mx-0 max-w-xs">
            {/* Image Placeholder Frame */}
            <div className="absolute inset-0 border-2 border-primary rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
            <div className="relative rounded overflow-hidden bg-primary/20 hover:bg-transparent transition-colors duration-300">
               {/* Use Unsplash image with descriptive comment */}
               {/* Professional headshot portrait corporate man */}
               <img 
                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80" 
                 alt="Arunkumar Kandasamy" 
                 className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-300 mix-blend-multiply hover:mix-blend-normal"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 container mx-auto px-6 md:px-24 max-w-4xl">
        <SectionHeading number="02" title="Where I've Worked" />
        {experienceLoading ? (
          <div className="space-y-4">
            <div className="h-32 bg-card animate-pulse rounded" />
            <div className="h-32 bg-card animate-pulse rounded" />
          </div>
        ) : (
          <ExperienceTimeline experiences={experience || []} />
        )}
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 container mx-auto px-6 md:px-24">
        <SectionHeading number="03" title="Some Things I've Built" />
        
        {projectsLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => <div key={i} className="h-64 bg-card animate-pulse rounded-xl" />)}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects?.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
        
        <div className="mt-16 text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-6 font-mono">
            View Full Project Archive
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 container mx-auto px-6 md:px-24 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-primary mb-4">04. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-200 mb-6">Get In Touch</h2>
          <p className="text-lg text-slate-400 mb-12">
            Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <ContactForm />
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center font-mono text-xs text-slate-500 hover:text-primary transition-colors cursor-default">
        <div className="flex justify-center gap-6 mb-4 md:hidden">
          <a href="#" className="hover:text-primary hover:-translate-y-1 transition-all"><Github className="w-5 h-5" /></a>
          <a href="#" className="hover:text-primary hover:-translate-y-1 transition-all"><Linkedin className="w-5 h-5" /></a>
          <a href="#" className="hover:text-primary hover:-translate-y-1 transition-all"><Mail className="w-5 h-5" /></a>
        </div>
        <p>Designed & Built by Arunkumar Kandasamy</p>
      </footer>
      
      {/* Side Socials - Fixed */}
      <div className="fixed bottom-0 left-6 hidden md:block z-10">
        <ul className="flex flex-col gap-6 items-center after:content-[''] after:w-[1px] after:h-24 after:bg-slate-400 after:mt-6">
          <li className="hover:-translate-y-1 transition-transform text-slate-400 hover:text-primary">
            <a href="https://github.com" target="_blank" rel="noreferrer"><Github className="w-5 h-5" /></a>
          </li>
          <li className="hover:-translate-y-1 transition-transform text-slate-400 hover:text-primary">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><Linkedin className="w-5 h-5" /></a>
          </li>
          <li className="hover:-translate-y-1 transition-transform text-slate-400 hover:text-primary">
            <a href="mailto:hello@example.com"><Mail className="w-5 h-5" /></a>
          </li>
        </ul>
      </div>

      {/* Side Email - Fixed */}
      <div className="fixed bottom-0 right-6 hidden md:block z-10">
        <div className="flex flex-col gap-6 items-center after:content-[''] after:w-[1px] after:h-24 after:bg-slate-400 after:mt-6">
          <a 
            href="mailto:hello@example.com" 
            className="font-mono text-xs tracking-widest text-slate-400 hover:text-primary hover:-translate-y-1 transition-all [writing-mode:vertical-rl]"
          >
            hello@arunkumar.dev
          </a>
        </div>
      </div>
    </div>
  );
}
