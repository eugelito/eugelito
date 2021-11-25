import "./Projects.scss";
import Data from "../Data";

function Projects() {
  return (
    <div class="content--projects">
      <h1 id="projects">Projects</h1>
      <div className="projects--container">
        { Data.map(post => {
          return(
            <div className="projects--content" key={ post.id } >
              <img
                className="content--projects__img"
                src={post.img}
                alt={ post.alt }
              />
              <div className="content--projects__description">
                <h4>{ post.title }</h4>
                <p>{ post.description }</p>
                <hr />
                <span className="projects__content--technologies">{ post.technologies }</span>

                <div className="helm">
                  <a
                    className="project--content__imageAnchor"
                    href={ post.urlLink }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <button>View website</button>
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Projects;
