import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";
import {testMocks} from "../../mock/mocks.js";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`e2e tests for Main`, () => {
  it(`Checks if movie titles are clickable`, () => {
    const movieTitleClickHandler = jest.fn();

    const mainComponent = shallow(
        <Main
          promoMovie = {testMocks.promoMovie}
          films = {testMocks.films}
          onMovieTitleClick = {movieTitleClickHandler} />
    );

    const movieTitles = mainComponent.find(`.small-movie-card__title`);

    movieTitles.forEach((movieTitle) => movieTitle.simulate(`click`));

    expect(movieTitleClickHandler.mock.calls.length).toBe(testMocks.films.length);
  });
});
