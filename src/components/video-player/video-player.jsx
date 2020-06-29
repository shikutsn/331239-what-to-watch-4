import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
  }

  componentDidMount() {
    const {src, previewPic, muted} = this.props;
    const video = this._videoRef.current;

    video.src = src;
    video.poster = previewPic;
    video.muted = muted;
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.src = ``;
  }

  componentDidUpdate() {
    const {isPlaying} = this.props;
    const video = this._videoRef.current;

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
      video.currentTime = 0;
      video.load();
    }
  }

  render() {
    return (
      <video ref={this._videoRef}
        width="280"
        height="175"
      />
    );
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  previewPic: PropTypes.string.isRequired,
  muted: PropTypes.bool.isRequired,
};

export default VideoPlayer;
