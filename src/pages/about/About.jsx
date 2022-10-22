import React from "react";
import UseMediaQuery from "../../components/mediaquery/UseMediaQuerry";
import "./About.scss";
import AboutImage from "../../assets/images/Images Plus Map_About.png";
import AboutImageMobile from "../../assets/images/Images plus map Mobile_About_Mobile.png";

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
          <p>Est vitae vitae sagittis tellus vitae.</p>

          <h3 className="About_Text_Header">Nibh libero ornare pulvinar in metus.</h3>

          <p>Risus feugiat urna ut rhoncus. Euismod leo aliquam enim morbi tincidunt ultricies quam neque. Ultrices quisque viverra non nunc. Turpis sed ultrices habitant nibh arcu. Quis convallis sed.</p>

          <ul className='About_List'>
            <li>
              <img src="" alt="" />
              lorem
            </li>
            <li>
              <img src="" alt="" />
              lorem
            </li>
            <li>
              <img src="" alt="" />
              lorem
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default About;
