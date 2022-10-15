import React from "react";
import Home from "./home/Home";
import About from "./about/About";
import Services from "./services/Services";
import Review from "./review/Review";
import Contact from "./contact/Contact";

const MainPage = () => {
  return (
    <div>
      <Home />
      <About />
      <Services />
      <Review></Review>
      <Contact />
    </div>
  );
};

export default MainPage;
