import React from "react";
import renderer from "react-test-renderer";
import {GenresList} from "../genres-list/genres-list.jsx";
import {testMocks} from "../../mocks/mocks.js";
import {Genres} from "../../const.js";


it(`Checks if genres list is rendered correctly`, () => {
  const tree = renderer
    .create(
        <GenresList
          genre = {Genres.ALL_TEXT}
          movies = {testMocks.movies}
          onGenreTitleClick = {() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
