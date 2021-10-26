import "./Contact.scss";

function Contact() {
  return (
    <div>
      <h1 id="contact">Contact</h1>
      <p className="content-contact">
        Connect with me on{" "}
        <a
          href="https://www.linkedin.com/in/eugelito/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        or send an email to{" "}
        <a href="mailto:eugelito@outlook.com">eugelito@outlook.com</a>.
      </p>
      <ul className="contact-social">
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
              <a href="mailto:eugelito@outlook.com"
              target="_blank"
              rel="noopener noreferrer">
            <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
            </a>
            </li>
          </ul>
    </div>
  );
}

export default Contact;
