import React, { useState } from "react";
import Results from "./Results.js";
import Photos from "./Photos.js";
import axios from "axios";
import "./App.css";

function Search() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState("");
  let [photos, setPhotos] = useState(null);

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function searchDictionary(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f917000010000013c682cd3c32b46ef93be950f741fca26";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  //api.dictionaryapi.dev/api/v2

  if (results) {
    return (
      <div className="Search">
        <form onSubmit={searchDictionary}>
          <input
            type="search"
            placeholder="Enter Word Here"
            id="entry-line"
            autoFocus="on"
            autoComplete="off"
            onChange={handleKeywordChange}
          />
          <input type="submit" value="Search" id="submit-button" />
        </form>
        <br />
        <hr className="hrNew" />
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    return (
      <div className="Search">
        <form onSubmit={searchDictionary}>
          <input
            type="search"
            placeholder="Enter Word Here"
            id="entry-line"
            autoFocus="on"
            autoComplete="off"
            onChange={handleKeywordChange}
          />
          <input type="submit" value="Search" id="submit-button" />
        </form>
        <br />
        <hr className="hrNew" />
      </div>
    );
  }
}
export default Search;
