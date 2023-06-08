import React from "react";
import "../utils/styles/CardSection2.css";

const CardSection2 = () => {
  return (
    <>
      <div className="cardheader2">
        <h2>Browser Properties</h2>
      </div>
      <div className="card-section-2">
        <div className="cards2">
          <h3>Homes</h3>
          <hr />
          <div className="box-container">
            <div className="box">
              3 Marla <br />
              Home
            </div>
            <div className="box">
              5 Marla <br />
              Home
            </div>
            <div className="box">
              10 Marla <br />
              Home
            </div>
            <div className="box">
              New <br />
              Home
            </div>
            <div className="box">
              Small <br />
              Home
            </div>
            <div className="box">Villas</div>
          </div>
        </div>
        <div className="cards2">
          <h3>Plots</h3>
          <hr />
          <div className="box-container">
            <div className="box">
              3 Marla <br />
              Plot
            </div>
            <div className="box">
              5 Marla <br />
              Plot
            </div>
            <div className="box">
              10 Marla <br />
              Plot
            </div>
            <div className="box">
              1 Kanal <br />
              Plot
            </div>
            <div className="box">
              Small <br />
              Plot
            </div>
            <div className="box">
              Corner <br />
              Plot
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSection2;
