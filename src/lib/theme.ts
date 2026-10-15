export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

/**
 * Runs in <head> before first paint: applies the saved theme, or the OS preference when the visitor
 * hasn't chosen one, and keeps following the OS until they do. Wrapped in try/catch so blocked
 * storage falls back to the system setting.
 */
export const themeInitScript = `(function(){var d=document.documentElement,m=window.matchMedia("(prefers-color-scheme: dark)");function s(){try{return localStorage.getItem("${THEME_STORAGE_KEY}")}catch(e){return null}}function a(){var t=s();d.setAttribute("data-theme",t==="light"||t==="dark"?t:m.matches?"dark":"light")}a();m.addEventListener("change",function(){if(!s())a()})})()`;

export function getTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Switches theme, persisting the choice. Uses a circular View Transition reveal from `origin` where supported. */
export function setTheme(next: Theme, origin?: { x: number; y: number }) {
  const apply = () => {
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage blocked: the change still applies for this page view.
    }
  };

  if (!document.startViewTransition || prefersReducedMotion()) {
    apply();
    return;
  }

  const x = origin?.x ?? window.innerWidth - 40;
  const y = origin?.y ?? 32;
  const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

  const transition = document.startViewTransition(apply);
  transition.ready
    .then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 400, easing: "cubic-bezier(0.2, 0.8, 0.2, 1)", pseudoElement: "::view-transition-new(root)" },
      );
    })
    .catch(() => {});
}

export function subscribeToTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}
