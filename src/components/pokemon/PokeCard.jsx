import React, { Component } from "react";
import { Link } from "react-router-dom";
class PokeCard extends Component {
  state = {
    name: "",
    imageSrc: "",
    pokemonIndex: "",
  };

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const imageSrc = `../sprites/` + pokemonIndex + ".png";
    this.setState({ name, imageSrc, pokemonIndex });
  }

  render() {
    return (
      <div className="poke-card">
        <p className="pokemon-index"># {this.state.pokemonIndex}</p>
        <div className="poke-card-img-body">
          <img
            src={this.state.imageSrc}
            alt="Pokemon"
            className="poke-card-img"
          />
        </div>
        <div className="poke-card-body">
          <h5 className="poke-card-title">{this.state.name}</h5>
          <Link to={`pokemon/${this.state.pokemonIndex}`}>
            <button className="info-button">More Info</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default PokeCard;
