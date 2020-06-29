import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

const mockMovie = {
  background: `img/bg-the-grand-budapest-hotel.jpg`,
  title: `No Country for Old Men`,
  genre: `Noir`,
  releaseYear: 2009,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  posterSmall: `no-country-for-old-men.jpg`,
  rating: {
    value: 8.9,
    votesCount: 240,
  },
  description: [
    `Paragraph #1 of description for No Country for Old Men`,
    `Paragraph #2 of description for No Country for Old Men`,
  ],
  director: `director of No Country for Old Men`,
  starring: [
    `Actor #1, No Country for Old Men`,
    `Actor #2, No Country for Old Men`,
    `Actor #3, No Country for Old Men`,
    `Actor #4, No Country for Old Men`,
  ],
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

it(`Checks if small movie card is rendered correctly with hover and click handlers`, () => {
  const tree = renderer
    .create(<SmallMovieCard
      movie = {mockMovie}
      onMovieCardHover = {() => {}}
      onMovieCardClick = {() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
