import React from "react";
import "./App.css";

function Phonetics(props) {
  console.log(props);

  if (props.results) {
    return (
      <div>
        <h3 className="phonetic">{props.results}</h3>
      </div>
    );
  } else {
    return (
      <div>
        <em className="phonetic-na">[phonetics unavailable]</em>
      </div>
    );
  }
}

export default Phonetics;
