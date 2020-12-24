import React from "react";

const Search = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.getprojects(props.keyword);
  };
  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Projects..."
        value={props.keyword}
        onChange={(e) => props.setKeyword(e.target.value)}
      ></input>
      <button className="searchButton">Search</button>
    </form>
  );
};

export default Search;
