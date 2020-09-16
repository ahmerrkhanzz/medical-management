import React, { useContext } from "react";
import { AppContext } from "./App.context";

const Demo = () => {
  const [movies, setMovies] = useContext(AppContext);
  return (
    <div>
      <h1>Hello</h1>
      {movies.map((e) => (
        <p>{e.name}</p>
      ))}
    </div>
  );
};

export default Demo;
