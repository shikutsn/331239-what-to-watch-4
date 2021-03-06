import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";
import {testMocks} from "../../mocks/mocks.js";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`e2e tests for Main`, () => {
  it(`Checks if movie titles are clickable in Main`, () => {
    const movieTitleClickHandler = jest.fn();

    const mainComponent = mount(
        <Main
          promoMovie = {testMocks.promoMovie}
          movies = {testMocks.movies}
          onMovieTitleClick = {movieTitleClickHandler}
        />
    );

    const movieTitles = mainComponent.find(`.small-movie-card__title`);

    movieTitles.forEach((movieTitle) => movieTitle.simulate(`click`));

    expect(movieTitleClickHandler.mock.calls.length).toBe(testMocks.movies.length);
  });

  it(`Checks if movie images are clickable in Main`, () => {
    const movieImageClickHandler = jest.fn();

    const mainComponent = mount(
        <Main
          promoMovie = {testMocks.promoMovie}
          movies = {testMocks.movies}
          onMovieTitleClick = {movieImageClickHandler}
        />
    );

    const movieImages = mainComponent.find(`.small-movie-card__image`);

    movieImages.forEach((movieImage) => movieImage.simulate(`click`));

    expect(movieImageClickHandler.mock.calls.length).toBe(testMocks.movies.length);
  });

});
