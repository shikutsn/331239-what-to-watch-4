import React from "react";
import renderer from "react-test-renderer";
import ButtonShowMore from "../button-show-more/button-show-more.jsx";

it(`Checks if Show More button is rendered correctly`, () => {
  const tree = renderer
    .create(
        <ButtonShowMore
          onButtonShowMoreClick = {() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
