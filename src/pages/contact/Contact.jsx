import React, { useState } from "react";
import { send } from "emailjs-com";
import "./Contact.scss";
// import "../Services/Services.scss";
import {
  MdOutlineEmail,
  MdOutlinePhoneInTalk,
  MdOutlineLocationOn,
} from "react-icons/md";
import { FiLinkedin } from "react-icons/fi";
import SuccessfulNotification from "../../components/notification/SuccessfulNotification";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Mendx Integrated",
    message: "",
    reply_to: "retrodevstechnology@gmail.com",
    from_email: "",
    subject: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_uj89d5n", "template_o468gn3", toSend, "_KkPJ9bejYGK0Ci_U")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

    SuccessfulNotification("Mail Sent Successfully");
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="C_Container">
      <div className="C_Wrapper">
        <div className="C_Text_Wrap">
          <div className="C_Text_Title">CONNECT WITH US</div>
          <h3 className="C_Text_Header">
            Fill out the <span className="C_Purple">contact form </span>
            below to reach out to us.
          </h3>
        </div>
        <section className="Contact_Wrapper">
          <form className="C_Form" onSubmit={onSubmit}>
            <label className="form_label">Full Name</label>
            <input
              type="text"
              placeholder="Your Full Name"
              name="from_name"
              value={toSend.from_name}
              className="form_control"
              onChange={handleChange}
            />
            <label className="form_label">Email</label>
            <input
              type="email"
              placeholder="your email address"
              name="from_email"
              value={toSend.from_email}
              className="form_control"
              onChange={handleChange}
            />
            <label className="form_label">Subject</label>
            <input
              type="text"
              placeholder="subject"
              name="subject"
              value={toSend.subject}
              className="form_control"
              onChange={handleChange}
            />
            <label className="form_label">Message</label>
            <textarea
              name="message"
              placeholder="Message"
              type="text"
              cols="30"
              rows="10"
              value={toSend.message}
              className="form_control"
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="C_btn">
              Send Message
            </button>
          </form>
          <div className="C_Info">
            <div className="C_item">
              <div className="C_Svg">
                <MdOutlineLocationOn />
              </div>
              <div className="C_item_Wrap">
                <h3 className="C_item_title">
                  <span>Our Location</span>
                </h3>
                <h3 className="C_item-text">
                  No 3, Nana Street, Benin City, Edo State.
                </h3>
              </div>
            </div>
            <div className="C_item">
              <div className="C_Svg">
                <MdOutlineEmail />
              </div>
              <div className="C_item_Wrap">
                <h3 className="C_item_title">
                  <span>Our Contact E-mail</span>
                </h3>
                <h3 className="C_item-text">mendxintegrated@gmail.com.com</h3>
              </div>
            </div>
            <div className="C_item">
              <div className="C_Svg">
                <MdOutlinePhoneInTalk />
              </div>
              <div className="C_item_Wrap">
                <h3 className="C_item_title">
                  <span>Our Phone Number</span>
                </h3>
                <h3 className="C_item-text">0901 882 3578</h3>
              </div>
            </div>
            <div className="C_item">
              <div className="C_Socials">
                <a
                  href="https://www.linkedin.com/company/mendx-integrated-limited/about/"
                  className="C_Social"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FiLinkedin />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;
