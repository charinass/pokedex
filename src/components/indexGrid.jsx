import React, { Component, useEffect, useState } from "react";
import Axios from "axios";

function Grid() {
  const [joke, setJoke] = useState();
  // const getAnotherJoke = () => {
  //   fetch("https://official-joke-api.appspot.com/random_joke")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setJoke(data.setup + "..." + data.punchline);
  //     })
  //     .catch((error) => console.log(error));
  // };
  const getJoke = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke").then(
      (response) => {
        console.log(response);
        setJoke(response.data.results + "..." + response.data.punchline);
      }
    );
  };
  useEffect(() => {
    getJoke();
  }, [1]);
  return (
    <div>
      <h1>Hello World</h1>
      <div>
        {getJoke}
        {joke}
      </div>
    </div>
  );
}

export default Grid;
