import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";


const App = (props) => {
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

App.propTypes = {
  promoMovieTitle: PropTypes.string.isRequired,
  promoMovieGenre: PropTypes.string.isRequired,
  promoMovieReleaseYear: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};


export default App;
