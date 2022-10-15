import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import UseMediaQuery from "../../components/mediaquery/UseMediaQuerry";
import { FiArrowDown } from "react-icons/fi";
import "./Home.scss";
import Hero from "../../assets/images/Compressed Hero Image.png";
import Mobile from "../../assets/images/Mobile Compressed Hero Image.png";

const Home = () => {
  const navigate = useNavigate();
  let isPageWide = UseMediaQuery("(max-width: 468px)");

  return (
    <section id="home" className="Home_Page">
      {isPageWide ? (
        <>
          <img src={Mobile} className="hero_image" alt="hero" />
          <div className="Home_Wrapper">
            <div className="Home_btn">
              <Link
                smooth={true}
                spy={true}
                to="services"
                offset={-80}
                onClick={() => navigate("/")}
              >Learn About Us</Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <img src={Hero} className="hero_image" alt="hero" />
          <div className="Home_Wrapper">
            <div className="Home_Svg">
              <Link
                className="Home_svg_btn"
                smooth={true}
                spy={true}
                to="services"
                offset={-80}
                onClick={() => navigate("/")}
              >
                <FiArrowDown />
              </Link>
            </div>
            <div className="Home_btn">
            <Link
                smooth={true}
                spy={true}
                to="services"
                offset={-80}
                onClick={() => navigate("/")}
              >Learn About Us</Link></div>
          </div>
        </>
      )}
    </section>
  );
};

export default Home;
