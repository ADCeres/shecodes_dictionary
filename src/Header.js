import React from "react";
import logo from "./logo.svg";
import "./App.css";

function Header() {
  return (
    <div className="Header">
      <div className="header-container">
        <br />
        <h1 className="header-h1">
          {" "}
          <img src={logo} className="react-logo" alt="logo" /> Dictionary
          <img src={logo} className="react-logo" alt="logo" />
        </h1>
      </div>
    </div>
  );
}

export default Header;
