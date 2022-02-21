import React from "react";
import Mloop from "./Mloop.js";
import "./App.css";

function Results(props) {
  console.log(props);

  return (
    <div className="Results">
      <div className="results-container">
        <h2 className="word">{props.results.word}</h2>
        <h3 className="phonetic">{props.results.phonetic}</h3>
        <p className="definition">
          <Mloop />
        </p>
      </div>
    </div>
  );
}

export default Results;
