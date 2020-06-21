import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.movieTitleClickHandler = this.movieTitleClickHandler.bind(this);
  }

  movieTitleClickHandler(evt) {
    evt.preventDefault();
  }

  render() {
    const {promoMovie, movies} = this.props;

    return (
      <Main
        promoMovie = {promoMovie}
        movies = {movies}
        onMovieTitleClick = {this.movieTitleClickHandler}
      />
    );
  }
}

App.propTypes = {
  promoMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
  }),
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    posterSmall: PropTypes.string.isRequired,
  })),
};


export default App;
