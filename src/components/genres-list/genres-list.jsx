import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import {removeDuplicates} from "../../utils.js";
import {Genres} from "../../const.js";


class GenresList extends PureComponent {
  constructor(props) {
    super(props);

    this.genresList = GenresList._getGenresList(this.props.movies);
  }

  static _getGenresList(moviesList) {
    const genresList = removeDuplicates(moviesList.map((movie) => movie.genre));
    return [Genres.ALL_TEXT].concat(genresList).slice(0, Genres.MAX_COUNT);
  }

  render() {
    const {genre, onGenreTitleClick} = this.props;

    return (
      <ul className="catalog__genres-list">
        {this.genresList.map((currentGenre, index) => {
          const activeClass = genre === currentGenre ? `catalog__genres-item--active` : ``;

          return <li
            key = {index + currentGenre}
            className = {`catalog__genres-item ${activeClass}`}
            onClick = {() => {
              onGenreTitleClick(currentGenre);
            }}
          >
            <a href="#" className="catalog__genres-link">{currentGenre}</a>
          </li>;
        })}
      </ul>
    );
  }
}

GenresList.propTypes = {
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
  genre: PropTypes.string.isRequired,
  onGenreTitleClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  genre: state.genre,
  movies: state.movies,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreTitleClick(genre) {
    dispatch(ActionCreator.switchGenre(genre));
    dispatch(ActionCreator.filteredMovies());
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
