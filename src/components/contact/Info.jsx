import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { Grid } from "@mui/material";
import phoneicon from "../utils/images/phone-icon.png";
import addressicon from "../utils/images/address-icon.png";
import emailicon from "../utils/images/email-icon.png";

import "../utils/styles/contact.css";

function Info() {
  return (
    <div className="container">
      <h2>Welcome! Feel free to contact us.</h2>
      <Grid className="cugrid" container spacing={10}>
        <Grid item xs={4}>
          <Card sx={{backgroundColor:"#cb80ff"}}>
            <CardHeader
              avatar={
                <img
                  src={addressicon}
                  alt="Address Icon"
                  width="30"
                  height="30"
                />
              }
              title="Address"
            />
            <CardContent>
              <p className="Card_p">123 Main Street, City, State, ZIP</p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{backgroundColor:"#cb80ff"}}>
            <CardHeader
              avatar={
                <img src={phoneicon} alt="Phone Icon" width="30" height="30" />
              }
              title="Phone"
            />
            <CardContent>
              <p className="Card_p">123-456-789</p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{backgroundColor:"#cb80ff"}}>
            <CardHeader
              avatar={
                <img src={emailicon} alt="Email Icon" width="30" height="30" />
              }
              title="Email"
            />
            <CardContent>
              <p className="Card_p">info@deedmate.com</p>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Info;
