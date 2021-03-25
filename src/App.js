import React, { Component } from "react";
import Navbar from "./components/navbar";
import PokeGrid from "./components/grid";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <PokeGrid />
      </React.Fragment>
    );
  }
}

export default App;
