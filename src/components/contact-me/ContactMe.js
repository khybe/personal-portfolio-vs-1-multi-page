import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactMe.css";

import contactMePic from "../../assets/contactMe.jpg";
import { MdAlternateEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

// Abbreviations: {bg: background, msg: message, dt: desktop, mb: mobile, btm: bottom, cm: contact-me}
const ContactMe = () => {
  const form = useRef();

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
          alert(
            "Thank you for your message! \n I will get back to you as soon as possible."
          );
        },
        (error) => {
          console.log(error.text);
          console.log("Something went wrong, please try again.");
        }
      );
  };

  return (
    <section className="contact-me">
      <img
        className="bg"
        src={contactMePic}
        alt="Left side background for contact me section"
      />
      <h2 className="title">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="form">
        <div className="user-info">
          <input
            type="text"
            id="user_name"
            name="user_name"
            required
            placeholder="Your name"
          />

          <input
            type="email"
            id="user_email"
            name="user_email"
            required
            placeholder="Your email"
          />
        </div>
        <div className="user-msg">
          <label for="message">Message</label>
          <textarea id="message" name="message" required />
        </div>
        <button type="submit" value="Send">
          Submit
        </button>
      </form>

      <address className="cm-dt-right cm-mb-btm">
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
    </section>
  );
};

export default ContactMe;
