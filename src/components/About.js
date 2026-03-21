import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { skillBrandIcons } from "../data/skillBrandIcons";

const base = import.meta.env.BASE_URL;

/** Renders a Simple Icons SVG (24×24) or a raster/SVG image from /public */
const BrandIcon = ({ label, simpleIcon, imgSrc }) => {
  if (imgSrc) {
    return (
      <img
        src={imgSrc}
        alt=""
        width={28}
        height={28}
        className="h-7 w-7 shrink-0 object-contain sm:h-8 sm:w-8"
        loading="lazy"
        decoding="async"
      />
    );
  }
  const { path, hex, title } = simpleIcon;
  return (
    <svg
      className="h-7 w-7 shrink-0 sm:h-8 sm:w-8"
      viewBox="0 0 24 24"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill={`#${hex}`} d={path} />
    </svg>
  );
};

const skills = [
  // 1. Core web technologies: Markup, Styling, Scripting
  { label: "HTML5", simpleIcon: skillBrandIcons.siHtml5 },
  { label: "CSS3", simpleIcon: skillBrandIcons.siCss },
  { label: "Markdown", simpleIcon: skillBrandIcons.siMarkdown },
  { label: "Tailwind CSS", simpleIcon: skillBrandIcons.siTailwindcss },
  
  // 2. Programming languages / platforms
  { label: "JavaScript", simpleIcon: skillBrandIcons.siJavascript },
  { label: "C# .NET", simpleIcon: skillBrandIcons.siDotnet },

  // 3. Frontend frameworks/libraries
  { label: "Angular", simpleIcon: skillBrandIcons.siAngular },
  { label: "React", simpleIcon: skillBrandIcons.siReact },
  { label: "WordPress", simpleIcon: skillBrandIcons.siWordpress },

  // 4. Cloud / backend / infrastructure
  { label: "Firebase", simpleIcon: skillBrandIcons.siFirebase },

  // 5. Tools / version control / AI
  { label: "GitHub", simpleIcon: skillBrandIcons.siGithub },
  { label: "GitHub Copilot", simpleIcon: skillBrandIcons.siGithubcopilot },
  { label: "Cursor", simpleIcon: skillBrandIcons.siCursor },
  {
    label: "Visual Studio Code",
    imgSrc: `${base}images/skills/vscode.svg`,
  },
];

const About = () => {
  return (
    <div className="content--about text-[var(--color-text)]">
      <h1
        id="about"
        className="m-0 scroll-mt-24 border-0 pb-1 text-3xl font-extrabold tracking-tight text-[var(--color-primary-darker)] sm:text-4xl"
      >
        About
        <span
          className="mt-3 block h-1 w-12 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)]"
          aria-hidden
        />
      </h1>
      <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-[var(--color-text-muted)]">
        I&apos;m passionate about creating beautiful web applications with
        intuitive user experiences. My main interests include Front and Back End
        Development, User Experience, and User Interface Design.
      </p>

      <div className="mt-10">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-accent-secondary)]/25 bg-[var(--color-accent-secondary-light)]/80 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-primary-darker)] shadow-sm backdrop-blur-sm">
          Technologies I've worked with
        </p>
        <ul className="m-0 grid list-none grid-cols-2 gap-2 p-0 min-[425px]:grid-cols-3 sm:gap-3">
          {skills.map(({ label, simpleIcon, imgSrc }) => (
            <li
              key={label}
              className="flex items-center gap-3 rounded-2xl border border-[var(--color-border)]/90 bg-[var(--color-surface)] px-3 py-3 shadow-card motion-safe-transition hover:-translate-y-0.5 hover:border-[var(--color-accent)]/25 hover:shadow-card-hover sm:px-4"
            >
              <BrandIcon simpleIcon={simpleIcon} imgSrc={imgSrc} />
              <span className="text-sm font-medium text-[var(--color-text)]">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <a
        className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-8 text-base font-semibold text-[var(--color-on-primary)] no-underline shadow-md motion-safe-transition hover:-translate-y-0.5 hover:bg-[var(--color-accent)] hover:text-[var(--color-on-accent)] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 visited:text-[var(--color-on-primary)] active:scale-[0.98]"
        href={`${base}EugelitoTroyoCV2024Web.pdf`}
        download="EugelitoTroyoCV2024Web.pdf"
      >
        Download CV
        <FontAwesomeIcon icon={faDownload} className="text-[0.9em] opacity-90" aria-hidden />
      </a>
    </div>
  );
};

export default About;
