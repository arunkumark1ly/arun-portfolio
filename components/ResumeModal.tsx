import { useState, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Download, Mail, Phone, FileText, File, CheckCircle } from "lucide-react";
import type { Skill, Experience, Project } from "@shared/schema";

interface ResumeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
}

export function ResumeModal({ open, onOpenChange, skills, experience, projects }: ResumeModalProps) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const technicalSkills = skills.filter(s => s.category === "Technical");
  const managementSkills = skills.filter(s => s.category === "Management");
  const sortedExperience = [...experience].sort((a, b) => a.order - b.order);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    if (!phone || phone.length < 10) {
      toast({
        title: "Invalid phone",
        description: "Please enter a valid phone number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/resume-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone }),
      });

      if (response.ok) {
        setIsVerified(true);
        toast({
          title: "Access granted",
          description: "You can now download the resume.",
        });
      } else {
        throw new Error("Failed to verify");
      }
    } catch {
      setIsVerified(true);
      toast({
        title: "Access granted",
        description: "You can now download the resume.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadPDF = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const resumeHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>ArunKumar Kandasamy - Resume</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { 
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; 
            font-size: 10px; 
            line-height: 1.4; 
            color: #1a1a2e; 
            padding: 24px;
            max-width: 800px;
            margin: 0 auto;
          }
          h1 { font-size: 20px; font-weight: 700; margin-bottom: 2px; }
          h2 { font-size: 12px; font-weight: 600; color: #cc9966; margin-bottom: 8px; border-bottom: 1px solid #e5e5e5; padding-bottom: 4px; margin-top: 16px; }
          h3 { font-size: 11px; font-weight: 600; margin-bottom: 2px; }
          .subtitle { font-size: 13px; color: #666; margin-bottom: 6px; }
          .contact { font-size: 9px; color: #666; margin-bottom: 12px; }
          .contact a { color: #cc9966; text-decoration: none; }
          .summary { font-size: 10px; color: #444; margin-bottom: 12px; line-height: 1.5; }
          .section { margin-bottom: 12px; }
          .skills-grid { display: flex; flex-wrap: wrap; gap: 4px 12px; }
          .skill { font-size: 9px; color: #444; }
          .exp-item { margin-bottom: 10px; }
          .exp-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px; }
          .exp-role { font-weight: 600; font-size: 10px; }
          .exp-company { color: #cc9966; font-size: 10px; }
          .exp-period { font-size: 9px; color: #888; }
          .exp-bullets { list-style: none; margin-top: 4px; }
          .exp-bullets li { font-size: 9px; color: #555; line-height: 1.5; margin-bottom: 2px; padding-left: 12px; position: relative; }
          .exp-bullets li::before { content: "-"; position: absolute; left: 0; color: #cc9966; }
          .project { margin-bottom: 8px; }
          .project-title { font-weight: 600; font-size: 10px; }
          .project-role { color: #cc9966; font-size: 9px; }
          .project-bullets { list-style: none; margin-top: 2px; }
          .project-bullets li { font-size: 9px; color: #555; line-height: 1.4; margin-bottom: 2px; padding-left: 12px; position: relative; }
          .project-bullets li::before { content: "-"; position: absolute; left: 0; color: #cc9966; }
          .project-tech { font-size: 8px; color: #888; margin-top: 2px; }
          .impact-list { list-style: none; }
          .impact-list li { font-size: 9px; color: #555; margin-bottom: 3px; padding-left: 12px; position: relative; }
          .impact-list li::before { content: "-"; position: absolute; left: 0; color: #cc9966; }
          .edu { font-size: 10px; }
          .edu-degree { font-weight: 600; }
          .edu-school { font-size: 9px; color: #666; }
          .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
          .two-col h2 { margin-top: 0; }
          @media print {
            body { padding: 0; }
            @page { margin: 0.5in; }
          }
        </style>
      </head>
      <body>
        <h1>ArunKumar Kandasamy</h1>
        <div class="subtitle">Solution Architect & Tech Lead</div>
        <div class="contact">
          <a href="mailto:k.arun@outlook.com">k.arun@outlook.com</a> | 
          +91 9003457395 (India) | 
          <a href="https://linkedin.com/in/arun1ly">LinkedIn</a> | 
          <a href="https://github.com/arunkumark1ly">GitHub</a>
        </div>
        
        <div class="summary">
          Forward-focused Solution Architect with 16+ years of experience designing and delivering web platforms and enterprise products across Agile and Hybrid delivery models. I blend hands-on architecture and engineering leadership with end-to-end technical delivery ownership to ship predictable outcomes.
        </div>

        <div class="two-col">
          <div>
            <h2>Areas of Impact</h2>
            <ul class="impact-list">
              ${areasOfImpact.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
          <div>
            <h2>Strategic Wins</h2>
            <ul class="impact-list">
              ${strategicWins.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        </div>

        <h2>Technical Skills</h2>
        <div class="skills-grid">
          ${technicalSkills.map(s => `<span class="skill">${s.name}</span>`).join('')}
        </div>

        <h2>Leadership & Management</h2>
        <div class="skills-grid">
          ${managementSkills.map(s => `<span class="skill">${s.name}</span>`).join('')}
        </div>

        <h2>Professional Experience</h2>
        ${sortedExperience.map(exp => {
          const bullets = exp.description.split(/(?<=[.!?])\s+(?=[A-Z])/).filter(s => s.trim().length > 0);
          return `
          <div class="exp-item">
            <div class="exp-header">
              <div>
                <span class="exp-role">${exp.role}</span>
                ${exp.company ? `<span class="exp-company"> @ ${exp.company}</span>` : ''}
              </div>
              <span class="exp-period">${exp.period}</span>
            </div>
            <ul class="exp-bullets">
              ${bullets.slice(0, 3).map(b => `<li>${b}</li>`).join('')}
            </ul>
          </div>
        `}).join('')}

        <h2>Key Projects</h2>
        ${projects.map(project => {
          const bullets = project.description.split(/(?<=[.!?])\s+(?=[A-Z])/).filter(s => s.trim().length > 0);
          return `
          <div class="project">
            <span class="project-title">${project.title}</span>
            <span class="project-role"> - ${project.role}</span>
            <ul class="project-bullets">
              ${bullets.slice(0, 2).map(b => `<li>${b}</li>`).join('')}
            </ul>
            <div class="project-tech">Tech: ${project.techStack.join(', ')}</div>
          </div>
        `}).join('')}

        <h2>Education</h2>
        <div class="edu">
          <span class="edu-degree">B.Tech, Electrical and Electronics Engineering</span>
          <div class="edu-school">Bharath University, Chennai (2005-2009)</div>
        </div>
      </body>
      </html>
    `;

    printWindow.document.write(resumeHtml);
    printWindow.document.close();
    
    setTimeout(() => {
      printWindow.print();
    }, 250);
  };

  const handleDownloadDOCX = () => {
    window.open('/resume.docx', '_blank');
  };

  const handleClose = () => {
    onOpenChange(false);
    setIsVerified(false);
    setEmail("");
    setPhone("");
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-foreground">
            <FileText className="w-5 h-5 text-primary" />
            Download Resume
          </DialogTitle>
          <DialogDescription>
            {isVerified
              ? "Choose your preferred format to download."
              : "Enter your contact details to access the resume."}
          </DialogDescription>
        </DialogHeader>

        {!isVerified ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs">Email address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-9 text-sm"
                  data-testid="input-resume-email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-xs">Phone number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 234 567 8900"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="pl-9 text-sm"
                  data-testid="input-resume-phone"
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
              data-testid="button-verify-access"
            >
              {isSubmitting ? "Verifying..." : "Get Access"}
            </Button>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-md dark:bg-green-900/20 dark:text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm">Access granted! Choose your format.</span>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={handleDownloadPDF}
                variant="default"
                className="w-full gap-2"
                data-testid="button-download-pdf"
              >
                <FileText className="w-4 h-4" />
                PDF
              </Button>
              <Button
                onClick={handleDownloadDOCX}
                variant="outline"
                className="w-full gap-2"
                data-testid="button-download-docx"
              >
                <File className="w-4 h-4" />
                DOCX
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground text-center">
              PDF is recommended for best formatting
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
