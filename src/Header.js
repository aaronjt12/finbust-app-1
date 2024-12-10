import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";

function Header() {
  return (
    <div className="header">
      {/* Person Icon */}
      <IconButton>
        <PersonIcon className="header__icon" fontSize="large" />
      </IconButton>

      {/*"Finbust" */}
      <h1 className="header__title">Finbust</h1>

      {/* Forum Icon */}
      <IconButton>
        <ForumIcon className="header__icon" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Header;
