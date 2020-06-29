import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

it(`Checks if VideoPlayer renders correctly`, () => {
  const tree = renderer
    .create(
        <VideoPlayer
          src = {`https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`}
          isPlaying = {true}
          previewPic = {`img/bohemian-rhapsody.jpg`}
          muted = {true}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
