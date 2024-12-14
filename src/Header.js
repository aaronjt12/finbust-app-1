import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

function Header({ backButton }) {
  const history = useNavigate();

  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history(-1)}>
          <ArrowBackIosIcon fontSize="large" className="header__icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
      )}

      {/* "Finbust" Title */}
      <h1 className="header__title">Finbust</h1>

      {/* Forum Icon */}
      <IconButton onClick={() => history("/chat")}> {/* Navigate to /chats */}
        <ForumIcon className="header__icon" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Header;
