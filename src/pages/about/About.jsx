import React from "react";
import UseMediaQuery from "../../components/mediaquery/UseMediaQuerry";
import "./About.scss";
import AboutImage1 from "../../assets/images/About Us Image 1Mendx.png";
import AboutImage1Mobile from "../../assets/images/About Us Image 1mobile.png";
import AboutImage2 from "../../assets/images/About Us Image 2Mendx.png";
import AboutImage2Mobile from "../../assets/images/About Us Image 2Mobile.png";
import Flag from "../../assets/images/Nigerian Map.png";
import FlagMobile from "../../assets/images/Nigerian Mapmobile.png";

const About = () => {
  let isPageWide = UseMediaQuery("(max-width: 468px)");

  return (
    <section id="about" className="About_Container">
      <div className="About_Wrapper">
        <div className="About_Image_Wrap">
          {!isPageWide ? (
            <div className="About_Image">
              <img src={Flag} className="Image_Flag" alt="" />
              {/* <img src={AboutImage1} className="Image_1" alt="" /> */}
              {/* <img src={AboutImage2} className="Image_2" alt="" /> */}
            </div>
          ) : (
            <div className="About_Image">
              <img src={FlagMobile} className="Image_Flag" alt="" />
              <img src={AboutImage1Mobile} className="Image_1" alt="" />
              <img src={AboutImage2Mobile} className="Image_2" alt="" />
            </div>
          ) }
        </div>
        <div className="About_Text_Wrapper">
          <p>Est vitae vitae sagittis tellus vitae.</p>

          <h3 className="About_Text_Header">Nibh libero ornare pulvinar in metus.</h3>

          <p>Risus feugiat urna ut rhoncus. Euismod leo aliquam enim morbi tincidunt ultricies quam neque. Ultrices quisque viverra non nunc. Turpis sed ultrices habitant nibh arcu. Quis convallis sed.</p>
        </div>

      </div>
    </section>
  );
};

export default About;
