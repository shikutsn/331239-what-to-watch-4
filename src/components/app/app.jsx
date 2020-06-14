import React from "react";
import Main from "../main/main.jsx";


const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {promoMovieTitle, promoMovieGenre, promoMovieReleaseYear, films} = props;

  return (
    <Main
      promoMovieTitle = {promoMovieTitle}
      promoMovieGenre = {promoMovieGenre}
      promoMovieReleaseYear = {promoMovieReleaseYear}
      films = {films}
    />
  );
};


export default App;
