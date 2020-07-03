import {reducer, ActionCreator, ActionTypes, Genres} from "./reducer.js";
import {testMocks} from "./mocks/films.js";

it(`Checks that state initializes properly`, () => {
  expect(reducer({
    genre: Genres[0],
    films: testMocks,
  }, {})).toEqual({
    genre: Genres[0],
    films: testMocks,
  });
});

it(`Checks that genres are switched properly`, () => {
  expect(reducer({
    genre: Genres[0],
    films: testMocks,
  }, {
    type: ActionTypes.SWITCH_GENRE,
    payload: Genres[1]
  })).toEqual({
    genre: Genres[1],
    films: testMocks,
  });
});


describe(`Checks if action creators work properly`, () => {
  it(`Checks if action creators change genre to genre 1`, () => {
    expect(ActionCreator.switchGenre(Genres[1])).toEqual({
      type: ActionTypes.SWITCH_GENRE,
      payload: Genres[1],
    });
  });

  it(`Checks if action creators change genre to genre 2`, () => {
    expect(ActionCreator.switchGenre(Genres[2])).toEqual({
      type: ActionTypes.SWITCH_GENRE,
      payload: Genres[2],
    });
  });

  it(`Checks if action creators actually filter films`, ()=>{
    expect(ActionCreator.filteredFilms()).toEqual({
      type: ActionTypes.FILTER_FILMS,
      payload: null,
    });
  });
});
