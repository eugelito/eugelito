import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div class="navbar__container">
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
      </div>
    </nav>
  );
}

export default Navbar;


