import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "../movies-list/movies-list.jsx";
import {testMocks} from "../../mocks/mocks.js";

it(`Checks if movies list is rendered correctly`, () => {
  const tree = renderer
    .create(<MoviesList
      movies = {testMocks.films}
      onMovieTitleClick = {() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
