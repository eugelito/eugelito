import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
import "animate.css";

/** Images */

const Header = () => {
  return (
    <header id="home">
      <Navbar />
      <div className="billboard">
        <div className="billboard-text">
          <h1 className="animate__animated animate__slideInRight">
            Hey! I'm <span className="billboard-text__nickname">Euge,</span>
          </h1>
          <p className="animate__animated animate__fadeInUp animate__delay-2s">
            <b>Front End Engineer</b> at{" "}
            <a
              className="billboard-company"
              href="https://www.allstateni.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Allstate Northern Ireland.</b>
            </a>
          </p>
          <ul className="header-social animate__animated animate__fadeInUp animate__delay-2s">
            <li>
              <a
                href="https://github.com/eugelito"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a
                href="https://www.linkedin.com/in/eugelito/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://instagram.com/eugelitotroyo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="mailto:eugelito@outlook.com?subject=Ref: Eugelito Contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
          </ul>
        </div>
        <div className="billboard-image">
          <img
            src={process.env.PUBLIC_URL + "images/Euge.jpeg"}
            width="250"
            height="250"
            unselectable="on"
            alt="website creator smiling"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
