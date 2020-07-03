import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator, Genres} from "./../../reducer.js";

const GenresList = (props) => {
  const {genre, onGenreTitleClick} = props;

  return <ul className="catalog__genres-list">
    {Genres.map((currentGenre) => {
      const activeClass = genre === currentGenre ? `catalog__genres-item--active` : ``;

      return <li
        key = {currentGenre}
        className = {`catalog__genres-item ${activeClass}`}
        onClick = {() => {
          onGenreTitleClick(currentGenre);
        }}
      >
        <a href="#" className="catalog__genres-link">{currentGenre}</a>
      </li>;
    })}
  </ul>;
};

GenresList.propTypes = {
  genre: PropTypes.string.isRequired,
  onGenreTitleClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  genre: state.genre,
});

const mapDispatchToProps = (dispatch) => ({
  onClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.filteredFilms());
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
