import { useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  useEffect(() => {
    const tag = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (tag) {
      tag.content = "noindex, nofollow";
    } else {
      const meta = document.createElement("meta");
      meta.name = "robots";
      meta.content = "noindex, nofollow";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md border-border">
        <CardContent className="pt-6 text-center">
          <div className="flex mb-4 gap-2 justify-center items-center">
            <AlertCircle className="h-8 w-8 text-primary" aria-hidden />
            <h1 className="text-2xl font-bold text-foreground">Page not found</h1>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            The page you are looking for does not exist or has moved.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/">
              <Button size="sm" className="font-mono text-xs">Back to portfolio</Button>
            </Link>
            <Link href="/consulting">
              <Button variant="outline" size="sm" className="font-mono text-xs">Consulting case studies</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
