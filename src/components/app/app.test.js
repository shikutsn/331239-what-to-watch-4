import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const testData = {
  promoMovie: {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    releaseYear: 2014,
  },
  films: [`Revenant`, `No Country for Old Men`, `Snatch`, `Bohemian Rhapsody`, `Pulp Fiction`, `Shutter Island`],
};

describe(`App`, () => {
  it(`Should correctly render with promo movie information and movie titles array`, () => {
    const tree = renderer
      .create(<App
        promoMovie={testData.promoMovie}
        films={testData.films} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
