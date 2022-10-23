import React from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
// import UseMediaQuery from "../../components/mediaquery/UseMediaQuerry";
import "./Home.scss";
import Hero from "../../assets/images/Hero Image Mendx.png";

const Home = () => {
  // const navigate = useNavigate();
  // let isPageWide = UseMediaQuery("(max-width: 468px)");

  return (
    <section id="home" className="H_Container">
      <div className="H_Wrapper">
        <div className="H_Text_Wrap">
          <h3 className="H_Text_Header">
            Energy solutions for a greener future
          </h3>
          <p>Mendex integrated resources is an energy based company that specializes in the production of renewable energy. We provide reliable, more sustainable and eco-friendly energy systems.</p>
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
