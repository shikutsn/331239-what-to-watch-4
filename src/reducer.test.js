import {reducer, ActionCreator, ActionTypes} from "./reducer.js";
import {testMocks} from "./mocks/mocks.js";


it(`Checks that state initializes properly`, () => {
  expect(reducer({
    genre: testMocks.genres[0],
    movies: testMocks.movies,
  }, {})).toEqual({
    genre: testMocks.genres[0],
    movies: testMocks.movies,
  });
});

it(`Checks that genres are switched properly`, () => {
  expect(reducer({
    genre: testMocks.genres[0],
    movies: testMocks.movies,
  }, {
    type: ActionTypes.SWITCH_GENRE,
    payload: testMocks.genres[1]
  })).toEqual({
    genre: testMocks.genres[1],
    movies: testMocks.movies,
  });
});


describe(`Checks if action creators work properly`, () => {
  it(`Checks if action creators change genre to genre 1`, () => {
    expect(ActionCreator.switchGenre(testMocks.genres[1])).toEqual({
      type: ActionTypes.SWITCH_GENRE,
      payload: testMocks.genres[1],
    });
  });

  it(`Checks if action creators change genre to genre 2`, () => {
    expect(ActionCreator.switchGenre(testMocks.genres[2])).toEqual({
      type: ActionTypes.SWITCH_GENRE,
      payload: testMocks.genres[2],
    });
  });

  it(`Checks if action creators actually filter movies`, () => {
    expect(ActionCreator.filterMovies()).toEqual({
      type: ActionTypes.FILTER_MOVIES,
      payload: null,
    });
  });
});

it(`Checks if movies are getting filtered correctly`, () => {
  expect(reducer({
    genre: testMocks.genres[4],
    movies: testMocks.movies
  }, {
    type: ActionTypes.FILTER_MOVIES,
    payload: null,
  })).toEqual({
    genre: testMocks.genres[4],
    movies: testMocks.movies,
    filteredMovies: [testMocks.movies[4]],
  });
});
