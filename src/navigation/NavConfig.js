/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import MainPage from "../pages/Main";
import _404Page from "../pages/404page/404Page";

const NavConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<MainPage />} />
        <Route path="/*" element={<_404Page />} />
      </Route>
    </Routes>
  );
};

export default NavConfig;
