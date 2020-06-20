import React from 'react';
import PropTypes from 'prop-types';

const SmallMovieCard = (props) => {
  // по ТЗ нужны два разных обработчика - ховера и клика, а в задании упомянут только ховер
  const {movie, onMovieCardHover, onMovieTitleClick} = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={onMovieCardHover}>
      <div className="small-movie-card__image">
        <img src={`img/${movie.posterSmall}`} alt={movie.title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          onClick={onMovieTitleClick}
          href="movie-page.html">{movie.title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    posterSmall: PropTypes.string.isRequired
  }).isRequired,
  onMovieCardHover: PropTypes.func.isRequired,
  onMovieTitleClick: PropTypes.func.isRequired
};

export default SmallMovieCard;
