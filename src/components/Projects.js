import "./Projects.scss";
import Data from "../Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import useWow from "./wowHook/useWow";

const Projects = () => {
  useWow();

  // Sort the data by id in descending order
  const sortedData = [...Data].sort((a, b) => b.id - a.id);

  return (
    <div className="content--projects">
      <h1 id="projects" className="animate__animated animate__slideInUp wow">
        Projects
      </h1>
      <p className="hint">A list of personal projects that I've worked on.</p>
      <div className="projects--container">
        {sortedData.map((post) => {
          return (
            <div
              className="projects--content animate__animated animate__slideInUp wow"
              key={post.id}
            >
              <img
                className="content--projects__img"
                src={post.img}
                alt={post.alt}
              />
              <div className="content--projects__description">
                <h4>{post.title}</h4>
                <p>{post.description}</p>
                <hr />
                <span className="projects__content--technologies">
                  {post.technologies}
                </span>
              </div>
              <div className="helm">
                <a
                  className="project--content__imageAnchor"
                  href={post.urlLink !== "#" ? post.urlLink : undefined}
                  target={post.urlLink !== "#" ? "_blank" : undefined}
                  rel={post.urlLink !== "#" ? "noopener noreferrer" : undefined}
                >
                  <button disabled={post.urlLink === "#"}>
                    {post.urlLink === "#"
                      ? "Link coming soon"
                      : "Visit website"}{" "}
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
