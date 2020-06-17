import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const testData = {
  promoMovie: {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    releaseYear: 2014,
  },
  films: [`Revenant`, `No Country for Old Men`, `Snatch`, `Bohemian Rhapsody`, `Pulp Fiction`, `Shutter Island`],
};

describe(`Main`, () => {
  it(`Should correctly render with promo movie information and movie titles array`, () => {
    const tree = renderer
      .create(<Main
        promoMovie={testData.promoMovie}
        films={testData.films} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
