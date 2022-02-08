import React from "react";

function Search({ handleSearchChange}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={(e) => handleSearchChange(e.target.value)} className="prompt" /> {/* The search area itself*/}
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
