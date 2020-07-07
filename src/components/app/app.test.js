import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
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

it(`App should correctly render with promo movie information and movies array`, () => {
  const tree = renderer
    .create(
        <Provider store = {store}>
          <App
            promoMovie = {testMocks.promoMovie} />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
