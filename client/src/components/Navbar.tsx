import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResumeModal } from "@/components/ResumeModal";
import { useSkills, useProjects, useExperience } from "@/hooks/use-portfolio";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const { data: skills } = useSkills();
  const { data: projects } = useProjects();
  const { data: experience } = useExperience();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const blogLink = "https://voicehunt.news/authors/arun1ly";

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Blog", href: blogLink },
    { name: "Book a Conversation", to: "book-conversation" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-4xl mx-auto px-6 md:px-8 h-14 flex items-center justify-between">
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
            <span className="font-mono text-primary font-semibold text-sm">AK</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              "href" in link ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs cursor-pointer text-muted-foreground hover:text-primary transition-colors"
                  data-testid="nav-blog"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="font-mono text-xs cursor-pointer text-muted-foreground hover:text-primary transition-colors"
                  data-testid={`nav-${link.to}`}
                >
                  {link.name}
                </Link>
              ),
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setResumeModalOpen(true)}
              className="font-mono text-xs h-8"
              data-testid="button-resume-nav"
            >
              Resume
            </Button>
          </nav>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-foreground p-1" 
            data-testid="button-mobile-menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-b border-border overflow-hidden"
            >
              <div className="px-6 py-4 space-y-4">
                {navLinks.map((link) =>
                  "href" in link ? (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="block font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-testid="nav-mobile-blog"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.to}
                      smooth={true}
                      duration={500}
                      onClick={() => setIsOpen(false)}
                      className="block font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`nav-mobile-${link.to}`}
                    >
                      {link.name}
                    </Link>
                  ),
                )}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setIsOpen(false);
                    setResumeModalOpen(true);
                  }}
                  className="font-mono text-xs w-full"
                  data-testid="button-resume-mobile"
                >
                  Resume
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <ResumeModal 
        open={resumeModalOpen} 
        onOpenChange={setResumeModalOpen}
        skills={skills || []}
        experience={experience || []}
        projects={projects || []}
      />
    </>
  );
}
