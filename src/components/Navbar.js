import AnchorLink from "react-anchor-link-smooth-scroll";

/** Fixed nav offset (top inset + bar height + gap); matches scroll-margin on section targets */
const NAV_SCROLL_OFFSET = 84;

const navLinkClass =
  "block whitespace-nowrap rounded-full px-3 py-2 text-base font-semibold text-[var(--color-primary)] no-underline motion-safe-transition hover:bg-[var(--color-primary-dark)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)] sm:px-3.5";

const Navbar = () => {
  return (
    <nav className="fixed left-0 right-0 top-3 z-50 flex justify-center px-3 sm:top-4 sm:px-5 md:px-8">
      <div className="flex w-full max-w-2xl items-center justify-between gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-1.5 shadow-nav sm:max-w-3xl sm:gap-4 sm:px-3 sm:py-2 lg:max-w-3xl">
        <AnchorLink
          href="#home"
          offset={NAV_SCROLL_OFFSET}
          className="min-w-0 shrink rounded-full px-2 py-1.5 text-left text-base font-bold uppercase leading-tight tracking-[0.18em] text-[var(--color-primary-darker)] no-underline motion-safe-transition hover:bg-[var(--color-primary-dark)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)] sm:px-3 sm:tracking-[0.22em]"
        >
          <span className="text-[inherit]">EUGELITO TROYO</span>
        </AnchorLink>
        <ul className="m-0 flex shrink-0 list-none items-center gap-0.5 p-0 sm:gap-1">
          <li>
            <AnchorLink className={navLinkClass} href="#about" offset={NAV_SCROLL_OFFSET}>
              About
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className={navLinkClass} href="#projects" offset={NAV_SCROLL_OFFSET}>
              Projects
            </AnchorLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
