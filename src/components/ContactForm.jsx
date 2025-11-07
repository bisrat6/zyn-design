import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  faInstagram,
  faFacebookF,
  faXTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import MailSvg from "../assets/mail.svg";

function ContactForm() {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-content">
        <div className="contact-title">
          Let's <span>Create Your Dream</span> Space!
        </div>
        <div className="contact-info-section">
          <ContactInfo contactInfo={"yohaniswendu1234@gmail.com"}>
            <img className="icon" src={MailSvg} alt="e-mail" />
          </ContactInfo>
          <ContactInfo contactInfo={" Addis Ababa, Ethiopia"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-2 w-6 icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 22s8-7 8-13a8 8 0 10-16 0c0 6 8 13 8 13z"
              />
            </svg>
          </ContactInfo>
          <ContactInfo contactInfo={"+251 996 077 345"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.3 3.9a1 1 0 01-.21 1.04l-2.2 2.2a11.042 11.042 0 005.1 5.1l2.2-2.2a1 1 0 011.04-.21l3.9 1.3a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C8.163 21 3 15.837 3 9V5z"
              />
            </svg>
          </ContactInfo>
          <ContactDescription />
          <div className="contact-social-links">
            <a
              href="https://www.instagram.com/zyn_interior/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              href="https://web.facebook.com/profile.php?id=61581597875603"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>

            <a
              href="https://x.com/zyn_interior"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>

            <a
              href="https://www.linkedin.com/in/yohanis-wandifraw-63b171193"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>
      <div className="contact-form-section">
        <Contactform />
      </div>
    </div>
  );
}

function ContactInfo({ contactInfo, children }) {
  return (
    <div className="contact-info">
      {children}
      <p>{contactInfo}</p>
    </div>
  );
}

function ContactDescription() {
  return (
    <p className="contact-description">
      "At Interior Design Co., we craft spaces that inspire and elevate everyday
      living. Combining creativity and attention to detail"
    </p>
  );
}

function Contactform() {
  const form = useRef();
  const [isClicked, setIsClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClicked(true);

    emailjs
      .sendForm(
        "service_tnnvjrl",
        "template_rrspm0i",
        form.current,
        "CF1ZggFxqKbzDQPww"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
          setIsClicked(false);
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.error(error);
          setIsClicked(false);
        }
      );
  };

  return (
    <form className="contact-form" ref={form} onSubmit={handleSubmit}>
      <ContactInput
        className={"contact-form-input"}
        label={"Name"}
        type="text"
        placeholder={"ENTER YOUR NAME"}
        name="user_name"
      />
      <ContactInput
        className={"contact-form-input"}
        label={"Email"}
        type="email"
        placeholder={"ENTER YOUR EMAIL"}
        name="user_email"
      />
      <ContactInput
        className={"contact-form-textarea"}
        label={"Message"}
        type="textArea"
        placeholder={"TYPE YOUR MESSAGE"}
        name="message"
      />
      <button
        type="submit"
        className="contact-submit-button"
        disabled={isClicked}
      >
        {isClicked ? "SENDING..." : "SEND MESSAGE"} <span>→</span>
      </button>
    </form>
  );
}

function ContactInput({ placeholder, className, type, label, name }) {
  return (
    <>
      <label>{label}</label>
      {type === "textArea" ? (
        <textarea
          placeholder={placeholder}
          className={className}
          name={name}
          required
        ></textarea>
      ) : (
        <input
          type={type === "email" ? "email" : "text"}
          placeholder={placeholder}
          className={className}
          name={name}
          required
        />
      )}
    </>
  );
}

export default ContactForm;
