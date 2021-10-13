import "./Footer.scss";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">
      <a class="footer-github__link"
          href="https://github.com/eugelito/eugelito"
          target="_blank"
          rel="noopener noreferrer"
        ><span className="footer-text__copyCurrentYear">
          &copy;
          {currentYear}{" "}
        </span>
        Designed and developed by{" "}
          Euge
        </a>
      </div>
    </footer>
  );
}

export default Footer;
