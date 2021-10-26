import Navbar from "./Navbar";
import "./Header.scss";

/** Images */

function Header() {
  return (
    <header id="home">
      <Navbar />
      <div className="billboard">
        <div className="billboard-text">
          <h1>
            Hey! I'm <span className="billboard-text__nickname">Euge,</span>
          </h1>
          <p>
            a <b className="billboard-role">Web Application Developer</b>{" "}
            currently working at <b>Allstate Northern Ireland.</b>
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
