import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';


const SmallMovieCard = (props) => {
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter = {props.onMovieCardHoverStart}
      onMouseLeave = {props.onMovieCardHoverEnd}
      onClick={(evt) => {
        evt.preventDefault();
        props.onMovieCardClick(props.movie);
      }}>
      <div className="small-movie-card__image">
        <VideoPlayer
          src = {props.movie.preview}
          isPlaying = {props.isPlaying}
          previewPic = {`img/${props.movie.posterSmall}`}
        />
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html">{props.movie.title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
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
  }).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onMovieCardHoverStart: PropTypes.func.isRequired,
  onMovieCardHoverEnd: PropTypes.func.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
};

export default SmallMovieCard;
