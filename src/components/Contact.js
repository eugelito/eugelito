import React, { useState } from "react";

import "./Contact.scss";
import { db } from "../firebase";
import useWow from "./wowHook/useWow";

const Contact = () => {
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");

  useWow();
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
      <h1 id="contact" className="animate__animated animate__slideInUp wow">
        Contact
      </h1>
      <p className="hint">Get in touch by completing the contact form below.</p>
      <form className="form" onSubmit={handleSubmit}>
        <div>
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
      </form>
    </div>
  );
};

export default Contact;
