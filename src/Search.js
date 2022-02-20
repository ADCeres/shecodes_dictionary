import React from "react";
import "./App.css";

function Search() {
  return (
    <div className="Search">
      <form>
        <input
          type="search"
          placeholder="Enter Word Here"
          id="entry-line"
          autoFocus="on"
          autoComplete="off"
        />
        <input type="submit" value="Search" id="submit-button" />
      </form>
    </div>
  );
}

export default Search;
