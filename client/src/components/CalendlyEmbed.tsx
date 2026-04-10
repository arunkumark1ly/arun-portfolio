import { useEffect } from "react";

const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_URL =
  "https://calendly.com/arun1ly?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=ccae65";

export function CalendlyEmbed() {
  useEffect(() => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_SCRIPT_SRC}"]`,
    );

    if (existingScript) {
      return;
    }

    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT_SRC;
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget min-w-[320px] rounded-xl"
      data-url={CALENDLY_URL}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
