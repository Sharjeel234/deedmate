import React from "react";
import Navbar from "../components/header/navbar.jsx";
import LargeText1 from "../components/main/text1.jsx";
import LargeText2 from "../components/main/text2.jsx";
import Search from "../components/main/search.jsx";
import CardSection1 from "../components/main/CardSection1.jsx";
import CardSection2 from "../components/main/CardSection2.jsx";
import CardSection3 from "../components/main/CardSection3.jsx";
import CardSection4 from "../components/main/CardSection4.jsx";
import Footer from "../components/main/Footer.jsx";

function Home() {
  return (
    <div>
      <Navbar />
      <LargeText1 />
      <LargeText2 />
      <Search />
      <CardSection1 />
      <CardSection2 />
      <CardSection3 />
      <CardSection4 />
      <Footer />
    </div>
  );
}

export default Home;
