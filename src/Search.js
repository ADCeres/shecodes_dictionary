import React, { useState } from "react";
import "./App.css";

function Search() {
  let [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  function searchDictionary(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

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
