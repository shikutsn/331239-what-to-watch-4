import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

const mockMovie = {
  title: `Dardjeeling Limited`,
  posterSmall: `dardjeeling-limited.jpg`
};

it(`Checks if small movie card is rendered correctly with hovor and click handlers`, () => {
  const tree = renderer
    .create(<SmallMovieCard
      movie = {mockMovie}
      onMovieCardHover = {() => {}}
      onMovieTitleClick = {() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
