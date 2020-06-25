import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovie: null,
    };

    this.handleMovieCardHover = this.handleMovieCardHover.bind(this);
  }

  handleMovieCardHover(hoveredMovie) {
    this.setState({
      activeMovie: hoveredMovie,
    });
  }

  render() {
    const {movies, onMovieTitleClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie, index) => (
          <SmallMovieCard
            key={movie.title + index}
            movie={movie}
            onMovieCardHover={this.handleMovieCardHover}
            onMovieTitleClick={onMovieTitleClick} />
        ))}
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    background: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    posterSmall: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      value: PropTypes.number.isRequired,
      votesCount: PropTypes.number.isRequired
    }).isRequired,
    description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired).isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
};

export default MoviesList;
