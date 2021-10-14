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
    </div>
  );
}

export default Contact;
