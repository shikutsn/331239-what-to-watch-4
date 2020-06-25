import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    // по ТЗ нужны два разных обработчика - ховера и клика, а в задании упомянут только ховер
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
    title: PropTypes.string.isRequired,
    posterSmall: PropTypes.string.isRequired
  }).isRequired,
  onMovieCardHover: PropTypes.func.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
};

export default SmallMovieCard;
