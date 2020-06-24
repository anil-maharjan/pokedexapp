import React, { Component } from "react";
import PokeCard from "./PokeCard";

class PokemonList extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
  };

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=649")
      .then((res) => res.json())
      .then(
        (results) => {
          this.setState({ items: results.results, isLoaded: true });
        },
        (error) => {
          this.setState({ isLoaded: true, error });
        }
      );
  }

  render() {
    //destructuring assignment
    const { error, isLoaded, items } = this.state;
    const searchText = window.location.pathname.replace("/", "");

    if (error) {
      return <div> Error: {error.message} </div>;
    } else if (!isLoaded) {
      return <div> Loading ... </div>;
    } else if (searchText !== "") {
      const filteredPokemon = items.filter((item) =>
        item.name.startsWith(searchText) ? item : ""
      );
      return filteredPokemon.length > 0 ? (
        <div className="card-container">
          {filteredPokemon.map((found) => (
            <PokeCard key={found.name} url={found.url} name={found.name} />
          ))}
        </div>
      ) : (
        <div className="card-container">
          <h1 style={{ textAlign: "center", width: "100%" }}>
            {" "}
            No Pokemon Found
          </h1>
        </div>
      );
    } else {
      return (
        <div className="card-container">
          {items.map((pokemons) => (
            <PokeCard
              key={pokemons.name}
              url={pokemons.url}
              name={pokemons.name}
            />
          ))}
        </div>
      );
    }
  }
}

export default PokemonList;
