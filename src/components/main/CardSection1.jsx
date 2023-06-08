import React from "react";
import "../utils/styles/CardSection1.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BuyImg from "../utils/images/buyProp.jpg";
import SellImg from "../utils/images/SellProp.jpg";
function CardSection1() {
  return (
    <div className="card-section">
      <Card sx={{ bgcolor: "white", width: "300px", borderRadius: "10px" }}>
        <CardMedia
          component="img"
          height="200"
          image={BuyImg}
          alt="random image"
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h6" component="div">
            Buy a Property
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Discover Your Dream Home
            <br /> Where Comforts And Style Unite!
          </Typography>
          <Button
            className="btn"
            sx={{ marginTop: "10px", backgroundColor: "#cb80ff" }}
            variant="contained"
          >
            Discover Your Dream
          </Button>
        </CardContent>
      </Card>
      <Card sx={{ bgcolor: "white", width: "300px", borderRadius: "10px" }}>
        <CardMedia
          component="img"
          height="200"
          image={SellImg}
          alt="random image"
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h6" component="div">
            Sell a Property
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Secure Optimal Value In
            <br /> Any Economy With US
          </Typography>
          <Button
            className="btn"
            sx={{ marginTop: "10px", backgroundColor: "#cb80ff" }}
            variant="contained"
          >
            Add Details
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default CardSection1;
