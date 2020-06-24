import React, { Component } from "react";
import pokeball from "../../pokeball2.png";
class Pokemon extends Component {
  state = {
    name: "",
    pokemonIndex: "",
    color: "",
    imageSrc: "",
    description: "",
    height: "",
    stats: {
      hp: "",
      attack: "",
      defense: "",
      specialAttack: "",
      specialDefense: "",
      speed: "",
    },
    weight: "",
    types: [],
    captureRate: "",
    eggGroups: [],
    abilities: [],
    pokemonCategory: "",
    habitat: "",
    shape: "",
    genderRatioMale: "",
    genderRatioFemale: "",
  };

  async componentDidMount() {
    const pokemonIndex = this.props.match.params.id;

    //PokeApi Url
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`;
    const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}`;

    const data = await fetch(pokemonUrl).then((res) => res.json());
    const name = data.name;

    //Height is in decimeters so converting it to feet by diving it by 3.048
    const height = Math.round((data.height / 3.048) * 100) / 100;

    //Weight is in hectograms so converting it to kilograms by dividig by 10
    const weight = Math.round((data.weight / 10) * 100) / 100;

    let { hp, attack, defense, specialAttack, specialDefense, speed } = "";
    data.stats.map((stat) => {
      switch (stat.stat.name) {
        case "hp":
          hp = stat["base_stat"];
          break;
        case "attack":
          attack = stat["base_stat"];
          break;
        case "defense":
          defense = stat["base_stat"];
          break;
        case "special-attack":
          specialAttack = stat["base_stat"];
          break;
        case "special-defense":
          specialDefense = stat["base_stat"];
          break;
        case "speed":
          speed = stat["base_stat"];
          break;
        default:
          break;
      }
      return stat;
    });

    //pokemon specialization (types)
    const typ = data.types.map((type) => type.type.name);
    const types = typ.join(", ");
    const ability = data.abilities.map((ability) => ability.ability.name);
    const abilities = ability.join(", ");
    //Getting data from another endpoint
    const pokemonSpeciesData = await fetch(pokemonSpeciesUrl).then((res) =>
      res.json()
    );
    //description
    let description = "";
    const flavor = pokemonSpeciesData.flavor_text_entries;
    for (let i = 0; i < flavor.length; i++) {
      if (flavor[i].language.name === "en") {
        description = flavor[i].flavor_text;
        break;
      }
    }
    // The base capture rate being up to 255 in docs so converting to %
    const captureRate = Math.round(
      (pokemonSpeciesData.capture_rate * 100) / 255
    );
    const eg = pokemonSpeciesData.egg_groups.map((egg) => egg.name);
    const eggGroups = eg.join(", ");

    let pokemonCategory = "";
    const category = pokemonSpeciesData.genera;
    for (let i = 0; i < category.length; i++) {
      if (category[i].language.name === "en") {
        pokemonCategory = category[i].genus;
      }
    }

    const color = pokemonSpeciesData.color.name;
    const imageSrc = `../sprites/` + pokemonIndex + ".png";
    const habitat = pokemonSpeciesData.habitat.name;
    const shape = pokemonSpeciesData.shape.name;
    const genderRatioFemale = pokemonSpeciesData.gender_rate * 12.5;
    const genderRatioMale = 100 - genderRatioFemale;

    this.setState({
      name,
      pokemonIndex,
      imageSrc,
      description,
      color,
      height,
      stats: {
        hp,
        attack,
        defense,
        specialAttack,
        specialDefense,
        speed,
      },
      weight,
      types,
      captureRate,
      eggGroups,
      abilities,
      pokemonCategory,
      habitat,
      shape,
      genderRatioMale,
      genderRatioFemale,
    });
  }

  render() {
    //destructuring assignment
    const {
      name,
      pokemonIndex,
      imageSrc,
      description,
      color,
      height,
      stats,
      weight,
      types,
      captureRate,
      eggGroups,
      abilities,
      pokemonCategory,
      habitat,
      shape,
      genderRatioMale,
      genderRatioFemale,
    } = this.state;
    return (
      <div className="main-body">
        <div className="basic">
          <div className="pokemon-index"># {pokemonIndex}</div>
          <div className="pokemon-img">
            <img src={imageSrc} alt="pokball icon" />
          </div>
          <div className="basic-info">
            <h5> {name} </h5>
            <p> {description}</p>
          </div>
          <div className="pokemon-stats">
            <h5 style={{ textAlign: "left" }}>Basic Stats</h5>
            <p>HP</p>
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${Math.round((stats.hp * 100) / 255)}%` }}
                aria-valuenow={Math.round((stats.hp * 100) / 255)}
                aria-valuemin="0"
                aria-valuemax="255"
              >
                {stats.hp}
              </div>
            </div>
            <p>Attack</p>
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${Math.round((stats.attack * 100) / 255)}%` }}
                aria-valuenow={Math.round((stats.attack * 100) / 255)}
                aria-valuemin="0"
                aria-valuemax="255"
              >
                {stats.attack}
              </div>
            </div>
            <p>Defense</p>
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${Math.round((stats.defense * 100) / 255)}%` }}
                aria-valuenow={Math.round((stats.defense * 100) / 255)}
                aria-valuemin="0"
                aria-valuemax="255"
              >
                {stats.defense}
              </div>
            </div>
            <p>Special Attack</p>
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: `${Math.round((stats.specialAttack * 100) / 255)}%`,
                }}
                aria-valuenow={Math.round((stats.specialAttack * 100) / 255)}
                aria-valuemin="0"
                aria-valuemax="255"
              >
                {stats.specialAttack}
              </div>
            </div>
            <p>Special Defense</p>
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: `${Math.round((stats.specialDefense * 100) / 255)}%`,
                }}
                aria-valuenow={Math.round((stats.specialDefense * 100) / 255)}
                aria-valuemin="0"
                aria-valuemax="255"
              >
                {stats.specialDefense}
              </div>
            </div>
            <p>Speed</p>
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: `${Math.round((stats.speed * 100) / 255)}%`,
                }}
                aria-valuenow={Math.round((stats.speed * 100) / 255)}
                aria-valuemin="0"
                aria-valuemax="255"
              >
                {stats.speed}
              </div>
            </div>
          </div>
        </div>
        <div className="profile">
          <h5>Profile</h5>
          <div className="profile-body">
            <div className="sub-profile">
              <p className="sub-profile-data">
                <i className="fas fa-ruler-vertical"></i> Height: {height} ft
              </p>
              <p className="sub-profile-data">
                <i className="fas fa-weight"></i> Weight: {weight} kg
              </p>
              <p className="sub-profile-data">
                <i className="fas fa-shapes"></i> Shape: {shape}{" "}
              </p>
              <p className="sub-profile-data">
                <i className="fas fa-question"></i> Types: {types}{" "}
              </p>
              <p className="sub-profile-data">
                <i className="fas fa-palette"></i> Color: {color}
              </p>
              <p className="sub-profile-data">
                <i className="fas fa-dot-circle"></i> Capture Rate:{captureRate}
              </p>
            </div>
            <div className="sub-profile">
              <p className="sub-profile-data">
                <i className="fas fa-egg"></i> Egg Groups: {eggGroups}
              </p>
              <p className="sub-profile-data">
                <i className="fas fa-hand-rock"></i> Abilities: {abilities}
              </p>
              <p className="sub-profile-data">
                <i className="fas fa-file-alt"></i> Pokemon Category:{" "}
                {pokemonCategory}
              </p>
              <p className="sub-profile-data">
                <i className="fas fa-home"></i> Habitat: {habitat}
              </p>
              <p>
                <i className="fas fa-venus-mars"></i> Gender Ratio
              </p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${genderRatioFemale}%`,
                    backgroundColor: "#b23274",
                  }}
                  aria-valuenow="15"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <small>{genderRatioFemale}</small>
                </div>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${genderRatioMale}%`,
                    backgroundColor: "#2ca4d3",
                  }}
                  aria-valuenow="30"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <small>{genderRatioMale}</small>
                </div>
              </div>
            </div>
            <img
              src={pokeball}
              alt="pokeball"
              style={{ width: "300px", margin: "5em auto" }}
            ></img>
          </div>
          <p className="float-right">
            Data From: <a href="https://pokeapi.co/">PokeApi</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Pokemon;
