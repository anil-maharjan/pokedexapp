import React from "react";

function About() {
  return (
    <div className="about-style">
      <h5>About this project</h5>
      <p>This project was done as a task provided by Introcept.</p>
      <a href="http://nepal.introcept.co/">Introcept Link</a>
      <p>
        I would like to thank the company for giving such a fun task for job
        assesment
      </p>
      <p>
        Not only did i enjoy while coding this project. I also got to know and
        learn many concepts
      </p>
      <p>
        Some of the places or sites that really helped me in this project will
        be listed below to show my gratitude.{" "}
      </p>
      <ul>
        <li>
          <span>Youtube Account:</span>{" "}
          <a href="https://www.youtube.com/watch?v=XehSJF85F38&list=PL9J6shB2NZc3_7Injn144cQ1Tt1weEOC8&index=12&t=2856s">
            Chris Stayte
          </a>
        </li>
        <li>
          <span>Youtube Account: </span>
          <a href="https://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA">
            Programming with Mosh
          </a>
        </li>
        <li>
          <span>Youtube Account: </span>
          <a href="https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q">
            Dev Ed
          </a>
        </li>
        <li>
          <span>React Docs: </span>
          <a href="https://reactjs.org/docs/getting-started.html">
            Documentation
          </a>
        </li>
        <li>
          <span>Pokedex org: </span>
          <a href="https://pokedex.org/">Pokedex</a>{" "}
        </li>
        <li>
          <span>
            And Last but not the least, the main source of data for this
            project:{" "}
          </span>
          <a href="https://pokeapi.co/">PokeApi</a>{" "}
        </li>
      </ul>
    </div>
  );
}

export default About;
