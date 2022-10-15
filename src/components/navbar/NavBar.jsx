import React, { useState } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import BurgerMenu from "../hamburger/BurgerMenu";
import UseMediaQuery from "../mediaquery/UseMediaQuerry";
import logo from "../../assets/images/Rigvigon Logo.png";
import "./NavBar.scss";

const NavBar = () => {
  const navigate = useNavigate();
  const [selectPage, setSelectPage] = useState("Home");
  let isPageWide = UseMediaQuery("(min-width: 768px)");

  const handleClick = (path) => {
    navigate("/");
    setSelectPage(path)
  }

  return (
    <div className="nav__component">
      <div className="nav__header">
        <img className="logo" src={logo} alt="" />
      </div>

      {isPageWide ? (
        <div className="links__content">
          <Link
            className={selectPage === "Home" ? "links selected" : "links"}
            smooth={true}
            spy={true}
            to="home"
            offset={-80}
            onClick={() => handleClick("Home")}
          >
            Home
          </Link>
          <Link
            className={selectPage === "About Us" ? "links selected" : "links"}
            smooth={true}
            spy={true}
            to="about"
            offset={-80}
            onClick={() => handleClick("About Us")}
          >
            About Us
          </Link>
          <Link
            className={selectPage === "What we do" ? "links selected" : "links"}
            smooth={true}
            spy={true}
            to="services"
            offset={-80}
            onClick={() => handleClick("What we do")}
          >
            What we do
          </Link>

          <Link
            className={
              selectPage === "Contact Us"
                ? "links Contact-Link selected"
                : "links Contact-Link"
            }
            smooth={true}
            spy={true}
            to="contact"
            offset={-80}
            onClick={() => handleClick("Contact Us")}
          >
            Contact Us
          </Link>
        </div>
      ) : (
        <BurgerMenu />
      )}
    </div>
  );
};

export default NavBar;
