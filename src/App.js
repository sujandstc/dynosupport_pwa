import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button className="add-button">Add to home screen</button>
      </header>
    </div>
  );
}

export default App;
