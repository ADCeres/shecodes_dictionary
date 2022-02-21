import React from "react";
import Meaning from "./Meaning.js";

import "./App.css";

function Results(props) {
  console.log(props);

  return (
    <div className="Results">
      <div className="results-container">
        <h2 className="word">{props.results.word}</h2>
        <h3 className="phonetic">{props.results.phonetic}</h3>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Results;
