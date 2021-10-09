import Navbar from './Navbar';
import './Header.scss';

/** Images */
import Eugejpg from "../../src/images/Euge.jpeg";

function Header() {
  return (
    <header id="home">
    <Navbar/>
      <div className="billboard">
        <div className="billboard-text">
          <h1>
            Hey! I'm <span className="billboard-text__nickname">Euge,</span>
          </h1>
          <p>
            a <b>Web Application Developer</b> currently working at{" "}
            <b>Allstate Northern Ireland.</b>
          </p>
          <ul className="billboard-social">
            <li>
              <a
                href="https://www.linkedin.com/in/eugelito/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in fa-2x"></i>
              </a>

              <a
                href="https://github.com/eugelito"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github fa-2x"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="billboard-image">
          <img src={Eugejpg} width="250" height="250" unselectable="on" alt="website creator smiling" />
        </div>
      </div>
    </header>
  );
}

export default Header;
