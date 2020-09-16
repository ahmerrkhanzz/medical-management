import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Avengers",
      price: 200,
    },
    {
      name: "Lucifer",
      price: 400,
    },
  ]);

  return (
    <AppContext.Provider value={[movies, setMovies]}>{props.children}</AppContext.Provider>
  );
};
