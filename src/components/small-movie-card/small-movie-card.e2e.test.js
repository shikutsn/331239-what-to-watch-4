import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from './small-movie-card.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

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

it(`Checks if mouseovered film data is getting passed to callback function`, () => {
  const onMovieCardHoverHandler = jest.fn();

  const smallMovieCardComponent = shallow(
      <SmallMovieCard
        movie = {mockMovie}
        onMovieCardHover = {onMovieCardHoverHandler}
        onMovieCardClick = {() => {}}
      />
  );

  smallMovieCardComponent.find(`.small-movie-card`).props().onMouseOver();

  expect(onMovieCardHoverHandler).toHaveBeenCalledTimes(1);
  expect(onMovieCardHoverHandler.mock.calls[0][0]).toMatchObject(mockMovie);
});

it(`Checks if movie titles are clickable in SmallMovieCard`, () => {
  const movieTitleClickHandler = jest.fn();

  const smallMovieCardComponent = mount(
      <SmallMovieCard
        movie = {mockMovie}
        onMovieCardHover = {() => {}}
        onMovieCardClick = {movieTitleClickHandler}
      />
  );

  const smallMovieCards = smallMovieCardComponent.find(`.small-movie-card__title`);

  smallMovieCards.forEach((smallMovieCard) => smallMovieCard.simulate(`click`));

  expect(movieTitleClickHandler.mock.calls.length).toBe(1);
});

it(`Checks if movie images are clickable in SmallMovieCard`, () => {
  const movieTitleClickHandler = jest.fn();

  const smallMovieCardComponent = mount(
      <SmallMovieCard
        movie = {mockMovie}
        onMovieCardHover = {() => {}}
        onMovieCardClick = {movieTitleClickHandler}
      />
  );

  const smallMovieCards = smallMovieCardComponent.find(`.small-movie-card__image`);

  smallMovieCards.forEach((smallMovieCard) => smallMovieCard.simulate(`click`));

  expect(movieTitleClickHandler.mock.calls.length).toBe(1);
});
