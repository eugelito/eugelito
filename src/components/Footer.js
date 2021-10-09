import "./Footer.scss";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <div className="footer--text">
        &copy;
        {currentYear} Eugelito Troyo
      </div>
    </footer>
  );

}



export default Footer;
