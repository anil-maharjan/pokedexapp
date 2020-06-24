import React from "react";
import pokedex from "../../pokdex.png";

function Jumbotron() {
  return (
    <React.Fragment>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <img
            src={pokedex}
            className="float-right hero-image"
            alt="pokedex electronics"
          ></img>
          <h1 className="display-4">Pokedex Application</h1>
          <p className="lead">
            Find all the information you need about your favorite pokemon.
          </p>
          <p className="lead">Gotta Catch'em all</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Jumbotron;
