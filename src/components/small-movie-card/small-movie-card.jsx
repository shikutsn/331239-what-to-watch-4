import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

const PREVIEW_DELAY = 1000;

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };

    this._timeoutFunc = null;

    this._handleMovieCardHoverStart = this._handleMovieCardHoverStart.bind(this);
    this._handleMovieCardHoverEnd = this._handleMovieCardHoverEnd.bind(this);
  }

  _handleMovieCardHoverStart() {
    this._timeoutFunc = setTimeout(() => {
      this.setState({
        isPlaying: true,
      });
    }, PREVIEW_DELAY);
  }

  _handleMovieCardHoverEnd() {
    if (this._timeoutFunc) {
      clearTimeout(this._timeoutFunc);
      this.setState({
        isPlaying: false,
      });
    }
  }

  render() {
    const {movie, onMovieCardHover, onMovieCardClick} = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseOver={() => onMovieCardHover(movie)}
        onMouseEnter = {this._handleMovieCardHoverStart}
        onMouseLeave = {this._handleMovieCardHoverEnd}
        onClick={(evt) => {
          evt.preventDefault();
          if (this._timeoutFunc) {
            clearTimeout(this._timeoutFunc);
          }
          onMovieCardClick(movie);
        }}>
        <div className="small-movie-card__image">
          <VideoPlayer
            src = {movie.preview}
            isPlaying = {this.state.isPlaying}
            previewPic = {`img/${movie.posterSmall}`}
            muted = {true}
          />
        </div>
        <h3 className="small-movie-card__title">
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
    preview: PropTypes.string.isRequired,
  }).isRequired,
  onMovieCardHover: PropTypes.func.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
};

export default SmallMovieCard;
