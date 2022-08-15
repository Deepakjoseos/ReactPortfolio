import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3xjno8i",
        "template_dryhr84",
        form.current,
        "nNn1Kmlk-xczksGMJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>deepakjose224@gmail.com</h5>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto: josedipu9@gmail.com"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>deepakjose224@gmail.com</h5>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto: josedipu9@gmail.com"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+917907018663</h5>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://api.whatsapp.com/send?phone=7907018663"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/*End of Contact Option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your FullName" required />
          <input type="email" name="email" placeholder="Your Mail" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Message"
            required
          ></textarea>
          <input
            type="submit"
            value="Send A Message"
            className="btn btn-primary"
          />
        </form>
      </div>
    </section>
  );
};
export default Contact;
