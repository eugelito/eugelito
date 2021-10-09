import "./Projects.scss";
import soshealthcareltdpng from "../../src/images/soshealthcareltd.png";

function Projects() {
  return (
    <div>
      <h1 id="projects">Projects</h1>
      <div className="projects--container">
        <div className="projects--content">
          <a
            className="project--content__imageAnchor"
            href="https://soshealthcareltd.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="content--projects__soshealthcareIMG"
              src={soshealthcareltdpng}
              alt="sos healthcare ltd company logo"
            />
            <div className="content--projects__description">
              <h4>SOS Healthcare Ltd</h4>
              <p>
                Informational website for a local nursing agency in Belfast
                built on WordPress technology.
              </p>
              {/**  <button class="projects--button">View website</button> */}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
