import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactMe.css";

import cmHorizBg from "../../assets/cmHorizBg.jpg";
import cmVertBg from "../../assets/cmVertBg.jpg";
import { MdAlternateEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";

// Abbreviations: {bg: background, msg: message, btm: bottom, horiz: horizontal, vert: vertical, cm: contact-me}
const ContactMe = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userRespond, setUserRespond] = useState(false);
  const form = useRef();

  const inputChangeHandler = (e) => {
    e.preventDefault();

    setUserName(e.target.event);
    setUserEmail(e.target.event);
    setUserMessage(e.target.event);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2pybxcm",
        "template_926571o",
        form.current,
        "hINxQqHWhS0J_swtW"
      )
      .then(
        (result) => {
          console.log(result.text);
          setUserRespond(true);

          setUserName("");
          setUserEmail("");
          setUserMessage("");
        },
        (error) => {
          console.log(error.text);
          console.log("Something went wrong, please try again.");
        }
      );
  };

  const closeUserRespondHandler = () => {
    setUserRespond(false);
  };

  return (
    <section className="contact-me">
      <img
        className="horiz-bg"
        src={cmHorizBg}
        alt="Background for bigger devices in landscape mode"
      />
      <img
        className="vert-bg"
        src={cmVertBg}
        alt="Background for devices in portrait mode"
      />
      <h2 className="title">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="form">
        <div className="user-info">
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={userName}
            onChange={inputChangeHandler}
            required
            placeholder="Your name"
          />

          <input
            type="email"
            id="user_email"
            name="user_email"
            value={userEmail}
            onChange={inputChangeHandler}
            required
            placeholder="Your email"
          />
        </div>
        <div className="user-msg">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={userMessage}
            onChange={inputChangeHandler}
            required
          />
        </div>
        <button type="submit" value="Send">
          Submit
        </button>
      </form>

      <address className="cm-horiz-right cm-vert-btm">
        <a href="mailto:khybersaadat93@gmail.com">
          <MdAlternateEmail />
          <span>khybersaadat93@gmail</span>
        </a>
        <a href="tel:+420776200619">
          <BsTelephone />
          <span>+420 776 200 619</span>
        </a>
        <p>
          <GoLocation />
          <span>
            Prague,<span>Czech Republic</span>
          </span>
        </p>
      </address>
      {userRespond && (
        <div className="userRespond">
          <AiOutlineClose
            size="3rem"
            className="closeIcon"
            onClick={closeUserRespondHandler}
          />
          <h1>Thank you for your message!</h1>
          <p>I will get back to you as soon as possible.</p>
        </div>
      )}
    </section>
  );
};

export default ContactMe;
