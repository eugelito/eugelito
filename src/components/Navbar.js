import { useCallback, useEffect, useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NAV_SCROLL_OFFSET = 92;

const navLinkClass =
  "block whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold text-[var(--color-primary)] no-underline motion-safe-transition hover:bg-[var(--color-primary-dark)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)] min-[426px]:text-base sm:px-3.5";

const navLinkActiveClass = "bg-[var(--color-primary-dark)] text-white";

const brandLinkClass =
  "min-w-0 shrink rounded-full px-2 py-1.5 text-left text-sm font-bold uppercase leading-tight tracking-[0.18em] text-[var(--color-primary)] no-underline motion-safe-transition hover:bg-[var(--color-primary-dark)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)] min-[426px]:text-base sm:px-3 sm:tracking-[0.22em]";

const menuButtonClass =
  "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-transparent text-[var(--color-primary)] motion-safe-transition hover:bg-[var(--color-primary-dark)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]";

const shellClass =
  "relative flex w-full max-w-2xl items-center justify-between gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-1.5 shadow-nav sm:max-w-3xl sm:gap-4 sm:px-3 sm:py-2 lg:max-w-3xl";

function sectionFromScrollLine(lineY, aboutTop, projectsTop) {
  if (lineY >= projectsTop) return "projects";
  if (lineY >= aboutTop) return "about";
  return "home";
}

/** Applies scroll-spy + click lock so smooth scroll does not flash intermediate sections. */
function effectiveSection(lockRef, lineY, aboutTop, projectsTop) {
  const fromScroll = sectionFromScrollLine(lineY, aboutTop, projectsTop);
  const lock = lockRef.current;
  if (!lock) return fromScroll;

  if (lock === "projects") {
    if (lineY >= projectsTop) lockRef.current = null;
    else return "projects";
  } else if (lock === "about") {
    if (lineY >= aboutTop && lineY < projectsTop) lockRef.current = null;
    else return "about";
  } else if (lock === "home") {
    if (lineY < aboutTop) lockRef.current = null;
    else return "home";
  }

  return fromScroll;
}

function NavSectionLink({
  section,
  activeSection,
  goToSection,
  className = "",
  role,
  onAfterClick,
  children,
}) {
  const active = activeSection === section;
  const cls = [active ? `${navLinkClass} ${navLinkActiveClass}` : navLinkClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <AnchorLink
      role={role}
      className={cls}
      href={`#${section}`}
      offset={NAV_SCROLL_OFFSET}
      aria-current={active ? "page" : undefined}
      onClick={() => {
        goToSection(section);
        onAfterClick?.();
      }}
    >
      {children}
    </AnchorLink>
  );
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuRef = useRef(null);
  const navTargetLockRef = useRef(null);

  const goToSection = useCallback((section) => {
    navTargetLockRef.current = section;
    setActiveSection(section);
  }, []);

  useEffect(() => {
    const sync = () => {
      const aboutEl = document.getElementById("about");
      const projectsEl = document.getElementById("projects");
      if (!aboutEl || !projectsEl) return;

      const scrollY = window.scrollY;
      const lineY = scrollY + NAV_SCROLL_OFFSET;
      const docTop = (el) => el.getBoundingClientRect().top + scrollY;

      const next = effectiveSection(
        navTargetLockRef,
        lineY,
        docTop(aboutEl),
        docTop(projectsEl),
      );
      setActiveSection((prev) => (prev === next ? prev : next));
    };

    sync();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 375px)");
    const close = () => setMenuOpen(false);
    mq.addEventListener("change", close);
    return () => mq.removeEventListener("change", close);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    const onPointerDown = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen]);

  return (
    <nav className="fixed left-0 right-0 top-3 z-50 flex justify-center px-3 sm:top-4 sm:px-5 md:px-8">
      <div className={shellClass}>
        <AnchorLink
          href="#home"
          offset={NAV_SCROLL_OFFSET}
          className={brandLinkClass}
          onClick={() => goToSection("home")}
        >
          <span className="whitespace-nowrap text-[inherit]">EUGELITO TROYO</span>
        </AnchorLink>

        <ul className="m-0 hidden min-[375px]:flex shrink-0 list-none items-center gap-0.5 p-0 sm:gap-1">
          <li>
            <NavSectionLink section="about" activeSection={activeSection} goToSection={goToSection}>
              About
            </NavSectionLink>
          </li>
          <li>
            <NavSectionLink section="projects" activeSection={activeSection} goToSection={goToSection}>
              Projects
            </NavSectionLink>
          </li>
        </ul>

        <div className="flex min-[375px]:hidden shrink-0 items-center gap-0.5">
          <NavSectionLink section="about" activeSection={activeSection} goToSection={goToSection}>
            About
          </NavSectionLink>
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              id="nav-menu-button"
              aria-expanded={menuOpen}
              aria-controls="nav-menu-panel"
              aria-haspopup="true"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className={`${menuButtonClass} ${activeSection === "projects" ? `${navLinkActiveClass} text-white` : ""}`.trim()}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden
              >
                {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
            {menuOpen ? (
              <div
                id="nav-menu-panel"
                role="menu"
                aria-labelledby="nav-menu-button"
                className="absolute right-0 top-[calc(100%+0.375rem)] z-50 min-w-[11rem] rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-1.5 shadow-nav"
              >
                <NavSectionLink
                  section="projects"
                  activeSection={activeSection}
                  goToSection={goToSection}
                  role="menuitem"
                  className="w-full rounded-xl px-3 py-2.5 text-left sm:rounded-full"
                  onAfterClick={() => setMenuOpen(false)}
                >
                  Projects
                </NavSectionLink>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
