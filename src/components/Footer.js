import "./Footer.scss";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">
        <span className="footer-text__copyCurrentYear">&copy;
        {currentYear}  </span>Designed and developed by Euge
      </div>
    </footer>
  );

}



export default Footer;
