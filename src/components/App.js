import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {

  return (
    <div className="App" id="main">
   
        <p id="para" style={{display: "none"}}>
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
        
      <button id="click" onClick={{ document.getElementById("para").style.display="block" }}>
        Click me
      </button>
    </div>
  );
}

export default App
