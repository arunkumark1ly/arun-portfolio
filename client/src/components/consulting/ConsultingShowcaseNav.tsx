import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export function ConsultingShowcaseNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <Link href="/">
          <button
            type="button"
            className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
            data-testid="link-back-home"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Portfolio
          </button>
        </Link>
        <span className="font-mono text-primary font-semibold text-sm">AK</span>
      </div>
    </header>
  );
}
