// import React from "react";
// import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";
// import {testMocks} from "../../mocks/mocks.js";

it(`Movie page should correctly render`, () => {
  // WIP
  // const tree = renderer
  //   .create(<Main
  //     promoMovie = {testMocks.promoMovie}
  //     movies = {testMocks.movies}
  //     onMovieTitleClick = {() => {}} />)
  //   .toJSON();
  //
  // expect(tree).toMatchSnapshot();
});

it(`Tests if _getRatingDescription returns correct rating to text values`, () => {
  // npm run test.jest -- -t "_getRatingDescription"
  const moviePageComponent = new MoviePage();

  expect(moviePageComponent._getRatingDescription(0)).toBe(`Bad`);
  expect(moviePageComponent._getRatingDescription(1.5)).toBe(`Bad`);
  expect(moviePageComponent._getRatingDescription(3)).toBe(`Normal`);
  expect(moviePageComponent._getRatingDescription(5)).toBe(`Good`);
  expect(moviePageComponent._getRatingDescription(7)).toBe(`Good`);
  expect(moviePageComponent._getRatingDescription(8)).toBe(`Very good`);
  expect(moviePageComponent._getRatingDescription(10)).toBe(`Awesome`);
  expect(moviePageComponent._getRatingDescription(-5)).toBe(``);
  expect(moviePageComponent._getRatingDescription(-11)).toBe(``);
  expect(moviePageComponent._getRatingDescription(Math.random() * (-100))).toBe(``);
  expect(moviePageComponent._getRatingDescription(Math.random() * 10 + 10)).toBe(``);
});
