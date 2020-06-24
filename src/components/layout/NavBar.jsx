import React from "react";
import pokeball from "../../pokeball.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="nav d-flex align-items-center justify-content-between p-2 font-weight-bold">
      <span className="nav-text">
        <Link to="/">
          <span className="nav-header">Pokedex</span>
          <img className="pokeball" src={pokeball} alt="pokeball" />
        </Link>
      </span>

      <Link to="/about">
        <span
          style={{
            color: "white",
            fontSize: "1rem",
          }}
        >
          About
        </span>
      </Link>
    </nav>
  );
};

export default NavBar;
