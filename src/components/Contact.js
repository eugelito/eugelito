import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Contact.scss";
import { db } from "../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("contacts")
      .add({
        name: name,
        emailAddress: emailAddress,
        message: message,
      })
      .then(() => {
        alert("Message has been submitted.");
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setEmailAddress("");
    setMessage("");
  };

  return (
    <div className="content--contact">
      <h1 id="contact">Contact</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <p className="hint">
            Get in touch by completing the contact form below.
          </p>
          <label>Full name:</label>
          <input
            type="text"
            placeholder="Please enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            minLength={2}
            maxLength={50}
            required
          />

          <label>Email address:</label>
          <input
            type="email"
            placeholder="Please enter your email address"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            minLength={3}
            maxLength={64}
            required
          />

          <label>Message:</label>
          <textarea
            type="text"
            placeholder="Please enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            minLength={5}
            maxLength={4000}
            rows="6"
            required
          ></textarea>

          <input type="submit" id="submitBtn" className="submitBtn" />
        </div>

        <hr className="hr__divider" />
        <ul className="contact-social">
          <b>Other ways to connect:</b>
          <li>
            <a
              href="https://www.linkedin.com/in/eugelito/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/eugelito"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
            </a>
            <a
              href="mailto:eugelito@outlook.com?subject=Ref: Eugelito Contact Form"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Email</span>
            </a>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Contact;
