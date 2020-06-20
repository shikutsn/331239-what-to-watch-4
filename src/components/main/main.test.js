import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {testMocks} from "../../mocks/mocks.js";

describe(`Main`, () => {
  it(`Should correctly render with promo movie information and movie titles array`, () => {
    const tree = renderer
      .create(<Main
        promoMovie={testMocks.promoMovie}
        films={testMocks.films}
        onMovieTitleClick={() => {}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
