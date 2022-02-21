import React from "react";

import "./App.css";

function Results(props) {
  console.log(props);

  return (
    <div className="Results">
      <div className="results-container">
        <h2 className="word">{props.results.word}</h2>
        <h3 className="phonetic">{props.results.phonetic}</h3>
        <p className="partOfSpeech">{props.results.meanings[0].partOfSpeech}</p>
        <p className="definition">
          {props.results.meanings[0].definitions[0].definition}
        </p>
      </div>
    </div>
  );
}

export default Results;
