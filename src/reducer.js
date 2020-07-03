import {extend, removeDuplicates} from "./utils.js";
import films from "./mocks/films.js";

const initialState = {
  genre: ``,
  films,
};

const ActionTypes = {
  SWITCH_GENRE: `SWITCH_GENRE`,
  FILTER_FILMS: `FILTER_FILMS`,
};

const ActionCreator = {
  switchGenre: (genre) => ({
    type: ActionTypes.SWITCH_GENRE,
    payload: genre,
  }),
  filteredFilms: () => ({
    type: ActionTypes.FILTER_FILMS,
    payload: null,
  }),
};

const getFilteredFilms = (genre, filmsList) => {
  return genre === `` ? filmsList : filmsList.filter((film) => film.genre.toUpperCase() === genre.toUpperCase());
};

const getGenresList = (filmsList) => {
  return removeDuplicates(filmsList.map((film) => film.genre));
};
const Genres = getGenresList(films);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SWITCH_GENRE:
      return extend(state, {
        genre: action.payload
      });
    case ActionTypes.FILTER_FILMS:
      const filteredFilms = getFilteredFilms(state.genre, initialState.films);
      return extend(state, {
        films: filteredFilms
      });
  }
  return state;
};

export {reducer, ActionTypes, ActionCreator, Genres};
