import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResumeModal } from "@/components/ResumeModal";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Experience", to: "experience" },
    { name: "Work", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "h-14 bg-background/95 backdrop-blur-sm border-b border-border" : "h-16 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
            <div className="w-8 h-8 border border-primary rounded flex items-center justify-center text-primary font-semibold text-sm">
              A
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <ol className="flex gap-6 list-none">
              {navLinks.map((link, i) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="font-mono text-xs cursor-pointer text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span className="text-primary mr-1">0{i + 1}.</span> {link.name}
                  </Link>
                </motion.li>
              ))}
            </ol>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                variant="outline"
                size="sm"
                onClick={() => setResumeModalOpen(true)}
                className="text-primary border-primary font-mono text-xs"
                data-testid="button-resume-nav"
              >
                Resume
              </Button>
            </motion.div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary p-2" data-testid="button-mobile-menu">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="fixed inset-y-0 right-0 w-3/4 bg-card border-l border-border shadow-xl z-50 md:hidden flex flex-col items-center justify-center p-6"
            >
              <ol className="flex flex-col gap-6 text-center w-full">
                {navLinks.map((link, i) => (
                  <li key={link.name} className="w-full">
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      onClick={() => setIsOpen(false)}
                      className="block font-mono text-sm cursor-pointer text-muted-foreground hover:text-primary transition-colors py-2"
                    >
                      <div className="text-primary text-xs mb-1">0{i + 1}.</div>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ol>
              <div className="mt-8">
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsOpen(false);
                    setResumeModalOpen(true);
                  }}
                  className="text-primary border-primary font-mono text-sm px-6"
                  data-testid="button-resume-mobile"
                >
                  Resume
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <ResumeModal open={resumeModalOpen} onOpenChange={setResumeModalOpen} />
    </>
  );
}
