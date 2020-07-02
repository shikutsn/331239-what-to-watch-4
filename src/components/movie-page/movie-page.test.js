import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";
import {testMocks} from "../../mocks/mocks.js";

it(`Movie page should correctly render`, () => {
  const tree = renderer
    .create(<MoviePage
      movie = {testMocks.promoMovie}
      movies = {testMocks.movies}
      onMovieTitleClick = {() => {}} />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Tests if _getRatingDescription returns correct rating to text values`, () => {
  // npm run test.jest -- -t "_getRatingDescription"

  expect(MoviePage._getRatingDescription(0)).toBe(`Bad`);
  expect(MoviePage._getRatingDescription(1.5)).toBe(`Bad`);
  expect(MoviePage._getRatingDescription(3)).toBe(`Normal`);
  expect(MoviePage._getRatingDescription(5)).toBe(`Good`);
  expect(MoviePage._getRatingDescription(7)).toBe(`Good`);
  expect(MoviePage._getRatingDescription(8)).toBe(`Very good`);
  expect(MoviePage._getRatingDescription(10)).toBe(`Awesome`);
  expect(MoviePage._getRatingDescription(-5)).toBe(``);
  expect(MoviePage._getRatingDescription(-11)).toBe(``);
  expect(MoviePage._getRatingDescription(Math.random() * (-100))).toBe(``);
  expect(MoviePage._getRatingDescription(Math.random() * 10 + 10)).toBe(``);
});
