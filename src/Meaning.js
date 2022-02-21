import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <div className="results-container">
        <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          if (index < 3)
            return (
              <div key={index}>
                <strong className="definition">{index + 1}.</strong>{" "}
                {definition.definition}
                <br />
                <Synonyms synonyms={definition.synonyms} />
              </div>
            );
          else return null;
        })}
      </div>
    </div>
  );
}
