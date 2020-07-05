import {extend} from "./utils.js";
import movies from "./mocks/films.js";
import {Genres} from "./const.js";

const initialState = {
  genre: Genres.ALL_TEXT,
  movies,
  filteredMovies: movies,
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
  filterMovies: () => ({
    type: ActionTypes.FILTER_MOVIES,
    payload: null,
  }),
};

const getFilteredMovies = (genre, moviesList) => {
  return genre === Genres.ALL_TEXT ? moviesList : moviesList.filter((movie) => movie.genre.toUpperCase() === genre.toUpperCase());
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SWITCH_GENRE:
      return extend(state, {
        genre: action.payload
      });
    case ActionTypes.FILTER_MOVIES:
      return extend(state, {
        filteredMovies: getFilteredMovies(state.genre, state.movies),
      });
  }
  return state;
};

export {reducer, ActionTypes, ActionCreator, getFilteredMovies};
