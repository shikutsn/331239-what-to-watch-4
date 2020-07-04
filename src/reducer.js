import {extend} from "./utils.js";
import movies from "./mocks/films.js";
import {Genres} from "./const.js";

const initialState = {
  genre: Genres.ALL_TEXT,
  movies,
};

const ActionTypes = {
  SWITCH_GENRE: `SWITCH_GENRE`,
  FILTER_MOVIES: `FILTER_MOVIES`,
};

const ActionCreator = {
  switchGenre: (genre) => ({
    type: ActionTypes.SWITCH_GENRE,
    payload: genre,
  }),
  filteredMovies: () => ({
    type: ActionTypes.FILTER_MOVIES,
    payload: null,
  }),
};

const getFilteredMovies = (genre, moviesList) => {
  return genre === Genres.ALL_TEXT ? moviesList : moviesList.filter((film) => film.genre.toUpperCase() === genre.toUpperCase());
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SWITCH_GENRE:
      return extend(state, {
        genre: action.payload
      });
    case ActionTypes.FILTER_MOVIES:
      const filteredMovies = getFilteredMovies(state.genre, initialState.movies);
      return extend(state, {
        movies: filteredMovies
      });
  }
  return state;
};

export {reducer, ActionTypes, ActionCreator};
