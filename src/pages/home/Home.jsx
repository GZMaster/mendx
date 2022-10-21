import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import UseMediaQuery from "../../components/mediaquery/UseMediaQuerry";
import "./Home.scss";
import Hero from "../../assets/images/Hero Image Mendx.png";

const Home = () => {
  const navigate = useNavigate();
  let isPageWide = UseMediaQuery("(max-width: 468px)");

  return (
    <section id="about" className="H_Container">
      <div className="H_Wrapper">
        <div className="H_Text_Wrap">
          {/* <div className="H_Text_Title">
            <span className="H_Orange">BRALE</span>
            <span className="H_Blue">WOOD</span> INVESTMENTS LTD
          </div> */}
          <h3 className="H_Text_Header">
            Energy solutions for a greener future
          </h3>
          <p>
            Mendex integrated resources is an energy based company that
            specializes in the production of renewable energy. We aim to provide
            reliable, more sustainable and eco-friendly energy systems. Our goal
            is to help our customers find alternatives to traditional energy
            sources to power their work and reduce greenhouse gas emissions. As
            they aim to achieve environmental and business sustainability while
            maintaining the highest levels of performance and productivity,
            we’re there—committed and ready to provide the solutions that
            address their energy and lifecycle value goals. ate a financial
            utopia for our clients as they deserve nothing less.
          </p>
          <Link className="H_Btn" activeClass="active" smooth spy to="contact">
            Contact Us
          </Link>
        </div>
        <div className="H_Image_Wrap">
          <img src={Hero} className="H_Image" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
