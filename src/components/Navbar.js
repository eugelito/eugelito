import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <a className="navbar-name" href="#home">
        <span className="navbar-name__nickname">EUGE</span>LITO TROYO
      </a>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <ul></ul>
    </nav>
  );
}

export default Navbar;
