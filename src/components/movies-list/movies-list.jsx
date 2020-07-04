import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player.jsx";
import {connect} from "react-redux";
import {getFilteredMovies} from "../../reducer.js";

const SmallMovieCardWrapped = withVideoPlayer(SmallMovieCard);

const MoviesList = (props) => {
  return (
    <div className="catalog__movies-list">
      {props.filteredMovies.map((movie, index) => (
        <SmallMovieCardWrapped
          key = {movie.title + index}
          movie = {movie}
          onMovieCardClick = {props.onMovieTitleClick} />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  filteredMovies: PropTypes.arrayOf(PropTypes.shape({
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
  // only present if this component is called from movie page
  genre: PropTypes.string,
};

const mapStateToProps = (state, props) => {
  return {
    // if this component is called from movie page then genre isnt undefined
    // and movies are filtered based on current showing movie genre
    filteredMovies: !props.genre ?
      state.filteredMovies : getFilteredMovies(props.genre, state.movies),
  };
};


export {MoviesList};
export default connect(mapStateToProps)(MoviesList);
