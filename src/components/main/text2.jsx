import React from "react";
import "../utils/styles/text2.css";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    myColor: {
      main: "#8956f1",
    },
    sx: {
      display: "flex",
    },
  },
});

function LargeText2() {
  return (
    <div className="large-text-container-2">
      <p>Buy Property and Get Your</p>
      <p>NFT Registry</p>
      <ThemeProvider theme={theme}>
        <div className="Text2-Btns">
          <Button
            variant="contained"
            color="myColor"
            sx={{
              color: "white",
              width: "80px",
              height: "40px",
              fontSize: "14px",
              marginRight: "100px",
            }}
          >
            Buy
          </Button>
          <Button
            variant="contained"
            color="myColor"
            sx={{
              color: "white",
              width: "80px",
              height: "40px",
              fontSize: "14px",
              marginLeft: "100px",
            }}
          >
            Sell
          </Button>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default LargeText2;
