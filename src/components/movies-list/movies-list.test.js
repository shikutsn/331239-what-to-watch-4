import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list.jsx";
import {testMocks} from "../../mocks/mocks.js";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Genres} from "../../const.js";

const mockStore = configureStore([]);

const store = mockStore({
  genre: Genres.ALL_TEXT,
  movies: testMocks.movies,
  filteredMovies: testMocks.movies,
});

it(`Checks if movies list is rendered correctly`, () => {
  const tree = renderer
    .create(
        <Provider store = {store}>
          <MoviesList
            movies = {testMocks.movies}
            onMovieTitleClick = {() => {}} />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
