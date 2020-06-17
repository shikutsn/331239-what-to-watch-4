import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {promoMovie, films} = props;

  return (
    <Main
      promoMovie = {promoMovie}
      films = {films}
    />
  );
};

App.propTypes = {
  promoMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
  }),
  films: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};


export default App;
