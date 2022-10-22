import React from "react";
import UseMediaQuery from "../../components/mediaquery/UseMediaQuerry";
import "./About.scss";
import AboutImage from "../../assets/images/Images Plus Map_About.png";
import AboutImageMobile from "../../assets/images/Images plus map Mobile_About_Mobile.png";
import icon1 from "../../assets/images/Thumbs up_AboutIcon.png";
import icon2 from "../../assets/images/Eye_AboutIcon.png";
import icon3 from "../../assets/images/Badge_AboutIcon.png";

const About = () => {
  let isPageWide = UseMediaQuery("(max-width: 468px)");

  return (
    <section id="about" className="About_Container">
      <div className="About_Wrapper">
        <div className="About_Image_Wrap">
          {!isPageWide ? (
            <div className="About_Image">
              <img src={AboutImage} className="Image" alt="" />
            </div>
          ) : (
            <div className="About_Image">
              <img src={AboutImageMobile} className="Image" alt="" />
            </div>
          ) }
        </div>
        <div className="About_Text_Wrapper">
          <div className="About_Text_Heading">
            <p>Get to know us more</p>
            <h3 className="About_Text_Header">Benefits of <span>Partnering with</span> us.</h3>
          </div>

          <div className="About_Text_Body">

            <p>Our goal is to help our customers find alternatives to traditional energy sources to power their systems with and help them reduce their contribution to earth’s greenhouse gas emissions. </p>

            <ul className='About_List'>
              <li>
                <img src={icon1} alt="" />
                <p>
                  We ensure 100% transparency
                </p>
                 
              </li>
              <li>
                <img src={icon2} alt="" />
                <p>
                  We are equipped with a team of highly efficient and experienced personnels
                </p>
              </li>
              <li>
                <img src={icon3} alt="" />
                <p>
                  High level of precision in the execution of our services
                </p>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
