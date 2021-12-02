import Navbar from "./Navbar";
import "./Header.scss";

/** Images */

const Header = () => {
  return (
    <header id="home">
      <Navbar />
      <div className="billboard">
        <div className="billboard-text">
          <h1>
            Hey! I'm <span className="billboard-text__nickname">Euge,</span>
          </h1>
          <p>
            a <b>Web Application Developer</b>{" "}
            currently working at{" "}
            <a
              className="billboard-company"
              href="https://www.allstateni.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Allstate Northern Ireland.</b>
            </a>
          </p>
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
}

export default Header;
