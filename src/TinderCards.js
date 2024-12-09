import React, { useEffect, useState, } from "react";
import TinderCard from "react-tinder-card";
import './TinderCards.css';
import { collection, onSnapshot } from "firebase/firestore"; // Firestore imports
import db from "./Firebase"; // Adjust the path to Firebase.js

function TinderCards() {
    const [people, setPeople] = useState([]); // Add this line at the top of your component

  
    useEffect(() => {
      const unsubscribe = onSnapshot(collection(db, "people"), (snapshot) => {
        setPeople(snapshot.docs.map(doc => doc.data()));
      });
    
      // Cleanup function to unsubscribe from the listener when the component unmounts
      return () => unsubscribe();
    }, []);
    

  return (
    <div className="tinderCards">
      <h1>Lender Cards</h1>

      <div className="tinderCards__cardContainer">
        {people.map((person, index) => (
          <TinderCard
            className="swipe"
            key={person.id} // Use doc.id a unique identifier for key
            preventSwipe={["up", "down"]} // Optionally, prevent swipe up and down actions
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }} // Make sure the URL is valid
              className="card"
            >
              <h3>{person.name}</h3> {/* Display the name */}
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
