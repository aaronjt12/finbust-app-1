import React from "react";
import "./Chats.css"; // Make sure Chats.css exists in the same directory
import Chat from "./Chat"; // Ensure the Chat.js file exists and is in the same directory

function Chats() {
  return (
    <div className="chats">
      <Chat 
        name="Mark"
        message="Yo what's up! Let's do a deal. I can do 5% over 30 days for up to $500 line of credit."
        timestamp="40 seconds ago"
        profilePic="https://www.shutterstock.com/image-photo/portrait-mature-man-45-50-600nw-2089548508.jpg" // Replace with a valid image URL
      />
       <Chat 
        name="Linda"
        message="You have great credit history. I can do 4.7% over 7 days for up to $1000."
        timestamp="55 seconds ago"
        profilePic="https://media.istockphoto.com/id/1369508766/photo/beautiful-successful-latin-woman-smiling.jpg?s=612x612&w=0&k=20&c=LoznG6eGT42_rs9G1dOLumOTlAveLpuOi_U755l_fqI=" // Replace with a valid image URL
      />
       <Chat 
        name="James"
        message="I offer 90 day loans with 7% apr and low monthly payment options. Let's talk"
        timestamp="30 minutes ago"
        profilePic="https://www.shutterstock.com/image-photo/portrait-photo-person-project-concept-260nw-507830914.jpg" // Replace with a valid image URL
      />
       <Chat 
        name="Greg"
        message="Hey, I offer down payment assistance for home buyers ata competitive rate if you need a few grand"
        timestamp="1 hr ago"
        profilePic="https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.webp?b=1&s=612x612&w=0&k=20&c=07SAQPb33q39bTswXx3DsQWU0Mwnuvs2GxigTlLo9Lg=" // Replace with a valid image URL
      />
    </div>
  );
}

export default Chats;
