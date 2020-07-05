import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player.jsx";

const SmallMovieCardWrapped = withVideoPlayer(SmallMovieCard);

const MoviesList = (props) => {
  return (
    <div className="catalog__movies-list">
      {props.movies.map((movie, index) => (
        <SmallMovieCardWrapped
          key = {movie.title + index}
          movie = {movie}
          onMovieCardClick = {props.onMovieTitleClick} />
      ))}
    </div>
  );
};

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
