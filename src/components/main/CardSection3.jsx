import React from "react";
import "../utils/styles/CardSection3.css";

function Cards3(props) {
  return (
    <div className="cards3">
      <img src={props.imgUrl} alt={props.imgAlt} />
      <div className="card-info-3">
        <h3>{props.title}</h3>
      </div>
    </div>
  );
}

const CardSection3 = () => {
  return (
    <div>
      <div className="cardheader3">
        <h2>Famous Places</h2>
      </div>
      <div className="card-section-3">
        <Cards3
          imgUrl="https://via.placeholder.com/300x200.png?text=Card+1+Image"
          imgAlt="Card 1 Image"
          title="Bahria Orchard"
        />
        <Cards3
          imgUrl="https://via.placeholder.com/300x200.png?text=Card+2+Image"
          imgAlt="Card 2 Image"
          title="Wapda Town"
        />
        <Cards3
          imgUrl="https://via.placeholder.com/300x200.png?text=Card+3+Image"
          imgAlt="Card 3 Image"
          title="Model Town"
        />
      </div>
    </div>
  );
};

export default CardSection3;
