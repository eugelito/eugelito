import Data from "../Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const sortedData = [...Data].sort((a, b) => b.id - a.id);

  return (
    <div className="content--projects text-[var(--color-text)]">
      <h1
        id="projects"
        className="m-0 scroll-mt-24 border-0 pb-1 text-3xl font-extrabold tracking-tight text-[var(--color-primary-darker)] sm:text-4xl"
      >
        Projects
        <span
          className="mt-3 block h-1 w-12 rounded-full bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-accent)]"
          aria-hidden
        />
      </h1>
      <p className="hint mt-4 max-w-xl text-pretty text-[var(--color-text-muted)]">
        A list of personal projects that I&apos;ve worked on.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-4 text-left sm:gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
        {sortedData.map((post) => {
          const isDisabled =
            post.isDisabled || post.urlLink === "#" || !post.urlLink;

          const buttonText = post.isMobileApp
            ? isDisabled
              ? "App coming soon"
              : "View app"
            : isDisabled
              ? "Link coming soon"
              : "Visit website";

          return (
            <div
              className="group flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden rounded-2xl border border-[var(--color-border)]/90 bg-[var(--color-surface)] shadow-card motion-safe-transition hover:-translate-y-1 hover:border-[var(--color-accent)]/20 hover:shadow-card-hover"
              key={post.id}
            >
              <div className="relative aspect-[5/3] w-full shrink-0 overflow-hidden">
                <img
                  className={`h-full w-full object-cover motion-safe-transition group-hover:scale-[1.03] ${
                    post.title === "Noah" ? "object-top" : ""
                  }`}
                  src={post.img}
                  alt={post.alt}
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-primary-darker)]/25 to-transparent opacity-0 motion-safe-transition group-hover:opacity-100"
                  aria-hidden
                />
              </div>
              <div className="flex min-h-0 flex-1 flex-col gap-3 px-5 pb-5 pt-5 sm:px-6">
                <h4 className="m-0 text-lg font-bold leading-snug text-[var(--color-primary-darker)]">
                  {post.title}
                </h4>
                <p className="m-0 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {post.description}
                </p>
                <hr className="m-0 border-0 border-t border-[var(--color-border)]/80" />
                <span className="m-0 text-xs font-semibold leading-snug tracking-wide text-[var(--color-accent-dark)]">
                  {post.technologies}
                </span>
                <div className="mt-auto w-full pt-1">
                  {!isDisabled ? (
                    <a
                      className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-4 text-sm font-semibold text-[var(--color-on-primary)] no-underline shadow-md motion-safe-transition hover:bg-[var(--color-accent)] hover:text-[var(--color-on-accent)] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 visited:text-[var(--color-on-primary)] active:scale-[0.98] sm:text-base"
                      href={post.urlLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {buttonText}
                      <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        className="text-[0.85em] opacity-90"
                        aria-hidden
                      />
                    </a>
                  ) : (
                    <button
                      className="flex h-11 w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 text-sm font-semibold text-[var(--color-text-muted)] sm:text-base"
                      type="button"
                      disabled
                      aria-disabled="true"
                    >
                      {buttonText}
                      <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        className="text-[0.85em] opacity-90"
                        aria-hidden
                      />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
