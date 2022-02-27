import React from "react";

function Synonyms(props) {
  console.log(props);
  if (props.synonyms.length !== 0) {
    return (
      <div className="synonyms">
        <strong>Synonyms:</strong>
        <ul className="Synonyms">
          {props.synonyms.map(function (synonym, index) {
            return (
              <li key={index}>
                {synonym}
                {", "}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

export default Synonyms;
