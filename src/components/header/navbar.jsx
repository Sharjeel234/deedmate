import React from "react";
import "../utils/styles/navbar.css";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    myColor: {
      main: "#8956f1",
    },
  },
});

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">DeedMate</a>
      </div>
      <ul className="navbar-menu">
        <li>
          <a className="hover" href="/buy">
            Buy
          </a>
        </li>
        <li>
          <a className="hover" href="/Sell">
            Sell
          </a>
        </li>
        <li>
          <a className="hover" href="/contact">
            Contact Us
          </a>
        </li>
        <li>
          <a className="hover" href="/about">
            About Us
          </a>
        </li>
      </ul>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="myColor"
          sx={{
            color: "white",
            width: "100px",
            height: "40px",
            fontSize: "14px",
          }}
        >
          Sign In
        </Button>
      </ThemeProvider>
    </nav>
  );
}

export default Navbar;
