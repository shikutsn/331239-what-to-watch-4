import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {testMocks} from "../../mocks/mocks.js";

it(`App should correctly render with promo movie information and movies array`, () => {
  const tree = renderer
    .create(<App
      promoMovie = {testMocks.promoMovie}
      films = {testMocks.films} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
