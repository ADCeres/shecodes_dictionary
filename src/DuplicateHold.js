import React from "react";
import logo from "./logo.svg";
import "./App.css";

function Header() {
  return (
    <div className="Header">
      <div className="App-header">
        <div className="row">
          <div className="col">
            <span>
              <img src={logo} className="App-logo" alt="logo" />
            </span>
          </div>
          <div className="col">
            <span>
              <h1>Dictionary</h1>
            </span>
          </div>
          <span>
            <img src={logo} className="App-logo" alt="logo" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
