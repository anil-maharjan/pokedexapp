import React, { Component } from "react";
import NavBar from "./components/layout/NavBar";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Pokemon from "./components/pokemon/Pokemon";
import Dashboard from "./components/layout/dashboard";
import About from "./components/layout/About";
import Search from "./components/search/Search";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="poke-container">
            <Switch>
              <Route exact path="/search" component={Search}></Route>
              <Route path="/pokemon/:id" exact component={Pokemon} />
              <Route path="/about" exact component={About} />
              <Route path="/" component={Dashboard}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
