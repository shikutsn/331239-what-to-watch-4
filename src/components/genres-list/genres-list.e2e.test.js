import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GenresList} from "../genres-list/genres-list.jsx";
import {testMocks} from "../../mocks/mocks.js";
import {Genres} from "../../const.js";

Enzyme.configure({
  adapter: new Adapter()
});

it(`Checks if genre items are clickable`, () => {
  const onGenreTitleClick = jest.fn();

  const genresList = shallow(
      <GenresList
        genre = {Genres.ALL_TEXT}
        movies = {testMocks.movies}
        onGenreTitleClick = {onGenreTitleClick}
      />
  );

  const genreItems = genresList.find(`li.catalog__genres-item`);

  genreItems.forEach((item) => {
    item.simulate(`click`);
  });

  // в мок-данных 5 разных жанров и 6-й - все жанры
  expect(onGenreTitleClick).toHaveBeenCalledTimes(6);
});

it(`Checks if correct genres item is clicked`, () => {
  const onGenreTitleClick = jest.fn();

  const genresList = shallow(
      <GenresList
        genre = {testMocks.genres[0]}
        movies = {testMocks.movies}
        onGenreTitleClick = {onGenreTitleClick}
      />
  );

  const clickedGenre = genresList.find(`li.catalog__genres-item`).at(2);

  clickedGenre.simulate(`click`);

  expect(onGenreTitleClick).toHaveBeenCalledTimes(1);
  expect(onGenreTitleClick.mock.calls[0][0]).toEqual(testMocks.genres[2]);
});
