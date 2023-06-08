import React from "react";
import "../utils/styles/search.css";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

const Search = () => {
  return (
    <div className="search-box">
      <div className="search-box-C2">
        <div className="ellipse-1"></div>
        <div className="ellipse-2"></div>
        <input type="text" placeholder="Search By City or Area" />
        <div className="search-icon">
          <SearchIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Search;
