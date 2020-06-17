import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {testMocks} from "../../mock/mocks.js";

describe(`Main`, () => {
  it(`Should correctly render with promo movie information and movie titles array`, () => {
    const tree = renderer
      .create(<Main
        promoMovie={testMocks.promoMovie}
        films={testMocks.films} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
