import React from "react";
import "./Chat.css"; // Optional: Add styles for the Chat component
import Avatar from "@mui/material/Avatar";

function Chat({ name, message, timestamp, profilePic }) {
  return (
    <div className="chat">
      <Avatar className="chat__image" alt={name} src={profilePic} />
      <div className="chat__image">
          <h2>{name}</h2>
          <div className="chat__details">
    <p>{message}</p>
</div>
          
          </div>
          <p className="chat__timestamp">{timestamp}</p>
      </div>
  );
}

export default Chat;
