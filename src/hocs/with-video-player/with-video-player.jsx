import React, {PureComponent} from "react";

const PREVIEW_DELAY = 0;

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isHovered: false,
      };

      this._timeoutId = null;

      this._handleMovieCardHoverStart = this._handleMovieCardHoverStart.bind(this);
      this._handleMovieCardHoverEnd = this._handleMovieCardHoverEnd.bind(this);
    }

    _handleMovieCardHoverStart() {
      this._timeoutId = setTimeout(() => {
        this.setState({isHovered: true});
      }, PREVIEW_DELAY);
    }

    _handleMovieCardHoverEnd() {
      clearTimeout(this._timeoutId);
      this.setState({isHovered: false});
    }

    componentWillUnmount() {
      clearTimeout(this._timeoutId);
    }

    render() {
      return (
        <Component
          {...this.props}
          isPlaying = {this.state.isHovered}
          onMovieCardHoverStart = {this._handleMovieCardHoverStart}
          onMovieCardHoverEnd = {this._handleMovieCardHoverEnd}
        />
      );
    }
  }

  return WithVideoPlayer;
};

export default withVideoPlayer;
