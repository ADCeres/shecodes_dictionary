import React from "react";

function Photos(props) {
  console.log(props);
  if (props.photos) {
    return (
      <div className="Photos">
        <div className="results-container">
          <div className="row">
            {props.photos.map(function (photo, index) {
              return (
                <div className="col-4" key={index}>
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    <img
                      src={photo.src.landscape}
                      className="img-fluid word-photo"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="results-container">
        <p>"No Picture to Display"</p>
      </div>
    );
  }
}

export default Photos;
