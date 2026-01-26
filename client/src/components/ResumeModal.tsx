import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { FileText, Mail, CheckCircle } from "lucide-react";

interface ResumeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ResumeModal({ open, onOpenChange }: ResumeModalProps) {
  const [email, setEmail] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/resume-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
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
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownload = () => {
    window.open("/resume.pdf", "_blank");
    onOpenChange(false);
    setIsVerified(false);
    setEmail("");
  };

  const handleClose = () => {
    onOpenChange(false);
    setIsVerified(false);
    setEmail("");
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
              ? "Your email has been verified. Click below to download."
              : "Enter your email to access the resume."}
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
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
              data-testid="button-verify-email"
            >
              {isSubmitting ? "Verifying..." : "Verify & Access"}
            </Button>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-md">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm">Email verified successfully</span>
            </div>
            <Button
              onClick={handleDownload}
              className="w-full"
              data-testid="button-download-resume"
            >
              <FileText className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
