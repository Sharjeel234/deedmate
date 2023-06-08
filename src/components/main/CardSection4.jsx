import React from "react";
import { Button } from "@mui/material";
import "../utils/styles/CardSection4.css";
import { Bed, Shower, ZoomOutMap } from '@mui/icons-material';

function Cards4(props) {
  return (
    <div className="cards4">
      <img src={props.imgUrl} alt={props.imgAlt} />
      <div className="card-info-4">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <Button>{props.buttonText}</Button>
      </div>
    </div>
  );
}

const CardSection4 = () => {
  return (
    <div>
      <div className="cardheader4">
        <h2>Buy</h2>
      </div>
      <div className="card-section-4">
        <Cards4
          imgUrl="https://via.placeholder.com/300x200.png?text=Card+1+Image"
          imgAlt="Card 1 Image"
          title="PKR 1.5 Cr"
          description={
            <div>
              <Bed /> 5 <Shower /> 5 <ZoomOutMap /> 1500 sqft
              <div>
                Bahria Orchard Sector K, Lahore
              </div>
            </div>
          }  
          buttonText="View More"
        />
        <Cards4
          imgUrl="https://via.placeholder.com/300x200.png?text=Card+2+Image"
          imgAlt="Card 2 Image"
          title="PKR 19 Lac"
          description={
            <div>
              <Bed /> 3 <Shower /> 3 <ZoomOutMap /> 1 Marla
              <div>
                Wapda Town Sector D, Lahore
              </div>
            </div>
          }  
          buttonText="View More"
        />
        <Cards4
          imgUrl="https://via.placeholder.com/300x200.png?text=Card+3+Image"
          imgAlt="Card 3 Image"
          title="PKR 10 Lac"
          description={
            <div>
              <Bed /> 2 <Shower /> 2 <ZoomOutMap /> 200 sqft
              <div>
                DHA Phase 9, Lahore
              </div>
            </div>
          }  
          buttonText="View More"
        />
      </div>
    </div>
  );
};

export default CardSection4;
