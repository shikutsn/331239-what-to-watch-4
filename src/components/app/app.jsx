import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const movieTitleClickHandler = (evt) => {
  evt.preventDefault();
};

const App = (props) => {
  const {promoMovie, films} = props;

  return (
    <Main
      promoMovie = {promoMovie}
      films = {films}
      onMovieTitleClick = {movieTitleClickHandler}
    />
  );
};

App.propTypes = {
  promoMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
  }),
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    posterSmall: PropTypes.string.isRequired,
  })),
};


export default App;
