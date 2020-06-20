import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {testMocks} from "../../mocks/mocks.js";

describe(`App`, () => {
  it(`Should correctly render with promo movie information and movie titles array`, () => {
    const tree = renderer
      .create(<App
        promoMovie={testMocks.promoMovie}
        films={testMocks.films} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
