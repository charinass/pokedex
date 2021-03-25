import React, { Component } from "react";

class PokeGrid extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
    };
  }
  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Request failed.");
      })
      .then((data) => {
        this.setState({ pokemons: data.results });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const styles = {
      cardStyle: {
        width: 216,
        height: 238,
        marginBottom: 60,
        marginRight: 13,
        padding: 6,
        borderRadius: 12,
      },
      rowStyle: {
        backgroundColor: "pink",
        width: 1024,
        padding: 60,
        paddingBottom: 0,
      },
    };
    const pokemon_list = this.state.pokemons.map((each) => {
      let imageUrl = each.url.split("/").slice(-2)[0];
      return (
        <div className="card mr-2" style={styles.cardStyle}>
          <img
            className="card-img-top img-fluid"
            src={[
              "https://pokeres.bastionbot.org/images/pokemon/",
              imageUrl,
              ".png",
            ].join("")}
          />
          <div className="card-body">
            <p>{each.name}</p>
          </div>
        </div>
      );
    });
    return (
      <div class="container">
        <div className="row mx-auto" style={styles.rowStyle}>
          {pokemon_list}
        </div>
      </div>
    );
  }
}

export default PokeGrid;
