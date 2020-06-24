import React, { Component } from "react";
import { Link } from "react-router-dom";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;
    return (
      <form className="poke-form d-flex justify-content-between my-5">
        <p>Pokemon List: </p>

        <div>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Pokemon Name"
          />
          <Link to={`/${value}`}>
            <input
              type="submit"
              value="Search"
              className="btn btn-primary btn-sm ml-2"
            />
          </Link>
        </div>
      </form>
    );
  }
}
export default Search;
