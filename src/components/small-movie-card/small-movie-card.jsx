import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movie, onMovieCardHover, onMovieCardClick} = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseOver={() => onMovieCardHover(movie)} >
        <div className="small-movie-card__image" onClick = {() => onMovieCardClick(movie)}>
          <img src={`img/${movie.posterSmall}`} alt={movie.title} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title" onClick={(evt) => {
          evt.preventDefault();
          onMovieCardClick(movie);
        }
        }>
          <a
            className="small-movie-card__link"
            href="movie-page.html">{movie.title}</a>
        </h3>
      </article>
    );
  }
}

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
  }).isRequired,
  onMovieCardHover: PropTypes.func.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
};

export default SmallMovieCard;
