import React from "react";
import "../stylesheets/Search.css";

//Declaring a react component
class Search extends React.Component {
  constructor(props) {
    super(props);
    // state allows you save values, similar to a json object
    this.state = {
      SearchBar: "",
    };

    //wire up events - handleChange used when you change something inside textbox, handleSubmit is used when you used the submit button

    this.handleChangeSearchBar = this.handleChangeSearchBar.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeSearchBar(event) {
    this.setState({ SearchBar: event.target.value });
  }

  handleSubmit(event, projects) {
    event.preventDefault();

    const results = projects.filter(
      (project) => project.project_name === this.state.SearchBar
    );

    this.props.search(results);
  }

  render() {
    return (
      <form
        onSubmit={(event) => this.handleSubmit(event, this.props.projects)}
        className="search"
      >
        <input
          className="input"
          type="text"
          placeholder="Search Projects..."
          value={this.state.projects}
          onChange={this.handleChangeSearchBar}
        ></input>
        <button type="submit" className="searchButton">
          Search
        </button>
      </form>
    );
  }
}

// const Search = (props) => {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(123);
//   };
//   return (
//     <form className="search" onSubmit={handleSubmit}>
//       <input
//         className="input"
//         type="text"
//         placeholder="Search Projects..."
//         value={props.keyword}
//         onChange={(e) => props.setKeyword(e.target.value)}

//       ></input>
//       <input
//               type="text"
//               value={this.state.Client}
//               onChange={this.handleChangeClientFirstName}
//             />
//       <button type="submit" className="searchButton">
//         Search
//       </button>
//     </form>
//   );
// };

export default Search;
