import { useEffect, useRef, useState } from "react";

const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_URL =
  "https://calendly.com/arun1ly?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=ccae65";

export function CalendlyEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_SCRIPT_SRC}"]`,
    );

    if (existingScript) return;

    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT_SRC;
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);
  }, [shouldLoad]);

  return (
    <div ref={containerRef} className="min-h-[700px]">
      {shouldLoad ? (
        <div
          className="calendly-inline-widget min-w-[320px] rounded-xl"
          data-url={CALENDLY_URL}
          style={{ minWidth: "320px", height: "700px" }}
        />
      ) : (
        <div
          className="flex min-h-[320px] items-center justify-center rounded-xl border border-dashed border-border bg-muted/30 px-6"
          aria-hidden
        >
          <p className="font-mono text-xs text-muted-foreground text-center">
            Calendar loads when you scroll here
          </p>
        </div>
      )}
    </div>
  );
}
