import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
