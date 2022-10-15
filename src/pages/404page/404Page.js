import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import UseMediaQuery from "../../components/mediaquery/UseMediaQuerry";
import { FiArrowLeft } from "react-icons/fi";
import "./404Page.scss";

const _404Page = () => {
  const navigate = useNavigate();
  let isPageWide = UseMediaQuery("(max-width: 468px)");

  return (
    <section className="_404_container">
      {isPageWide ? null : (
        <div className="_404_bgLeft" />
      )}

      <div className="_404_wrapper">
        <div className="_404_title">
          <h1>
            404
          </h1>
        </div>

        <div className="_404_text">
          <p>
            Opps, Something went wrong!, it seems the page you are looking for is
            currently under construction.
          </p>
        </div>

        {isPageWide ? (
          <div className="_404_btn_Wrapper">
            <div className="_404_btn">
              <Link
                smooth={true}
                spy={true}
                to="home"
                offset={-80}
                onClick={() => navigate("/")}
              >
                Back To Home
              </Link>
            </div>
          </div>
        ) : (
          <div className="_404_btn_Wrapper">
            <div className="_404_SVG">
              <Link
                className="_404_svg_btn"
                smooth={true}
                spy={true}
                to="home"
                offset={-80}
                onClick={() => navigate("/")}
              >
                <FiArrowLeft />
              </Link>
            </div>
            <div className="_404_btn">
              <Link
                smooth={true}
                spy={true}
                to="home"
                offset={-80}
                onClick={() => navigate("/")}
              >
                Back To Home
              </Link>
            </div>
          </div>
        )}
      </div>

      {isPageWide ? null : (
        <div className="_404_bgRight" />
      )}
    </section>
  );
};

export default _404Page;
