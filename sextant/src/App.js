import React, { useState } from 'react';
import './App.css';
import Exhibit from './Exhibit';
import Banner from './Banner';


function App() {
  return (
    <div className="App">
      <Banner />
      <div className="content">
        <Exhibit />
      </div>
    </div>
    
  );
}

export default App;
