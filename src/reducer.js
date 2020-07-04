import {extend} from "./utils.js";
import movies from "./mocks/films.js";
import {GENRES_ALL} from "./const.js";

const initialState = {
  genre: GENRES_ALL,
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
  return genre === GENRES_ALL ? moviesList : moviesList.filter((film) => film.genre.toUpperCase() === genre.toUpperCase());
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
