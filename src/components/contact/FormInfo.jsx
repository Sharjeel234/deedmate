import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../utils/styles/contact.css";

function FormInfo() {
  return (
    <form className="form">
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", padding:"20px" }}>
        <TextField sx={{backgroundColor:"white"}} id="name" label="Name" variant="outlined" required />

        <TextField sx={{backgroundColor:"white"}}
          id="email"
          label="Email"
          variant="outlined"
          type="email"
          required
        />

        <TextField sx={{backgroundColor:"white"}}
          id="message"
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          required
        />

        <Button sx={{backgroundColor:"#cb80ff", width:"100px", padding:"10px", margin:"0 auto"}} variant="contained" type="submit">
          Contact
        </Button>
      </Box>
    </form>
  );
}

export default FormInfo;
