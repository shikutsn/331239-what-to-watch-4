import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import withVideoHover from "../../hocs/with-video-hover/with-video-hover.jsx";

const SmallMovieCardWrapped = withVideoHover(SmallMovieCard);

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movies, onMovieTitleClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie, index) => (
          <SmallMovieCardWrapped
            key = {movie.title + index}
            movie = {movie}
            onMovieCardClick = {onMovieTitleClick} />
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
    preview: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
};

export default MoviesList;
