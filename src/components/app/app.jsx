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
    const {promoMovie, films} = this.props;

    return (
      <Main
        promoMovie = {promoMovie}
        films = {films}
        onMovieTitleClick = {this.movieTitleClickHandler}
      />
    );
  }
}

// TODO заменить films на movies, чтобы везде стало одинаково

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
