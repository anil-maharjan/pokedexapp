import React, { Component } from "react";
import PokemonList from "../pokemon/PokemonList";
import Jumbotron from "./Jumbotron";
import Search from "../search/Search";

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron />
        <Search />
        <PokemonList />
      </React.Fragment>
    );
  }
}

export default Dashboard;
