import { useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Download, FileText, File } from "lucide-react";
import type { Skill, Experience, Project } from "@shared/schema";

interface ResumeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
}

export function ResumeModal({ open, onOpenChange, skills, experience, projects }: ResumeModalProps) {
  const { toast } = useToast();

  const technicalSkills = skills.filter(s => s.category === "Technical");
  const managementSkills = skills.filter(s => s.category === "Management");
  const sortedExperience = [...experience].sort((a, b) => a.order - b.order);

  const areasOfImpact = [
    "Solutions architecture (HLD/LLD), API design (REST/GraphQL), and domain modeling",
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

  const handleClose = () => {
    onOpenChange(false);
  };

  const handleDownloadPDF = () => {
    console.log('Downloading PDF...');
    const link = document.createElement('a');
    link.href = '/arunkumar-kandasamy-resume.pdf';
    link.download = 'arunkumar-kandasamy-resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadDOCX = () => {
    console.log('Downloading DOCX...');
    const link = document.createElement('a');
    link.href = '/arunkumar-kandasamy-resume.docx';
    link.download = 'arunkumar-kandasamy-resume.docx';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            Choose your preferred format to download the resume.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
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
      </DialogContent>
    </Dialog>
  );
}
