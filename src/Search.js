import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function Search() {
  let [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data);
  }

  function searchDictionary(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  //api.dictionaryapi.dev/api/v2

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
    </div>
  );
}

export default Search;
