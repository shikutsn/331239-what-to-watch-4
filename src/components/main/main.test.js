import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
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

it(`Main should correctly render with promo movie information and movie titles array`, () => {
  const tree = renderer
    .create(
        <Provider store = {store}>
          <Main
            promoMovie = {testMocks.promoMovie}
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
