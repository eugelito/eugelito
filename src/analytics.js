const GA_MEASUREMENT_ID = "G-TY9Y5Y7KXF";

/** GA4 — only runs in production builds (`npm run build` / deployed site). */
export function initGoogleAnalytics() {
  if (!import.meta.env.PROD) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID);
}
