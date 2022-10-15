import React from "react";
import "./Footer.scss";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="Footer">
      <div className="F_text">
        <p>Copyright © 2022 Rigvidon Energy. All rights reserved.</p>
        <p>
          Designed by <span className="F_Team">Retro Developers</span>
        </p>
      </div>
      <div className="F_Socials">
        <a
          href="https://www.linkedin.com/company/rigvidon-energy/about/"
          className="F_item"
          target={"_blank"}
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
