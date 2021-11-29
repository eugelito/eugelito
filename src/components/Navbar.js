import "./Navbar.scss";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div class="navbar__container">
      <a className="navbar-name" href="#home">
        <span className="navbar-name__nickname">EUGE</span>LITO TROYO
      </a>
      <ul>
        <li>
        < AnchorLink href="#about">About</AnchorLink>
        </li>
        <li>
        <AnchorLink href="#projects">Projects</AnchorLink>
        </li>
        <li>
        <AnchorLink href="#contact">Contact</AnchorLink>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;


