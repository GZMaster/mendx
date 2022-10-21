import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section id="about" className="A_Container">
      <div className="A_Wrapper">
        <div className="A_Text_Wrap">
          <div className="A_Text_Title">WHO ARE WE</div>
          <h3 className="A_Text_Header">
            <span>Energy solutions for a </span>
            <span className="A_Green">GREENER FUTURE</span>
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
            address their energy and lifecycle value goals.
          </p>
        </div>
        <div className="A_Image_Wrap">
          {/* <img src={One} className="A_Image" alt={One} /> */}
        </div>
      </div>
    </section>
  );
};

export default About;
