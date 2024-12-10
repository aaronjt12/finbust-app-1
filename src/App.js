import React from "react";
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TinderCards from './TinderCards';
import SwipeButtons from "./SwipeButtons";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/chat" element={<h1>I am the chatpage</h1>} /> 
          <Route path="/" element={<TinderCards />} /> 
        </Routes>
        <SwipeButtons />
      </Router>
    </div>
  );
}

export default App;  
