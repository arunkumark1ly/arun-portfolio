import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "h-16 bg-background/90 backdrop-blur-md shadow-lg" : "h-24 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <Link to="hero" smooth={true} duration={500} className="cursor-pointer group">
          <div className="relative w-10 h-10 border-2 border-primary rounded flex items-center justify-center text-primary font-bold text-xl hover:bg-primary/10 transition-colors">
            A
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ol className="flex gap-8 list-none">
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
                  className="font-mono text-sm cursor-pointer text-slate-300 hover:text-primary transition-colors"
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
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="text-primary border-primary hover:bg-primary/10 font-mono text-sm h-9">
                Resume
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-primary p-2">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-y-0 right-0 w-3/4 bg-[#112240] shadow-2xl z-50 md:hidden flex flex-col items-center justify-center p-8"
          >
            <ol className="flex flex-col gap-8 text-center w-full">
              {navLinks.map((link, i) => (
                <li key={link.name} className="w-full">
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="block font-mono text-lg cursor-pointer text-slate-300 hover:text-primary transition-colors py-2"
                  >
                    <div className="text-primary text-sm mb-1">0{i + 1}.</div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ol>
            <div className="mt-12">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="text-primary border-primary hover:bg-primary/10 font-mono text-lg px-8 py-6">
                  Resume
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
