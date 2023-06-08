import React from "react";
import Navbar from "../components/header/navbar.jsx";
import Footer from "../components/main/Footer.jsx";
import "../components/utils/styles/Aboutus.css";

function AboutUs() {
  return (
    <div>
      <Navbar />
      <h2 className="tm">Team Members</h2>
      <div className="team-members">
        <div className="team-member">
          <h2>Sharjeel Mansoor</h2>
          <p>Developer</p>
        </div>
        <div className="team-member">
          <h2>Hadia Naeem</h2>
          <p>Designer</p>
        </div>
      </div>
      <div className="our-goal">
        <h2>Our Goal</h2>
        <p>
        The current land registration system in Pakistan faces numerous challenges, including corruption, inefficiency, and lack of transparency. In this project, we propose DeedMate, a blockchain-based land registration system that seeks to address these challenges. It offers a user-friendly website and application that utilizes Maps and Street View APIs to help users select the location they want to buy or bid on. Once the user selects the location, they can proceed to purchase the land or bid on it. The payment for the land can be done through a crypto wallet, which generates their registry in the form of an NFT or through a challan that can be paid in any bank in Pakistan.
        </p>
      </div>
      <Footer className="auf"/>
    </div>
  );
}

export default AboutUs;