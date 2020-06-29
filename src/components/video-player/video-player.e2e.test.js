import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from "./video-player";

Enzyme.configure({
  adapter: new Adapter(),
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

const getVideoPlayer = (isPlaying) => {
  return mount(
      <VideoPlayer
        src = {mockMovie.preview}
        isPlaying = {isPlaying}
        previewPic = {mockMovie.posterSmall}
        muted = {true}
      />
  );
};

describe(`Tests states of VideoPlayer`, () => {
  // npm run test.jest -- -t "VideoPlayer"
  it(`Checks if state of VideoPlayer is true while playing`, () => {
    expect(getVideoPlayer(true).state().isPlaying).toBe(true);
  });

  it(`Checks if state of VideoPlayer is false while not playing`, () => {
    expect(getVideoPlayer(false).state().isPlaying).toBe(false);
  });
});
