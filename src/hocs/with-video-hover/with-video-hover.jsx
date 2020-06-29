import React, {PureComponent} from "react";

const PREVIEW_DELAY = 1000;

export default function withVideoHover(Component) {
  return class WithVideoHover extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isHovered: false,
      };

      this._timeoutFunc = null;

      this._handleMovieCardHoverStart = this._handleMovieCardHoverStart.bind(this);
      this._handleMovieCardHoverEnd = this._handleMovieCardHoverEnd.bind(this);
    }

    _handleMovieCardHoverStart() {
      this._timeoutFunc = setTimeout(() => {
        this.setState({isHovered: true});
      }, PREVIEW_DELAY);
    }

    _handleMovieCardHoverEnd() {
      clearTimeout(this._timeoutFunc);
      this.setState({isHovered: false});
    }

    componentWillUnmount() {
      clearTimeout(this._timeoutFunc);
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
  };
}
