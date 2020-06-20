import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from './small-movie-card.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const mockMovie = {
  title: `Revenant`,
  posterSmall: `revenant.jpg`
};

it(`Checks if mouseovered film data is getting passed to callback function`, () => {
  const onMovieCardHover = jest.fn();

  const smallMovieCardComponent = shallow(
      <SmallMovieCard
        movie = {mockMovie}
        onMovieCardHover = {onMovieCardHover}
        onMovieTitleClick = {() => {}}
      />
  );

  smallMovieCardComponent.find(`.small-movie-card`).props().onMouseOver();

  expect(onMovieCardHover).toHaveBeenCalledTimes(1);
  expect(onMovieCardHover.mock.calls[0][0]).toMatchObject(mockMovie);
});
