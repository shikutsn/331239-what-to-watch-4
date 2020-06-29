import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {testMocks} from "../../mocks/mocks.js";

it(`Main should correctly render with promo movie information and movie titles array`, () => {
  const tree = renderer
    .create(<Main
      promoMovie = {testMocks.promoMovie}
      movies = {testMocks.movies}
      onMovieTitleClick = {() => {}} />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
