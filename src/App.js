import React from "react";
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TinderCards from './TinderCards';
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats"; // Import the Chats component
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* messages Chat Route with a Custom Header */}
          <Route
            path="/chat/"
            element={
              <>
                <Header backButton="/chat" />
                <Chats />
              </>
            }
            />
          {/* Chat Route with a Custom Header */}
          <Route
            path="/chat"
            element={
              <>
                <Header backButton="/" />
                <Chats />
              </>
            }
          />

          {/* Home Route with TinderCards and SwipeButtons */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <TinderCards />
                <SwipeButtons />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
