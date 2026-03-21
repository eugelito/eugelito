import { useEffect, useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

/** Fixed nav offset (top inset + bar height + gap); matches scroll-margin on section targets */
const NAV_SCROLL_OFFSET = 92;

/** Order matters: last section whose top is above the offset line wins (includes #home for scroll math only). */
const SECTION_SCROLL_IDS = ["home", "about", "projects"];

const navLinkClass =
  "block whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold text-[var(--color-primary)] no-underline motion-safe-transition hover:bg-[var(--color-primary-dark)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)] min-[426px]:text-base sm:px-3.5";

const navLinkActiveClass = "bg-[var(--color-primary-dark)] text-white";

const navLinkClassFor = (active) =>
  active ? `${navLinkClass} ${navLinkActiveClass}` : navLinkClass;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuRef = useRef(null);

  useEffect(() => {
    const updateActiveSection = () => {
      const line = NAV_SCROLL_OFFSET;
      let active = "home";
      for (const id of SECTION_SCROLL_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const { top } = el.getBoundingClientRect();
        if (top <= line) active = id;
      }
      setActiveSection((prev) => (prev === active ? prev : active));
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 375px)");
    const onChange = () => setMenuOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
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
      <div className="relative flex w-full max-w-2xl items-center justify-between gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-1.5 shadow-nav sm:max-w-3xl sm:gap-4 sm:px-3 sm:py-2 lg:max-w-3xl">
        <AnchorLink
          href="#home"
          offset={NAV_SCROLL_OFFSET}
          className="min-w-0 shrink rounded-full px-2 py-1.5 text-left text-sm font-bold uppercase leading-tight tracking-[0.18em] text-[var(--color-primary-darker)] no-underline motion-safe-transition hover:bg-[var(--color-primary-dark)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)] min-[426px]:text-base sm:px-3 sm:tracking-[0.22em]"
        >
          <span className="whitespace-nowrap text-[inherit]">EUGELITO TROYO</span>
        </AnchorLink>

        {/* ≥375px: About + Projects inline */}
        <ul className="m-0 hidden min-[375px]:flex shrink-0 list-none items-center gap-0.5 p-0 sm:gap-1">
          <li>
            <AnchorLink
              className={navLinkClassFor(activeSection === "about")}
              href="#about"
              offset={NAV_SCROLL_OFFSET}
              aria-current={activeSection === "about" ? "page" : undefined}
            >
              About
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className={navLinkClassFor(activeSection === "projects")}
              href="#projects"
              offset={NAV_SCROLL_OFFSET}
              aria-current={activeSection === "projects" ? "page" : undefined}
            >
              Projects
            </AnchorLink>
          </li>
        </ul>

        {/* &lt;375px: About + menu (Projects) */}
        <div className="flex min-[375px]:hidden shrink-0 items-center gap-0.5">
          <AnchorLink
            className={navLinkClassFor(activeSection === "about")}
            href="#about"
            offset={NAV_SCROLL_OFFSET}
            aria-current={activeSection === "about" ? "page" : undefined}
          >
            About
          </AnchorLink>
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              id="nav-menu-button"
              aria-expanded={menuOpen}
              aria-controls="nav-menu-panel"
              aria-haspopup="true"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className={
                "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-transparent text-[var(--color-primary)] motion-safe-transition hover:bg-[var(--color-primary-dark)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)] " +
                (activeSection === "projects" ? `${navLinkActiveClass} text-white` : "")
              }
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
                {menuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            {menuOpen ? (
              <div
                id="nav-menu-panel"
                role="menu"
                aria-labelledby="nav-menu-button"
                className="absolute right-0 top-[calc(100%+0.375rem)] z-50 min-w-[11rem] rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-1.5 shadow-nav"
              >
                <AnchorLink
                  role="menuitem"
                  className={`${navLinkClassFor(activeSection === "projects")} w-full rounded-xl px-3 py-2.5 text-left sm:rounded-full`}
                  href="#projects"
                  offset={NAV_SCROLL_OFFSET}
                  aria-current={activeSection === "projects" ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </AnchorLink>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
