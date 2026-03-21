import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const social = [
  {
    href: "https://github.com/eugelito",
    icon: faGithub,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/eugelito/",
    icon: faLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://instagram.com/eugelitotroyo",
    icon: faInstagram,
    label: "Instagram",
  },
  {
    href: "mailto:eugelito@outlook.com?subject=Ref: Eugelito Contact",
    icon: faEnvelope,
    label: "Email",
  },
];

const Header = () => {
  return (
    <header id="home" className="relative scroll-mt-24 bg-[#2f4b61] pt-19">
      <div className="relative isolate overflow-hidden bg-[#2f4b61]">
        <div className="relative mx-auto flex min-h-[min(22rem,85vh)] max-w-6xl flex-col items-center justify-center gap-10 px-6 py-14 text-[var(--color-on-primary)] min-[1440px]:min-h-[24rem] min-[1440px]:flex-row min-[1440px]:justify-between min-[1440px]:py-16 min-[1440px]:pl-10 min-[1440px]:pr-12">
          <div className="max-w-2xl text-center min-[1440px]:text-left">
            <h1 className="m-0 text-balance text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl">
              Hey! I&apos;m{" "}
              <span className="text-[var(--color-accent-light)]">Euge,</span>
            </h1>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-[var(--color-primary-muted)] sm:text-base md:text-lg">
              <span className="font-semibold text-[var(--color-on-primary)]">
                Front End Engineer
              </span>{" "}
              at{" "}
              <a
                className="font-semibold text-[var(--color-accent-light)] underline decoration-[var(--color-accent-light)]/50 decoration-2 underline-offset-[0.35em] motion-safe-transition hover:text-white hover:decoration-white/80"
                href="https://www.allstateni.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Allstate Northern Ireland.
              </a>
            </p>
            <ul className="mt-6 flex list-none flex-wrap justify-center gap-2 p-0 min-[1440px]:justify-start">
              {social.map(({ href, icon, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-[var(--color-accent-light)] backdrop-blur-sm motion-safe-transition hover:-translate-y-0.5 hover:border-[var(--color-accent)]/40 hover:bg-white/10 hover:text-white hover:shadow-[0_12px_28px_rgb(0_0_0/0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-light)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2f4b61]"
                  >
                    <FontAwesomeIcon icon={icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden shrink-0 min-[1440px]:block">
            <div className="relative">
              <img
                src={`${import.meta.env.BASE_URL}images/Euge.webp`}
                width={250}
                height={250}
                draggable={false}
                className="relative rounded-full object-cover ring-[3px] ring-white/20 ring-offset-4 ring-offset-[#2f4b61] motion-safe-transition hover:ring-[var(--color-accent)]/50"
                alt="website creator smiling"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
