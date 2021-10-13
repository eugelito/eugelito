import "./Projects.scss";
import soshealthcareltdpng from "../images/soshealthcareltd.png";
import uxuiportfoliopng from "../images/UXUIPortfolio.png";
import personalwebsite from "../images/personalwebsite.png";

function Projects() {
  return (
    <div>
      <h1 id="projects">Projects</h1>
      <div className="projects--container">
        <div className="projects--content">
          <img
            className="content--projects__img"
            src={soshealthcareltdpng}
            alt="sos healthcare ltd company logo"
          />
          <div className="content--projects__description">
            <h4>SOS Healthcare Ltd</h4>
            <p>
              Informational website for a local nursing agency in Belfast built
              on WordPress technology.
            </p>
            <hr/>
            <div class="helm">
            <a
            className="project--content__imageAnchor"
            href="https://soshealthcareltd.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          > <button>View website</button></a>
            </div>
          </div>
        </div>
        <div className="projects--content">
          <img
            className="content--projects__img"
            src={uxuiportfoliopng}
            alt="sos healthcare ltd company logo"
          />
          <div className="content--projects__description">
            <h4>UX/UI Portfolio</h4>
            <p>
            An online portfolio showcasing my User Experience (UX) and User Interface (UI) work during my university studies.
            </p>
            <hr/>
            <div class="helm">
            <a
            className="project--content__imageAnchor"
            href="https://blogs.city.ac.uk/eugelitotroyo/"
            target="_blank"
            rel="noopener noreferrer"
          > <button>View website</button></a>
            </div>
          </div>
        </div>
        <div className="projects--content">
          <img
            className="content--projects__img"
            src={personalwebsite}
            alt="sos healthcare ltd company logo"
          />
          <div className="content--projects__description">
            <h4>eugelito.com Personal Website</h4>
            <p>
            First version of my personal website showcasing my projects built on HTML, SCSS and React.
            </p>
            <hr/>
            <div class="helm">
            <a
            className="project--content__imageAnchor"
            href="https://eugelito.com/"
            target="_blank"
            rel="noopener noreferrer"
          > <button>View website</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function navigateToLink(link){
  window.open(link, "_blank");
}

export default Projects;
