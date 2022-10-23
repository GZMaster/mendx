import React, { useState } from "react";
import Card from "../../components/card/Card";
import ServicesData from "../../assets/data/ServicesData";
import "./Services.scss";

const Services = () => {
  const [cardData] = useState(ServicesData);
  return (
    <section id="services" className="S_Container">
      <div className="S_Wrapper">
        <div className="S_Top_Wrap">
          <div className="S_Top">What we do</div>
          <p className="S_Wrapper_Text">
            SOME OF <span className="S_Purple">OUR SERVICES</span> INCLUDE:
          </p>
        </div>
        <Card items={cardData} />
      </div>
    </section>
  );
};

export default Services;
