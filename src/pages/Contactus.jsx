import React from "react";
import Info from "../components/contact/Info";
import FormInfo from "../components/contact/FormInfo";
import Navbar from "../components/header/navbar";
import "../components/utils/styles/contact.css";
import Footer from "../components/main/Footer";

function Contactus() {
  return (
    <div className="op">
      <Navbar />
      <Info />
      <FormInfo />
      <Footer />
    </div>
  );
}

export default Contactus;
