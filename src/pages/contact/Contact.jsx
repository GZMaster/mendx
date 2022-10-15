import React, { useState } from "react";
import { send } from "emailjs-com";
import "./Contact.scss";
// import "../Services/Services.scss";
import { MdEmail, MdPhoneInTalk, MdLocationPin } from "react-icons/md";
import SuccessfulNotification from "../../components/notification/SuccessfulNotification";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Rigvidon",
    message: "",
    reply_to: "retrodevstechnology@gmail.com",
    from_email: "",
    subject: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_uj89d5n","template_o468gn3", toSend, "_KkPJ9bejYGK0Ci_U")
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
        <h4 className="C_title">Connect with us</h4>
        <p className="C_Text">
          Fill out the contact form below to reach out to us
        </p>
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
                <MdLocationPin />
              </div>
              <div className="C_item_Wrap">
                <h3 className="C_item_title">
                  <span>Our Address</span>
                </h3>
                <h3 className="C_item-text">
                  7th floor CBC Towers, No 11 Olubunmi Owa Street, Lekki Phase
                  1, Lagos
                </h3>
              </div>
            </div>
            <div className="C_item">
              <div className="C_Svg">
                <MdEmail />
              </div>
              <div className="C_item_Wrap">
                <h3 className="C_item_title">
                  <span> Email Us</span>
                </h3>
                <h3 className="C_item-text">rigvidenergyltd@gmail.com.com</h3>
              </div>
            </div>
            <div className="C_item">
              <div className="C_Svg">
                <MdPhoneInTalk />
              </div>
              <div className="C_item_Wrap">
                <h3 className="C_item_title">
                  <span>Call Us</span>
                </h3>
                <h3 className="C_item-text">0909 610 0225</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;
