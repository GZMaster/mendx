import React, { useState } from "react";
import UseMediaQuery from "../../components/mediaquery/UseMediaQuerry";
import Card from "../../components/card/Card";
import ServicesData from "../../assets/data/ServicesData";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import valueIcon1 from '../../assets/images/eyes 1Icon.png';
import valueIcon2 from '../../assets/images/Efficiency Icon.png';
import "./Services.scss";

const Services = () => {
  const [cardData] = useState(ServicesData);
  const [pageIndex, setPageIndex] = useState(0)
  let isPageWide = UseMediaQuery("(max-width: 468px)");

  function sideScroll (element, direction, speed, distance, step) {
    let scrollAmount = 0;
    var slideTimer = setInterval(function () {
      if (direction === 'left' && pageIndex >= 0) {
        element.scrollLeft -= step;
        setPageIndex(pageIndex - 1)
      } 
      if (direction === 'right' && pageIndex <= 5) {
        element.scrollLeft += step;
        setPageIndex(pageIndex + 1)
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  }

  return (
    <section id="services" className="S_Container">
      <div className="S_Wrapper">
        <div className="S_Left">
          <div className="S_title">
            <div className="S_textHeader">WHAT WE DO</div>
            <h3>WE PROVIDE A BARRAGE OF{" "}
            <span className="S_Green">
              ENERGY
            </span>{" "}
             RELATED SERVICES</h3>
            <p>Below are some benefits of working with us and the services we offer</p>
          </div>
          <div className="s_values">
            <div>
              <div className="values_icon"><img src={valueIcon1} alt="" /></div>
              <div className="values_text">
                <h3>Transparency</h3>
                <p>We ensure 100% transparency</p>
              </div>
            </div>
            <div>
              <div className="values_icon"><img src={valueIcon2} alt="" /></div>
              <div className="values_text">
                <h3>Experience & Efficiency</h3>
                <p>We are equipped with a team of highly efficient and experienced personnels</p>
              </div>
            </div>
          </div>
        </div>

        <div className="S_Right">
          <div className="S_Top">
            <h2>OUR SERVICES</h2>
            <p className="S_Wrapper_Text">
              Below are some of the services we offer to our clients
            </p>
          </div>

          <div className="servives_holder">
            {isPageWide ? null : (
              <button className="S_Left_Button" onClick={() => sideScroll(document.querySelector('.services_card'), 'left', 25, 250, 10)}><AiOutlineArrowLeft /></button>
            )}
            <div className="services_card" id="services_card">
              <Card viv items={cardData} />
            </div>
            {isPageWide ? null : (
              <button className="S_Right_Button" onClick={() => sideScroll(document.querySelector('.services_card'), 'right', 25, 230, 10)}><AiOutlineArrowRight /></button>
            )}
          </div>

          {isPageWide ? null : (
            <div className="pagination">
            <span className={pageIndex === 0 ? "active" : ""}></span>
            <span className={pageIndex === 1 ? "active" : ""}></span>
            <span className={pageIndex === 2 ? "active" : ""}></span>
            <span className={pageIndex === 3 ? "active" : ""}></span>
            <span className={pageIndex === 4 ? "active" : ""}></span>
            <span className={pageIndex === 5 ? "active" : ""}></span>
          </div>
          )}
          
        </div>
      </div>
    </section>
  );
};

export default Services;
